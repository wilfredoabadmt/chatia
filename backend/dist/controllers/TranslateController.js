"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactLanguage = exports.updateSettings = exports.getSettings = exports.translateMessage = void 0;
const Message_1 = __importDefault(require("../models/Message"));
const Contact_1 = __importDefault(require("../models/Contact"));
const Ticket_1 = __importDefault(require("../models/Ticket"));
const User_1 = __importDefault(require("../models/User"));
const CompaniesSettings_1 = __importDefault(require("../models/CompaniesSettings"));
const TranslateService_1 = require("../services/TranslateService/TranslateService");
/**
 * Traduzir uma mensagem específica manualmente
 * POST /translate/message/:messageId
 */
const translateMessage = async (req, res) => {
    const { messageId } = req.params;
    const { companyId } = req.user;
    try {
        const message = await Message_1.default.findOne({
            where: { id: messageId, companyId },
            include: [
                {
                    model: Ticket_1.default,
                    as: "ticket",
                    attributes: ["id", "userId", "contactId"]
                }
            ]
        });
        if (!message) {
            return res.status(404).json({ error: "Mensagem não encontrada" });
        }
        if (!message.body || message.body.length < 3) {
            return res.status(400).json({ error: "Mensagem muito curta para traduzir" });
        }
        // Buscar idioma do atendente
        let userLang = "pt-BR";
        const user = await User_1.default.findByPk(req.user.id, { attributes: ["language"] });
        if (user?.language)
            userLang = user.language;
        const result = await (0, TranslateService_1.detectAndTranslate)(message.body, userLang, companyId);
        if (!result) {
            return res.status(500).json({ error: "Falha ao traduzir" });
        }
        // Salvar tradução na mensagem
        if (result.translatedText) {
            await message.update({
                translatedBody: result.translatedText,
                originalLanguage: result.detectedLanguage
            });
        }
        return res.status(200).json({
            translatedBody: result.translatedText,
            originalLanguage: result.detectedLanguage,
            messageId: message.id
        });
    }
    catch (error) {
        console.error("[TranslateController] Erro:", error);
        return res.status(500).json({ error: "Erro ao traduzir mensagem" });
    }
};
exports.translateMessage = translateMessage;
/**
 * Obter configurações de tradução da empresa
 * GET /translate/settings
 */
const getSettings = async (req, res) => {
    const { companyId } = req.user;
    try {
        const settings = await CompaniesSettings_1.default.findOne({
            where: { companyId },
            attributes: ["autoTranslate", "translateApiKey"]
        });
        return res.status(200).json({
            autoTranslate: settings?.autoTranslate || "disabled",
            hasApiKey: !!settings?.translateApiKey
        });
    }
    catch (error) {
        return res.status(500).json({ error: "Erro ao buscar configurações" });
    }
};
exports.getSettings = getSettings;
/**
 * Atualizar configurações de tradução
 * PUT /translate/settings
 */
const updateSettings = async (req, res) => {
    const { companyId } = req.user;
    const { autoTranslate, translateApiKey } = req.body;
    try {
        const settings = await CompaniesSettings_1.default.findOne({ where: { companyId } });
        if (!settings) {
            return res.status(404).json({ error: "Configurações não encontradas" });
        }
        const updateData = {};
        if (autoTranslate !== undefined)
            updateData.autoTranslate = autoTranslate;
        if (translateApiKey !== undefined)
            updateData.translateApiKey = translateApiKey;
        await settings.update(updateData);
        // Invalidar cache de instância OpenAI
        (0, TranslateService_1.invalidateTranslateCache)(companyId);
        return res.status(200).json({
            autoTranslate: settings.autoTranslate,
            hasApiKey: !!settings.translateApiKey
        });
    }
    catch (error) {
        return res.status(500).json({ error: "Erro ao atualizar configurações" });
    }
};
exports.updateSettings = updateSettings;
/**
 * Obter idioma de um contato
 * GET /translate/contact/:contactId/language
 */
const getContactLanguage = async (req, res) => {
    const { contactId } = req.params;
    const { companyId } = req.user;
    try {
        const contact = await Contact_1.default.findOne({
            where: { id: contactId, companyId },
            attributes: ["id", "name", "language"]
        });
        if (!contact) {
            return res.status(404).json({ error: "Contato não encontrado" });
        }
        return res.status(200).json({
            contactId: contact.id,
            name: contact.name,
            language: contact.language
        });
    }
    catch (error) {
        return res.status(500).json({ error: "Erro ao buscar idioma do contato" });
    }
};
exports.getContactLanguage = getContactLanguage;
