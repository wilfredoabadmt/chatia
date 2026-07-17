"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageFlow = void 0;
const GetWhatsappWbot_1 = __importDefault(require("./GetWhatsappWbot"));
const baileys_1 = require("baileys");
const SendMessageFlow = async (whatsapp, messageData, isFlow = false, isRecord = false) => {
    try {
        const wbot = await (0, GetWhatsappWbot_1.default)(whatsapp);
        const chatId = `${messageData.number}@s.whatsapp.net`;
        let message;
        const templateButtons = [
            { index: 1, urlButton: { displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys' } },
            { index: 2, callButton: { displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901' } },
            { index: 3, quickReplyButton: { displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message' } },
        ];
        const bodyText = `\u200e${messageData.body}`;
        const interactiveButtons = templateButtons.map(btn => {
            if (btn.urlButton) {
                return {
                    name: "url",
                    buttonParamsJson: JSON.stringify({
                        display_text: btn.urlButton.displayText,
                        url: btn.urlButton.url,
                    }),
                };
            }
            else if (btn.callButton) {
                return {
                    name: "call_action",
                    buttonParamsJson: JSON.stringify({
                        display_text: btn.callButton.displayText,
                        phone_number: btn.callButton.phoneNumber,
                    }),
                };
            }
            else if (btn.quickReplyButton) {
                return {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: btn.quickReplyButton.displayText,
                        id: btn.quickReplyButton.id,
                    }),
                };
            }
            return {};
        }).filter(btn => Object.keys(btn).length > 0);
        const messageContent = {
            interactiveMessage: {
                header: {
                    title: "Seu Título da Mensagem",
                },
                body: { text: bodyText },
                nativeFlowMessage: {
                    buttons: interactiveButtons,
                    messageParamsJson: JSON.stringify({
                    // Parâmetros adicionais, se necessário.
                    }),
                },
                footer: { text: " " }, // Seu rodapé
                // **CORREÇÃO**: Removido headerType completamente daqui, pois não é uma propriedade de IInteractiveMessage.
                // O Baileys deve inferir o headerType com base no conteúdo do 'header'.
            },
        };
        const generatedMessage = await (0, baileys_1.generateWAMessageFromContent)(chatId, messageContent, { userJid: wbot.user.id });
        message = (await wbot.relayMessage(chatId, generatedMessage.message, {
            messageId: generatedMessage.key.id,
        }));
        return message;
    }
    catch (err) {
        console.error("Erro ao enviar mensagem de fluxo com botões:", err);
        throw new Error(`Erro ao enviar mensagem de fluxo com botões: ${err.message}`);
    }
};
exports.SendMessageFlow = SendMessageFlow;
