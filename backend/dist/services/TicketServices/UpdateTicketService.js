"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const Sentry = __importStar(require("@sentry/node"));
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const SetTicketMessagesAsRead_1 = __importDefault(require("../../helpers/SetTicketMessagesAsRead"));
const socket_1 = require("../../libs/socket");
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const Queue_1 = __importDefault(require("../../models/Queue"));
const Contact_1 = __importDefault(require("../../models/Contact"));
const IdentityResolverService_1 = require("../WbotServices/IdentityResolverService");
const Tag_1 = __importDefault(require("../../models/Tag"));
const Whatsapp_1 = __importDefault(require("../../models/Whatsapp"));
const Company_1 = __importDefault(require("../../models/Company"));
const QueueIntegrations_1 = __importDefault(require("../../models/QueueIntegrations"));
const TicketTag_1 = __importDefault(require("../../models/TicketTag"));
const ShowTicketService_1 = __importDefault(require("./ShowTicketService"));
const ShowWhatsAppService_1 = __importDefault(require("../WhatsappService/ShowWhatsAppService"));
const SendWhatsAppMessage_1 = __importDefault(require("../WbotServices/SendWhatsAppMessage"));
const FindOrCreateATicketTrakingService_1 = __importDefault(require("./FindOrCreateATicketTrakingService"));
const GetTicketWbot_1 = __importDefault(require("../../helpers/GetTicketWbot"));
const wbotMessageListener_1 = require("../WbotServices/wbotMessageListener");
const lodash_1 = require("lodash");
const sendFacebookMessage_1 = __importDefault(require("../FacebookServices/sendFacebookMessage"));
const facebookMessageListener_1 = require("../FacebookServices/facebookMessageListener");
const ShowUserService_1 = __importDefault(require("../UserServices/ShowUserService"));
const User_1 = __importDefault(require("../../models/User"));
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
const CreateLogTicketService_1 = __importDefault(require("./CreateLogTicketService"));
const CreateMessageService_1 = __importDefault(require("../MessageServices/CreateMessageService"));
const FindOrCreateTicketService_1 = __importDefault(require("./FindOrCreateTicketService"));
const Mustache_1 = __importDefault(require("../../helpers/Mustache"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Message_1 = __importDefault(require("../../models/Message")); // <<— para migrar histórico
// ===== helpers =====
const safeFormatBody = (tpl, ticket) => {
    try {
        return (0, Mustache_1.default)(tpl, ticket);
    }
    catch (e) {
        Sentry.captureException(e);
        return tpl.replace(/\{\{[^}]*$/g, "");
    }
};
const applySimpleVars = (tpl, opts) => {
    const contactName = opts.contactName ?? "";
    const userName = opts.userName ?? "";
    const queueName = opts.queueName ?? "";
    return tpl
        .replace(/\$\{queue\.name\}/g, queueName)
        .replace(/\{\{\{\s*queue\s*\}\}\}|\{\{\s*queue\s*\}\}/g, queueName)
        .replace(/\{\{\s*name\s*\}\}/g, contactName)
        .replace(/\{\{\s*userName\s*\}\}/g, userName);
};
// Normalizador seguro para números
const toNumOrNull = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
};
// ===== serviço =====
const UpdateTicketService = async ({ ticketData, ticketId, companyId }) => {
    try {
        // --- HOTFIX (idempotente): se vier queueId = 0 do fluxo, trate como "não informado"
        if (ticketData && ticketData.queueId === 0) {
            delete ticketData.queueId;
        }
        let { queueId, userId, sendFarewellMessage = true, amountUsedBotQueues, lastMessage, integrationId, useIntegration, unreadMessages, msgTransfer, isTransfered = false, status } = ticketData;
        // Normalização de IDs
        userId = userId !== undefined && userId !== null ? toNumOrNull(userId) : userId ?? null;
        queueId = queueId !== undefined && queueId !== null ? toNumOrNull(queueId) : queueId ?? null;
        // 👇 evita procurar fila id 0 (inexistente) — redundante ao HOTFIX acima, mas seguro
        if (queueId === 0)
            queueId = null;
        let isBot = ticketData.isBot || false;
        let queueOptionId = ticketData.queueOptionId || null;
        const io = (0, socket_1.getIO)();
        const settings = await CompaniesSettings_1.default.findOne({ where: { companyId } });
        const cfg = {
            userRating: "disabled",
            sendFarewellWaitingTicket: "disabled",
            transferMessage: "",
            closeTicketOnTransfer: false,
            sendMsgTransfTicket: "disabled",
            ...(settings?.toJSON?.() ?? {})
        };
        // ========================================================================
        // ✅ CORREÇÃO RACE CONDITION: Usa lock pessimístico quando aceitar ticket
        // ========================================================================
        let ticket;
        const isAcceptingTicket = status === "open" && userId !== undefined && userId !== null;
        if (isAcceptingTicket) {
            // SELECT FOR UPDATE: Trava a linha até o final da operação
            const result = await database_1.default.transaction({
                isolationLevel: sequelize_1.Transaction.ISOLATION_LEVELS.READ_COMMITTED
            }, async (t) => {
                // ✅ FIX: Fazer lock APENAS na tabela principal (sem includes)
                // PostgreSQL não permite FOR UPDATE em LEFT JOINs (nullable outer joins)
                const lockedTicket = await Ticket_1.default.findOne({
                    where: { id: ticketId, companyId },
                    lock: t.LOCK.UPDATE,
                    transaction: t
                    // SEM includes aqui para evitar "FOR UPDATE cannot be applied to the nullable side of an outer join"
                });
                if (!lockedTicket) {
                    throw new AppError_1.default("ERR_NO_TICKET_FOUND", 404);
                }
                // ✅ VALIDAÇÃO DE DOUBLE-ACCEPT: Previne dois agentes aceitarem o mesmo ticket
                if (lockedTicket.userId !== null && lockedTicket.userId !== userId) {
                    throw new AppError_1.default("ERR_TICKET_ALREADY_ACCEPTED", 409);
                }
                // Atualiza o ticket dentro da transação
                await lockedTicket.update({ status, userId, queueId }, { transaction: t });
                // Recarrega com todas as associações necessárias DEPOIS do update
                await lockedTicket.reload({
                    transaction: t,
                    include: [
                        {
                            model: Contact_1.default,
                            as: "contact",
                            attributes: ["id", "companyId", "name", "number", "email", "profilePicUrl", "acceptAudioMessage", "active", "disableBot", "remoteJid", "urlPicture", "lgpdAcceptedAt"],
                            include: ["extraInfo", "tags", {
                                    association: "wallets",
                                    attributes: ["id", "name"]
                                }]
                        },
                        {
                            model: Queue_1.default,
                            as: "queue",
                            attributes: ["id", "name", "color"],
                            include: ["chatbots"]
                        },
                        {
                            model: User_1.default,
                            as: "user",
                            attributes: ["id", "name"]
                        },
                        {
                            model: Tag_1.default,
                            as: "tags",
                            attributes: ["id", "name", "color"]
                        },
                        {
                            model: Whatsapp_1.default,
                            as: "whatsapp",
                            attributes: ["id", "name", "groupAsTicket", "greetingMediaAttachment", "facebookUserToken", "facebookUserId", "status"]
                        },
                        {
                            model: Company_1.default,
                            as: "company",
                            attributes: ["id", "name"]
                        },
                        {
                            model: QueueIntegrations_1.default,
                            as: "queueIntegration",
                            attributes: ["id", "name"]
                        },
                        {
                            model: TicketTag_1.default,
                            as: "ticketTags",
                            attributes: ["tagId"]
                        }
                    ]
                });
                return lockedTicket;
            });
            ticket = result;
        }
        else {
            // Caminho normal sem lock para outras operações
            ticket = await (0, ShowTicketService_1.default)(ticketId, companyId);
        }
        if (ticket.channel === "whatsapp" && ticket.whatsappId) {
            (0, SetTicketMessagesAsRead_1.default)(ticket);
        }
        const oldStatus = ticket?.status;
        const oldUserId = ticket.user?.id;
        const oldQueueId = ticket?.queueId;
        if ((0, lodash_1.isNil)(ticket.whatsappId) && status === "closed") {
            await (0, CreateLogTicketService_1.default)({
                userId,
                queueId: ticket.queueId,
                ticketId,
                type: "closed"
            });
            await ticket.update({ status: "closed" });
            io.of(`/workspace-${companyId}`).emit(`company-${ticket.companyId}-ticket`, {
                action: "delete",
                ticketId: ticket.id
            });
            return { ticket, oldStatus, oldUserId };
        }
        if (oldStatus === "closed") {
            let otherTicket = await Ticket_1.default.findOne({
                where: {
                    contactId: ticket.contactId,
                    status: { [sequelize_1.Op.or]: ["open", "pending", "group"] },
                    whatsappId: ticket.whatsappId
                }
            });
            if (otherTicket && otherTicket.id !== ticket.id) {
                otherTicket = await (0, ShowTicketService_1.default)(otherTicket.id, companyId);
                return { ticket: otherTicket, oldStatus, oldUserId };
            }
            isBot = false;
        }
        const ticketTraking = await (0, FindOrCreateATicketTrakingService_1.default)({
            ticketId,
            companyId,
            whatsappId: ticket?.whatsappId
        });
        const { complationMessage, ratingMessage, groupAsTicket } = await (0, ShowWhatsAppService_1.default)(ticket?.whatsappId, companyId);
        // ===== fechamento =====
        if (status !== undefined && ["closed"].includes(status)) {
            const _userId = ticket.userId || userId;
            let user = null;
            if (_userId)
                user = await User_1.default.findByPk(_userId);
            const canAskNps = cfg.userRating === "enabled" &&
                (sendFarewellMessage || sendFarewellMessage === undefined) &&
                (!!ratingMessage && ratingMessage !== "") &&
                !ticket.isGroup;
            if (canAskNps && ticketTraking.ratingAt == null) {
                const ratingTxt = ratingMessage || "";
                const bodyRatingMessage = `\u200e ${ratingTxt}\n`;
                if (ticket.channel === "whatsapp" && ticket.whatsapp?.status === "CONNECTED") {
                    const msg = await (0, SendWhatsAppMessage_1.default)({
                        body: bodyRatingMessage,
                        ticket,
                        isForwarded: false
                    });
                    await (0, wbotMessageListener_1.verifyMessage)(msg, ticket, ticket.contact);
                }
                else if (["facebook", "instagram"].includes(ticket.channel)) {
                    const msg = await (0, sendFacebookMessage_1.default)({ body: bodyRatingMessage, ticket });
                    await (0, facebookMessageListener_1.verifyMessageFace)(msg, bodyRatingMessage, ticket, ticket.contact);
                }
                await ticketTraking.update({
                    userId: ticket.userId,
                    closedAt: (0, moment_1.default)().toDate()
                });
                await (0, CreateLogTicketService_1.default)({
                    userId: ticket.userId,
                    queueId: ticket.queueId,
                    ticketId,
                    type: "nps"
                });
                // Mantém lid/jid durante o NPS
                await ticket.update({
                    status: "nps",
                    amountUsedBotQueuesNPS: 1
                });
                io.of(`/workspace-${companyId}`).emit(`company-${ticket.companyId}-ticket`, {
                    action: "delete",
                    ticketId: ticket.id
                });
                return { ticket, oldStatus, oldUserId };
            }
            if ((((user && user.farewellMessage) || complationMessage) &&
                (sendFarewellMessage || sendFarewellMessage === undefined))) {
                let body;
                const canSendFarewell = ticket.status !== "pending" ||
                    (ticket.status === "pending" && cfg.sendFarewellWaitingTicket === "enabled");
                if (canSendFarewell) {
                    if (user?.farewellMessage)
                        body = `\u200e ${user.farewellMessage}`;
                    else if (complationMessage)
                        body = `\u200e ${complationMessage}`;
                    if (body) {
                        if (ticket.channel === "whatsapp" &&
                            (!ticket.isGroup || groupAsTicket === "enabled") &&
                            ticket.whatsapp?.status === "CONNECTED") {
                            const sent = await (0, SendWhatsAppMessage_1.default)({
                                body,
                                ticket,
                                isForwarded: false
                            });
                            await (0, wbotMessageListener_1.verifyMessage)(sent, ticket, ticket.contact);
                        }
                        if (["facebook", "instagram"].includes(ticket.channel) &&
                            (!ticket.isGroup || groupAsTicket === "enabled")) {
                            await (0, sendFacebookMessage_1.default)({ body, ticket });
                        }
                    }
                }
            }
            ticketTraking.finishedAt = (0, moment_1.default)().toDate();
            ticketTraking.closedAt = (0, moment_1.default)().toDate();
            ticketTraking.whatsappId = ticket?.whatsappId;
            ticketTraking.userId = ticket.userId;
            await (0, CreateLogTicketService_1.default)({
                userId: ticket.userId,
                queueId: ticket.queueId,
                ticketId,
                type: "closed"
            });
            await ticketTraking.save();
            await ticket.update({
                status: "closed",
                lastFlowId: null,
                dataWebhook: null,
                hashFlowId: null,
                lid: null,
                jid: null
            });
            io.of(`/workspace-${companyId}`).emit(`company-${ticket.companyId}-ticket`, {
                action: "delete",
                ticketId: ticket.id
            });
            return { ticket, oldStatus, oldUserId };
        }
        // ===== transferência =====
        let queue = null;
        // Só tenta achar fila se queueId for válido (não null/undefined)
        if (!(0, lodash_1.isNil)(queueId)) {
            // ✅ VALIDAÇÃO MULTI-TENANT: Garante que queue pertence à mesma empresa
            queue = await Queue_1.default.findOne({
                where: {
                    id: queueId,
                    companyId: ticket.companyId // Previne atribuir ticket para fila de outra empresa
                }
            });
            if (!queue) {
                // evita erro genérico no topo: devolve erro específico
                throw new AppError_1.default("ERR_UPDATE_TICKET_QUEUE_NOT_FOUND", 400);
            }
            ticketTraking.queuedAt = (0, moment_1.default)().toDate();
        }
        if (isTransfered) {
            if (cfg.closeTicketOnTransfer) {
                let newTicketTransfer = ticket;
                if (oldQueueId !== queueId) {
                    await ticket.update({ status: "closed", lid: null, jid: null });
                    await ticket.reload();
                    io.of(`/workspace-${companyId}`).emit(`company-${ticket.companyId}-ticket`, {
                        action: "delete",
                        ticketId: ticket.id
                    });
                    try {
                        newTicketTransfer = await (0, FindOrCreateTicketService_1.default)(ticket.contact, ticket.whatsapp, 1, ticket.companyId, queueId, userId, null, ticket.channel, false, false, settings, true);
                        await (0, FindOrCreateATicketTrakingService_1.default)({
                            ticketId: newTicketTransfer.id,
                            companyId,
                            whatsappId: ticket.whatsapp?.id ?? ticket.whatsappId,
                            userId
                        });
                        // >>> MIGRA O HISTÓRICO DO TICKET ANTIGO PARA O NOVO <<<
                        if (newTicketTransfer.id !== ticket.id) {
                            await Message_1.default.update({ ticketId: newTicketTransfer.id }, { where: { ticketId: ticket.id } });
                        }
                    }
                    catch (e) {
                        const isUnique = e?.name === "SequelizeUniqueConstraintError" ||
                            e?.original?.code === "23505";
                        if (!isUnique)
                            throw e;
                        // fallback: reutiliza o mesmo ticket (histórico já está nele)
                        await ticket.update({
                            queueId,
                            userId,
                            status: status ?? "open"
                        });
                        await ticket.reload();
                        newTicketTransfer = ticket;
                        await ticketTraking.update({
                            userId: ticket.userId,
                            queueId: ticket.queueId,
                            finishedAt: null,
                            closedAt: null,
                            startedAt: (0, moment_1.default)().toDate()
                        });
                    }
                }
                if (!(0, lodash_1.isNil)(msgTransfer)) {
                    const messageData = {
                        wid: `PVT${newTicketTransfer.updatedAt.toString().replace(" ", "")}`,
                        ticketId: newTicketTransfer.id,
                        contactId: undefined,
                        body: msgTransfer,
                        fromMe: true,
                        mediaType: "extendedTextMessage",
                        read: true,
                        quotedMsgId: null,
                        ack: 2,
                        remoteJid: newTicketTransfer.contact?.remoteJid,
                        participant: null,
                        dataJson: null,
                        ticketTrakingId: null,
                        isPrivate: true
                    };
                    await (0, CreateMessageService_1.default)({
                        messageData,
                        companyId: ticket.companyId
                    });
                }
                await newTicketTransfer.update({ queueId, userId, status });
                await newTicketTransfer.reload();
                if (cfg.sendMsgTransfTicket === "enabled") {
                    if ((oldQueueId !== queueId || oldUserId !== userId) &&
                        !(0, lodash_1.isNil)(oldQueueId) &&
                        !(0, lodash_1.isNil)(queueId) &&
                        ticket.whatsapp?.status === "CONNECTED") {
                        const wbot = await (0, GetTicketWbot_1.default)(ticket);
                        const agentName = ticket.user?.name ??
                            (userId ? (await (0, ShowUserService_1.default)(userId, companyId))?.name : "") ??
                            "";
                        const contactName = ticket.contact?.name ?? ticket.contact?.number ?? "";
                        const queueName = queue?.name ?? "";
                        const baseMsg = cfg.transferMessage ?? "";
                        const substitutedSimple = applySimpleVars(baseMsg, {
                            userName: agentName,
                            contactName,
                            queueName
                        });
                        const msgtxt = safeFormatBody(`\u200e ${substitutedSimple}`, ticket);
                        const queueChangedMessage = await wbot.sendMessage(await (0, IdentityResolverService_1.resolveOutgoingJid)(ticket.contact, ticket.isGroup), { text: msgtxt });
                        await (0, wbotMessageListener_1.verifyMessage)(queueChangedMessage, ticket, ticket.contact, ticketTraking);
                    }
                }
                if (oldUserId !== userId &&
                    oldQueueId === queueId &&
                    !(0, lodash_1.isNil)(oldUserId) &&
                    !(0, lodash_1.isNil)(userId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                }
                else if (oldUserId !== userId &&
                    oldQueueId === queueId &&
                    !(0, lodash_1.isNil)(oldUserId) &&
                    !(0, lodash_1.isNil)(userId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                    await (0, CreateLogTicketService_1.default)({
                        userId,
                        queueId: oldQueueId,
                        ticketId: newTicketTransfer.id,
                        type: "receivedTransfer"
                    });
                }
                else if (oldUserId !== userId &&
                    oldQueueId !== queueId &&
                    !(0, lodash_1.isNil)(oldUserId) &&
                    !(0, lodash_1.isNil)(userId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                    await (0, CreateLogTicketService_1.default)({
                        userId,
                        queueId,
                        ticketId: newTicketTransfer.id,
                        type: "receivedTransfer"
                    });
                }
                else if (oldUserId !== undefined &&
                    (0, lodash_1.isNil)(userId) &&
                    oldQueueId !== queueId &&
                    !(0, lodash_1.isNil)(queueId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                }
                if (newTicketTransfer.status !== oldStatus ||
                    newTicketTransfer.user?.id !== oldUserId) {
                    await ticketTraking.update({ userId: newTicketTransfer.userId });
                    io.of(`/workspace-${companyId}`).emit(`company-${companyId}-ticket`, {
                        action: "delete",
                        ticketId: newTicketTransfer.id
                    });
                }
                io.of(`/workspace-${companyId}`).emit(`company-${companyId}-ticket`, {
                    action: "update",
                    ticket: newTicketTransfer
                });
                return { ticket: newTicketTransfer, oldStatus, oldUserId };
            }
            else {
                // transferência sem fechar ticket
                if (cfg.sendMsgTransfTicket === "enabled") {
                    if ((oldQueueId !== queueId || oldUserId !== userId) &&
                        !(0, lodash_1.isNil)(oldQueueId) &&
                        !(0, lodash_1.isNil)(queueId) &&
                        ticket.whatsapp?.status === "CONNECTED") {
                        const wbot = await (0, GetTicketWbot_1.default)(ticket);
                        const agentName = ticket.user?.name ??
                            (userId ? (await (0, ShowUserService_1.default)(userId, companyId))?.name : "") ??
                            "";
                        const contactName = ticket.contact?.name ?? ticket.contact?.number ?? "";
                        const queueName = queue?.name ?? "";
                        const baseMsg = cfg.transferMessage ?? "";
                        const substitutedSimple = applySimpleVars(baseMsg, {
                            userName: agentName,
                            contactName,
                            queueName
                        });
                        const msgtxt = safeFormatBody(`\u200e ${substitutedSimple}`, ticket);
                        const queueChangedMessage = await wbot.sendMessage(await (0, IdentityResolverService_1.resolveOutgoingJid)(ticket.contact, ticket.isGroup), { text: msgtxt });
                        await (0, wbotMessageListener_1.verifyMessage)(queueChangedMessage, ticket, ticket.contact, ticketTraking);
                    }
                }
                if (!(0, lodash_1.isNil)(msgTransfer)) {
                    const messageData = {
                        wid: `PVT${ticket.updatedAt.toString().replace(" ", "")}`,
                        ticketId: ticket.id,
                        contactId: undefined,
                        body: msgTransfer,
                        fromMe: true,
                        mediaType: "extendedTextMessage",
                        read: true,
                        quotedMsgId: null,
                        ack: 2,
                        remoteJid: ticket.contact?.remoteJid,
                        participant: null,
                        dataJson: null,
                        ticketTrakingId: null,
                        isPrivate: true
                    };
                    await (0, CreateMessageService_1.default)({
                        messageData,
                        companyId: ticket.companyId
                    });
                }
                if (oldUserId !== userId &&
                    oldQueueId === queueId &&
                    !(0, lodash_1.isNil)(oldUserId) &&
                    !(0, lodash_1.isNil)(userId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                }
                else if (oldUserId !== userId &&
                    oldQueueId === queueId &&
                    !(0, lodash_1.isNil)(oldUserId) &&
                    !(0, lodash_1.isNil)(userId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                    await (0, CreateLogTicketService_1.default)({
                        userId,
                        queueId: oldQueueId,
                        ticketId: ticket.id,
                        type: "receivedTransfer"
                    });
                }
                else if (oldUserId !== userId &&
                    oldQueueId !== queueId &&
                    !(0, lodash_1.isNil)(oldUserId) &&
                    !(0, lodash_1.isNil)(userId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                    await (0, CreateLogTicketService_1.default)({
                        userId,
                        queueId,
                        ticketId: ticket.id,
                        type: "receivedTransfer"
                    });
                }
                else if (oldUserId !== undefined &&
                    (0, lodash_1.isNil)(userId) &&
                    oldQueueId !== queueId &&
                    !(0, lodash_1.isNil)(queueId)) {
                    await (0, CreateLogTicketService_1.default)({
                        userId: oldUserId,
                        queueId: oldQueueId,
                        ticketId,
                        type: "transfered"
                    });
                }
            }
        }
        // fila que fecha ticket automaticamente
        status = queue && queue.closeTicket ? "closed" : status;
        await ticket.update({
            status,
            queueId,
            userId,
            isBot,
            queueOptionId,
            amountUsedBotQueues: status === "closed"
                ? 0
                : amountUsedBotQueues
                    ? amountUsedBotQueues
                    : ticket.amountUsedBotQueues,
            lastMessage: lastMessage ?? ticket.lastMessage,
            useIntegration,
            integrationId,
            typebotSessionId: !useIntegration ? null : ticket.typebotSessionId,
            typebotStatus: useIntegration,
            unreadMessages
        });
        ticketTraking.queuedAt = (0, moment_1.default)().toDate();
        ticketTraking.queueId = queueId ?? null;
        await ticket.reload();
        if (status !== undefined && ["pending"].includes(status)) {
            await (0, CreateLogTicketService_1.default)({
                userId: oldUserId,
                ticketId,
                type: "pending"
            });
            await ticketTraking.update({
                whatsappId: ticket.whatsappId,
                startedAt: null,
                userId: null
            });
        }
        if (status !== undefined && ["open"].includes(status)) {
            await ticketTraking.update({
                startedAt: (0, moment_1.default)().toDate(),
                ratingAt: null,
                rated: false,
                whatsappId: ticket.whatsappId,
                userId: ticket.userId,
                queueId: ticket.queueId
            });
            await (0, CreateLogTicketService_1.default)({
                userId: userId ?? undefined,
                queueId: ticket.queueId,
                ticketId,
                type: oldStatus === "pending" ? "open" : "reopen"
            });
        }
        await ticketTraking.save();
        if (ticket.status !== oldStatus ||
            ticket.user?.id !== oldUserId ||
            ticket.queueId !== oldQueueId) {
            io.of(`/workspace-${companyId}`).emit(`company-${companyId}-ticket`, {
                action: "delete",
                ticketId: ticket.id
            });
        }
        io.of(`/workspace-${companyId}`).emit(`company-${companyId}-ticket`, {
            action: "update",
            ticket
        });
        return { ticket, oldStatus, oldUserId };
    }
    catch (err) {
        console.log("❌ ERRO ao atualizar o ticket", ticketId, "ticketData", ticketData, "err:", err?.message, "stack:", err?.stack);
        Sentry.captureException(err);
        // Se o erro já é um AppError, propaga com o status code original
        if (err instanceof AppError_1.default) {
            throw err;
        }
        // Caso contrário, lança erro genérico com mais informações
        throw new AppError_1.default(`ERR_UPDATE_TICKET: ${err?.message || 'Unknown error'}`, 500);
    }
};
exports.default = UpdateTicketService;
