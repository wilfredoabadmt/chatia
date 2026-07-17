"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const TicketTag_1 = __importDefault(require("../../models/TicketTag"));
const Tag_1 = __importDefault(require("../../models/Tag"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const StartLaneTimerService = async ({ ticketId, companyId }) => {
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
    // Se não tem lane kanban, não faz nada
    if (!ticketTag || !ticketTag.tag) {
        console.log(`⏭️ [StartLaneTimer] Ticket ${ticketId} não está em nenhuma lane kanban, timer não iniciado`);
        return;
    }
    const currentLane = ticketTag.tag;
    // Se a lane não tem timeLane configurado ou não tem nextLaneId, não inicia timer
    if (!currentLane.timeLane || currentLane.timeLane <= 0 || !currentLane.nextLaneId) {
        console.log(`⏭️ [StartLaneTimer] Lane "${currentLane.name}" não tem timer ou nextLaneId configurado, timer não iniciado`);
        return;
    }
    // Calcular quando o ticket deve ser movido
    const now = new Date();
    const moveAt = new Date(now.getTime() + currentLane.timeLane * 60 * 1000); // timeLane está em minutos
    // Atualizar o ticket com os dados do timer e habilitar movimento automático
    await ticket.update({
        laneTimerStartedAt: now,
        laneNextMoveAt: moveAt,
        allowAutomaticMove: true // ✅ Permite que o cron job mova automaticamente
    });
    // 🔍 DEBUG: Log detalhado do timer iniciado
    console.log(`
╔════════════════════════════════════════════════════════════
║ ⏰ START LANE TIMER
╠════════════════════════════════════════════════════════════
║ Ticket ID:        ${ticketId}
║ Lane:             ${currentLane.name} (ID: ${currentLane.id})
║ timeLane:         ${currentLane.timeLane} minutos
║ nextLaneId:       ${currentLane.nextLaneId}
║ rollbackLaneId:   ${currentLane.rollbackLaneId || 'N/A'}
║
║ Timer:
║   - Iniciado em:  ${now.toISOString()}
║   - Moverá em:    ${moveAt.toISOString()}
║   - Duração:      ${currentLane.timeLane} minuto(s)
║
║ allowAutomaticMove: true ✅
║
║ Próxima Ação: Cron moverá para nextLaneId ${currentLane.nextLaneId} em ${currentLane.timeLane} minuto(s)
╚════════════════════════════════════════════════════════════
`);
};
exports.default = StartLaneTimerService;
