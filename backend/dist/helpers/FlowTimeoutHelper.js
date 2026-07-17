"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelFlowTimeout = exports.scheduleFlowTimeout = void 0;
const queue_1 = __importDefault(require("../libs/queue"));
const cache_1 = __importDefault(require("../libs/cache"));
const logger_1 = __importDefault(require("../utils/logger"));
const scheduleFlowTimeout = async (params) => {
    const { ticketId, timeoutSeconds } = params;
    // Cancel any existing timeout for this ticket
    await (0, exports.cancelFlowTimeout)(ticketId);
    try {
        const job = await queue_1.default.add("FlowTimeoutJob", params, {
            delay: timeoutSeconds * 1000,
            removeOnComplete: true,
            removeOnFail: true
        });
        // Store job ID in Redis so we can cancel it later
        await cache_1.default.set(`flow-timeout:${ticketId}`, job.id.toString());
        logger_1.default.info(`[FlowTimeout] Agendado timeout de ${timeoutSeconds}s para ticket ${ticketId}, jobId=${job.id}`);
    }
    catch (error) {
        logger_1.default.error(`[FlowTimeout] Erro ao agendar timeout: ${error.message}`);
    }
};
exports.scheduleFlowTimeout = scheduleFlowTimeout;
const cancelFlowTimeout = async (ticketId) => {
    try {
        const jobId = await cache_1.default.get(`flow-timeout:${ticketId}`);
        if (jobId) {
            // Find and remove the job from the queue
            const queueEntry = queue_1.default.queues.find((q) => q.name === "FlowTimeoutJob");
            if (queueEntry) {
                const job = await queueEntry.bull.getJob(jobId);
                if (job) {
                    await job.remove();
                    logger_1.default.info(`[FlowTimeout] Timeout cancelado para ticket ${ticketId}, jobId=${jobId}`);
                }
            }
            await cache_1.default.del(`flow-timeout:${ticketId}`);
        }
    }
    catch (error) {
        logger_1.default.error(`[FlowTimeout] Erro ao cancelar timeout: ${error.message}`);
    }
};
exports.cancelFlowTimeout = cancelFlowTimeout;
