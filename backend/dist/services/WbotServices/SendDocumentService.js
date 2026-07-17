"use strict";
// src/services/WbotServices/SendDocumentService.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const GetTicketWbot_1 = __importDefault(require("../../helpers/GetTicketWbot"));
const SendDocumentService = async ({ media, ticket, body = "" }) => {
    try {
        const wbot = await (0, GetTicketWbot_1.default)(ticket);
        // Monta o objeto de opções para a biblioteca Baileys
        // Esta é a forma correta e robusta de enviar um documento.
        const options = {
            document: fs_1.default.readFileSync(media.path),
            fileName: media.originalname,
            mimetype: media.mimetype,
            caption: body // Legenda que acompanha o documento
        };
        const contactNumber = `${ticket.contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`;
        const sentMessage = await wbot.sendMessage(contactNumber, options);
        // Atualiza o ticket com a última mensagem
        await ticket.update({ lastMessage: media.originalname });
        return sentMessage;
    }
    catch (err) {
        console.error("Erro dentro do SendDocumentService:", err);
        throw new AppError_1.default("ERR_SENDING_WAPP_MSG");
    }
    finally {
        // Bloco ESSENCIAL: apaga o arquivo temporário do servidor após o envio.
        // Isso impede que seu disco fique cheio.
        if (fs_1.default.existsSync(media.path)) {
            fs_1.default.unlinkSync(media.path);
        }
    }
};
exports.default = SendDocumentService;
