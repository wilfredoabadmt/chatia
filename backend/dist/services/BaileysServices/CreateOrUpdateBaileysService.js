"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Baileys_1 = __importDefault(require("../../models/Baileys"));
function safeParseArray(input) {
    try {
        if (Array.isArray(input))
            return input;
        if (typeof input === "string" && input.trim().length > 0) {
            const parsed = JSON.parse(input);
            return Array.isArray(parsed) ? parsed : [];
        }
        return [];
    }
    catch {
        return [];
    }
}
function pickDefinedFields(obj) {
    // Remove campos undefined e strings vazias para não sobrescrever com "nada"
    const out = {};
    for (const [k, v] of Object.entries(obj || {})) {
        if (v === undefined)
            continue;
        if (typeof v === "string" && v.length === 0)
            continue;
        out[k] = v;
    }
    return out;
}
function mergeById(base, incoming) {
    // Estratégia: base tem prioridade; incoming complementa campos vazios/faltantes
    const map = new Map();
    base.forEach((b) => map.set(b.id, b));
    for (const n of incoming) {
        const existing = map.get(n.id);
        if (!existing) {
            map.set(n.id, n);
            continue;
        }
        // Merge “parcial”: não perder campos do existente; apenas complementar/atualizar com valores definidos
        const merged = { ...existing, ...pickDefinedFields(n) };
        map.set(n.id, merged);
    }
    return Array.from(map.values());
}
const createOrUpdateBaileysService = async ({ whatsappId, contacts, chats, }) => {
    try {
        const baileysExists = await Baileys_1.default.findOne({
            where: { whatsappId }
        });
        if (baileysExists) {
            // Normaliza arrays atuais do banco (podem ser string JSON ou array)
            let currentChats = safeParseArray(baileysExists.chats);
            let currentContacts = safeParseArray(baileysExists.contacts);
            // Normaliza entradas novas (podem vir tipadas como Chat/Contact mas com campos parciais)
            const incomingChats = Array.isArray(chats) ? chats : [];
            const incomingContacts = Array.isArray(contacts) ? contacts : [];
            // Faz o merge por id, complementando campos
            if (incomingChats.length > 0) {
                currentChats = mergeById(currentChats, incomingChats);
            }
            if (incomingContacts.length > 0) {
                currentContacts = mergeById(currentContacts, incomingContacts);
            }
            // Se algo mudou, persiste
            if (incomingChats.length > 0 || incomingContacts.length > 0) {
                baileysExists.chats = JSON.stringify(currentChats);
                baileysExists.contacts = JSON.stringify(currentContacts);
                await baileysExists.save();
            }
            return baileysExists;
        }
        // Não existia registro para esse whatsappId: cria novo
        const baileys = await Baileys_1.default.create({
            whatsappId,
            contacts: JSON.stringify(Array.isArray(contacts) ? contacts : []),
            chats: JSON.stringify(Array.isArray(chats) ? chats : [])
        });
        return baileys;
    }
    catch (error) {
        console.log("ERRO NO SERVICE DE CRIAÇÃO/ATUALIZAÇÃO DO BAILEYS", error);
        throw error;
    }
};
exports.default = createOrUpdateBaileysService;
