"use strict";
// src/controllers/DocumentController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const ShowTicketService_1 = __importDefault(require("../services/TicketServices/ShowTicketService"));
const SendDocumentService_1 = __importDefault(require("../services/WbotServices/SendDocumentService")); // Vamos criar este serviço
const send = async (req, res) => {
    // Pegamos o ID do ticket e a legenda do corpo da requisição
    const { ticketId, caption } = req.body;
    // Pegamos o arquivo que foi upado pelo multer
    const file = req.file;
    // Validação básica
    if (!file) {
        throw new AppError_1.default("Nenhum arquivo de documento foi enviado.", 400);
    }
    if (!ticketId) {
        throw new AppError_1.default("O ID do ticket é obrigatório.", 400);
    }
    try {
        // Buscamos os dados do ticket para garantir que ele existe
        const ticket = await (0, ShowTicketService_1.default)(ticketId, req.user.companyId);
        console.log(`Iniciando envio de documento para o ticket ${ticketId}`);
        // Chamamos o serviço que fará o envio
        await (0, SendDocumentService_1.default)({
            media: file,
            ticket: ticket,
            body: caption // Passa a legenda para o corpo da mensagem
        });
        console.log(`Documento enviado com sucesso para o ticket ${ticketId}`);
        return res.status(200).json({ message: "Documento enviado com sucesso." });
    }
    catch (err) {
        console.error("Erro no DocumentController:", err);
        throw new AppError_1.default(err.message || "Erro ao enviar o documento.", 500);
    }
};
exports.send = send;
