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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Contact_1 = __importDefault(require("../../models/Contact"));
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const logger_1 = __importDefault(require("../../utils/logger"));
const CreateOrUpdateBaileysService_1 = __importDefault(require("../BaileysServices/CreateOrUpdateBaileysService"));
const CreateMessageService_1 = __importDefault(require("../MessageServices/CreateMessageService"));
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
const wbotMessageListener_1 = require("./wbotMessageListener");
const UpsertContactFromBaileysService_1 = __importDefault(require("../ContactServices/UpsertContactFromBaileysService"));
let i = 0;
setInterval(() => {
    i = 0;
}, 5000);
const wbotMonitor = async (wbot, whatsapp, companyId) => {
    try {
        wbot.ws.on("CB:call", async (node) => {
            const content = node.content[0];
            await new Promise((r) => setTimeout(r, i * 650));
            i++;
            if (content.tag === "terminate" && !node.attrs.from.includes("@call")) {
                const settings = await CompaniesSettings_1.default.findOne({
                    where: { companyId },
                });
                if (settings?.acceptCallWhatsapp === "enabled") {
                    const sentMessage = await wbot.sendMessage(node.attrs.from, {
                        text: `\u200e ${settings.AcceptCallWhatsappMessage}`,
                    });
                    const number = node.attrs.from.split(":")[0].replace(/\D/g, "");
                    const contact = await Contact_1.default.findOne({
                        where: { companyId, number },
                    });
                    if (!contact)
                        return;
                    const [ticket] = await Ticket_1.default.findOrCreate({
                        where: {
                            contactId: contact.id,
                            whatsappId: wbot.id,
                            status: ["open", "pending", "nps", "lgpd"],
                            companyId,
                        },
                        defaults: {
                            companyId,
                            contactId: contact.id,
                            whatsappId: wbot.id,
                            isGroup: contact.isGroup,
                            status: "pending",
                        },
                    });
                    if (!ticket)
                        return;
                    await (0, wbotMessageListener_1.verifyMessage)(sentMessage, ticket, contact);
                    const date = new Date();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const body = `Chamada de voz/vídeo perdida às ${hours}:${minutes}`;
                    const messageData = {
                        wid: content.attrs["call-id"],
                        ticketId: ticket.id,
                        contactId: contact.id,
                        body,
                        fromMe: false,
                        mediaType: "call_log",
                        read: true,
                        quotedMsgId: null,
                        ack: 1,
                    };
                    await ticket.update({
                        lastMessage: body,
                    });
                    if (ticket.status === "closed") {
                        await ticket.update({
                            status: "pending",
                        });
                    }
                    return (0, CreateMessageService_1.default)({ messageData, companyId });
                }
            }
        });
        function cleanStringForJSON(str) {
            if (!str)
                return "";
            // Remove control characters, aspas, barras e pares inválidos de Unicode
            return str
                .replace(/[\x00-\x1F"\\']/g, "")
                .replace(/[\uD800-\uDFFF]/g, "")
                .replace(/\uFFFD/g, "");
        }
        // Contatos (upsert)
        wbot.ev.on("contacts.upsert", async (contacts) => {
            const filteredContacts = [];
            try {
                await Promise.all(contacts.map(async (contact) => {
                    if (!(0, baileys_1.isJidBroadcast)(contact.id) &&
                        !(0, baileys_1.isJidStatusBroadcast)(contact.id) &&
                        !(0, baileys_1.isJidGroup)(contact.id)) {
                        const obj = { id: contact.id };
                        const setIf = (k, v) => {
                            if (typeof v === "string" && v.length > 0) {
                                obj[k] = cleanStringForJSON(v);
                            }
                        };
                        const fallback = contact.id.split("@")[0].split(":")[0];
                        const nameCand = contact.name ||
                            contact.notify ||
                            contact.verifiedName ||
                            contact.pushname ||
                            fallback;
                        setIf("name", nameCand);
                        setIf("notify", contact.notify);
                        setIf("verifiedName", contact.verifiedName);
                        setIf("pushname", contact.pushname);
                        filteredContacts.push(obj);
                        // >>> AQUI estava o erro: 'obj' precisa estar no MESMO ESCOPO
                        await (0, UpsertContactFromBaileysService_1.default)({ companyId, obj });
                    }
                }));
                // Validação de serialização
                try {
                    JSON.stringify(filteredContacts);
                }
                catch (err) {
                    logger_1.default.error(`Failed to serialize filteredContacts: ${err.message}`);
                    Sentry.captureException(err);
                    return;
                }
                // Persistência em arquivo
                const publicFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public");
                const companyFolder = path_1.default.join(publicFolder, `company${companyId}`);
                const contactJson = path_1.default.join(companyFolder, "contactJson.txt");
                try {
                    if (!fs_1.default.existsSync(companyFolder)) {
                        fs_1.default.mkdirSync(companyFolder, { recursive: true });
                        fs_1.default.chmodSync(companyFolder, 0o777);
                    }
                    if (fs_1.default.existsSync(contactJson)) {
                        await fs_1.default.promises.unlink(contactJson);
                    }
                    await fs_1.default.promises.writeFile(contactJson, JSON.stringify(filteredContacts, null, 2));
                }
                catch (err) {
                    logger_1.default.error(`Failed to write contactJson.txt: ${err.message}`);
                    Sentry.captureException(err);
                }
                // Upsert no banco (Baileys)
                try {
                    await (0, CreateOrUpdateBaileysService_1.default)({
                        whatsappId: whatsapp.id,
                        contacts: filteredContacts,
                    });
                }
                catch (err) {
                    logger_1.default.error(`Error in createOrUpdateBaileysService: ${err.message}`);
                    Sentry.captureException(err);
                    console.log("Filtered Contacts:", filteredContacts); // Debug
                }
            }
            catch (err) {
                logger_1.default.error(`Error in contacts.upsert: ${err.message}`);
                Sentry.captureException(err);
            }
        });
    }
    catch (err) {
        logger_1.default.error(`Error in wbotMonitor: ${err.message}`);
        Sentry.captureException(err);
    }
};
exports.default = wbotMonitor;
