"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const TicketTag_1 = __importDefault(require("../../models/TicketTag"));
const Tag_1 = __importDefault(require("../../models/Tag"));
const MoveTicketLaneService_1 = __importDefault(require("./MoveTicketLaneService"));
const logger_1 = __importDefault(require("../../utils/logger"));
/**
 * Job que processa tickets cujo timer de lane expirou e os move para a nextLaneId
 * Deve ser executado periodicamente (ex: a cada minuto via cron)
 */
const ProcessExpiredLaneTimersJob = async () => {
    try {
        const now = new Date();
        // Buscar todos os tickets com timer expirado E movimento automático permitido
        const expiredTickets = await Ticket_1.default.findAll({
            where: {
                laneNextMoveAt: {
                    [sequelize_1.Op.lte]: now // laneNextMoveAt <= agora
                },
                laneTimerStartedAt: {
                    [sequelize_1.Op.not]: null // Tem timer ativo
                },
                allowAutomaticMove: true // ✅ Só move tickets com movimento automático HABILITADO
            },
            include: [
                {
                    model: TicketTag_1.default,
                    as: "ticketTags",
                    required: true,
                    include: [
                        {
                            model: Tag_1.default,
                            as: "tag",
                            where: {
                                kanban: 1 // Apenas tags kanban
                            }
                        }
                    ]
                }
            ]
        });
        if (expiredTickets.length === 0) {
            // Não há tickets expirados
            return;
        }
        logger_1.default.info(`⏰ [ProcessExpiredLaneTimers] Encontrados ${expiredTickets.length} tickets com timer expirado`);
        // Processar cada ticket expirado
        for (const ticket of expiredTickets) {
            try {
                // Buscar a tag kanban atual do ticket
                const ticketTag = ticket.ticketTags.find(tt => tt.tag?.kanban === 1);
                if (!ticketTag || !ticketTag.tag) {
                    logger_1.default.warn(`⚠️ [ProcessExpiredLaneTimers] Ticket ${ticket.id} não tem tag kanban, limpando timer`);
                    await ticket.update({
                        laneTimerStartedAt: null,
                        laneNextMoveAt: null
                    });
                    continue;
                }
                const currentLane = ticketTag.tag;
                // Verificar se a lane tem nextLaneId configurado
                if (!currentLane.nextLaneId) {
                    logger_1.default.warn(`⚠️ [ProcessExpiredLaneTimers] Ticket ${ticket.id} na lane "${currentLane.name}" não tem nextLaneId configurado, limpando timer`);
                    await ticket.update({
                        laneTimerStartedAt: null,
                        laneNextMoveAt: null
                    });
                    continue;
                }
                logger_1.default.info(`🔄 [ProcessExpiredLaneTimers] Movendo ticket ${ticket.id} da lane "${currentLane.name}" para nextLaneId ${currentLane.nextLaneId}`);
                // Mover o ticket para a próxima lane
                await (0, MoveTicketLaneService_1.default)({
                    ticketId: ticket.id,
                    companyId: ticket.companyId,
                    toLaneId: currentLane.nextLaneId,
                    sendGreeting: true
                });
                logger_1.default.info(`✅ [ProcessExpiredLaneTimers] Ticket ${ticket.id} movido com sucesso`);
            }
            catch (error) {
                logger_1.default.error(`❌ [ProcessExpiredLaneTimers] Erro ao processar ticket ${ticket.id}:`, error);
                // Continua processando os outros tickets mesmo se um falhar
            }
        }
        logger_1.default.info(`✅ [ProcessExpiredLaneTimers] Processamento de timers expirados concluído`);
    }
    catch (error) {
        logger_1.default.error("❌ [ProcessExpiredLaneTimers] Erro ao processar timers expirados:", error);
    }
};
exports.default = ProcessExpiredLaneTimersJob;
