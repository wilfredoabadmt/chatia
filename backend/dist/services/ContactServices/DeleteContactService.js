"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = __importDefault(require("../../models/Contact"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const ContactTag_1 = __importDefault(require("../../models/ContactTag"));
const ContactCustomField_1 = __importDefault(require("../../models/ContactCustomField"));
const ContactWallet_1 = __importDefault(require("../../models/ContactWallet"));
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const Message_1 = __importDefault(require("../../models/Message"));
const Schedule_1 = __importDefault(require("../../models/Schedule"));
const TicketNote_1 = __importDefault(require("../../models/TicketNote"));
const DialogChatBots_1 = __importDefault(require("../../models/DialogChatBots"));
const logger_1 = __importDefault(require("../../utils/logger"));
const DeleteContactService = async (id, companyId) => {
    console.log(`[DeleteContactService] Starting deletion for contact ID: ${id}, Company: ${companyId}`);
    const contact = await Contact_1.default.findOne({
        where: { id, companyId }
    });
    if (!contact) {
        console.log(`[DeleteContactService] Contact not found: ${id}`);
        throw new AppError_1.default("ERR_NO_CONTACT_FOUND", 404);
    }
    console.log(`[DeleteContactService] Contact found: ${contact.id} - ${contact.name}`);
    try {
        // Deletar associações primeiro para evitar erros de foreign key
        // Ordem: do mais dependente para o menos dependente
        // 1. Deletar messages que referenciam diretamente o contactId
        await Message_1.default.destroy({
            where: { contactId: id }
        });
        logger_1.default.info(`Messages deleted for contact ${id}`);
        // 2. Deletar schedules associados ao contato
        await Schedule_1.default.destroy({
            where: { contactId: id }
        });
        logger_1.default.info(`Schedules deleted for contact ${id}`);
        // 3. Deletar ticket notes associados ao contato
        await TicketNote_1.default.destroy({
            where: { contactId: id }
        });
        logger_1.default.info(`TicketNotes deleted for contact ${id}`);
        // 4. Deletar dialog chatbots associados ao contato
        await DialogChatBots_1.default.destroy({
            where: { contactId: id }
        });
        logger_1.default.info(`DialogChatBots deleted for contact ${id}`);
        // 5. Deletar tickets associados ao contato (isso deletará messages vinculadas ao ticket via CASCADE)
        await Ticket_1.default.destroy({
            where: { contactId: id }
        });
        logger_1.default.info(`Tickets deleted for contact ${id}`);
        // 6. Deletar tags associadas ao contato
        await ContactTag_1.default.destroy({
            where: { contactId: id }
        });
        // 7. Deletar campos customizados
        await ContactCustomField_1.default.destroy({
            where: { contactId: id }
        });
        // 8. Deletar wallets associadas
        await ContactWallet_1.default.destroy({
            where: { contactId: id }
        });
        // 9. Finalmente deletar o contato
        await contact.destroy();
        logger_1.default.info(`Contact ${id} deleted successfully with all associations`);
    }
    catch (error) {
        console.log(`[DeleteContactService] ERROR CAUGHT:`, {
            message: error.message,
            name: error.name,
            stack: error.stack,
            sql: error.sql,
            parent: error.parent
        });
        logger_1.default.error(`Error deleting contact ${id}:`, error);
        // Se falhar devido a tickets ou outros relacionamentos
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            console.log(`[DeleteContactService] Foreign key constraint error detected`);
            throw new AppError_1.default("Este contato possui tickets ou outras dependências e não pode ser excluído. Por favor, resolva os tickets primeiro.", 409);
        }
        console.log(`[DeleteContactService] Throwing generic 500 error`);
        throw new AppError_1.default("Erro ao excluir contato. Por favor, tente novamente.", 500);
    }
};
exports.default = DeleteContactService;
