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
exports.removeProduct = exports.updateProduct = exports.addProduct = exports.listWhatsapp = exports.updateContactWallet = exports.toggleContactTranslate = exports.toggleDisableBot = exports.getContactTags = exports.getContactVcard = exports.getContactProfileURL = exports.upload = exports.blockUnblock = exports.toggleAcceptAudio = exports.list = exports.bulkRemove = exports.remove = exports.update = exports.show = exports.store = exports.getContact = exports.index = exports.importXls = void 0;
const Yup = __importStar(require("yup"));
const socket_1 = require("../libs/socket");
const lodash_1 = require("lodash");
const ListContactsService_1 = __importDefault(require("../services/ContactServices/ListContactsService"));
const CreateContactService_1 = __importDefault(require("../services/ContactServices/CreateContactService"));
const ShowContactService_1 = __importDefault(require("../services/ContactServices/ShowContactService"));
const UpdateContactService_1 = __importDefault(require("../services/ContactServices/UpdateContactService"));
const DeleteContactService_1 = __importDefault(require("../services/ContactServices/DeleteContactService"));
const GetContactService_1 = __importDefault(require("../services/ContactServices/GetContactService"));
// IMPORTAR NOVO SERVIÇO DE DELEÇÃO EM MASSA
const BulkDeleteContactsService_1 = __importDefault(require("../services/ContactServices/BulkDeleteContactsService"));
const CheckNumber_1 = __importDefault(require("../services/WbotServices/CheckNumber"));
const GetProfilePicUrl_1 = __importDefault(require("../services/WbotServices/GetProfilePicUrl"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const ContactProduct_1 = __importDefault(require("../models/ContactProduct"));
const SimpleListService_1 = __importDefault(require("../services/ContactServices/SimpleListService"));
const ToggleAcceptAudioContactService_1 = __importDefault(require("../services/ContactServices/ToggleAcceptAudioContactService"));
const BlockUnblockContactService_1 = __importDefault(require("../services/ContactServices/BlockUnblockContactService"));
const ImportContactsService_1 = require("../services/ContactServices/ImportContactsService");
const NumberSimpleListService_1 = __importDefault(require("../services/ContactServices/NumberSimpleListService"));
const CreateOrUpdateContactServiceForImport_1 = __importDefault(require("../services/ContactServices/CreateOrUpdateContactServiceForImport"));
const UpdateContactWalletsService_1 = __importDefault(require("../services/ContactServices/UpdateContactWalletsService"));
const FindContactTags_1 = __importDefault(require("../services/ContactServices/FindContactTags"));
const ToggleDisableBotContactService_1 = __importDefault(require("../services/ContactServices/ToggleDisableBotContactService"));
const Contact_1 = __importDefault(require("../models/Contact"));
const Tag_1 = __importDefault(require("../models/Tag"));
const ContactTag_1 = __importDefault(require("../models/ContactTag")); // <-- AQUI ESTÁ A LINHA CORRIGIDA
const User_1 = __importDefault(require("../models/User"));
const Message_1 = __importDefault(require("../models/Message"));
const Ticket_1 = __importDefault(require("../models/Ticket"));
const Queue_1 = __importDefault(require("../models/Queue"));
const logger_1 = __importDefault(require("../utils/logger"));
const importXls = async (req, res) => {
    const { companyId } = req.user;
    const { number, name, email, validateContact, tags, followUp, products } = req.body;
    const simpleNumber = String(number).replace(/[^\d.-]+/g, '');
    let validNumber = simpleNumber;
    if (validateContact === "true") {
        validNumber = await (0, CheckNumber_1.default)(simpleNumber, companyId);
    }
    /**
     * Código desabilitado por demora no retorno
     */
    //
    // const profilePicUrl = await GetProfilePicUrl(validNumber, companyId);
    // const defaultWhatsapp = await GetDefaultWhatsApp(companyId);
    const contactData = {
        name: `${name}`,
        number: validNumber,
        profilePicUrl: "",
        isGroup: false,
        email,
        companyId,
        followUp: followUp || "",
        // whatsappId: defaultWhatsapp.id
    };
    const contact = await (0, CreateOrUpdateContactServiceForImport_1.default)(contactData);
    if (tags) {
        const tagList = tags.split(',').map(tag => tag.trim());
        for (const tagName of tagList) {
            try {
                let [tag, created] = await Tag_1.default.findOrCreate({
                    where: { name: tagName, companyId, color: "#A4CCCC", kanban: 0 }
                });
                // Associate the tag with the contact
                await ContactTag_1.default.findOrCreate({
                    where: {
                        contactId: contact.id,
                        tagId: tag.id
                    }
                });
            }
            catch (error) {
                logger_1.default.info("Erro ao criar Tags", error);
            }
        }
    }
    // Importar produtos (formato: "Produto1:status,Produto2:status")
    if (products && typeof products === "string" && products.trim()) {
        const productList = products.split(',').map(p => p.trim());
        for (const productEntry of productList) {
            try {
                const [productName, productStatus] = productEntry.split(':').map(s => s.trim());
                if (productName) {
                    await ContactProduct_1.default.create({
                        contactId: contact.id,
                        companyId,
                        name: productName,
                        status: productStatus || "pending"
                    });
                }
            }
            catch (error) {
                logger_1.default.info("Erro ao criar Produto", error);
            }
        }
    }
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-contact`, {
        action: "create",
        contact
    });
    return res.status(200).json(contact);
};
exports.importXls = importXls;
const index = async (req, res) => {
    const { searchParam, pageNumber, contactTag: tagIdsStringified, isGroup, source, onlyAgenda } = req.query;
    const { id: userId, companyId, profile } = req.user;
    console.log("index", { companyId, userId, searchParam, profile, source, onlyAgenda });
    let tagsIds = [];
    if (tagIdsStringified) {
        tagsIds = JSON.parse(tagIdsStringified);
    }
    // Parse onlyAgenda (query string vem como string "true" ou "false")
    const parseOnlyAgenda = onlyAgenda === 'true' ? true : onlyAgenda === 'false' ? false : undefined;
    const { contacts, count, hasMore, totalAll } = await (0, ListContactsService_1.default)({
        searchParam,
        pageNumber,
        companyId,
        tagsIds,
        isGroup,
        userId: Number(userId),
        profile,
        canViewAllContacts: !!req.user?.canViewAllContacts,
        source,
        onlyAgenda: parseOnlyAgenda
    });
    // Adicionar headers de resposta
    res.setHeader('X-Total-Count-Filtered', count.toString());
    res.setHeader('X-Total-Count-All', totalAll.toString());
    return res.json({ contacts, count, hasMore });
};
exports.index = index;
const getContact = async (req, res) => {
    const { name, number } = req.body;
    const { companyId } = req.user;
    console.log("getContact", { companyId, name, number });
    const contact = await (0, GetContactService_1.default)({
        name,
        number,
        companyId
    });
    return res.status(200).json(contact);
};
exports.getContact = getContact;
const store = async (req, res) => {
    try {
        const { companyId } = req.user;
        const newContact = req.body;
        const newRemoteJid = newContact.number;
        logger_1.default.info(`[ContactController.store] Creating contact for company ${companyId}`, { newContact });
        // Normalizar número (remover espaços e hífens) ou converter para null se vazio
        const normalizedNumber = newContact.number && newContact.number.trim() !== ""
            ? newContact.number.replace("-", "").replace(" ", "")
            : null;
        // Verificar duplicatas apenas se houver número
        if (normalizedNumber) {
            const findContact = await Contact_1.default.findOne({
                where: {
                    number: normalizedNumber,
                    companyId
                }
            });
            if (findContact) {
                throw new AppError_1.default("ERR_DUPLICATED_CONTACT", 409);
            }
        }
        newContact.number = normalizedNumber;
        const schema = Yup.object().shape({
            name: Yup.string().required("Nome é obrigatório"),
            number: Yup.string()
                .nullable()
                .transform((value) => value === "" ? null : value)
                .test("is-valid-number", "Formato de número inválido. Apenas números são permitidos.", (value) => {
                // Se for null ou vazio, é válido (campo opcional)
                if (!value)
                    return true;
                // Se tiver valor, deve conter apenas dígitos
                return /^\d+$/.test(value);
            })
        });
        try {
            await schema.validate(newContact);
        }
        catch (err) {
            logger_1.default.error(`[ContactController.store] Validation error: ${err.message}`);
            throw new AppError_1.default(err.message, 400);
        }
        // Validação de WhatsApp removida - número agora é opcional
        const validNumber = normalizedNumber || null;
        /**
         * Código desabilitado por demora no retorno
         */
        // const profilePicUrl = await GetProfilePicUrl(validNumber.jid, companyId);
        const contact = await (0, CreateContactService_1.default)({
            ...newContact,
            number: validNumber,
            // profilePicUrl,
            companyId
        });
        logger_1.default.info(`[ContactController.store] Contact created successfully: ${contact.id}`);
        const io = (0, socket_1.getIO)();
        io.of(`/workspace-${companyId}`)
            .emit(`company-${companyId}-contact`, {
            action: "create",
            contact
        });
        return res.status(200).json(contact);
    }
    catch (err) {
        logger_1.default.error(`[ContactController.store] Error creating contact:`, err);
        if (err instanceof AppError_1.default) {
            throw err;
        }
        throw new AppError_1.default("Erro ao criar contato. Por favor, verifique os dados e tente novamente.", 500);
    }
};
exports.store = store;
const show = async (req, res) => {
    const { contactId } = req.params;
    const { companyId } = req.user;
    const contact = await (0, ShowContactService_1.default)(contactId, companyId);
    return res.status(200).json(contact);
};
exports.show = show;
const update = async (req, res) => {
    const contactData = req.body;
    const { companyId } = req.user;
    const { contactId } = req.params;
    const schema = Yup.object().shape({
        name: Yup.string(),
        number: Yup.string().matches(/^\d+$/, "Invalid number format. Only numbers is allowed.")
    });
    try {
        await schema.validate(contactData);
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
    const oldContact = await (0, ShowContactService_1.default)(contactId, companyId);
    if (oldContact.number != contactData.number && oldContact.channel == "whatsapp") {
        const isGroup = oldContact && oldContact.remoteJid ? oldContact.remoteJid.endsWith("@g.us") : oldContact.isGroup;
        const validNumber = await (0, CheckNumber_1.default)(contactData.number, companyId, isGroup);
        const number = validNumber;
        contactData.number = number;
    }
    const contact = await (0, UpdateContactService_1.default)({
        contactData,
        contactId,
        companyId
    });
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-contact`, {
        action: "update",
        contact
    });
    return res.status(200).json(contact);
};
exports.update = update;
const remove = async (req, res) => {
    const { contactId } = req.params;
    const { companyId } = req.user;
    console.log(`[ContactController.remove] DELETE contact ${contactId} for company ${companyId}`);
    try {
        console.log(`[ContactController.remove] Calling ShowContactService...`);
        await (0, ShowContactService_1.default)(contactId, companyId);
        console.log(`[ContactController.remove] Calling DeleteContactService...`);
        await (0, DeleteContactService_1.default)(contactId, companyId);
        console.log(`[ContactController.remove] Contact deleted successfully, emitting socket event...`);
        const io = (0, socket_1.getIO)();
        io.of(`/workspace-${companyId}`)
            .emit(`company-${companyId}-contact`, {
            action: "delete",
            contactId
        });
        console.log(`[ContactController.remove] Returning 200 response`);
        return res.status(200).json({ message: "Contact deleted" });
    }
    catch (error) {
        console.log(`[ContactController.remove] ERROR in controller:`, {
            message: error.message,
            statusCode: error.statusCode,
            isAppError: error instanceof AppError_1.default,
            stack: error.stack
        });
        logger_1.default.error(`Error deleting contact ${contactId}:`, error);
        if (error instanceof AppError_1.default) {
            console.log(`[ContactController.remove] Returning AppError: ${error.statusCode} - ${error.message}`);
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.log(`[ContactController.remove] Returning generic 500 error`);
        return res.status(500).json({ error: "Erro ao excluir contato. Por favor, tente novamente." });
    }
};
exports.remove = remove;
// NOVA FUNÇÃO: DELETAR MÚLTIPLOS CONTATOS
const bulkRemove = async (req, res) => {
    const { contactIds } = req.body; // Espera um array de IDs
    const { companyId } = req.user; // Obtém o companyId do usuário autenticado
    if (!Array.isArray(contactIds) || contactIds.length === 0) {
        throw new AppError_1.default("Nenhum ID de contato fornecido para exclusão em massa.", 400);
    }
    try {
        // Chamar o novo serviço para deletar múltiplos contatos
        await (0, BulkDeleteContactsService_1.default)(contactIds, companyId); // Passa contactIds e companyId
        const io = (0, socket_1.getIO)();
        // Emitir evento para cada ID deletado para atualizar o frontend em tempo real
        contactIds.forEach(id => {
            io.of(`/workspace-${companyId}`)
                .emit(`company-${companyId}-contact`, {
                action: "delete",
                contactId: id
            });
        });
        return res.status(200).json({ message: `${contactIds.length} contatos deletados com sucesso.` });
    }
    catch (error) {
        // Captura o AppError lançado pelo serviço ou qualquer outro erro
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.error("Erro inesperado no controller bulkRemove:", error); // Log para depuração
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
};
exports.bulkRemove = bulkRemove;
const list = async (req, res) => {
    const { name } = req.query;
    const { companyId } = req.user;
    const contacts = await (0, SimpleListService_1.default)({ name, companyId });
    return res.json(contacts);
};
exports.list = list;
const toggleAcceptAudio = async (req, res) => {
    var { contactId } = req.params;
    const { companyId } = req.user;
    const contact = await (0, ToggleAcceptAudioContactService_1.default)({ contactId, companyId });
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-contact`, {
        action: "update",
        contact
    });
    return res.status(200).json(contact);
};
exports.toggleAcceptAudio = toggleAcceptAudio;
const blockUnblock = async (req, res) => {
    var { contactId } = req.params;
    const { companyId } = req.user;
    const { active } = req.body;
    const contact = await (0, BlockUnblockContactService_1.default)({ contactId, companyId, active });
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-contact`, {
        action: "update",
        contact
    });
    return res.status(200).json(contact);
};
exports.blockUnblock = blockUnblock;
const upload = async (req, res) => {
    const files = req.files;
    const file = (0, lodash_1.head)(files);
    const { companyId } = req.user;
    const response = await (0, ImportContactsService_1.ImportContactsService)(companyId, file);
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-contact`, {
        action: "reload",
        records: response
    });
    return res.status(200).json(response);
};
exports.upload = upload;
const getContactProfileURL = async (req, res) => {
    const { number } = req.params;
    const { companyId } = req.user;
    console.log("getContactProfileURL", { number, companyId });
    if (number) {
        const validNumber = await (0, CheckNumber_1.default)(number, companyId);
        const profilePicUrl = await (0, GetProfilePicUrl_1.default)(validNumber, companyId);
        const contact = await (0, NumberSimpleListService_1.default)({ number: validNumber, companyId: companyId });
        let obj;
        if (contact.length > 0) {
            obj = {
                contactId: contact[0].id,
                profilePicUrl: profilePicUrl
            };
        }
        else {
            obj = {
                contactId: 0,
                profilePicUrl: profilePicUrl
            };
        }
        return res.status(200).json(obj);
    }
};
exports.getContactProfileURL = getContactProfileURL;
const getContactVcard = async (req, res) => {
    const { name, number } = req.query;
    const { companyId } = req.user;
    let vNumber = number;
    const numberDDI = vNumber.toString().substr(0, 2);
    const numberDDD = vNumber.toString().substr(2, 2);
    const numberUser = vNumber.toString().substr(-8, 8);
    if (numberDDD <= '30' && numberDDI === '55') {
        console.log("menor 30");
        vNumber = `${numberDDI + numberDDD + 9 + numberUser}@s.whatsapp.net`;
    }
    else if (numberDDD > '30' && numberDDI === '55') {
        console.log("maior 30");
        vNumber = `${numberDDI + numberDDD + numberUser}@s.whatsapp.net`;
    }
    else {
        vNumber = `${number}@s.whatsapp.net`;
    }
    const contact = await (0, GetContactService_1.default)({
        name,
        number,
        companyId
    });
    return res.status(200).json(contact);
};
exports.getContactVcard = getContactVcard;
const getContactTags = async (req, res) => {
    const { contactId } = req.params;
    const contactTags = await (0, FindContactTags_1.default)({ contactId });
    let tags = false;
    if (contactTags.length > 0) {
        tags = true;
    }
    return res.status(200).json({ tags: tags });
};
exports.getContactTags = getContactTags;
const toggleDisableBot = async (req, res) => {
    var { contactId } = req.params;
    const { companyId } = req.user;
    const contact = await (0, ToggleDisableBotContactService_1.default)({ contactId, companyId });
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-contact`, {
        action: "update",
        contact
    });
    return res.status(200).json(contact);
};
exports.toggleDisableBot = toggleDisableBot;
const toggleContactTranslate = async (req, res) => {
    const { contactId } = req.params;
    const { companyId } = req.user;
    const { ticketId } = req.body;
    const contact = await Contact_1.default.findOne({
        where: { id: contactId, companyId }
    });
    if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
    }
    const io = (0, socket_1.getIO)();
    if (contact.language) {
        // Desativar: limpar idioma
        await contact.update({ language: null });
        io.of(`/workspace-${companyId}`)
            .emit(`company-${companyId}-contact`, {
            action: "update",
            contact
        });
        return res.status(200).json(contact);
    }
    // Ativar tradução: detectar idioma e traduzir mensagens existentes
    const { getLanguageFromPhoneNumber, detectAndTranslate, translateText, validateDetectedLanguage } = await Promise.resolve().then(() => __importStar(require("../services/TranslateService/TranslateService")));
    // Buscar idioma do agente
    const agent = await User_1.default.findByPk(req.user.id, { attributes: ["language"] });
    const userLang = agent?.language || "pt-BR";
    // Buscar mensagens recebidas do contato neste ticket
    const messages = await Message_1.default.findAll({
        where: {
            ticketId: ticketId || undefined,
            companyId,
            fromMe: false
        },
        order: [["createdAt", "ASC"]],
        include: [
            { model: Contact_1.default, as: "contact", attributes: ["id", "name"] },
            { model: Ticket_1.default, attributes: ["id", "uuid", "whatsappId", "queueId"],
                include: [{ model: Queue_1.default, as: "queue", attributes: ["id", "name", "color"] }]
            }
        ]
    });
    // Detectar idioma da primeira mensagem de texto
    let detectedLang = getLanguageFromPhoneNumber(contact.number) || null;
    const firstTextMsg = messages.find(m => m.body && m.body.length >= 3 && !m.body.match(/\.(jpeg|jpg|png|gif|mp4|mp3|ogg|webp|pdf)$/i));
    if (firstTextMsg) {
        const result = await detectAndTranslate(firstTextMsg.body, userLang, companyId, contact.number);
        if (result) {
            detectedLang = result.detectedLanguage;
        }
    }
    if (!detectedLang) {
        detectedLang = "en";
    }
    // Validar com DDI
    detectedLang = validateDetectedLanguage(detectedLang, contact.number);
    // Salvar idioma no contato
    await contact.update({ language: detectedLang });
    // Traduzir todas as mensagens recebidas que não têm tradução
    const detectedBase = detectedLang.split("-")[0];
    const userBase = userLang.split("-")[0];
    if (detectedBase !== userBase) {
        for (const msg of messages) {
            if (!msg.body || msg.body.length < 3)
                continue;
            if (msg.body.match(/\.(jpeg|jpg|png|gif|mp4|mp3|ogg|webp|pdf)$/i))
                continue;
            if (msg.translatedBody)
                continue; // já traduzida
            try {
                const translated = await translateText(msg.body, detectedLang, userLang, companyId);
                if (translated) {
                    await msg.update({
                        translatedBody: translated,
                        originalLanguage: detectedLang
                    });
                    // Emitir atualização em tempo real
                    io.of(`/workspace-${companyId}`)
                        .emit(`company-${companyId}-appMessage`, {
                        action: "update",
                        message: msg,
                        ticket: msg.ticket,
                        contact: msg.contact
                    });
                }
            }
            catch (err) {
                console.error(`[toggleTranslate] Erro ao traduzir msg ${msg.id}:`, err);
            }
        }
    }
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-contact`, {
        action: "update",
        contact
    });
    return res.status(200).json(contact);
};
exports.toggleContactTranslate = toggleContactTranslate;
const updateContactWallet = async (req, res) => {
    const { wallets } = req.body;
    const { contactId } = req.params;
    const { companyId } = req.user;
    const contact = await (0, UpdateContactWalletsService_1.default)({
        wallets,
        contactId,
        companyId
    });
    return res.status(200).json(contact);
};
exports.updateContactWallet = updateContactWallet;
const listWhatsapp = async (req, res) => {
    const { name } = req.query;
    const { companyId } = req.user;
    const contactsAll = await (0, SimpleListService_1.default)({ name, companyId });
    const contacts = contactsAll.filter(contact => contact.channel == "whatsapp");
    return res.json(contacts);
};
exports.listWhatsapp = listWhatsapp;
const addProduct = async (req, res) => {
    const { contactId } = req.params;
    const { companyId } = req.user;
    const { name, status } = req.body;
    const product = await ContactProduct_1.default.create({
        contactId: Number(contactId),
        companyId,
        name,
        status: status || "pending"
    });
    return res.status(201).json(product);
};
exports.addProduct = addProduct;
const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const { companyId } = req.user;
    const { name, status } = req.body;
    const product = await ContactProduct_1.default.findOne({
        where: { id: productId, companyId }
    });
    if (!product) {
        throw new AppError_1.default("ERR_PRODUCT_NOT_FOUND", 404);
    }
    await product.update({ name, status });
    return res.status(200).json(product);
};
exports.updateProduct = updateProduct;
const removeProduct = async (req, res) => {
    const { productId } = req.params;
    const { companyId } = req.user;
    const product = await ContactProduct_1.default.findOne({
        where: { id: productId, companyId }
    });
    if (!product) {
        throw new AppError_1.default("ERR_PRODUCT_NOT_FOUND", 404);
    }
    await product.destroy();
    return res.status(200).json({ message: "Product deleted" });
};
exports.removeProduct = removeProduct;
