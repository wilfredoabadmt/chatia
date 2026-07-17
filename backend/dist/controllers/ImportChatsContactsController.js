"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const ImportChatsContactsService_1 = __importDefault(require("../services/ContactServices/ImportChatsContactsService"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const logger_1 = __importDefault(require("../utils/logger"));
/**
 * Controller para importar contatos de chats recentes do WhatsApp
 * POST /contacts/import/chats
 * Body: { whatsappId: number, hours?: number }
 */
const store = async (req, res) => {
    try {
        const { companyId } = req.user;
        const { whatsappId, hours } = req.body;
        if (!whatsappId) {
            throw new AppError_1.default("WhatsApp ID é obrigatório", 400);
        }
        logger_1.default.info({
            action: 'import_chats_contacts_request',
            companyId,
            whatsappId,
            hours: hours || 24
        });
        const result = await (0, ImportChatsContactsService_1.default)({
            companyId,
            whatsappId: Number(whatsappId),
            hours: hours ? Number(hours) : 24
        });
        return res.status(200).json({
            message: `${result.imported} contatos importados de chats recentes`,
            imported: result.imported,
            skipped: result.skipped
        });
    }
    catch (error) {
        logger_1.default.error({
            action: 'import_chats_contacts_error',
            error: error.message
        });
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: "Erro ao importar contatos de chats" });
    }
};
exports.store = store;
