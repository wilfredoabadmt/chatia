"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FindOrCreateATicketTrakingService_1 = __importDefault(require("./FindOrCreateATicketTrakingService"));
const SendWhatsAppMessage_1 = __importDefault(require("../WbotServices/SendWhatsAppMessage"));
const UserRating_1 = __importDefault(require("../../models/UserRating"));
const UpdateTicketService_1 = __importDefault(require("./UpdateTicketService")); // 1. IMPORTAR O SERVIÇO PRINCIPAL
/** Extrai a 1ª nota (0–10) presente no texto. */
function extractScore0to10(text) {
    const s = (text || "").toString().trim();
    if (!s)
        return null;
    const tokens = s.match(/\b\d{1,2}\b/g);
    if (!tokens)
        return null;
    for (const t of tokens) {
        const n = Number(t);
        if (Number.isInteger(n) && n >= 0 && n <= 10)
            return n;
    }
    return null;
}
const HandleNpsReplyService = async ({ ticket, companyId, text }) => {
    const score = extractScore0to10(text || "");
    if (score === null)
        return false;
    const tracking = await (0, FindOrCreateATicketTrakingService_1.default)({
        ticketId: ticket.id,
        companyId,
        whatsappId: ticket.whatsappId
    });
    // Apenas processa se o ticket estava aguardando avaliação (status 'nps')
    if (ticket.status !== "nps")
        return false;
    if (tracking.rated)
        return true; // Já foi avaliado, apenas ignora a nova mensagem
    console.log(`[NPS] Storing score: ${score} for ticket ${ticket.id}`);
    // Salva a nota na tabela correta
    await UserRating_1.default.create({
        ticketId: ticket.id,
        companyId,
        userId: tracking.userId,
        rate: score
    });
    // Marca no tracking que já foi avaliado para não duplicar
    await tracking.update({
        rated: true
    });
    // 2. CHAMAR O SERVIÇO PRINCIPAL PARA FECHAR O TICKET CORRETAMENTE
    // Ele vai definir o status para "closed", salvar a data de fechamento e notificar a interface.
    await (0, UpdateTicketService_1.default)({
        ticketId: ticket.id,
        companyId: ticket.companyId,
        ticketData: {
            status: "closed",
            sendFarewellMessage: false // Impede o envio de mensagens de despedida duplicadas
        }
    });
    // (Opcional) Agradecer ao usuário
    try {
        if (ticket.channel === "whatsapp" && ticket.whatsapp?.status === "CONNECTED") {
            await (0, SendWhatsAppMessage_1.default)({
                body: "\u200eObrigado pela sua avaliação! 🙏",
                ticket
            });
        }
    }
    catch (err) {
        // ignora erros no envio do agradecimento
    }
    return true; // Finaliza o fluxo
};
exports.default = HandleNpsReplyService;
