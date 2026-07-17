"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("../models/Ticket"));
const FlowBuilder_1 = require("../models/FlowBuilder");
const ActionsWebhookService_1 = require("../services/WebhookService/ActionsWebhookService");
const logger_1 = __importDefault(require("../utils/logger"));
const cache_1 = __importDefault(require("../libs/cache"));
exports.default = {
    key: "FlowTimeoutJob",
    async handle({ data }) {
        try {
            const { ticketId, companyId, whatsappId, nodeId, flowId, hashFlowId, numberClient, contactName, contactEmail } = data;
            logger_1.default.info(`[FlowTimeout] Verificando timeout para ticket ${ticketId}, node ${nodeId}`);
            // Check if ticket is still waiting at the same node
            const ticket = await Ticket_1.default.findOne({
                where: { id: ticketId, companyId }
            });
            if (!ticket) {
                logger_1.default.info(`[FlowTimeout] Ticket ${ticketId} nao encontrado, ignorando`);
                return;
            }
            // If ticket moved on (user responded, or flow changed), skip
            if (ticket.lastFlowId !== nodeId) {
                logger_1.default.info(`[FlowTimeout] Ticket ${ticketId} ja avancou (lastFlowId=${ticket.lastFlowId}, esperado=${nodeId}), ignorando`);
                return;
            }
            // If ticket is closed, skip
            if (ticket.status === "closed") {
                logger_1.default.info(`[FlowTimeout] Ticket ${ticketId} esta fechado, ignorando`);
                return;
            }
            // Load the flow
            const flow = await FlowBuilder_1.FlowBuilderModel.findOne({
                where: { id: flowId }
            });
            if (!flow) {
                logger_1.default.info(`[FlowTimeout] Flow ${flowId} nao encontrado, ignorando`);
                return;
            }
            const nodes = flow.flow["nodes"];
            const connections = flow.flow["connections"];
            // Find the timeout connection from this node
            const timeoutConnection = connections.find(c => c.source === nodeId && c.sourceHandle === "timeout");
            if (!timeoutConnection) {
                logger_1.default.info(`[FlowTimeout] Nenhuma conexao timeout encontrada para node ${nodeId}, ignorando`);
                return;
            }
            logger_1.default.info(`[FlowTimeout] Executando timeout para ticket ${ticketId}: node ${nodeId} -> ${timeoutConnection.target}`);
            // Clear the timeout key from Redis
            await cache_1.default.del(`flow-timeout:${ticketId}`);
            // Update ticket to follow timeout path
            await ticket.update({
                flowWebhook: true,
                lastFlowId: nodeId,
                hashFlowId: hashFlowId || "",
                flowStopped: flowId.toString()
            });
            const mountDataContact = {
                number: numberClient,
                name: contactName,
                email: contactEmail
            };
            // Execute flow from the timeout target
            await (0, ActionsWebhookService_1.ActionsWebhookService)(whatsappId, flowId, companyId, nodes, connections, timeoutConnection.target, null, "", hashFlowId || "", undefined, ticketId, mountDataContact);
        }
        catch (error) {
            logger_1.default.error(`[FlowTimeout] Erro: ${error.message}`);
            logger_1.default.error(error);
        }
    }
};
