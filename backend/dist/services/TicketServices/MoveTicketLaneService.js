"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const TicketTag_1 = __importDefault(require("../../models/TicketTag"));
const Tag_1 = __importDefault(require("../../models/Tag"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const ShowTicketService_1 = __importDefault(require("./ShowTicketService"));
const socket_1 = require("../../libs/socket");
const SendWhatsAppMessage_1 = __importDefault(require("../WbotServices/SendWhatsAppMessage"));
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
const MoveTicketLaneService = async ({ ticketId, companyId, toLaneId, sendGreeting = true }) => {
    // Buscar o ticket com as tags atuais
    const ticket = await (0, ShowTicketService_1.default)(ticketId, companyId);
    // 🔍 DEBUG: Log detalhado com stack trace para rastrear origem da chamada
    const currentLane = await TicketTag_1.default.findOne({
        where: { ticketId },
        include: [{
                model: Tag_1.default,
                as: "tag",
                where: {
                    kanban: 1,
                    companyId
                }
            }]
    });
    const stackTrace = new Error().stack?.split('\n').slice(2, 8).join('\n║ ') || 'N/A';
    console.log(`
╔════════════════════════════════════════════════════════════
║ 🔄 MOVE TICKET LANE
╠════════════════════════════════════════════════════════════
║ Timestamp:        ${new Date().toISOString()}
║ Ticket ID:        ${ticketId}
║ From Lane:        ${currentLane?.tag?.name || 'N/A'} (ID: ${currentLane?.tagId || 'N/A'})
║ To Lane ID:       ${toLaneId}
║ Send Greeting:    ${sendGreeting}
║
║ 📍 STACK TRACE (quem chamou):
║ ${stackTrace}
╚════════════════════════════════════════════════════════════
`);
    // Validar que a lane de destino existe e pertence à empresa
    const toLane = await Tag_1.default.findOne({
        where: {
            id: toLaneId,
            kanban: 1,
            companyId
        }
    });
    if (!toLane) {
        throw new AppError_1.default("Lane de destino não encontrada", 404);
    }
    // Remover tags kanban antigas (kanban: 1)
    const oldKanbanTags = await TicketTag_1.default.findAll({
        where: { ticketId },
        include: [{
                model: Tag_1.default,
                as: "tag",
                where: {
                    kanban: 1,
                    companyId
                }
            }]
    });
    const oldTagIds = oldKanbanTags.map(tt => tt.tagId);
    if (oldTagIds.length > 0) {
        await TicketTag_1.default.destroy({
            where: {
                ticketId,
                tagId: oldTagIds
            }
        });
    }
    // Adicionar a nova tag da lane
    await TicketTag_1.default.create({
        ticketId,
        tagId: toLaneId
    });
    // Limpar os timers de lane e resetar flag de movimento automático
    await Ticket_1.default.update({
        laneTimerStartedAt: null,
        laneNextMoveAt: null,
        allowAutomaticMove: true // ✅ Reseta flag - ticket está pronto para nova automação
    }, { where: { id: ticketId } });
    console.log(`✅ [MoveTicketLane] Ticket ${ticketId} movido para lane ${toLane.name} (ID: ${toLaneId})`);
    // Enviar mensagem de saudação se configurada e se sendGreeting for true
    if (sendGreeting && toLane.greetingMessageLane && toLane.greetingMessageLane.trim() !== "") {
        try {
            // Verificar se assinatura está habilitada nas configurações da empresa
            const companySettings = await CompaniesSettings_1.default.findOne({
                where: { companyId }
            });
            let messageBody = toLane.greetingMessageLane;
            // Se sendSignMessage está enabled e o ticket tem usuário, adicionar assinatura
            if (companySettings?.sendSignMessage === "enabled" && ticket.user?.name) {
                messageBody = `*${ticket.user.name}:*\n${toLane.greetingMessageLane}`;
                console.log(`✍️ [MoveTicketLane] Adicionando assinatura "${ticket.user.name}" à mensagem`);
            }
            await (0, SendWhatsAppMessage_1.default)({
                body: messageBody,
                ticket,
                isForwarded: false
            });
            console.log(`📨 [MoveTicketLane] Mensagem de saudação enviada para ticket ${ticketId}`);
        }
        catch (error) {
            console.error(`❌ [MoveTicketLane] Erro ao enviar mensagem de saudação:`, error);
        }
    }
    // Recarregar ticket com todas as associações
    const updatedTicket = await (0, ShowTicketService_1.default)(ticketId, companyId);
    // Emitir evento Socket.IO para atualizar o frontend
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-ticket`, {
        action: "update",
        ticket: updatedTicket
    });
    return updatedTicket;
};
exports.default = MoveTicketLaneService;
