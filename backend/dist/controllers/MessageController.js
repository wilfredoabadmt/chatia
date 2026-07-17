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
exports.sendMessageFlow = exports.edit = exports.send = exports.allMe = exports.remove = exports.forwardMessage = exports.store = exports.index = exports.transcribeAudioMessage = exports.sendPIXMessage = exports.sendURLMessage = exports.sendCALLMessage = exports.sendCopyMessage = exports.sendListMessage = exports.addReaction = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const fs_1 = __importDefault(require("fs"));
const GetTicketWbot_1 = __importDefault(require("../helpers/GetTicketWbot"));
const SetTicketMessagesAsRead_1 = __importDefault(require("../helpers/SetTicketMessagesAsRead"));
const socket_1 = require("../libs/socket");
const Message_1 = __importDefault(require("../models/Message"));
const Ticket_1 = __importDefault(require("../models/Ticket"));
const Queue_1 = __importDefault(require("../models/Queue"));
const User_1 = __importDefault(require("../models/User"));
const Whatsapp_1 = __importDefault(require("../models/Whatsapp"));
const path_1 = __importDefault(require("path"));
const lodash_1 = require("lodash");
const async_mutex_1 = require("async-mutex");
const ListMessagesService_1 = __importDefault(require("../services/MessageServices/ListMessagesService"));
const ShowTicketService_1 = __importDefault(require("../services/TicketServices/ShowTicketService"));
const DeleteWhatsAppMessage_1 = __importDefault(require("../services/WbotServices/DeleteWhatsAppMessage"));
const SendWhatsAppMedia_1 = __importDefault(require("../services/WbotServices/SendWhatsAppMedia"));
const SendWhatsAppMessage_1 = __importDefault(require("../services/WbotServices/SendWhatsAppMessage"));
const CreateMessageService_1 = __importDefault(require("../services/MessageServices/CreateMessageService"));
const sendFacebookMessageMedia_1 = require("../services/FacebookServices/sendFacebookMessageMedia");
const sendFacebookMessage_1 = __importDefault(require("../services/FacebookServices/sendFacebookMessage"));
const ShowPlanCompanyService_1 = __importDefault(require("../services/CompanyService/ShowPlanCompanyService"));
const ListMessagesServiceAll_1 = __importDefault(require("../services/MessageServices/ListMessagesServiceAll"));
const ShowContactService_1 = __importDefault(require("../services/ContactServices/ShowContactService"));
const FindOrCreateTicketService_1 = __importDefault(require("../services/TicketServices/FindOrCreateTicketService"));
const Contact_1 = __importDefault(require("../models/Contact"));
const IdentityResolverService_1 = require("../services/WbotServices/IdentityResolverService");
const UpdateTicketService_1 = __importDefault(require("../services/TicketServices/UpdateTicketService"));
const CompaniesSettings_1 = __importDefault(require("../models/CompaniesSettings"));
const facebookMessageListener_1 = require("../services/FacebookServices/facebookMessageListener");
const EditWhatsAppMessage_1 = __importDefault(require("../services/MessageServices/EditWhatsAppMessage"));
const CheckNumber_1 = __importDefault(require("../services/WbotServices/CheckNumber"));
const baileys_1 = require("baileys");
const SendWhatsAppReaction_1 = __importDefault(require("../services/WbotServices/SendWhatsAppReaction"));
const TranscribeAudioMessageService_1 = __importDefault(require("../services/MessageServices/TranscribeAudioMessageService"));
const openai_1 = __importDefault(require("openai"));
const Prompt_1 = __importDefault(require("../models/Prompt"));
const ShowMessageService_1 = __importStar(require("../services/MessageServices/ShowMessageService"));
// Função utilitária para extrair o campo body de mensagens
const extractMessageBody = (msg, fallback = "Mensagem interativa") => {
    if (msg.message?.interactiveMessage?.body?.text) {
        return msg.message.interactiveMessage.body.text;
    }
    if (msg.message?.listMessage?.description) {
        return msg.message.listMessage.description;
    }
    if (msg.message?.interactiveMessage?.nativeFlowMessage?.buttons[0]?.buttonParamsJson) {
        try {
            const params = JSON.parse(msg.message.interactiveMessage.nativeFlowMessage.buttons[0].buttonParamsJson);
            return params.order?.items[0]?.name || params.display_text || fallback;
        }
        catch {
            return fallback;
        }
    }
    return msg.message?.conversation || fallback;
};
// Função para gerar IDs únicos
const generateRandomCode = (length = 11) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
};
// Adicionar reação
const addReaction = async (req, res) => {
    try {
        const { messageId } = req.params;
        const { type } = req.body;
        const { companyId, id } = req.user;
        const message = await Message_1.default.findByPk(messageId);
        if (!message) {
            throw new AppError_1.default("Mensagem não encontrada", 404);
        }
        const ticket = await Ticket_1.default.findByPk(message.ticketId, { include: ["contact"] });
        if (!ticket) {
            throw new AppError_1.default("Ticket não encontrado", 404);
        }
        const reactionResult = await (0, SendWhatsAppReaction_1.default)({
            messageId,
            ticket,
            reactionType: type,
        });
        const io = (0, socket_1.getIO)();
        // Recarregar ticket com uuid completo
        await ticket.reload({
            attributes: ["id", "uuid", "status"],
            include: [{ model: Contact_1.default, as: "contact" }]
        });
        const payload = {
            action: "update",
            message,
            ticket
        };
        // Emitir para múltiplos canais para garantir compatibilidade
        io.emit(`company-${companyId}-appMessage`, payload);
        io.to(message.ticketId.toString()).emit(`company-${companyId}-appMessage`, payload);
        io.of(`/workspace-${companyId}`).emit(`company-${companyId}-appMessage`, payload);
        return res.status(200).json({
            message: "Reação adicionada com sucesso!",
            reactionResult,
        });
    }
    catch (error) {
        console.error("Erro ao adicionar reação:", error);
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Erro ao adicionar reação", error: String(error) });
    }
};
exports.addReaction = addReaction;
// Enviar mensagem de lista
const sendListMessage = async (req, res) => {
    const { ticketId } = req.params;
    const { title, text, buttonText, footer, sections } = req.body;
    try {
        const ticket = await Ticket_1.default.findByPk(ticketId);
        if (!ticket) {
            throw new AppError_1.default("Ticket not found", 404);
        }
        const contact = await Contact_1.default.findByPk(ticket.contactId);
        if (!contact) {
            throw new AppError_1.default("Contact not found", 404);
        }
        const whatsapp = await Whatsapp_1.default.findOne({ where: { id: ticket.whatsappId } });
        if (!whatsapp || !whatsapp.number) {
            throw new AppError_1.default("Número de WhatsApp não encontrado", 404);
        }
        const number = await (0, IdentityResolverService_1.resolveOutgoingJid)(contact, ticket.isGroup);
        const botNumber = whatsapp.number;
        const wbot = await (0, GetTicketWbot_1.default)(ticket);
        // Validate input
        if (!sections || !Array.isArray(sections) || sections.length === 0) {
            throw new AppError_1.default("Sections must be a non-empty array", 400);
        }
        if (!sections.every((section) => Array.isArray(section.rows) && section.rows.length > 0)) {
            throw new AppError_1.default("Each section must have at least one row", 400);
        }
        // Format sections for Baileys MD
        const formattedSections = sections.map((section) => ({
            title: section.title || "Section",
            rows: section.rows.map((row) => ({
                rowId: row.id || generateRandomCode(10),
                title: row.title || "Option",
                description: row.description || "",
            })),
        }));
        const listMessage = {
            listMessage: {
                title: title || "Lista de Opções",
                description: text || "Selecione uma opção",
                buttonText: buttonText || "Selecionar",
                footerText: footer || "",
                sections: formattedSections,
                listType: 1, // Single-select list
            },
        };
        console.debug("Sending list message:", JSON.stringify(listMessage, null, 2));
        // Ensure timestamp is a number
        const timestamp = Number(Math.round(Date.now() / 1000));
        console.debug("Timestamp:", timestamp);
        const newMsg = (0, baileys_1.generateWAMessageFromContent)(number, listMessage, {
            userJid: botNumber,
        });
        await wbot.relayMessage(number, newMsg.message, { messageId: newMsg.key.id });
        // Preencher o campo body para salvar no banco
        const messageBody = text || title || "Lista interativa";
        const messageData = {
            wid: newMsg.key.id,
            ticketId: ticket.id,
            body: messageBody,
            fromMe: true,
            mediaType: "listMessage",
            read: true,
            ack: 1,
            remoteJid: number,
            participant: ticket.isGroup ? contact.number : "",
            dataJson: JSON.stringify(newMsg),
            ticketTrakingId: ticket.ticketTrakingId,
            companyId: ticket.companyId,
            isPrivate: false,
            isEdited: false,
            isForwarded: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
        return res.status(200).json({ message: "List message sent successfully", newMsg });
    }
    catch (err) {
        console.error("Error sending list message:", err);
        throw new AppError_1.default(`Error sending list message: ${err.message}`, 500);
    }
};
exports.sendListMessage = sendListMessage;
// Enviar mensagem de cópia
const sendCopyMessage = async (req, res) => {
    const { ticketId } = req.params;
    const { title, description, buttonText, copyText } = req.body;
    try {
        const ticket = await Ticket_1.default.findByPk(ticketId);
        if (!ticket) {
            throw new AppError_1.default("Ticket not found", 404);
        }
        const contact = await Contact_1.default.findByPk(ticket.contactId);
        if (!contact) {
            throw new AppError_1.default("Contact not found", 404);
        }
        const whatsapp = await Whatsapp_1.default.findOne({ where: { id: ticket.whatsappId } });
        if (!whatsapp || !whatsapp.number) {
            throw new AppError_1.default("Número de WhatsApp não encontrado", 404);
        }
        const botNumber = whatsapp.number;
        const wbot = await (0, GetTicketWbot_1.default)(ticket);
        const copyMessage = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: title || "Botão copiar",
                        },
                        footer: {
                            text: description || "Botão copiar",
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: buttonText || "Botão copiar",
                                        copy_code: copyText || "Botão copiar",
                                    }),
                                },
                            ],
                        },
                    },
                },
            },
        };
        const number = await (0, IdentityResolverService_1.resolveOutgoingJid)(contact, ticket.isGroup);
        const newMsg = (0, baileys_1.generateWAMessageFromContent)(number, copyMessage, { userJid: botNumber });
        await wbot.relayMessage(number, newMsg.message, { messageId: newMsg.key.id });
        // Preencher o campo body para salvar no banco
        const messageBody = title || "Mensagem de cópia interativa";
        const messageData = {
            wid: newMsg.key.id,
            ticketId: ticket.id,
            body: messageBody,
            fromMe: true,
            mediaType: "viewOnceMessage",
            read: true,
            ack: 1,
            remoteJid: number,
            participant: ticket.isGroup ? contact.number : "",
            dataJson: JSON.stringify(newMsg),
            ticketTrakingId: ticket.ticketTrakingId,
            companyId: ticket.companyId,
            isPrivate: false,
            isEdited: false,
            isForwarded: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
        return res.status(200).json({ message: "Copy message sent successfully", newMsg });
    }
    catch (error) {
        console.error("Erro ao enviar a mensagem de cópia:", error);
        throw new AppError_1.default("Error sending copy message", 500);
    }
};
exports.sendCopyMessage = sendCopyMessage;
// Enviar mensagem de chamada
const sendCALLMessage = async (req, res) => {
    const { ticketId } = req.params;
    const { title, description, buttonText, copyText } = req.body;
    try {
        const ticket = await Ticket_1.default.findByPk(ticketId);
        if (!ticket) {
            throw new AppError_1.default("Ticket not found", 404);
        }
        const contact = await Contact_1.default.findByPk(ticket.contactId);
        if (!contact) {
            throw new AppError_1.default("Contact not found", 404);
        }
        const whatsapp = await Whatsapp_1.default.findOne({ where: { id: ticket.whatsappId } });
        if (!whatsapp || !whatsapp.number) {
            throw new AppError_1.default("Número de WhatsApp não encontrado", 404);
        }
        const botNumber = whatsapp.number;
        const wbot = await (0, GetTicketWbot_1.default)(ticket);
        const callMessage = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: title || "Botão de chamada",
                        },
                        footer: {
                            text: description || "Botão de chamada",
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_call",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: buttonText || "Botão de chamada",
                                        phone_number: copyText || "Botão de chamada",
                                    }),
                                },
                            ],
                        },
                    },
                },
            },
        };
        const number = await (0, IdentityResolverService_1.resolveOutgoingJid)(contact, ticket.isGroup);
        const newMsg = (0, baileys_1.generateWAMessageFromContent)(number, callMessage, { userJid: botNumber });
        await wbot.relayMessage(number, newMsg.message, { messageId: newMsg.key.id });
        // Preencher o campo body para salvar no banco
        const messageBody = title || "Mensagem de chamada interativa";
        const messageData = {
            wid: newMsg.key.id,
            ticketId: ticket.id,
            body: messageBody,
            fromMe: true,
            mediaType: "viewOnceMessage",
            read: true,
            ack: 1,
            remoteJid: number,
            participant: ticket.isGroup ? contact.number : "",
            dataJson: JSON.stringify(newMsg),
            ticketTrakingId: ticket.ticketTrakingId,
            companyId: ticket.companyId,
            isPrivate: false,
            isEdited: false,
            isForwarded: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
        return res.status(200).json({ message: "Call message sent successfully", newMsg });
    }
    catch (error) {
        console.error("Erro ao enviar a mensagem de chamada:", error);
        throw new AppError_1.default("Error sending call message", 500);
    }
};
exports.sendCALLMessage = sendCALLMessage;
// Enviar mensagem de URL
const sendURLMessage = async (req, res) => {
    const { ticketId } = req.params;
    const { image, title, description, buttonText, copyText } = req.body;
    try {
        const ticket = await Ticket_1.default.findByPk(ticketId);
        if (!ticket) {
            throw new AppError_1.default("Ticket not found", 404);
        }
        const contact = await Contact_1.default.findByPk(ticket.contactId);
        if (!contact) {
            throw new AppError_1.default("Contact not found", 404);
        }
        const whatsapp = await Whatsapp_1.default.findOne({ where: { id: ticket.whatsappId } });
        if (!whatsapp || !whatsapp.number) {
            throw new AppError_1.default("Número de WhatsApp não encontrado", 404);
        }
        const botNumber = whatsapp.number;
        const wbot = await (0, GetTicketWbot_1.default)(ticket);
        let urlMessage;
        if (image) {
            if (!image.includes("base64,")) {
                throw new AppError_1.default("Invalid base64 image format", 400);
            }
            const base64Image = image.split(",")[1];
            const imageMessageContent = await (0, baileys_1.generateWAMessageContent)({
                image: {
                    url: `data:image/png;base64,${base64Image}`,
                },
            }, { upload: wbot.waUploadToServer });
            urlMessage = {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: title || "Botão URL",
                            },
                            footer: {
                                text: description || "Botão URL",
                            },
                            header: {
                                imageMessage: imageMessageContent.imageMessage,
                                hasMediaAttachment: true,
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "cta_url",
                                        buttonParamsJson: JSON.stringify({
                                            display_text: buttonText || "Botão URL",
                                            url: copyText || "https://example.com",
                                        }),
                                    },
                                ],
                            },
                        },
                    },
                },
            };
        }
        else {
            urlMessage = {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: title || "Botão URL",
                            },
                            footer: {
                                text: description || "Botão URL",
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "cta_url",
                                        buttonParamsJson: JSON.stringify({
                                            display_text: buttonText || "Botão URL",
                                            url: copyText || "https://example.com",
                                        }),
                                    },
                                ],
                            },
                        },
                    },
                },
            };
        }
        const number = await (0, IdentityResolverService_1.resolveOutgoingJid)(contact, ticket.isGroup);
        const newMsg = (0, baileys_1.generateWAMessageFromContent)(number, urlMessage, { userJid: botNumber });
        await wbot.relayMessage(number, newMsg.message, { messageId: newMsg.key.id });
        // Preencher o campo body para salvar no banco
        const messageBody = title || "Mensagem URL interativa";
        const messageData = {
            wid: newMsg.key.id,
            ticketId: ticket.id,
            body: messageBody,
            fromMe: true,
            mediaType: "viewOnceMessage",
            read: true,
            ack: 1,
            remoteJid: number,
            participant: ticket.isGroup ? contact.number : "",
            dataJson: JSON.stringify(newMsg),
            ticketTrakingId: ticket.ticketTrakingId,
            companyId: ticket.companyId,
            isPrivate: false,
            isEdited: false,
            isForwarded: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
        return res.status(200).json({ message: "URL message sent successfully", newMsg });
    }
    catch (error) {
        console.error("Erro ao enviar a mensagem URL:", error);
        throw new AppError_1.default("Error sending URL message", 500);
    }
};
exports.sendURLMessage = sendURLMessage;
// Enviar mensagem PIX
// Enviar mensagem PIX
const sendPIXMessage = async (req, res) => {
    const { ticketId } = req.params;
    const { title, description, copyButtonText, sendKey, } = req.body;
    try {
        const ticket = await Ticket_1.default.findByPk(ticketId);
        if (!ticket) {
            throw new AppError_1.default("Ticket not found", 404);
        }
        const contact = await Contact_1.default.findByPk(ticket.contactId);
        if (!contact) {
            throw new AppError_1.default("Contact not found", 404);
        }
        const whatsapp = await Whatsapp_1.default.findOne({ where: { id: ticket.whatsappId } });
        if (!whatsapp || !whatsapp.number) {
            throw new AppError_1.default("Número de WhatsApp não encontrado", 404);
        }
        // Validate input
        if (!sendKey || !title) {
            throw new AppError_1.default("Title and PIX key are required", 400);
        }
        // Validate PIX key format
        const validatePixKey = (key) => {
            return (/^\+55\d{10,11}$/.test(key) || // PHONE
                /^\d{11}$/.test(key) || // CPF
                /^\d{14}$/.test(key) || // CNPJ
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(key) || // EMAIL
                /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(key) // EVP
            );
        };
        if (!validatePixKey(sendKey)) {
            throw new AppError_1.default("Invalid PIX key format", 400);
        }
        const number = await (0, IdentityResolverService_1.resolveOutgoingJid)(contact, ticket.isGroup);
        const botNumber = whatsapp.number;
        const wbot = await (0, GetTicketWbot_1.default)(ticket);
        const interactiveMsg = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: title || "Copiar Chave PIX",
                        },
                        footer: {
                            text: description || "Clique para copiar a chave PIX",
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: copyButtonText || "Copiar Chave PIX",
                                        copy_code: sendKey,
                                    }),
                                },
                            ],
                        },
                    },
                },
            },
        };
        const newMsg = (0, baileys_1.generateWAMessageFromContent)(number, interactiveMsg, { userJid: botNumber });
        await wbot.relayMessage(number, newMsg.message, { messageId: newMsg.key.id });
        // Preencher o campo body para salvar no banco
        const messageBody = title || "Mensagem PIX interativa";
        const messageData = {
            wid: newMsg.key.id,
            ticketId: ticket.id,
            body: messageBody,
            fromMe: true,
            mediaType: "viewOnceMessage",
            read: true,
            ack: 1,
            remoteJid: number,
            participant: ticket.isGroup ? contact.number : "",
            dataJson: JSON.stringify(newMsg),
            ticketTrakingId: ticket.ticketTrakingId,
            companyId: ticket.companyId,
            isPrivate: false,
            isEdited: false,
            isForwarded: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
        return res.status(200).json({ message: "Mensagem enviada com sucesso", newMsg });
    }
    catch (error) {
        console.error("Erro ao enviar a mensagem PIX:", error);
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Erro interno ao enviar a mensagem PIX", error: String(error) });
    }
};
exports.sendPIXMessage = sendPIXMessage;
// Transcrição de áudio
const transcribeAudioMessage = async (req, res) => {
    const { fileName } = req.params;
    const { companyId } = req.user;
    // Validação de entrada
    if (!fileName || typeof fileName !== 'string') {
        return res.status(400).json({ error: "fileName é obrigatório e deve ser uma string." });
    }
    if (!companyId || typeof companyId !== 'number') {
        return res.status(400).json({ error: "companyId é obrigatório e deve ser um número." });
    }
    try {
        // Transcrever áudio
        const transcribeService = new TranscribeAudioMessageService_1.default();
        const result = await transcribeService.execute(fileName, companyId);
        if ("error" in result) {
            return res.status(400).json(result);
        }
        const transcribedText = result.transcribedText;
        // Obter idioma do usuário para traduzir
        const userRecord = await User_1.default.findByPk(req.user.id, {
            attributes: ["language"]
        });
        const userLanguage = userRecord?.language || "pt-BR";
        // Obter API key para tradução (sem depender de autoTranslate estar habilitado)
        let apiKey = null;
        const settings = await CompaniesSettings_1.default.findOne({
            where: { companyId },
            attributes: ["translateApiKey"]
        });
        apiKey = settings?.getDataValue("translateApiKey") || null;
        if (!apiKey) {
            const prompt = await Prompt_1.default.findOne({
                where: { companyId },
                attributes: ["apiKey"],
                order: [["id", "ASC"]]
            });
            apiKey = prompt?.apiKey || null;
        }
        let translatedText = null;
        let detectedLanguage = null;
        if (apiKey && transcribedText) {
            try {
                const langNames = {
                    "pt-BR": "Brazilian Portuguese", "pt": "Portuguese", "en": "English",
                    "es": "Spanish", "fr": "French", "de": "German", "it": "Italian",
                    "zh": "Chinese", "ja": "Japanese", "ko": "Korean", "ar": "Arabic",
                    "ru": "Russian"
                };
                const targetName = langNames[userLanguage] || langNames[userLanguage.split("-")[0]] || userLanguage;
                const openai = new openai_1.default({ apiKey });
                const response = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    messages: [
                        {
                            role: "system",
                            content: `You are a language detection and translation tool.
1. First detect the language of the input text
2. If it's already in ${targetName}, respond with: {"lang":"${userLanguage}","text":null}
3. If it's a different language, translate it to ${targetName} and respond with: {"lang":"<detected-iso-code>","text":"<translated text>"}
Rules:
- Use ISO 639-1 codes. For Brazilian Portuguese use "pt-BR"
- Keep emojis, URLs, phone numbers unchanged
- Maintain the original tone
- Respond ONLY with the JSON object`
                        },
                        { role: "user", content: transcribedText }
                    ],
                    max_tokens: 2000,
                    temperature: 0.1
                });
                const content = response.choices[0]?.message?.content?.trim();
                if (content) {
                    const parsed = JSON.parse(content);
                    translatedText = parsed.text || null;
                    detectedLanguage = parsed.lang || null;
                }
            }
            catch (translateErr) {
                console.error("[transcribeAudio] Erro ao traduzir:", translateErr);
            }
        }
        return res.json({
            transcribedText,
            translatedText,
            detectedLanguage
        });
    }
    catch (error) {
        console.error(`Erro ao transcrever a mensagem de áudio: ${error}`);
        return res.status(500).json({ error: "Erro ao transcrever a mensagem de áudio." });
    }
};
exports.transcribeAudioMessage = transcribeAudioMessage;
// Listar mensagens
const index = async (req, res) => {
    const { ticketId } = req.params;
    const { pageNumber, selectedQueues: queueIdsStringified } = req.query;
    const { companyId } = req.user;
    let queues = [];
    const user = await User_1.default.findByPk(req.user.id, {
        include: [{ model: Queue_1.default, as: "queues" }],
    });
    if (queueIdsStringified) {
        queues = JSON.parse(queueIdsStringified);
    }
    else {
        user.queues.forEach((queue) => {
            queues.push(queue.id);
        });
    }
    const { count, messages, ticket, hasMore } = await (0, ListMessagesService_1.default)({
        pageNumber,
        ticketId,
        companyId,
        queues,
        user: user,
    });
    if (ticket.channel === "whatsapp" && ticket.whatsappId) {
        await (0, SetTicketMessagesAsRead_1.default)(ticket);
    }
    return res.json({ count, messages, ticket, hasMore });
};
exports.index = index;
// Função para obter nome e extensão do arquivo
function obterNomeEExtensaoDoArquivo(url) {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.split("/").pop() || "";
    const parts = filename.split(".");
    const nomeDoArquivo = parts[0];
    const extensao = parts[1] || "";
    return `${nomeDoArquivo}.${extensao}`;
}
// Armazenar mensagem
const store = async (req, res) => {
    let { ticketId } = req.params;
    const { body, quotedMsg, vCard, isPrivate = "false" } = req.body;
    const medias = req.files;
    const { companyId } = req.user;
    // Converter numeric ID para UUID se necessário
    if (!isNaN(Number(ticketId))) {
        const ticketWithUuid = await Ticket_1.default.findOne({
            where: {
                id: ticketId,
                companyId
            },
            attributes: ["uuid"]
        });
        if (ticketWithUuid) {
            ticketId = ticketWithUuid.uuid;
        }
    }
    const ticket = await (0, ShowTicketService_1.default)(ticketId, companyId);
    if (ticket.channel === "whatsapp" && ticket.whatsappId) {
        await (0, SetTicketMessagesAsRead_1.default)(ticket);
    }
    // ✅ VALIDAÇÃO: Ignora requisições vazias (sem mídia, sem texto, sem vCard)
    if (!medias && !body && !vCard) {
        console.log("⚠️ Requisição de mensagem vazia ignorada - ticketId:", ticketId);
        return res.status(200).json({ message: "Nenhum conteúdo para enviar" });
    }
    try {
        if (medias) {
            await Promise.all(medias.map(async (media, index) => {
                if (ticket.channel === "whatsapp") {
                    await (0, SendWhatsAppMedia_1.default)({
                        media,
                        ticket,
                        body: Array.isArray(body) ? body[index] : body,
                        isPrivate: isPrivate === "true",
                        isForwarded: false,
                    });
                }
                if (["facebook", "instagram"].includes(ticket.channel)) {
                    try {
                        const sentMedia = await (0, sendFacebookMessageMedia_1.sendFacebookMessageMedia)({
                            media,
                            ticket,
                            body: Array.isArray(body) ? body[index] : body,
                        });
                        if (ticket.channel === "facebook") {
                            await (0, facebookMessageListener_1.verifyMessageMedia)(sentMedia, ticket, ticket.contact, true);
                        }
                    }
                    catch (error) {
                        console.error("Erro ao enviar mídia para Facebook/Instagram:", error);
                    }
                }
                const filePath = path_1.default.resolve("public", `company${companyId}`, media.filename);
                if (fs_1.default.existsSync(filePath) && isPrivate === "false") {
                    fs_1.default.unlinkSync(filePath);
                }
            }));
        }
        else {
            if (ticket.channel === "whatsapp" && isPrivate === "false") {
                await (0, SendWhatsAppMessage_1.default)({ body, ticket, quotedMsg, vCard });
            }
            else if (ticket.channel === "whatsapp" && isPrivate === "true") {
                const messageData = {
                    wid: `PVT${ticket.updatedAt.toString().replace(" ", "")}`,
                    ticketId: ticket.id,
                    contactId: undefined,
                    body,
                    fromMe: true,
                    mediaType: !(0, lodash_1.isNil)(vCard) ? "contactMessage" : "extendedTextMessage",
                    read: true,
                    quotedMsgId: null,
                    ack: 2,
                    remoteJid: ticket.contact?.remoteJid,
                    participant: null,
                    dataJson: null,
                    ticketTrakingId: null,
                    isPrivate: isPrivate === "true",
                    companyId: ticket.companyId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
            }
            else if (["facebook", "instagram"].includes(ticket.channel)) {
                const sendText = await (0, sendFacebookMessage_1.default)({ body, ticket, quotedMsg });
                if (ticket.channel === "facebook") {
                    await (0, facebookMessageListener_1.verifyMessageFace)(sendText, body, ticket, ticket.contact, true);
                }
            }
        }
        return res.status(200).json({ message: "Mensagem enviada com sucesso" });
    }
    catch (error) {
        console.error("Erro ao armazenar mensagem:", error);
        return res.status(400).json({ error: error.message });
    }
};
exports.store = store;
// Encaminhar mensagem
const forwardMessage = async (req, res) => {
    const { quotedMsg, signMessage, messageId, contactId } = req.body;
    const { id: userId, companyId } = req.user;
    const requestUser = await User_1.default.findByPk(userId);
    if (!messageId || !contactId) {
        return res.status(400).json({ message: "MessageId or ContactId not found" });
    }
    const message = await (0, ShowMessageService_1.default)(messageId);
    const contact = await (0, ShowContactService_1.default)(contactId, companyId);
    if (!message) {
        return res.status(404).json({ message: "Message not found" });
    }
    if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
    }
    const settings = await CompaniesSettings_1.default.findOne({ where: { companyId } });
    const whatsAppConnectionId = await (0, ShowMessageService_1.GetWhatsAppFromMessage)(message);
    if (!whatsAppConnectionId) {
        return res.status(404).json({ message: "Whatsapp from message not found" });
    }
    const ticket = await (0, ShowTicketService_1.default)(message.ticketId, message.companyId);
    const mutex = new async_mutex_1.Mutex();
    const createTicket = await mutex.runExclusive(async () => {
        const result = await (0, FindOrCreateTicketService_1.default)(contact, ticket?.whatsapp, 0, ticket.companyId, ticket.queueId, requestUser.id, contact.isGroup ? contact : null, "whatsapp", null, true, settings, false, false);
        return result;
    });
    let ticketData;
    if ((0, lodash_1.isNil)(createTicket?.queueId)) {
        ticketData = {
            status: createTicket.isGroup ? "group" : "open",
            userId: requestUser.id,
            queueId: ticket.queueId,
        };
    }
    else {
        ticketData = {
            status: createTicket.isGroup ? "group" : "open",
            userId: requestUser.id,
        };
    }
    await (0, UpdateTicketService_1.default)({
        ticketData,
        ticketId: createTicket.id,
        companyId: createTicket.companyId,
    });
    let body = message.body;
    if (message.mediaType === "conversation" || message.mediaType === "extendedTextMessage") {
        await (0, SendWhatsAppMessage_1.default)({ body, ticket: createTicket, quotedMsg, isForwarded: !message.fromMe });
    }
    else {
        const mediaUrl = message.mediaUrl.replace(`:${process.env.PORT}`, "");
        const fileName = obterNomeEExtensaoDoArquivo(mediaUrl);
        if (body === fileName) {
            body = "";
        }
        const publicFolder = path_1.default.join(__dirname, "..", "..", "..", "backend", "public");
        const filePath = path_1.default.join(publicFolder, `company${createTicket.companyId}`, fileName);
        const mediaSrc = {
            fieldname: "medias",
            originalname: fileName,
            encoding: "7bit",
            mimetype: message.mediaType,
            filename: fileName,
            path: filePath,
        };
        await (0, SendWhatsAppMedia_1.default)({ media: mediaSrc, ticket: createTicket, body, isForwarded: !message.fromMe });
    }
    return res.status(200).json({ message: "Mensagem encaminhada com sucesso" });
};
exports.forwardMessage = forwardMessage;
// Remover mensagem
const remove = async (req, res) => {
    const { messageId } = req.params;
    const { companyId } = req.user;
    const message = await (0, DeleteWhatsAppMessage_1.default)(messageId, companyId);
    const io = (0, socket_1.getIO)();
    // Buscar ticket completo com uuid
    const ticketWithUuid = await Ticket_1.default.findByPk(message.ticketId, {
        attributes: ["id", "uuid", "status"],
        include: [{ model: Contact_1.default, as: "contact" }]
    });
    if (message.isPrivate) {
        await Message_1.default.destroy({ where: { id: message.id } });
        const deletePayload = {
            action: "delete",
            message,
            ticket: ticketWithUuid
        };
        io.emit(`company-${companyId}-appMessage`, deletePayload);
        io.of(`/workspace-${companyId}`).emit(`company-${companyId}-appMessage`, deletePayload);
    }
    const updatePayload = {
        action: "update",
        message,
        ticket: ticketWithUuid
    };
    io.emit(`company-${companyId}-appMessage`, updatePayload);
    io.of(`/workspace-${companyId}`).emit(`company-${companyId}-appMessage`, updatePayload);
    return res.status(200).json({ message: "Mensagem removida com sucesso" });
};
exports.remove = remove;
// Contar mensagens
const allMe = async (req, res) => {
    const dateStart = req.query.dateStart;
    const dateEnd = req.query.dateEnd;
    const fromMe = req.query.fromMe;
    const { companyId } = req.user;
    const { count } = await (0, ListMessagesServiceAll_1.default)({
        companyId,
        fromMe,
        dateStart,
        dateEnd,
    });
    return res.json({ count });
};
exports.allMe = allMe;
// Enviar mensagem
const send = async (req, res) => {
    const messageData = req.body;
    const medias = req.files;
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new AppError_1.default("Token de autorização não fornecido", 401);
        }
        const [, token] = authHeader.split(" ");
        const whatsapp = await Whatsapp_1.default.findOne({ where: { token } });
        if (!whatsapp) {
            throw new AppError_1.default("Não foi possível realizar a operação", 404);
        }
        const companyId = whatsapp.companyId;
        const company = await (0, ShowPlanCompanyService_1.default)(companyId);
        const sendMessageWithExternalApi = company.plan.useExternalApi;
        if (!sendMessageWithExternalApi) {
            throw new AppError_1.default("Essa empresa não tem permissão para usar a API Externa. Entre em contato com o Suporte para verificar nossos planos!", 403);
        }
        if (messageData.number === undefined) {
            throw new AppError_1.default("O número é obrigatório", 400);
        }
        const number = messageData.number;
        const body = messageData.body;
        if (medias) {
            await Promise.all(medias.map(async (media) => {
                await req.app.get("queues").messageQueue.add("SendMessage", {
                    whatsappId: whatsapp.id,
                    data: {
                        number,
                        body: media.originalname.replace("/", "-"),
                        mediaPath: media.path,
                    },
                }, { removeOnComplete: true, attempts: 3 });
            }));
        }
        else {
            await req.app.get("queues").messageQueue.add("SendMessage", {
                whatsappId: whatsapp.id,
                data: {
                    number,
                    body,
                },
            }, { removeOnComplete: true, attempts: 3 });
        }
        return res.status(200).json({ mensagem: "Mensagem enviada!" });
    }
    catch (err) {
        console.error("Erro ao enviar mensagem:", err);
        if (err instanceof AppError_1.default) {
            return res.status(err.statusCode).json({ message: err.message });
        }
        throw new AppError_1.default("Não foi possível enviar a mensagem, tente novamente em alguns instantes", 500);
    }
};
exports.send = send;
// Editar mensagem
const edit = async (req, res) => {
    const { messageId } = req.params;
    const { companyId } = req.user;
    const { body } = req.body;
    try {
        const { ticket, message } = await (0, EditWhatsAppMessage_1.default)({ messageId, body });
        const io = (0, socket_1.getIO)();
        // Recarregar ticket com uuid
        await ticket.reload({
            attributes: ["id", "uuid", "status"],
            include: [{ model: Contact_1.default, as: "contact" }]
        });
        const messagePayload = {
            action: "update",
            message,
            ticket
        };
        // Emitir para múltiplos canais
        io.emit(`company-${companyId}-appMessage`, messagePayload);
        io.of(`/workspace-${companyId}`).emit(`company-${companyId}-appMessage`, messagePayload);
        io.to(String(ticket.id)).emit(`company-${companyId}-appMessage`, messagePayload);
        // Também emitir update do ticket
        io.emit(`company-${companyId}-ticket`, { action: "update", ticket });
        io.of(`/workspace-${companyId}`).emit(`company-${companyId}-ticket`, { action: "update", ticket });
        return res.status(200).json({ message: "Mensagem editada com sucesso" });
    }
    catch (error) {
        console.error("Erro ao editar mensagem:", error);
        throw new AppError_1.default("Erro ao editar mensagem", 500);
    }
};
exports.edit = edit;
// Enviar mensagem em fluxo
const sendMessageFlow = async (whatsappId, body, req, files) => {
    const messageData = body;
    const medias = files;
    try {
        const whatsapp = await Whatsapp_1.default.findByPk(whatsappId);
        if (!whatsapp) {
            throw new AppError_1.default("Não foi possível realizar a operação", 404);
        }
        if (messageData.number === undefined) {
            throw new AppError_1.default("O número é obrigatório", 400);
        }
        const numberToTest = messageData.number;
        const body = messageData.body;
        const companyId = messageData.companyId;
        const CheckValidNumber = await (0, CheckNumber_1.default)(numberToTest, companyId);
        const number = CheckValidNumber.replace(/\D/g, "");
        if (medias) {
            await Promise.all(medias.map(async (media) => {
                await req.app.get("queues").messageQueue.add("SendMessage", {
                    whatsappId,
                    data: {
                        number,
                        body: media.originalname,
                        mediaPath: media.path,
                    },
                }, { removeOnComplete: true, attempts: 3 });
            }));
        }
        else {
            await req.app.get("queues").messageQueue.add("SendMessage", {
                whatsappId,
                data: {
                    number,
                    body,
                },
            }, { removeOnComplete: false, attempts: 3 });
        }
        return "Mensagem enviada";
    }
    catch (err) {
        console.error("Erro ao enviar mensagem no fluxo:", err);
        if (err instanceof AppError_1.default) {
            throw err;
        }
        throw new AppError_1.default("Não foi possível enviar a mensagem, tente novamente em alguns instantes", 500);
    }
};
exports.sendMessageFlow = sendMessageFlow;
