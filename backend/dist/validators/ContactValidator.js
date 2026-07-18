"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportXlsSchema = exports.ImportChatsSchema = exports.ImportContactsSchema = exports.ListContactsQuerySchema = exports.UpdateContactSchema = exports.CreateContactSchema = void 0;
const zod_1 = require("zod");
// ============================================================
// SCHEMA: Criar Contato
// ============================================================
exports.CreateContactSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Nome é obrigatório'),
    number: zod_1.z.string().regex(/^\+?\d{10,15}$/, 'Formato de número inválido (E.164 esperado: +5511999999999)'),
    email: zod_1.z.string().email('Email inválido').optional().or(zod_1.z.literal('')),
    source: zod_1.z.enum([
        'manual',
        'whatsapp_roster',
        'excel_import',
        'auto_created',
        'chat_import'
    ]).default('manual'),
    isInAgenda: zod_1.z.boolean().default(true),
    channel: zod_1.z.enum(['whatsapp', 'instagram', 'facebook', 'waba']).default('whatsapp'),
    isGroup: zod_1.z.boolean().default(false),
    disableBot: zod_1.z.boolean().optional(),
    acceptAudioMessage: zod_1.z.boolean().optional(),
    remoteJid: zod_1.z.string().optional(),
    wallets: zod_1.z.array(zod_1.z.number()).nullable().optional()
});
// ============================================================
// SCHEMA: Atualizar Contato
// ============================================================
exports.UpdateContactSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    number: zod_1.z.string().regex(/^\+?\d{10,15}$/).optional(),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal('')),
    source: zod_1.z.enum([
        'manual',
        'whatsapp_roster',
        'excel_import',
        'auto_created',
        'chat_import'
    ]).optional(),
    isInAgenda: zod_1.z.boolean().optional(),
    disableBot: zod_1.z.boolean().optional(),
    acceptAudioMessage: zod_1.z.boolean().optional(),
    active: zod_1.z.boolean().optional()
});
// ============================================================
// SCHEMA: Listar Contatos (Query Params)
// ============================================================
exports.ListContactsQuerySchema = zod_1.z.object({
    searchParam: zod_1.z.string().optional(),
    pageNumber: zod_1.z.string().regex(/^\d+$/).transform(Number).default('1'),
    contactTag: zod_1.z.string().optional().transform((val) => {
        if (!val)
            return [];
        try {
            return JSON.parse(val);
        }
        catch {
            return [];
        }
    }),
    isGroup: zod_1.z.enum(['true', 'false']).optional(),
    source: zod_1.z.enum([
        'manual',
        'whatsapp_roster',
        'excel_import',
        'auto_created',
        'chat_import'
    ]).optional(),
    onlyAgenda: zod_1.z.enum(['true', 'false'])
        .optional()
        .transform((val) => val === 'true' ? true : val === 'false' ? false : undefined)
});
// ============================================================
// SCHEMA: Importar Contatos WhatsApp
// ============================================================
exports.ImportContactsSchema = zod_1.z.object({
    whatsappId: zod_1.z.number().int().positive('WhatsApp ID é obrigatório'),
    filterGroups: zod_1.z.boolean().default(true),
    onlyAgenda: zod_1.z.boolean().default(true)
});
// ============================================================
// SCHEMA: Importar Contatos de Chats
// ============================================================
exports.ImportChatsSchema = zod_1.z.object({
    whatsappId: zod_1.z.number().int().positive('WhatsApp ID é obrigatório'),
    hours: zod_1.z.number().int().positive().max(168, 'Máximo de 7 dias (168 horas)').default(24)
});
// ============================================================
// SCHEMA: Importar Excel/CSV
// ============================================================
exports.ImportXlsSchema = zod_1.z.object({
    number: zod_1.z.string().min(1, 'Número é obrigatório'),
    name: zod_1.z.string().min(1, 'Nome é obrigatório'),
    email: zod_1.z.string().email('Email inválido').optional().or(zod_1.z.literal('')),
    validateContact: zod_1.z.enum(['true', 'false']).default('false'),
    tags: zod_1.z.string().optional() // Comma-separated tags
});
