"use strict";
/**
 * IdentityResolverService
 *
 * Resolvedor centralizado de identidade para mensagens WhatsApp.
 * Todo fluxo de processamento de mensagem DEVE passar por aqui.
 *
 * Regras:
 * 1. Contato é entidade; LID/JID/telefone são aliases
 * 2. Nunca criar contato novo só porque chegou @lid
 * 3. Merge automático só com confiança alta
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRemoteJidForMessage = exports.resolveOutgoingJid = exports.queuePendingResolution = exports.resolveParticipantIdentity = exports.resolveMessageIdentity = exports.registerIdentities = void 0;
const baileys_1 = require("baileys");
const sequelize_1 = require("sequelize");
const Contact_1 = __importDefault(require("../../models/Contact"));
const ContactIdentity_1 = __importDefault(require("../../models/ContactIdentity"));
const PendingIdentityResolution_1 = __importDefault(require("../../models/PendingIdentityResolution"));
const wbot_1 = require("../../libs/wbot");
const logger_1 = __importDefault(require("../../utils/logger"));
/**
 * Extrai todos os candidatos de identidade de uma mensagem.
 * Coleta de: remoteJid, remoteJidAlt, participant, participantAlt, senderPn
 */
function extractIdentityCandidates(msg) {
    const key = msg.key || {};
    return {
        remoteJid: key.remoteJid || "",
        remoteJidAlt: key?.remoteJidAlt || null,
        participant: msg?.participant || key.participant || null,
        participantAlt: key?.participantAlt || null,
        senderPn: key?.senderPn || null
    };
}
/**
 * Tenta resolver um LID usando todas as fontes disponíveis.
 * Prioridade: remoteJidAlt > senderPn > LIDMappingStore > cache/Redis > DB identities > onWhatsApp
 */
async function resolveLid(lid, candidates, wbot, companyId) {
    // 1. remoteJidAlt (v7 - mais confiável)
    if (candidates.remoteJidAlt && !candidates.remoteJidAlt.endsWith("@lid")) {
        const resolved = (0, baileys_1.jidNormalizedUser)(candidates.remoteJidAlt);
        (0, wbot_1.setLidMapping)((0, baileys_1.jidNormalizedUser)(lid), resolved);
        return { jid: resolved, source: "remoteJidAlt" };
    }
    // 2. senderPn
    if (candidates.senderPn) {
        const pn = candidates.senderPn.includes("@")
            ? candidates.senderPn
            : candidates.senderPn + "@s.whatsapp.net";
        const resolved = (0, baileys_1.jidNormalizedUser)(pn);
        (0, wbot_1.setLidMapping)((0, baileys_1.jidNormalizedUser)(lid), resolved);
        return { jid: resolved, source: "senderPn" };
    }
    // 3. LIDMappingStore do Baileys v7
    if (wbot?.lidMappingStore) {
        try {
            const mapped = await wbot.lidMappingStore.toPhoneNumber(lid);
            if (mapped && !mapped.endsWith("@lid")) {
                const resolved = (0, baileys_1.jidNormalizedUser)(mapped);
                (0, wbot_1.setLidMapping)((0, baileys_1.jidNormalizedUser)(lid), resolved);
                return { jid: resolved, source: "lidMappingStore" };
            }
        }
        catch (e) { /* falhou, próximo */ }
    }
    // 4. Cache memória + Redis
    const normalizedLid = (0, baileys_1.jidNormalizedUser)(lid);
    const cached = await (0, wbot_1.resolveLidToJidAsync)(normalizedLid);
    if (cached) {
        return { jid: cached, source: "cache" };
    }
    // 5. Tabela ContactIdentities — buscar por LID
    try {
        const identity = await ContactIdentity_1.default.findOne({
            where: {
                companyId,
                identityType: "lid",
                identityValue: normalizedLid
            }
        });
        if (identity) {
            // Encontrou contato pelo LID na tabela de aliases
            // Buscar o JID principal desse contato
            const jidIdentity = await ContactIdentity_1.default.findOne({
                where: {
                    contactId: identity.contactId,
                    identityType: "jid"
                }
            });
            if (jidIdentity) {
                (0, wbot_1.setLidMapping)(normalizedLid, jidIdentity.identityValue);
                return { jid: jidIdentity.identityValue, source: "contactIdentities" };
            }
            // Tem LID mas não tem JID — buscar phone
            const phoneIdentity = await ContactIdentity_1.default.findOne({
                where: {
                    contactId: identity.contactId,
                    identityType: "phone"
                }
            });
            if (phoneIdentity) {
                const jid = phoneIdentity.identityValue + "@s.whatsapp.net";
                (0, wbot_1.setLidMapping)(normalizedLid, jid);
                return { jid, source: "contactIdentities" };
            }
        }
    }
    catch (e) { /* tabela pode não existir ainda */ }
    // 6. onWhatsApp (último recurso - mas NÃO funciona com LIDs!)
    // LIDs não são números de telefone, então onWhatsApp não vai resolver
    // Mantemos por completude mas esperamos que falhe
    try {
        const lidNumber = lid.replace("@lid", "");
        // Só tentar se parece um número de telefone (<14 dígitos)
        if (lidNumber.length <= 13) {
            const [result] = await wbot.onWhatsApp(lidNumber);
            if (result?.jid) {
                const resolved = (0, baileys_1.jidNormalizedUser)(result.jid);
                (0, wbot_1.setLidMapping)(normalizedLid, resolved);
                return { jid: resolved, source: "onWhatsApp" };
            }
        }
    }
    catch (e) { /* falhou */ }
    return { jid: null, source: "unresolved" };
}
/**
 * Busca contato existente por qualquer alias conhecido.
 * Procura na tabela ContactIdentities primeiro, depois fallback para Contacts.
 */
async function findContactByIdentity(identityValues, companyId) {
    if (identityValues.length === 0)
        return null;
    // Filtrar valores vazios
    const values = identityValues.filter(v => v && v.length > 0);
    if (values.length === 0)
        return null;
    // 1. Buscar em ContactIdentities
    try {
        const identity = await ContactIdentity_1.default.findOne({
            where: {
                companyId,
                identityValue: { [sequelize_1.Op.in]: values }
            }
        });
        if (identity) {
            const contact = await Contact_1.default.findByPk(identity.contactId);
            if (contact && !contact.getDataValue("isMerged")) {
                return contact;
            }
        }
    }
    catch (e) { /* tabela pode não existir ainda */ }
    // 2. Fallback: buscar direto em Contacts por number/lid/jid/remoteJid
    const numbers = values.map(v => v.replace(/@.*/, "")).filter(v => v.length > 0);
    const orKeys = [];
    for (const v of values) {
        if (v.endsWith("@lid"))
            orKeys.push({ lid: v });
        else if (v.includes("@"))
            orKeys.push({ jid: v });
    }
    for (const n of numbers) {
        orKeys.push({ number: n });
    }
    if (orKeys.length === 0)
        return null;
    const contact = await Contact_1.default.findOne({
        where: {
            companyId,
            [sequelize_1.Op.or]: orKeys
        }
    });
    return contact;
}
/**
 * Registra aliases de um contato na tabela ContactIdentities.
 * Usa upsert para não duplicar.
 */
async function registerIdentities(contactId, companyId, identities) {
    for (const { type, value, isPrimary } of identities) {
        if (!value || value.length === 0)
            continue;
        try {
            await ContactIdentity_1.default.upsert({
                companyId,
                contactId,
                identityType: type,
                identityValue: value.toLowerCase(),
                isPrimary: isPrimary || false,
                lastSeenAt: new Date()
            });
        }
        catch (e) {
            // Constraint violation = outro contato já tem esse alias
            // Isso indica potencial duplicata — logar para reconciliador
            logger_1.default.warn(`[Identity] Alias ${type}:${value} já pertence a outro contato ` +
                `(tentando atribuir a contactId=${contactId}, companyId=${companyId})`);
        }
    }
}
exports.registerIdentities = registerIdentities;
/**
 * Resolve a identidade de uma mensagem recebida.
 *
 * Esta é a ÚNICA função que todo o sistema deve usar para determinar
 * de quem é uma mensagem e qual contato associar.
 */
async function resolveMessageIdentity(msg, wbot, companyId) {
    const candidates = extractIdentityCandidates(msg);
    const isGroup = candidates.remoteJid?.endsWith("@g.us") || false;
    const pushName = msg.pushName || "";
    // Para grupos, o remoteJid é o grupo. O remetente é participant/participantAlt.
    // Aqui resolvemos o CHAT (remoteJid), não o remetente individual.
    let chatJid = candidates.remoteJid;
    let lid = null;
    let jid = null;
    let source = "direct";
    let isLidUnresolved = false;
    if (chatJid.endsWith("@lid") && !isGroup) {
        // Tentar resolver LID
        lid = (0, baileys_1.jidNormalizedUser)(chatJid);
        const resolved = await resolveLid(chatJid, candidates, wbot, companyId);
        source = resolved.source;
        if (resolved.jid) {
            jid = resolved.jid;
            chatJid = resolved.jid;
            logger_1.default.info(`[Identity] LID resolvido: ${lid} → ${jid} (via ${source})`);
        }
        else {
            isLidUnresolved = true;
            logger_1.default.warn(`[Identity] LID não resolvido: ${lid} (todas as fontes falharam)`);
        }
    }
    else if (!isGroup) {
        // JID normal
        jid = (0, baileys_1.jidNormalizedUser)(chatJid);
    }
    const resolvedNumber = chatJid.replace(/\D/g, "");
    // Buscar contato existente por qualquer alias conhecido
    const identityValues = [];
    if (jid)
        identityValues.push(jid);
    if (lid)
        identityValues.push(lid);
    if (resolvedNumber)
        identityValues.push(resolvedNumber);
    let existingContactId = null;
    if (!isGroup) {
        const existing = await findContactByIdentity(identityValues, companyId);
        if (existing) {
            existingContactId = existing.id;
        }
    }
    return {
        canonicalJid: chatJid,
        resolvedNumber,
        lid,
        jid,
        isLidUnresolved,
        resolutionSource: source,
        contactName: pushName || resolvedNumber,
        existingContactId,
        isGroup
    };
}
exports.resolveMessageIdentity = resolveMessageIdentity;
/**
 * Resolve identidade do remetente em grupos (participant).
 */
async function resolveParticipantIdentity(msg, wbot, companyId) {
    const candidates = extractIdentityCandidates(msg);
    let senderId = candidates.participant || msg.key?.participant || msg.key?.remoteJid || "";
    let lid = null;
    let jid = null;
    let source = "direct";
    let isLidUnresolved = false;
    if (senderId.endsWith("@lid")) {
        lid = (0, baileys_1.jidNormalizedUser)(senderId);
        // participantAlt tem prioridade para grupos
        if (candidates.participantAlt && !candidates.participantAlt.endsWith("@lid")) {
            jid = (0, baileys_1.jidNormalizedUser)(candidates.participantAlt);
            senderId = jid;
            source = "participantAlt";
            (0, wbot_1.setLidMapping)(lid, jid);
        }
        else {
            // Mesma cadeia de resolução
            const resolved = await resolveLid(senderId, candidates, wbot, companyId);
            source = resolved.source;
            if (resolved.jid) {
                jid = resolved.jid;
                senderId = jid;
            }
            else {
                isLidUnresolved = true;
            }
        }
    }
    else {
        jid = (0, baileys_1.jidNormalizedUser)(senderId);
    }
    return {
        canonicalJid: senderId,
        resolvedNumber: senderId.replace(/\D/g, ""),
        lid,
        jid,
        isLidUnresolved,
        resolutionSource: source,
        contactName: msg.pushName || senderId.replace(/\D/g, ""),
        existingContactId: null,
        isGroup: false
    };
}
exports.resolveParticipantIdentity = resolveParticipantIdentity;
/**
 * Cria ou resolve PendingIdentityResolution para um LID não resolvido.
 * Retorna true se a mensagem foi enfileirada (não deve ser processada agora).
 */
async function queuePendingResolution(msg, lid, companyId, whatsappId) {
    try {
        // Verificar se já existe resolução pendente para este LID
        const existing = await PendingIdentityResolution_1.default.findOne({
            where: {
                companyId,
                lidValue: lid,
                status: "pending"
            }
        });
        const messageWid = msg.key?.id || null;
        const pushName = msg?.pushName || null;
        if (existing) {
            // Já existe pendência — só registrar mais uma mensagem
            // (podemos acumular mensagens no JSON ou criar registros separados)
            logger_1.default.info(`[Identity] LID ${lid} já tem resolução pendente (id=${existing.id})`);
            return true;
        }
        // Criar nova pendência
        await PendingIdentityResolution_1.default.create({
            companyId,
            whatsappId,
            lidValue: lid,
            messageWid,
            messageDataJson: JSON.stringify(msg),
            pushName,
            status: "pending"
        });
        logger_1.default.info(`[Identity] Resolução pendente criada para LID ${lid}`);
        return true;
    }
    catch (e) {
        logger_1.default.warn(`[Identity] Erro ao criar resolução pendente: ${e.message}`);
        return false;
    }
}
exports.queuePendingResolution = queuePendingResolution;
/**
 * Resolve o JID correto para ENVIO de mensagens.
 *
 * Quando o contato tem remoteJid @lid, precisamos resolver para @s.whatsapp.net
 * antes de enviar, senão a mensagem vai para o endereço errado.
 *
 * Cadeia de resolução:
 * 1. contact.jid (preenchido por reconciliação)
 * 2. ContactIdentities (jid ou phone → JID)
 * 3. cache/Redis via resolveLidToJidAsync
 * 4. contact.number → montar JID (último recurso)
 */
async function resolveOutgoingJid(contact, isGroup) {
    // Grupos: sempre usar remoteJid como está
    if (isGroup || contact.remoteJid?.endsWith("@g.us")) {
        return contact.remoteJid || `${contact.number}@g.us`;
    }
    // Determinar número de envio
    let number;
    if (contact.remoteJid && contact.remoteJid.includes("@") && !contact.remoteJid.endsWith("@lid")) {
        // remoteJid já é um JID real — usar diretamente
        return contact.remoteJid;
    }
    // remoteJid é @lid ou vazio — tentar resolver
    const lidJid = contact.remoteJid;
    // 1. Contato já tem JID resolvido (preenchido por reconciliação)
    if (contact.jid && !contact.jid.endsWith("@lid")) {
        logger_1.default.info(`[OutgoingJid] Usando contact.jid para ${contact.id}: ${contact.jid}`);
        return contact.jid;
    }
    // 2. ContactIdentities — buscar JID ou phone
    if (contact.id) {
        try {
            const jidIdentity = await ContactIdentity_1.default.findOne({
                where: { contactId: contact.id, identityType: "jid" }
            });
            if (jidIdentity?.identityValue && !jidIdentity.identityValue.endsWith("@lid")) {
                logger_1.default.info(`[OutgoingJid] Resolvido via ContactIdentity jid para ${contact.id}: ${jidIdentity.identityValue}`);
                return jidIdentity.identityValue;
            }
            const phoneIdentity = await ContactIdentity_1.default.findOne({
                where: { contactId: contact.id, identityType: "phone" }
            });
            if (phoneIdentity?.identityValue) {
                const resolved = phoneIdentity.identityValue + "@s.whatsapp.net";
                logger_1.default.info(`[OutgoingJid] Resolvido via ContactIdentity phone para ${contact.id}: ${resolved}`);
                return resolved;
            }
        }
        catch (e) { /* tabela pode não existir */ }
    }
    // 3. Cache/Redis
    if (lidJid && lidJid.endsWith("@lid")) {
        const resolved = await (0, wbot_1.resolveLidToJidAsync)((0, baileys_1.jidNormalizedUser)(lidJid));
        if (resolved && !resolved.endsWith("@lid")) {
            logger_1.default.info(`[OutgoingJid] Resolvido via cache para ${contact.id}: ${resolved}`);
            return resolved;
        }
    }
    // 4. Último recurso: usar contact.number
    if (contact.number && contact.number.length <= 13) {
        number = `${contact.number}@s.whatsapp.net`;
        logger_1.default.warn(`[OutgoingJid] Fallback para número para ${contact.id}: ${number}`);
        return number;
    }
    // Nada funcionou — retornar o que temos (pode ser @lid)
    logger_1.default.error(`[OutgoingJid] Não foi possível resolver JID para envio do contato ${contact.id}`);
    return lidJid || `${contact.number}@s.whatsapp.net`;
}
exports.resolveOutgoingJid = resolveOutgoingJid;
/**
 * Resolve remoteJid para persistência em mensagens.
 *
 * Usado nos blocos verifyMessage/verifyMediaMessage para salvar
 * o remoteJid correto no registro de Message.
 */
function resolveRemoteJidForMessage(remoteJid, msg, isGroup) {
    if (!remoteJid?.endsWith("@lid"))
        return remoteJid;
    // Tentar senderPn
    const senderPn = msg?.key?.senderPn;
    if (senderPn) {
        return senderPn + (isGroup ? "@g.us" : "@s.whatsapp.net");
    }
    // Tentar remoteJidAlt
    const remoteJidAlt = msg?.key?.remoteJidAlt;
    if (remoteJidAlt && !remoteJidAlt.endsWith("@lid")) {
        return remoteJidAlt;
    }
    // Tentar cache síncrono
    const resolved = (0, wbot_1.resolveLidToJid)((0, baileys_1.jidNormalizedUser)(remoteJid));
    if (resolved)
        return resolved;
    // Não resolvido — retornar original
    return remoteJid;
}
exports.resolveRemoteJidForMessage = resolveRemoteJidForMessage;
