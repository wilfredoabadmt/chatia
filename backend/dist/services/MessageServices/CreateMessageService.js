"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("../../libs/socket");
const Contact_1 = __importDefault(require("../../models/Contact"));
const Message_1 = __importDefault(require("../../models/Message"));
const Queue_1 = __importDefault(require("../../models/Queue"));
const Tag_1 = __importDefault(require("../../models/Tag"));
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const User_1 = __importDefault(require("../../models/User"));
const Whatsapp_1 = __importDefault(require("../../models/Whatsapp"));
const StartLaneTimerService_1 = __importDefault(require("../TicketServices/StartLaneTimerService"));
const HandleCustomerResponseService_1 = __importDefault(require("../TicketServices/HandleCustomerResponseService"));
const CreateMessageService = async ({ messageData, companyId }) => {
    // 🔒 ANTI-DUPLICAÇÃO: Verificar se mensagem já existe antes de criar
    const existingMessage = await Message_1.default.findOne({
        where: {
            wid: messageData.wid,
            companyId
        },
        include: [
            "contact",
            {
                model: Ticket_1.default,
                as: "ticket",
                attributes: ["id", "uuid", "status", "queueId", "contactId", "whatsappId", "userId", "isGroup", "companyId", "lastMessage", "unreadMessages", "channel", "updatedAt", "fromMe"],
                include: [
                    {
                        model: Contact_1.default,
                        attributes: [
                            "id",
                            "name",
                            "number",
                            "email",
                            "profilePicUrl",
                            "acceptAudioMessage",
                            "active",
                            "urlPicture",
                            "companyId"
                        ],
                        include: ["extraInfo", "tags"]
                    },
                    {
                        model: Queue_1.default,
                        attributes: ["id", "name", "color"]
                    },
                    {
                        model: Whatsapp_1.default,
                        attributes: ["id", "name", "groupAsTicket"]
                    },
                    {
                        model: User_1.default,
                        attributes: ["id", "name"]
                    },
                    {
                        model: Tag_1.default,
                        as: "tags",
                        attributes: ["id", "name", "color"]
                    }
                ]
            },
            {
                model: Message_1.default,
                as: "quotedMsg",
                include: ["contact"]
            }
        ]
    });
    if (existingMessage) {
        console.log(`⚠️ [CreateMessageService] Mensagem já existe (wid: ${messageData.wid}, id: ${existingMessage.id}), retornando existente`);
        return existingMessage;
    }
    // Criar nova mensagem (com proteção contra constraint violation)
    try {
        await Message_1.default.upsert({ ...messageData, companyId });
    }
    catch (upsertErr) {
        // Se constraint unique violada, mensagem já existe — buscar e retornar
        if (upsertErr?.name === "SequelizeUniqueConstraintError") {
            console.log(`⚠️ [CreateMessageService] Constraint violation (wid: ${messageData.wid}), buscando existente`);
            const existing = await Message_1.default.findOne({
                where: { wid: messageData.wid, companyId },
                include: ["contact", { model: Ticket_1.default, as: "ticket" }]
            });
            if (existing)
                return existing;
        }
        throw upsertErr;
    }
    const message = await Message_1.default.findOne({
        where: {
            wid: messageData.wid,
            companyId
        },
        include: [
            "contact",
            {
                model: Ticket_1.default,
                as: "ticket",
                attributes: ["id", "uuid", "status", "queueId", "contactId", "whatsappId", "userId", "isGroup", "companyId", "lastMessage", "unreadMessages", "channel", "updatedAt", "fromMe"],
                include: [
                    {
                        model: Contact_1.default,
                        attributes: [
                            "id",
                            "name",
                            "number",
                            "email",
                            "profilePicUrl",
                            "acceptAudioMessage",
                            "active",
                            "urlPicture",
                            "companyId"
                        ],
                        include: ["extraInfo", "tags"]
                    },
                    {
                        model: Queue_1.default,
                        attributes: ["id", "name", "color"]
                    },
                    {
                        model: Whatsapp_1.default,
                        attributes: ["id", "name", "groupAsTicket"]
                    },
                    {
                        model: User_1.default,
                        attributes: ["id", "name"]
                    },
                    {
                        model: Tag_1.default,
                        as: "tags",
                        attributes: ["id", "name", "color"]
                    }
                ]
            },
            {
                model: Message_1.default,
                as: "quotedMsg",
                include: ["contact"]
            }
        ]
    });
    if (!message) {
        throw new Error("ERR_CREATING_MESSAGE");
    }
    if (message.ticket?.queueId != null && message.queueId == null) {
        await message.update({ queueId: message.ticket.queueId });
    }
    if (message.isPrivate) {
        await message.update({ wid: `PVT${message.id}` });
    }
    const io = (0, socket_1.getIO)();
    // ✅ DEBUG: Sempre logar, mesmo quando não emitir
    console.log("🔍 [CreateMessageService] Verificando condições de emissão:", {
        ticketImported: messageData?.ticketImported,
        willEmit: !messageData?.ticketImported,
        messageId: message.id,
        messageWid: message.wid,
        companyId
    });
    if (!messageData?.ticketImported) {
        // Debug log para verificar o ticket UUID
        console.log("🚀 [CreateMessageService] Emitindo evento Socket.IO:", {
            ticketId: message.ticket?.id,
            ticketUuid: message.ticket?.uuid,
            hasTicket: !!message.ticket,
            companyId,
            namespace: `/workspace-${companyId}`,
            channel: `company-${companyId}-appMessage`
        });
        const payload = {
            action: "create",
            message,
            ticket: message.ticket,
            contact: message.ticket.contact
        };
        // ✅ CORREÇÃO: Emitir para o namespace correto /workspace-{companyId}
        const workspaceNamespace = io.of(`/workspace-${companyId}`);
        // Emitir para todos os clientes conectados ao namespace
        workspaceNamespace.emit(`company-${companyId}-appMessage`, payload);
        // Emitir também para o room específico do ticket (para clientes que entraram no room)
        workspaceNamespace.to(message.ticket?.uuid || String(message.ticketId)).emit(`company-${companyId}-appMessage`, payload);
        console.log("✅ [CreateMessageService] Evento emitido com sucesso para namespace /workspace-" + companyId);
    }
    else {
        console.log("⏭️ [CreateMessageService] Emissão Socket.IO PULADA (ticketImported = true)");
    }
    // 🎯 KANBAN LANE TIMER: Gerenciar movimento automático de cards
    if (!messageData?.ticketImported && !message.isPrivate && message.ticketId) {
        try {
            // 🔍 DEBUG: Log detalhado para investigar problema de movimento para Retorno
            console.log(`
╔════════════════════════════════════════════════════════════
║ 🔍 KANBAN DEBUG - CreateMessageService
╠════════════════════════════════════════════════════════════
║ Timestamp:        ${new Date().toISOString()}
║ Message ID:       ${message.id}
║ Ticket ID:        ${message.ticketId}
║ Company ID:       ${companyId}
║ fromMe:           ${message.fromMe}
║ isPrivate:        ${message.isPrivate}
║ ticketImported:   ${messageData?.ticketImported || 'false'}
║
║ Decisão: ${message.fromMe ? 'StartLaneTimerService ✅' : 'HandleCustomerResponseService ❌'}
╚════════════════════════════════════════════════════════════
`);
            if (message.fromMe) {
                // Mensagem do atendente -> Iniciar timer para mover para nextLaneId
                console.log(`✅ [CreateMessageService] Chamando StartLaneTimerService para ticket ${message.ticketId}`);
                await (0, StartLaneTimerService_1.default)({
                    ticketId: message.ticketId,
                    companyId
                });
            }
            else {
                // Mensagem do cliente -> Cancelar timer e mover para rollbackLaneId se configurado
                console.log(`❌ [CreateMessageService] Chamando HandleCustomerResponseService para ticket ${message.ticketId} (MENSAGEM DO CLIENTE)`);
                await (0, HandleCustomerResponseService_1.default)({
                    ticketId: message.ticketId,
                    companyId
                });
            }
        }
        catch (error) {
            // Não bloqueia a criação da mensagem se houver erro no timer
            console.error("❌ [CreateMessageService] Erro ao processar timer de lane:", error);
        }
    }
    return message;
};
exports.default = CreateMessageService;
