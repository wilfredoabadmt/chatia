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
exports.getMessageOptions = void 0;
const Sentry = __importStar(require("@sentry/node"));
const fs_1 = __importStar(require("fs"));
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const mime = __importStar(require("mime"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Contact_1 = __importDefault(require("../../models/Contact"));
const wbot_1 = require("../../libs/wbot");
const IdentityResolverService_1 = require("./IdentityResolverService");
const CreateMessageService_1 = __importDefault(require("../MessageServices/CreateMessageService"));
const Mustache_1 = __importDefault(require("../../helpers/Mustache"));
const ffmpeg_1 = __importDefault(require("../../config/ffmpeg"));
const publicFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public");
// Garante pasta da empresa
const ensureCompanyFolder = (companyId) => {
    const dir = path_1.default.join(publicFolder, `company${companyId}`);
    if (!fs_1.default.existsSync(dir))
        fs_1.default.mkdirSync(dir, { recursive: true });
    return dir;
};
// Heurística: alguns recipientes (ex.: .mpeg, .webm) podem vir como "video/*" mas serem usados como áudio.
// Aqui decidimos extrair o áudio e mandar como PTT nesses casos.
const looksLikeAudioContainer = (ext, mimetype) => {
    const e = ext.toLowerCase();
    const mt = (mimetype || "").toLowerCase();
    if (mt.startsWith("audio/"))
        return true;
    // Trata .mpeg/.mpg (muito comum o usuário enviar “Arquivo MPEG (.mpeg)” achando que é áudio)
    if (e === ".mpeg" || e === ".mpg")
        return true;
    // Gravações web via navegador costumam vir em webm (com áudio Opus). Se quiser sempre PTT, trate como áudio:
    if (e === ".webm" && mt.includes("webm"))
        return true;
    // Outros formatos de áudio comuns:
    if ([".mp3", ".m4a", ".aac", ".wav", ".oga", ".ogg"].includes(e))
        return true;
    return false;
};
// Converte QUALQUER input para OGG/Opus 48k mono (excelente para WhatsApp PTT)
const processAudioToOpus = async (inputPath, companyId) => {
    const dir = ensureCompanyFolder(companyId);
    const outputPath = path_1.default.join(dir, `${Date.now()}.ogg`);
    const ffmpegBinary = (0, ffmpeg_1.default)();
    const cmd = `"${ffmpegBinary}" -y -i "${inputPath}" ` +
        `-vn -ar 48000 -ac 1 -c:a libopus -b:a 48k "${outputPath}"`;
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(cmd, (error) => (error ? reject(error) : resolve(outputPath)));
    });
};
// Também usado por filas/rotas externas
const getMessageOptions = async (fileName, pathMedia, companyId, body = " ") => {
    const mimeType = mime.getType(pathMedia) || "";
    const ext = path_1.default.extname(pathMedia || fileName || "").toLowerCase();
    try {
        let options;
        if (looksLikeAudioContainer(ext, mimeType)) {
            const converted = await processAudioToOpus(pathMedia, companyId || "0");
            options = {
                audio: fs_1.default.readFileSync(converted),
                mimetype: "audio/ogg; codecs=opus",
                ptt: true
            };
            // opcional: apagar o convertido se não quiser manter
            // unlinkSync(converted);
        }
        else if (mimeType.startsWith("video/")) {
            options = {
                video: fs_1.default.readFileSync(pathMedia),
                caption: body || undefined,
                fileName
            };
        }
        else if (mimeType.startsWith("application/") ||
            mimeType.startsWith("text/") ||
            mimeType === "application/pdf") {
            options = {
                document: fs_1.default.readFileSync(pathMedia),
                caption: body || undefined,
                fileName,
                mimetype: mimeType
            };
        }
        else {
            // imagem (png/jpg/webp/gif…)
            options = {
                image: fs_1.default.readFileSync(pathMedia),
                caption: body || undefined
            };
        }
        return options;
    }
    catch (e) {
        Sentry.captureException(e);
        console.log(e);
        return null;
    }
};
exports.getMessageOptions = getMessageOptions;
const SendWhatsAppMedia = async ({ media, ticket, body = "", isPrivate = false, isForwarded = false }) => {
    try {
        const wbot = await (0, wbot_1.getWbot)(ticket.whatsappId);
        const companyId = ticket.companyId.toString();
        const pathMedia = media.path;
        const mimeType = media.mimetype || "";
        const ext = path_1.default.extname(media.originalname || pathMedia || "").toLowerCase();
        let options;
        const bodyMedia = ticket ? (0, Mustache_1.default)(body, ticket) : body;
        if (looksLikeAudioContainer(ext, mimeType)) {
            // Converte e envia como PTT
            const converted = await processAudioToOpus(pathMedia, companyId);
            options = {
                audio: fs_1.default.readFileSync(converted),
                mimetype: "audio/ogg; codecs=opus",
                ptt: true,
                // caption em PTT geralmente não aparece; opcional manter fora
                contextInfo: { forwardingScore: isForwarded ? 2 : 0, isForwarded }
            };
            // limpa arquivo convertido
            (0, fs_1.unlinkSync)(converted);
        }
        else if (mimeType.startsWith("video/")) {
            options = {
                video: fs_1.default.readFileSync(pathMedia),
                caption: bodyMedia || undefined,
                fileName: media.originalname.replace("/", "-"),
                contextInfo: { forwardingScore: isForwarded ? 2 : 0, isForwarded }
            };
        }
        else if (mimeType.startsWith("application/") ||
            mimeType.startsWith("text/") ||
            mimeType === "application/pdf") {
            options = {
                document: fs_1.default.readFileSync(pathMedia),
                caption: bodyMedia || undefined,
                fileName: media.originalname.replace("/", "-"),
                mimetype: mimeType,
                contextInfo: { forwardingScore: isForwarded ? 2 : 0, isForwarded }
            };
        }
        else {
            // imagem
            if (mimeType.includes("gif")) {
                options = {
                    image: fs_1.default.readFileSync(pathMedia),
                    caption: bodyMedia || undefined,
                    mimetype: "image/gif",
                    gifPlayback: true,
                    contextInfo: { forwardingScore: isForwarded ? 2 : 0, isForwarded }
                };
            }
            else {
                options = {
                    image: fs_1.default.readFileSync(pathMedia),
                    caption: bodyMedia || undefined,
                    contextInfo: { forwardingScore: isForwarded ? 2 : 0, isForwarded }
                };
            }
        }
        // Apenas registrar no banco (mensagem privada)
        if (isPrivate === true) {
            const baseType = media.mimetype?.split("/")[0] ?? "document";
            const messageData = {
                wid: `PVT${companyId}${ticket.id}${(body || "").substring(0, 6)}`,
                ticketId: ticket.id,
                contactId: undefined,
                body: bodyMedia,
                fromMe: true,
                mediaUrl: media.filename,
                mediaType: baseType,
                read: true,
                quotedMsgId: null,
                ack: 2,
                remoteJid: null,
                participant: null,
                dataJson: null,
                ticketTrakingId: null,
                isPrivate
            };
            await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
            // Retorna um stub apenas para satisfazer a assinatura (quem chama não usa esse retorno)
            return {};
        }
        // Descobre o JID do contato
        const contactNumber = await Contact_1.default.findByPk(ticket.contactId);
        let number = await (0, IdentityResolverService_1.resolveOutgoingJid)(contactNumber, ticket.isGroup);
        // Envia
        const sentMessage = await wbot.sendMessage(number, { ...options });
        await ticket.update({
            lastMessage: body && body !== media.filename ? body : bodyMedia,
            imported: null,
            fromMe: true
        });
        // Copiar arquivo do upload para public/companyX/
        const baseType = media.mimetype?.split("/")[0] ?? "document";
        const companyFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public", `company${ticket.companyId}`);
        if (!fs_1.default.existsSync(companyFolder)) {
            fs_1.default.mkdirSync(companyFolder, { recursive: true });
            fs_1.default.chmodSync(companyFolder, 0o777);
        }
        const fileExt = path_1.default.extname(media.originalname || media.filename || ".bin");
        const savedName = `${Date.now()}_${path_1.default.basename(media.originalname || media.filename, fileExt).replace(/\s/g, "_")}${fileExt}`;
        try {
            fs_1.default.copyFileSync(media.path, path_1.default.join(companyFolder, savedName));
        }
        catch (copyErr) {
            console.error("Erro ao copiar mídia para public:", copyErr);
        }
        const messageData = {
            wid: sentMessage.key.id,
            ticketId: ticket.id,
            contactId: undefined,
            body: bodyMedia,
            fromMe: true,
            mediaUrl: savedName,
            mediaType: baseType,
            read: true,
            quotedMsgId: null,
            ack: 1,
            remoteJid: number,
            participant: null,
            dataJson: JSON.stringify(sentMessage),
            ticketTrakingId: ticket.ticketTrakingId,
            isPrivate: false,
            isForwarded,
            companyId: ticket.companyId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await (0, CreateMessageService_1.default)({ messageData, companyId: ticket.companyId });
        return sentMessage;
    }
    catch (err) {
        console.log(`ERRO AO ENVIAR MIDIA ${ticket.id} media ${media.originalname}`);
        Sentry.captureException(err);
        console.log(err);
        throw new AppError_1.default("ERR_SENDING_WAPP_MSG");
    }
};
exports.default = SendWhatsAppMedia;
