"use strict";
// backend/src/services/ContactServices/BulkDeleteContactsService.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = __importDefault(require("../../models/Contact"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const sequelize_1 = require("sequelize"); // Importar o Op do Sequelize
const ContactTag_1 = __importDefault(require("../../models/ContactTag"));
const ContactCustomField_1 = __importDefault(require("../../models/ContactCustomField"));
const ContactWallet_1 = __importDefault(require("../../models/ContactWallet"));
const logger_1 = __importDefault(require("../../utils/logger"));
const BulkDeleteContactsService = async (contactIds, companyId) => {
    if (!Array.isArray(contactIds) || contactIds.length === 0) {
        throw new AppError_1.default("Nenhum ID de contato fornecido para exclusão em massa.", 400);
    }
    try {
        // Opcional: Verificação de segurança adicional para garantir que os contatos
        // realmente existem E pertencem à empresa antes de tentar deletá-los.
        // Isso evita deleções de IDs inválidos ou de outras empresas.
        const contactsFound = await Contact_1.default.findAll({
            where: {
                id: {
                    [sequelize_1.Op.in]: contactIds // Verifica se os IDs estão no array contactIds
                },
                companyId: companyId // ESSENCIAL: Garante que os contatos pertencem à empresa do usuário
            }
        });
        if (contactsFound.length !== contactIds.length) {
            // Se a quantidade de contatos encontrados for diferente da quantidade de IDs passados,
            // significa que alguns IDs eram inválidos ou não pertenciam à empresa.
            // Você pode ajustar este comportamento:
            // - Lançar um erro (como abaixo), ou
            // - Simplesmente deletar os que foram encontrados (removendo esta verificação e usando contactsFound.map(c => c.id) no destroy).
            // Por segurança, manteremos o erro.
            const notFoundIds = contactIds.filter(id => !contactsFound.some(c => c.id === id));
            throw new AppError_1.default(`Alguns contatos não foram encontrados ou não pertencem à sua empresa. IDs: ${notFoundIds.join(', ')}`, 404);
        }
        // Deletar associações primeiro para evitar erros de foreign key
        // Deletar tags associadas aos contatos
        await ContactTag_1.default.destroy({
            where: {
                contactId: {
                    [sequelize_1.Op.in]: contactIds
                }
            }
        });
        // Deletar campos customizados
        await ContactCustomField_1.default.destroy({
            where: {
                contactId: {
                    [sequelize_1.Op.in]: contactIds
                }
            }
        });
        // Deletar wallets associadas
        await ContactWallet_1.default.destroy({
            where: {
                contactId: {
                    [sequelize_1.Op.in]: contactIds
                }
            }
        });
        // Executa a deleção para os IDs encontrados e confirmados da empresa
        await Contact_1.default.destroy({
            where: {
                id: {
                    [sequelize_1.Op.in]: contactIds // Deleta todos os IDs no array
                },
                companyId: companyId // ESSENCIAL: Garante que apenas contatos da empresa sejam deletados
            }
        });
        logger_1.default.info(`Bulk delete: ${contactIds.length} contacts deleted successfully with all associations`);
    }
    catch (error) {
        logger_1.default.error("Erro detalhado ao deletar contatos em massa:", error);
        if (error instanceof AppError_1.default) {
            throw error; // Se já é um AppError, apenas o relança
        }
        // Se falhar devido a tickets ou outros relacionamentos
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            throw new AppError_1.default("Alguns contatos possuem tickets ou outras dependências e não podem ser excluídos. Por favor, resolva os tickets primeiro.", 409);
        }
        // Para outros tipos de erro (ex: problema de DB), lança um AppError genérico
        throw new AppError_1.default("Erro interno do servidor ao deletar contatos: " + error.message, 500);
    }
};
exports.default = BulkDeleteContactsService;
