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
exports.initWASocket = exports.msgDB = exports.dataMessages = exports.removeWbot = exports.restartWbot = exports.getWbot = exports.setLidMapping = exports.resolveLidToJidAsync = exports.resolveLidToJid = void 0;
const Sentry = __importStar(require("@sentry/node"));
const baileys_1 = __importStar(require("baileys"));
const lid_mapping_1 = require("baileys/lib/Signal/lid-mapping");
const Whatsapp_1 = __importDefault(require("../models/Whatsapp"));
const logger_1 = __importDefault(require("../utils/logger"));
const logger_2 = __importDefault(require("baileys/lib/Utils/logger"));
const useMultiFileAuthState_1 = require("../helpers/useMultiFileAuthState");
const AppError_1 = __importDefault(require("../errors/AppError"));
const socket_1 = require("./socket");
const StartWhatsAppSession_1 = require("../services/WbotServices/StartWhatsAppSession");
const DeleteBaileysService_1 = __importDefault(require("../services/BaileysServices/DeleteBaileysService"));
const cache_1 = __importDefault(require("./cache"));
const ImportWhatsAppMessageService_1 = __importDefault(require("../services/WhatsappService/ImportWhatsAppMessageService"));
const date_fns_1 = require("date-fns");
const moment_1 = __importDefault(require("moment"));
const wbotMessageListener_1 = require("../services/WbotServices/wbotMessageListener");
const addLogs_1 = require("../helpers/addLogs");
const node_cache_1 = __importDefault(require("node-cache"));
const msgRetryCounterCache = new node_cache_1.default({
    stdTTL: 600,
    maxKeys: 1000,
    checkperiod: 300,
    useClones: false
});
const msgCache = new node_cache_1.default({
    stdTTL: 60,
    maxKeys: 1000,
    checkperiod: 300,
    useClones: false
});
const loggerBaileys = logger_2.default.child({});
loggerBaileys.level = "error";
// Cache global de mapeamento LID → JID (número real)
// Quando o WhatsApp usa LIDs, precisamos resolver para o número real
// Cache em memória + Redis para persistir entre restarts
const lidToJidCache = new Map();
const resolveLidToJid = (lid) => {
    return lidToJidCache.get(lid);
};
exports.resolveLidToJid = resolveLidToJid;
// Resolver LID com fallback para Redis (async)
const resolveLidToJidAsync = async (lid) => {
    // Tentar cache em memória primeiro
    const cached = lidToJidCache.get(lid);
    if (cached)
        return cached;
    // Tentar Redis
    try {
        const redisValue = await cache_1.default.get(`lid:${lid}`);
        if (redisValue) {
            lidToJidCache.set(lid, redisValue);
            return redisValue;
        }
    }
    catch (e) {
        // Redis indisponível, usar apenas memória
    }
    return undefined;
};
exports.resolveLidToJidAsync = resolveLidToJidAsync;
const setLidMapping = (lid, jid) => {
    lidToJidCache.set(lid, jid);
    // Persistir no Redis para sobreviver a restarts
    try {
        cache_1.default.set(`lid:${lid}`, jid);
    }
    catch (e) {
        // Redis indisponível, cache em memória basta
    }
    logger_1.default.info(`LID mapeado: ${lid} → ${jid}`);
    // Delegar merge/resolução ao ContactReconcilerService
    // Import dinâmico para evitar dependência circular no startup
    Promise.resolve().then(() => __importStar(require("../services/ContactServices/ContactReconcilerService"))).then(({ onLidMappingDiscovered }) => onLidMappingDiscovered(lid, jid).catch(e => logger_1.default.warn(`[Auto-merge] Erro: ${e.message}`)))
        .catch(() => { });
};
exports.setLidMapping = setLidMapping;
// Carrega todos os mapeamentos LID do Redis para memória
const loadRedisLidMappings = async () => {
    try {
        const keys = await cache_1.default.getKeys("lid:*");
        if (!keys || keys.length === 0)
            return;
        let count = 0;
        for (const key of keys) {
            const jid = await cache_1.default.get(key);
            if (!jid)
                continue;
            const lid = key.replace("lid:", "");
            if (!lid.endsWith("@lid"))
                continue;
            lidToJidCache.set(lid, jid);
            count++;
        }
        logger_1.default.info(`[LID] ${count} mapeamentos carregados do Redis`);
    }
    catch (e) {
        // Redis indisponível
    }
};
const sessions = [];
const retriesQrCodeMap = new Map();
function msg() {
    return {
        get: (key) => {
            const { id } = key;
            if (!id)
                return;
            let data = msgCache.get(id);
            if (data) {
                try {
                    let msg = JSON.parse(data);
                    return msg?.message;
                }
                catch (error) {
                    logger_1.default.error(error);
                }
            }
        },
        save: (msg) => {
            const { id } = msg.key;
            const msgtxt = JSON.stringify(msg);
            try {
                msgCache.set(id, msgtxt);
            }
            catch (error) {
                logger_1.default.error(error);
            }
        }
    };
}
exports.default = msg;
const getWbot = (whatsappId) => {
    const sessionIndex = sessions.findIndex(s => s.id === whatsappId);
    if (sessionIndex === -1) {
        throw new AppError_1.default("ERR_WAPP_NOT_INITIALIZED");
    }
    return sessions[sessionIndex];
};
exports.getWbot = getWbot;
const restartWbot = async (companyId, session) => {
    try {
        const options = {
            where: {
                companyId,
            },
            attributes: ["id"],
        };
        const whatsapp = await Whatsapp_1.default.findAll(options);
        whatsapp.map(async (c) => {
            const sessionIndex = sessions.findIndex(s => s.id === c.id);
            if (sessionIndex !== -1) {
                sessions[sessionIndex].ws.close(); // Remove the `undefined` argument
            }
        });
    }
    catch (err) {
        logger_1.default.error(err);
    }
};
exports.restartWbot = restartWbot;
const removeWbot = async (whatsappId, isLogout = true) => {
    try {
        const sessionIndex = sessions.findIndex(s => s.id === whatsappId);
        if (sessionIndex !== -1) {
            if (isLogout) {
                sessions[sessionIndex].logout();
                sessions[sessionIndex].ws.close();
            }
            sessions.splice(sessionIndex, 1);
        }
    }
    catch (err) {
        logger_1.default.error(err);
    }
};
exports.removeWbot = removeWbot;
exports.dataMessages = {};
exports.msgDB = msg();
const initWASocket = async (whatsapp) => {
    return new Promise(async (resolve, reject) => {
        try {
            (async () => {
                const io = (0, socket_1.getIO)();
                const whatsappUpdate = await Whatsapp_1.default.findOne({
                    where: { id: whatsapp.id }
                });
                if (!whatsappUpdate)
                    return;
                const { id, name, allowGroup, companyId } = whatsappUpdate;
                // Baileys v7: usa fetchLatestBaileysVersion (sem argumentos)
                let waVersion;
                try {
                    const { version, isLatest } = await (0, baileys_1.fetchLatestBaileysVersion)();
                    waVersion = version;
                    logger_1.default.info(`WA Web v${version.join(".")} | isLatest: ${isLatest}`);
                }
                catch (e) {
                    waVersion = [2, 3000, 1027934701];
                    logger_1.default.warn(`fetchLatestBaileysVersion falhou (${e?.message}). Usando fallback ${waVersion.join(".")}`);
                }
                logger_1.default.info(`Iniciando sessão ${name} com Baileys v7`);
                let retriesQrCode = 0;
                let wsocket = null;
                const { state, saveCreds } = await (0, useMultiFileAuthState_1.useMultiFileAuthState)(whatsapp);
                const signalKeyStore = (0, baileys_1.makeCacheableSignalKeyStore)(state.keys, logger_1.default);
                wsocket = (0, baileys_1.default)({
                    version: waVersion,
                    logger: loggerBaileys,
                    printQRInTerminal: false,
                    auth: {
                        creds: state.creds,
                        keys: signalKeyStore,
                    },
                    generateHighQualityLinkPreview: false,
                    linkPreviewImageThumbnailWidth: 128,
                    shouldIgnoreJid: (jid) => {
                        if (!jid)
                            return true;
                        return (0, baileys_1.isJidBroadcast)(jid) || (!allowGroup && (0, baileys_1.isJidGroup)(jid)) || jid.includes('newsletter');
                    },
                    browser: baileys_1.Browsers.ubuntu("Chrome"),
                    defaultQueryTimeoutMs: 45000,
                    msgRetryCounterCache,
                    markOnlineOnConnect: false,
                    retryRequestDelayMs: 1000,
                    maxMsgRetryCount: 3,
                    emitOwnEvents: true,
                    fireInitQueries: true,
                    syncFullHistory: false,
                    transactionOpts: { maxCommitRetries: 10, delayBetweenTriesMs: 3000 },
                    connectTimeoutMs: 60000,
                    keepAliveIntervalMs: 20000,
                    qrTimeout: 120000,
                    getMessage: exports.msgDB.get,
                });
                // LID Mapping Store (Baileys v7 nativo)
                const noopLogger = {
                    debug: (..._args) => { },
                    info: (..._args) => { },
                    warn: (..._args) => { },
                    error: (..._args) => { }
                };
                const lidMappingStore = new lid_mapping_1.LIDMappingStore(signalKeyStore, noopLogger);
                wsocket._contactsCache = new Map();
                wsocket.store = { contacts: {} };
                wsocket.lidMappingStore = lidMappingStore;
                setTimeout(async () => {
                    const wpp = await Whatsapp_1.default.findByPk(whatsapp.id);
                    // console.log("Status:::::",wpp.status)
                    if (wpp?.importOldMessages && wpp.status === "CONNECTED") {
                        let dateOldLimit = new Date(wpp.importOldMessages).getTime();
                        let dateRecentLimit = new Date(wpp.importRecentMessages).getTime();
                        (0, addLogs_1.addLogs)({
                            fileName: `preparingImportMessagesWppId${whatsapp.id}.txt`, forceNewFile: true,
                            text: `Aguardando conexão para iniciar a importação de mensagens:
  Whatsapp nome: ${wpp.name}
  Whatsapp Id: ${wpp.id}
  Criação do arquivo de logs: ${(0, moment_1.default)().format("DD/MM/YYYY HH:mm:ss")}
  Selecionado Data de inicio de importação: ${(0, moment_1.default)(dateOldLimit).format("DD/MM/YYYY HH:mm:ss")} 
  Selecionado Data final da importação: ${(0, moment_1.default)(dateRecentLimit).format("DD/MM/YYYY HH:mm:ss")} 
  `
                        });
                        const statusImportMessages = new Date().getTime();
                        await wpp.update({
                            statusImportMessages
                        });
                        wsocket.ev.on("messaging-history.set", async (messageSet) => {
                            //if(messageSet.isLatest){
                            const statusImportMessages = new Date().getTime();
                            await wpp.update({
                                statusImportMessages
                            });
                            const whatsappId = whatsapp.id;
                            let filteredMessages = messageSet.messages;
                            let filteredDateMessages = [];
                            filteredMessages.forEach(msg => {
                                const timestampMsg = Math.floor(msg.messageTimestamp["low"] * 1000);
                                if ((0, wbotMessageListener_1.isValidMsg)(msg) && dateOldLimit < timestampMsg && dateRecentLimit > timestampMsg) {
                                    if (msg.key?.remoteJid.split("@")[1] != "g.us") {
                                        (0, addLogs_1.addLogs)({
                                            fileName: `preparingImportMessagesWppId${whatsapp.id}.txt`, text: `Adicionando mensagem para pos processamento:
  Não é Mensagem de GRUPO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Data e hora da mensagem: ${(0, moment_1.default)(timestampMsg).format("DD/MM/YYYY HH:mm:ss")}
  Contato da Mensagem : ${msg.key?.remoteJid}
  Tipo da mensagem : ${(0, wbotMessageListener_1.getTypeMessage)(msg)}
  
  `
                                        });
                                        filteredDateMessages.push(msg);
                                    }
                                    else {
                                        if (wpp?.importOldMessagesGroups) {
                                            (0, addLogs_1.addLogs)({
                                                fileName: `preparingImportMessagesWppId${whatsapp.id}.txt`, text: `Adicionando mensagem para pos processamento:
  Mensagem de GRUPO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Data e hora da mensagem: ${(0, moment_1.default)(timestampMsg).format("DD/MM/YYYY HH:mm:ss")}
  Contato da Mensagem : ${msg.key?.remoteJid}
  Tipo da mensagem : ${(0, wbotMessageListener_1.getTypeMessage)(msg)}
  
  `
                                            });
                                            filteredDateMessages.push(msg);
                                        }
                                    }
                                }
                            });
                            if (!exports.dataMessages?.[whatsappId]) {
                                exports.dataMessages[whatsappId] = [];
                                exports.dataMessages[whatsappId].unshift(...filteredDateMessages);
                            }
                            else {
                                exports.dataMessages[whatsappId].unshift(...filteredDateMessages);
                            }
                            setTimeout(async () => {
                                const wpp = await Whatsapp_1.default.findByPk(whatsappId);
                                io.of(`/workspace-${companyId}`)
                                    .emit(`importMessages-${wpp.companyId}`, {
                                    action: "update",
                                    status: { this: -1, all: -1 }
                                });
                                io.of(`/workspace-${companyId}`)
                                    .emit(`company-${companyId}-whatsappSession`, {
                                    action: "update",
                                    session: wpp
                                });
                                //console.log(JSON.stringify(wpp, null, 2));
                            }, 500);
                            setTimeout(async () => {
                                const wpp = await Whatsapp_1.default.findByPk(whatsappId);
                                if (wpp?.importOldMessages) {
                                    let isTimeStamp = !isNaN(new Date(Math.floor(parseInt(wpp?.statusImportMessages))).getTime());
                                    if (isTimeStamp) {
                                        const ultimoStatus = new Date(Math.floor(parseInt(wpp?.statusImportMessages))).getTime();
                                        const dataLimite = +(0, date_fns_1.add)(ultimoStatus, { seconds: +45 }).getTime();
                                        if (dataLimite < new Date().getTime()) {
                                            //console.log("Pronto para come?ar")
                                            (0, ImportWhatsAppMessageService_1.default)(wpp.id);
                                            wpp.update({
                                                statusImportMessages: "Running"
                                            });
                                        }
                                        else {
                                            //console.log("Aguardando inicio")
                                        }
                                    }
                                }
                                io.of(`/workspace-${companyId}`)
                                    .emit(`company-${companyId}-whatsappSession`, {
                                    action: "update",
                                    session: wpp
                                });
                            }, 1000 * 45);
                        });
                    }
                }, 2500);
                wsocket.ev.on("connection.update", async (update) => {
                    const { connection, lastDisconnect, qr, receivedPendingNotifications } = update;
                    if (connection) {
                        logger_1.default.info(`Socket ${name} Connection Update ${connection} ${lastDisconnect ? lastDisconnect.error.message : ""}`);
                    }
                    if (connection === "close") {
                        const statusCode = lastDisconnect?.error?.output?.statusCode;
                        if (statusCode === 403 || statusCode === baileys_1.DisconnectReason.loggedOut) {
                            // Sessão invalidada - limpar tudo e aguardar novo QR
                            logger_1.default.info(`Socket ${name} - Sessão invalidada (${statusCode}), limpando credenciais...`);
                            await whatsapp.update({ status: "PENDING", session: "" });
                            await (0, DeleteBaileysService_1.default)(whatsapp.id);
                            await cache_1.default.delFromPattern(`sessions:${whatsapp.id}:*`);
                            io.of(`/workspace-${companyId}`)
                                .emit(`company-${whatsapp.companyId}-whatsappSession`, {
                                action: "update",
                                session: whatsapp
                            });
                            (0, exports.removeWbot)(id, false);
                            setTimeout(() => (0, StartWhatsAppSession_1.StartWhatsAppSession)(whatsapp, whatsapp.companyId), 2000);
                        }
                        else {
                            // Desconexão temporária (stream error, timeout, etc) - reconectar rápido
                            logger_1.default.info(`Socket ${name} - Desconexão temporária (${statusCode}), reconectando em 500ms...`);
                            (0, exports.removeWbot)(id, false);
                            setTimeout(() => (0, StartWhatsAppSession_1.StartWhatsAppSession)(whatsapp, whatsapp.companyId), 500);
                        }
                    }
                    if (connection === "open") {
                        await whatsapp.update({
                            status: "CONNECTED",
                            qrcode: "",
                            retries: 0,
                            number: wsocket.type === "md"
                                ? (0, baileys_1.jidNormalizedUser)(wsocket.user.id).split("@")[0]
                                : "-"
                        });
                        logger_1.default.info(`Socket ${name} CONNECTED - aguardando notificações offline...`);
                        io.of(`/workspace-${companyId}`)
                            .emit(`company-${whatsapp.companyId}-whatsappSession`, {
                            action: "update",
                            session: whatsapp
                        });
                        const sessionIndex = sessions.findIndex(s => s.id === whatsapp.id);
                        if (sessionIndex === -1) {
                            wsocket.id = whatsapp.id;
                            sessions.push(wsocket);
                        }
                        resolve(wsocket);
                    }
                    // Log quando todas notificações offline foram recebidas
                    if (receivedPendingNotifications === true) {
                        logger_1.default.info(`Socket ${name} - ✅ Todas notificações offline recebidas e processadas`);
                    }
                    if (qr !== undefined) {
                        if (retriesQrCodeMap.get(id) && retriesQrCodeMap.get(id) >= 3) {
                            await whatsappUpdate.update({
                                status: "DISCONNECTED",
                                qrcode: ""
                            });
                            await (0, DeleteBaileysService_1.default)(whatsappUpdate.id);
                            await cache_1.default.delFromPattern(`sessions:${whatsapp.id}:*`);
                            io.of(`/workspace-${companyId}`)
                                .emit(`company-${whatsapp.companyId}-whatsappSession`, {
                                action: "update",
                                session: whatsappUpdate
                            });
                            wsocket.ev.removeAllListeners("connection.update");
                            wsocket.ws.close();
                            wsocket = null;
                            retriesQrCodeMap.delete(id);
                        }
                        else {
                            logger_1.default.info(`Session QRCode Generate ${name}`);
                            retriesQrCodeMap.set(id, (retriesQrCode += 1));
                            await whatsapp.update({
                                qrcode: qr,
                                status: "qrcode",
                                retries: 0,
                                number: ""
                            });
                            const sessionIndex = sessions.findIndex(s => s.id === whatsapp.id);
                            if (sessionIndex === -1) {
                                wsocket.id = whatsapp.id;
                                sessions.push(wsocket);
                            }
                            io.of(`/workspace-${companyId}`)
                                .emit(`company-${whatsapp.companyId}-whatsappSession`, {
                                action: "update",
                                session: whatsapp
                            });
                        }
                    }
                });
                wsocket.ev.on("creds.update", saveCreds);
                // Mapear LID → número real quando o WhatsApp compartilha a associação
                wsocket.ev.on("chats.phoneNumberShare", (update) => {
                    // O evento pode vir como objeto unico ou array
                    const updates = Array.isArray(update) ? update : [update];
                    for (const u of updates) {
                        if (u?.lid && u?.jid) {
                            (0, exports.setLidMapping)((0, baileys_1.jidNormalizedUser)(u.lid), (0, baileys_1.jidNormalizedUser)(u.jid));
                        }
                    }
                });
                // Capturar LID de atualizações de contatos
                wsocket.ev.on("contacts.update", (updates) => {
                    for (const contact of updates) {
                        if (contact?.id && contact?.lid) {
                            (0, exports.setLidMapping)((0, baileys_1.jidNormalizedUser)(contact.lid), (0, baileys_1.jidNormalizedUser)(contact.id));
                        }
                    }
                });
                // Também capturar LID do próprio usuário logado
                if (wsocket.user?.lid) {
                    const myLid = (0, baileys_1.jidNormalizedUser)(wsocket.user.lid);
                    const myJid = (0, baileys_1.jidNormalizedUser)(wsocket.user.id);
                    (0, exports.setLidMapping)(myLid, myJid);
                }
                // Carregar mapeamentos LID do Redis e tentar auto-merge de fantasmas antigos
                loadRedisLidMappings().catch(e => logger_1.default.warn(`[LID] Erro ao carregar mapeamentos do Redis: ${e.message}`));
                // wsocket.store = store;
                // store.bind(wsocket.ev);
            })();
        }
        catch (error) {
            Sentry.captureException(error);
            console.log(error);
            reject(error);
        }
    });
};
exports.initWASocket = initWASocket;
