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
const Sentry = __importStar(require("@sentry/node"));
const Contact_1 = __importDefault(require("../../models/Contact"));
const Message_1 = __importDefault(require("../../models/Message"));
const logger_1 = __importDefault(require("../../utils/logger"));
const sequelize_1 = require("sequelize");
/**
 * Importa contatos de chats ativos recentes do WhatsApp
 * Filtra apenas contatos que enviaram/receberam mensagens nas últimas X horas
 */
const ImportChatsContactsService = async ({ companyId, whatsappId, hours = 24 }) => {
    try {
        logger_1.default.info({
            action: 'import_chats_contacts_started',
            companyId,
            whatsappId,
            hours
        });
        // 1. Buscar mensagens das últimas X horas
        const cutoffDate = new Date();
        cutoffDate.setHours(cutoffDate.getHours() - hours);
        const recentMessages = await Message_1.default.findAll({
            where: {
                companyId,
                createdAt: {
                    [sequelize_1.Op.gte]: cutoffDate
                }
            },
            attributes: ['contactId'],
            group: ['contactId'],
            raw: true
        });
        const contactIds = recentMessages.map(msg => msg.contactId).filter(Boolean);
        if (contactIds.length === 0) {
            logger_1.default.info({
                action: 'import_chats_contacts_no_recent_messages',
                companyId,
                hours
            });
            return { imported: 0, skipped: 0 };
        }
        // 2. Buscar contatos dos chats recentes
        const contacts = await Contact_1.default.findAll({
            where: {
                id: {
                    [sequelize_1.Op.in]: contactIds
                },
                companyId,
                isGroup: false // Ignorar grupos
            }
        });
        let imported = 0;
        let skipped = 0;
        // 3. Atualizar contatos para marcar como chat_import
        for (const contact of contacts) {
            try {
                // Se já está marcado como isInAgenda, pular
                if (contact.isInAgenda) {
                    skipped++;
                    continue;
                }
                // Atualizar source e isInAgenda
                await contact.update({
                    source: 'chat_import',
                    isInAgenda: true
                });
                imported++;
                logger_1.default.info({
                    action: 'contact_imported_from_chat',
                    contactId: contact.id,
                    contactNumber: contact.number,
                    companyId
                });
            }
            catch (error) {
                Sentry.captureException(error);
                logger_1.default.error({
                    action: 'import_chat_contact_failed',
                    contactId: contact.id,
                    error: error.message,
                    companyId
                });
                skipped++;
            }
        }
        logger_1.default.info({
            action: 'import_chats_contacts_completed',
            companyId,
            whatsappId,
            hours,
            imported,
            skipped,
            totalProcessed: contacts.length
        });
        return { imported, skipped };
    }
    catch (error) {
        Sentry.captureException(error);
        logger_1.default.error({
            action: 'import_chats_contacts_error',
            companyId,
            error: error.message
        });
        throw error;
    }
};
exports.default = ImportChatsContactsService;
