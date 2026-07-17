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
const baileys_1 = require("baileys");
const Sentry = __importStar(require("@sentry/node"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const GetTicketWbot_1 = __importDefault(require("../../helpers/GetTicketWbot"));
const Message_1 = __importDefault(require("../../models/Message"));
const Contact_1 = __importDefault(require("../../models/Contact"));
const IdentityResolverService_1 = require("./IdentityResolverService");
const lodash_1 = require("lodash");
const fs_1 = __importDefault(require("fs"));
const Mustache_1 = __importDefault(require("../../helpers/Mustache"));
const CreateMessageService_1 = __importDefault(require("../MessageServices/CreateMessageService"));
const User_1 = __importDefault(require("../../models/User"));
const SendWhatsAppMessage = async ({ body, ticket, quotedMsg, msdelay, vCard, isForwarded = false, templateButtons, messageTitle, imageUrl, }) => {
    let options = {};
    const wbot = await (0, GetTicketWbot_1.default)(ticket);
    const contactNumber = await Contact_1.default.findByPk(ticket.contactId);
    let number = await (0, IdentityResolverService_1.resolveOutgoingJid)(contactNumber, ticket.isGroup);
    if (quotedMsg) {
        const chatMessages = await Message_1.default.findOne({
            where: {
                id: quotedMsg.id,
            },
        });
        if (chatMessages) {
            const msgFound = JSON.parse(chatMessages.dataJson);
            if (msgFound.message.extendedTextMessage !== undefined) {
                options = {
                    quoted: {
                        key: msgFound.key,
                        message: {
                            extendedTextMessage: msgFound.message.extendedTextMessage,
                        },
                    },
                };
            }
            else {
                options = {
                    quoted: {
                        key: msgFound.key,
                        message: {
                            conversation: msgFound.message.conversation,
                        },
                    },
                };
            }
        }
    }
    if (!(0, lodash_1.isNil)(vCard)) {
        const numberContact = vCard.number;
        const firstName = vCard.name.split(" ")[0];
        const lastName = String(vCard.name).replace(firstName, "");
        const vcard = `BEGIN:VCARD\n` +
            `VERSION:3.0\n` +
            `N:${lastName};${firstName};;;\n` +
            `FN:${vCard.name}\n` +
            `TEL;type=CELL;waid=${numberContact}:+${numberContact}\n` +
            `END:VCARD`;
        try {
            await (0, baileys_1.delay)(msdelay);
            const sentMessage = await wbot.sendMessage(number, {
                contacts: {
                    displayName: `${vCard.name}`,
                    contacts: [{ vcard }],
                },
            }, options);
            await ticket.update({
                lastMessage: (0, Mustache_1.default)(vcard, ticket),
                imported: null,
                fromMe: true,
            });
            // ✅ Salvar mensagem no banco e emitir evento Socket.IO
            const messageData = {
                wid: sentMessage.key.id,
                ticketId: ticket.id,
                contactId: undefined,
                body: vCard.name,
                fromMe: true,
                mediaType: "contactMessage",
                read: true,
                quotedMsgId: quotedMsg?.id || null,
                ack: 1,
                remoteJid: number,
                participant: null,
                dataJson: JSON.stringify(sentMessage),
                ticketTrakingId: ticket.ticketTrakingId,
                isPrivate: false,
                companyId: ticket.companyId,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
            return sentMessage;
        }
        catch (err) {
            Sentry.captureException(err);
            console.log(err);
            throw new AppError_1.default("ERR_SENDING_WAPP_MSG");
        }
    }
    // ✅ ENVIO DE MENSAGEM COM BOTÕES
    if (templateButtons && templateButtons.length > 0) {
        try {
            await (0, baileys_1.delay)(msdelay);
            const formattedBody = (0, Mustache_1.default)(body || "", ticket);
            const footer = messageTitle || "";
            let mediaMessage = null;
            if (imageUrl) {
                if (fs_1.default.existsSync(imageUrl)) {
                    const imageBuffer = fs_1.default.readFileSync(imageUrl);
                    mediaMessage = {
                        image: imageBuffer,
                        caption: formattedBody,
                        footer,
                        templateButtons,
                        headerType: 4
                    };
                }
                else if (imageUrl.startsWith("http")) {
                    mediaMessage = {
                        image: { url: imageUrl },
                        caption: formattedBody,
                        footer,
                        templateButtons,
                        headerType: 4
                    };
                }
            }
            const messageData = mediaMessage || {
                text: formattedBody,
                footer,
                templateButtons,
                headerType: 1
            };
            const sentMessage = await wbot.sendMessage(number, messageData, options);
            await ticket.update({ lastMessage: formattedBody, imported: null, fromMe: true });
            // ✅ Salvar mensagem no banco e emitir evento Socket.IO
            const dbMessageData = {
                wid: sentMessage.key.id,
                ticketId: ticket.id,
                contactId: undefined,
                body: formattedBody,
                fromMe: true,
                mediaType: imageUrl ? "imageMessage" : "extendedTextMessage",
                read: true,
                quotedMsgId: quotedMsg?.id || null,
                ack: 1,
                remoteJid: number,
                participant: null,
                dataJson: JSON.stringify(sentMessage),
                ticketTrakingId: ticket.ticketTrakingId,
                isPrivate: false,
                companyId: ticket.companyId,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            await (0, CreateMessageService_1.default)({ messageData: dbMessageData, companyId: ticket.companyId });
            return sentMessage;
        }
        catch (err) {
            console.log(`Erro ao enviar mensagem com botões na company ${ticket.companyId}: `, err);
            Sentry.captureException(err);
            throw new AppError_1.default("ERR_SENDING_WAPP_BUTTON_MSG");
        }
    }
    if (body) {
        try {
            const formattedBody = (0, Mustache_1.default)(body, ticket);
            // ── Tradução automática: traduzir para idioma do contato ──
            let textToSend = formattedBody;
            let translatedBody = null;
            let originalLanguage = null;
            try {
                const { isAutoTranslateEnabled, translateText } = await Promise.resolve().then(() => __importStar(require("../TranslateService/TranslateService")));
                const enabled = await isAutoTranslateEnabled(ticket.companyId);
                if (enabled && contactNumber?.language) {
                    // Buscar idioma do atendente
                    let userLang = "pt-BR";
                    if (ticket.userId) {
                        const ticketUser = await User_1.default.findByPk(ticket.userId, { attributes: ["language"] });
                        if (ticketUser?.language)
                            userLang = ticketUser.language;
                    }
                    const contactLang = contactNumber.language;
                    const translated = await translateText(formattedBody, userLang, contactLang, ticket.companyId);
                    if (translated) {
                        textToSend = translated;
                        translatedBody = translated;
                        originalLanguage = userLang;
                    }
                }
            }
            catch (translateErr) {
                console.error("[SendWhatsAppMessage] Erro na tradução:", translateErr);
            }
            await (0, baileys_1.delay)(msdelay);
            const sentMessage = await wbot.sendMessage(number, {
                text: textToSend,
                contextInfo: {
                    forwardingScore: isForwarded ? 2 : 0,
                    isForwarded: !!isForwarded,
                },
            }, options);
            await ticket.update({
                lastMessage: formattedBody,
                imported: null,
                fromMe: true,
            });
            // ✅ Salvar mensagem no banco e emitir evento Socket.IO
            const messageData = {
                wid: sentMessage.key.id,
                ticketId: ticket.id,
                contactId: undefined,
                body: formattedBody,
                fromMe: true,
                mediaType: "extendedTextMessage",
                read: true,
                quotedMsgId: quotedMsg?.id || null,
                ack: 1,
                remoteJid: number,
                participant: null,
                dataJson: JSON.stringify(sentMessage),
                ticketTrakingId: ticket.ticketTrakingId,
                isPrivate: false,
                isForwarded,
                companyId: ticket.companyId,
                translatedBody,
                originalLanguage,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
            return sentMessage;
        }
        catch (err) {
            Sentry.captureException(err);
            console.log(err);
            throw new AppError_1.default("ERR_SENDING_WAPP_MSG");
        }
    }
    throw new AppError_1.default("ERR_NO_MESSAGE_CONTENT_PROVIDED");
};
exports.default = SendWhatsAppMessage;
