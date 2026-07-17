"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
const Contact_1 = __importDefault(require("../../models/Contact"));
const logger_1 = __importDefault(require("../../utils/logger"));
const ContactWallet_1 = __importDefault(require("../../models/ContactWallet"));
const CreateContactService = async ({ name, number, email = "", acceptAudioMessage, active, companyId, extraInfo = [], remoteJid = "", wallets }) => {
    try {
        logger_1.default.info(`[CreateContactService] Creating contact`, { name, number, companyId });
        // Verificar duplicatas apenas se houver número
        // Permite múltiplos contatos sem número
        if (number && number.trim() !== "") {
            const numberExists = await Contact_1.default.findOne({
                where: { number, companyId }
            });
            if (numberExists) {
                logger_1.default.warn(`[CreateContactService] Contact already exists with number ${number} for company ${companyId}`);
                throw new AppError_1.default("ERR_DUPLICATED_CONTACT", 409);
            }
        }
        const settings = await CompaniesSettings_1.default.findOne({
            where: {
                companyId
            }
        });
        if (!settings) {
            logger_1.default.error(`[CreateContactService] Company settings not found for company ${companyId}`);
            throw new AppError_1.default("Configurações da empresa não encontradas", 404);
        }
        const { acceptAudioMessageContact } = settings;
        const contact = await Contact_1.default.create({
            name,
            number,
            email,
            acceptAudioMessage: acceptAudioMessageContact === 'enabled' ? true : false,
            active,
            extraInfo,
            companyId,
            remoteJid
        }, {
            include: ["extraInfo",
                {
                    association: "wallets",
                    attributes: ["id", "name"]
                }]
        });
        logger_1.default.info(`[CreateContactService] Contact created successfully with id ${contact.id}`);
        if (wallets) {
            await ContactWallet_1.default.destroy({
                where: {
                    companyId,
                    contactId: contact.id
                }
            });
            const contactWallets = [];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            wallets.forEach((wallet) => {
                contactWallets.push({
                    walletId: !wallet.id ? wallet : wallet.id,
                    contactId: contact.id,
                    companyId
                });
            });
            await ContactWallet_1.default.bulkCreate(contactWallets);
        }
        return contact;
    }
    catch (err) {
        logger_1.default.error(`[CreateContactService] Error creating contact:`, err);
        if (err instanceof AppError_1.default) {
            throw err;
        }
        throw new AppError_1.default("Erro ao criar contato no banco de dados", 500);
    }
};
exports.default = CreateContactService;
