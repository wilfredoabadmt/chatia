"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const TicketTag_1 = __importDefault(require("../../models/TicketTag"));
const Tag_1 = __importDefault(require("../../models/Tag"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const MoveTicketLaneService_1 = __importDefault(require("./MoveTicketLaneService"));
const HandleCustomerResponseService = async ({ ticketId, companyId }) => {
    // Buscar o ticket
    const ticket = await Ticket_1.default.findOne({
        where: {
            id: ticketId,
            companyId
        }
    });
    if (!ticket) {
        throw new AppError_1.default("Ticket não encontrado", 404);
    }
    // Se não há timer ativo, não faz nada
    if (!ticket.laneTimerStartedAt || !ticket.laneNextMoveAt) {
        console.log(`⏭️ [HandleCustomerResponse] Ticket ${ticketId} não tem timer ativo`);
        return;
    }
    // Buscar a lane (tag kanban) atual do ticket
    const ticketTag = await TicketTag_1.default.findOne({
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
    // Se não tem lane kanban, apenas limpa o timer
    if (!ticketTag || !ticketTag.tag) {
        await ticket.update({
            laneTimerStartedAt: null,
            laneNextMoveAt: null
        });
        console.log(`⏭️ [HandleCustomerResponse] Ticket ${ticketId} não está em lane kanban, timer limpo`);
        return;
    }
    const currentLane = ticketTag.tag;
    // 🔍 DEBUG: Log detalhado da lane atual e configuração
    console.log(`
╔════════════════════════════════════════════════════════════
║ 🔄 HANDLE CUSTOMER RESPONSE
╠════════════════════════════════════════════════════════════
║ Ticket ID:        ${ticketId}
║ Current Lane:     ${currentLane.name} (ID: ${currentLane.id})
║ rollbackLaneId:   ${currentLane.rollbackLaneId || 'NÃO CONFIGURADO'}
║ timeLane:         ${currentLane.timeLane || 'N/A'}
║ nextLaneId:       ${currentLane.nextLaneId || 'N/A'}
║
║ Timer Atual:
║   - Iniciado em:  ${ticket.laneTimerStartedAt || 'N/A'}
║   - Moverá em:    ${ticket.laneNextMoveAt || 'N/A'}
║
║ Ação: ${currentLane.rollbackLaneId ? `⏩ Mover para rollbackLane ${currentLane.rollbackLaneId}` : '⏹️ Apenas cancelar timer'}
╚════════════════════════════════════════════════════════════
`);
    // Se a lane tem rollbackLaneId configurado, move o ticket
    if (currentLane.rollbackLaneId) {
        console.log(`🔄 [HandleCustomerResponse] Cliente respondeu no ticket ${ticketId}, movendo para rollbackLaneId ${currentLane.rollbackLaneId}`);
        await (0, MoveTicketLaneService_1.default)({
            ticketId,
            companyId,
            toLaneId: currentLane.rollbackLaneId,
            sendGreeting: true // Envia mensagem de saudação da lane de rollback
        });
        // ✅ Desabilita movimento automático - ticket permanece em rollbackLane até nova interação
        await ticket.reload();
        await ticket.update({
            allowAutomaticMove: false
        });
        console.log(`🔒 [HandleCustomerResponse] Movimento automático DESABILITADO para ticket ${ticketId} (cliente respondeu)`);
    }
    else {
        // Se não tem rollbackLaneId, apenas cancela o timer
        await ticket.update({
            laneTimerStartedAt: null,
            laneNextMoveAt: null
        });
        console.log(`⏹️ [HandleCustomerResponse] Cliente respondeu no ticket ${ticketId}, timer cancelado (sem rollbackLaneId configurado)`);
    }
};
exports.default = HandleCustomerResponseService;
