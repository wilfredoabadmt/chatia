"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
// Lista de todos os tipos de arquivo que o seu sistema poderá aceitar
const allowedMimes = [
    "application/pdf",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/png",
    "image/jpeg",
    "image/gif",
    "video/mp4",
    "audio/mpeg",
    "audio/ogg",
    "audio/opus"
];
const publicFolder = path_1.default.resolve(__dirname, "..", "..", "public");
exports.default = {
    directory: publicFolder,
    storage: multer_1.default.diskStorage({
        destination: publicFolder,
        filename: (req, file, cb) => {
            // Lógica simplificada e segura para nomear arquivos
            // Resultado: 1691550000000-nome-original-do-arquivo.pdf
            const uniquePrefix = new Date().getTime();
            const finalName = `${uniquePrefix}-${decodeURI(file.originalname).replace(/\s/g, "_")}`;
            cb(null, finalName);
        }
    }),
    // Seção adicionada para validar o tipo do arquivo
    fileFilter: (req, file, cb) => {
        if (allowedMimes.includes(file.mimetype)) {
            // Se o tipo do arquivo estiver na lista, permite o upload
            cb(null, true);
        }
        else {
            // Se não estiver, rejeita o upload com uma mensagem de erro
            cb(new Error("Tipo de arquivo não permitido."));
        }
    }
};
