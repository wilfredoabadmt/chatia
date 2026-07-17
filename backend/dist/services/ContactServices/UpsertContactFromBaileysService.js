"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = __importDefault(require("../../models/Contact"));
function extractNumberFromJid(jid) {
    try {
        return jid.split("@")[0].split(":")[0].replace(/\D/g, "");
    }
    catch {
        return "";
    }
}
function pickName(c, fallback) {
    return c?.name || c?.notify || c?.verifiedName || c?.pushname || fallback;
}
const UpsertContactFromBaileysService = async ({ companyId, obj }) => {
    const number = extractNumberFromJid(obj?.id || "");
    if (!number)
        return;
    const contact = await Contact_1.default.findOne({ where: { companyId, number } });
    if (!contact)
        return; // não cria, só melhora o que já existe
    const nameCand = pickName(obj, number);
    const patch = {};
    if (!contact.name || contact.name === contact.number)
        patch.name = nameCand;
    if (Object.keys(patch).length > 0) {
        await contact.update(patch);
    }
};
exports.default = UpsertContactFromBaileysService;
