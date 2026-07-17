"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const date_fns_1 = require("date-fns");
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const ShowTicketService_1 = __importDefault(require("./ShowTicketService"));
const lodash_1 = require("lodash");
const socket_1 = require("../../libs/socket");
const logger_1 = __importDefault(require("../../utils/logger"));
const CreateLogTicketService_1 = __importDefault(require("./CreateLogTicketService"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
// interface Response {
//   ticket: Ticket;
//   // isCreated: boolean;
// }
const FindOrCreateTicketService = async (contact, whatsapp, unreadMessages, companyId, queueId = null, userId = null, groupContact, channel, isImported, isForward, settings, isTransfered, isCampaign = false) => {
    // try {
    // let isCreated = false;
    let openAsLGPD = false;
    if (settings.enableLGPD) { //adicionar lgpdMessage
        openAsLGPD = !isCampaign &&
            !isTransfered &&
            settings.enableLGPD === "enabled" &&
            settings.lgpdMessage !== "" &&
            (settings.lgpdConsent === "enabled" ||
                (settings.lgpdConsent === "disabled" && (0, lodash_1.isNil)(contact?.lgpdAcceptedAt)));
    }
    const io = (0, socket_1.getIO)();
    const DirectTicketsToWallets = settings.DirectTicketsToWallets;
    // ===== ADIÇÃO: extrair lid/jid do contato/grupo como chave canônica =====
    const target = groupContact ?? contact;
    const targetContactId = target?.id;
    // Em Contact já existe remoteJid; priorizamos lid, depois jid, depois remoteJid
    const targetLid = target?.lid || null;
    const targetJid = target?.jid || target?.remoteJid || null;
    // Monta cláusula OR dinamicamente: contactId OU lid OU jid
    const orKeys = [];
    if (!(0, lodash_1.isNil)(targetContactId))
        orKeys.push({ contactId: targetContactId });
    if (targetLid)
        orKeys.push({ lid: String(targetLid).toLowerCase() });
    if (targetJid)
        orKeys.push({ jid: String(targetJid).toLowerCase() });
    // =======================================================================
    let ticket = await Ticket_1.default.findOne({
        where: {
            status: {
                [sequelize_1.Op.or]: ["open", "pending", "group", "nps", "lgpd"]
            },
            companyId,
            whatsappId: whatsapp.id,
            ...(orKeys.length > 0 ? { [sequelize_1.Op.or]: orKeys } : {})
        },
        order: [["id", "DESC"]]
    });
    if (ticket) {
        // ===== ADIÇÃO: garantir que ticket receba lid/jid se ainda não tiver =====
        const needSyncIds = (!!targetLid && !ticket.lid) ||
            (!!targetJid && !ticket.jid);
        if (needSyncIds) {
            await ticket.update({
                lid: ticket.lid || (targetLid ? String(targetLid).toLowerCase() : null),
                jid: ticket.jid || (targetJid ? String(targetJid).toLowerCase() : null),
            });
        }
        // ========================================================================
        if (isCampaign) {
            await ticket.update({
                userId: userId !== ticket.userId ? ticket.userId : userId,
                queueId: queueId !== ticket.queueId ? ticket.queueId : queueId,
            });
        }
        else {
            await ticket.update({ unreadMessages, isBot: false });
        }
        ticket = await (0, ShowTicketService_1.default)(ticket.id, companyId);
        // console.log(ticket.id)
        if (!isCampaign && !isForward) {
            // @ts-ignore: Unreachable code error
            if ((Number(ticket?.userId) !== Number(userId) && userId !== 0 && userId !== "" && userId !== "0" && !(0, lodash_1.isNil)(userId) && !ticket.isGroup)
                // @ts-ignore: Unreachable code error 
                || (queueId !== 0 && Number(ticket?.queueId) !== Number(queueId) && queueId !== "" && queueId !== "0" && !(0, lodash_1.isNil)(queueId))) {
                throw new AppError_1.default(`Ticket em outro atendimento. ${"Atendente: " + ticket?.user?.name} - ${"Fila: " + ticket?.queue?.name}`);
            }
        }
        // isCreated = true;
        return ticket;
    }
    const timeCreateNewTicket = whatsapp.timeCreateNewTicket;
    if (!ticket && timeCreateNewTicket !== 0) {
        // @ts-ignore: Unreachable code error
        if (timeCreateNewTicket !== 0 && timeCreateNewTicket !== "0") {
            const orKeysRecent = [];
            if (!(0, lodash_1.isNil)(targetContactId))
                orKeysRecent.push({ contactId: targetContactId });
            if (targetLid)
                orKeysRecent.push({ lid: String(targetLid).toLowerCase() });
            if (targetJid)
                orKeysRecent.push({ jid: String(targetJid).toLowerCase() });
            ticket = await Ticket_1.default.findOne({
                where: {
                    updatedAt: {
                        [sequelize_1.Op.between]: [
                            +(0, date_fns_1.sub)(new Date(), {
                                minutes: Number(timeCreateNewTicket)
                            }),
                            +new Date()
                        ]
                    },
                    companyId,
                    whatsappId: whatsapp.id,
                    ...(orKeysRecent.length > 0 ? { [sequelize_1.Op.or]: orKeysRecent } : {})
                },
                order: [["updatedAt", "DESC"]]
            });
        }
        if (ticket && ticket.status !== "nps") {
            await ticket.update({
                status: "pending",
                unreadMessages,
                companyId,
                // queueId: timeCreateNewTicket === 0 ? null : ticket.queueId
            });
        }
    }
    if (!ticket) {
        const ticketData = {
            contactId: groupContact ? groupContact.id : contact.id,
            status: (!isImported && !(0, lodash_1.isNil)(settings.enableLGPD)
                && openAsLGPD && !groupContact) ? //verifica se lgpd está habilitada e não é grupo e se tem a mensagem e link da política
                "lgpd" : //abre como LGPD caso habilitado parâmetro
                (whatsapp.groupAsTicket === "enabled" || !groupContact) ? // se lgpd estiver desabilitado, verifica se é para tratar ticket como grupo ou se é contato normal
                    "pending" : //caso  é para tratar grupo como ticket ou não é grupo, abre como pendente
                    "group",
            isGroup: !!groupContact,
            unreadMessages,
            whatsappId: whatsapp.id,
            companyId,
            isBot: groupContact ? false : true,
            channel,
            imported: isImported ? new Date() : null,
            isActiveDemand: false,
            // ===== ADIÇÃO: persistir lid/jid no ticket criado =====
            lid: targetLid ? String(targetLid).toLowerCase() : null,
            jid: targetJid ? String(targetJid).toLowerCase() : null
            // =====================================================
        };
        if (DirectTicketsToWallets && contact.id) {
            const wallet = contact;
            const wallets = await wallet.getWallets();
            if (wallets && wallets[0]?.id) {
                ticketData.status = (!isImported && !(0, lodash_1.isNil)(settings.enableLGPD)
                    && openAsLGPD && !groupContact) ? //verifica se lgpd está habilitada e não é grupo e se tem a mensagem e link da política
                    "lgpd" : //abre como LGPD caso habilitado parâmetro
                    (whatsapp.groupAsTicket === "enabled" || !groupContact) ? // se lgpd estiver desabilitado, verifica se é para tratar ticket como grupo ou se é contato normal
                        "open" : //caso  é para tratar grupo como ticket ou não é grupo, abre como pendente
                        "group", // se não é para tratar grupo como ticket, vai direto para grupos
                    ticketData.userId = wallets[0].id;
            }
        }
        try {
            ticket = await Ticket_1.default.create(ticketData);
        }
        catch (createErr) {
            // Race condition: another request created the ticket between our findOne and create.
            // Retry the search instead of failing.
            if (createErr.name === "SequelizeUniqueConstraintError" ||
                (createErr.original && createErr.original.code === "23505")) {
                logger_1.default.warn(`[FindOrCreateTicket] Race condition detected for contact ${contact.id} whatsapp ${whatsapp.id}. Retrying find.`);
                ticket = await Ticket_1.default.findOne({
                    where: {
                        status: {
                            [sequelize_1.Op.or]: ["open", "pending", "group", "nps", "lgpd"]
                        },
                        companyId,
                        whatsappId: whatsapp.id,
                        ...(orKeys.length > 0 ? { [sequelize_1.Op.or]: orKeys } : {})
                    },
                    order: [["id", "DESC"]]
                });
                // Also try recent closed tickets (same logic as timeCreateNewTicket)
                if (!ticket) {
                    ticket = await Ticket_1.default.findOne({
                        where: {
                            companyId,
                            whatsappId: whatsapp.id,
                            ...(orKeys.length > 0 ? { [sequelize_1.Op.or]: orKeys } : {})
                        },
                        order: [["id", "DESC"]]
                    });
                }
                if (ticket) {
                    await ticket.update({ unreadMessages, isBot: false });
                }
                else {
                    // Constraint error but still can't find — rethrow
                    throw createErr;
                }
            }
            else {
                throw createErr;
            }
        }
    }
    if (queueId != 0 && !(0, lodash_1.isNil)(queueId)) {
        //Determina qual a fila esse ticket pertence.
        await ticket.update({ queueId: queueId });
    }
    if (userId != 0 && !(0, lodash_1.isNil)(userId)) {
        //Determina qual a fila esse ticket pertence.
        await ticket.update({ userId: userId });
    }
    ticket = await (0, ShowTicketService_1.default)(ticket.id, companyId);
    await (0, CreateLogTicketService_1.default)({
        ticketId: ticket.id,
        type: openAsLGPD ? "lgpd" : "create"
    });
    return ticket;
};
exports.default = FindOrCreateTicketService;
