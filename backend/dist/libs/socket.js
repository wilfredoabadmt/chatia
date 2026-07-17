"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIO = exports.initIO = void 0;
const socket_io_1 = require("socket.io");
const logger_1 = __importDefault(require("../utils/logger"));
const admin_ui_1 = require("@socket.io/admin-ui");
const zod_1 = require("zod");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Define namespaces permitidos
const ALLOWED_NAMESPACES = /^\/workspace-\d+$/;
// Esquemas de validação
// ✅ CORREÇÃO: Aceitar tanto UUID quanto IDs numéricos para compatibilidade
const userIdSchema = zod_1.z.union([
    zod_1.z.string().uuid(),
    zod_1.z.string().regex(/^\d+$/, "ID deve ser UUID ou número"),
    zod_1.z.number() // Aceita números diretamente também
]).optional();
const ticketIdSchema = zod_1.z.union([
    zod_1.z.string().uuid(),
    zod_1.z.string().regex(/^\d+$/, "ID deve ser UUID ou número")
]);
const statusSchema = zod_1.z.enum(["open", "closed", "pending", "group"]);
// ✅ CORREÇÃO CRÍTICA: JWT contém 'id' numérico, não 'userId' UUID
const jwtPayloadSchema = zod_1.z.object({
    id: zod_1.z.union([
        zod_1.z.number(),
        zod_1.z.string() // Aceita string (para compatibilidade)
    ]),
    userId: zod_1.z.union([
        zod_1.z.string().uuid(),
        zod_1.z.string().regex(/^\d+$/),
        zod_1.z.number()
    ]).optional(),
    companyId: zod_1.z.union([
        zod_1.z.number(),
        zod_1.z.string()
    ]).optional(),
    iat: zod_1.z.number().optional(),
    exp: zod_1.z.number().optional(),
});
// Origens CORS permitidas
const ALLOWED_ORIGINS = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(",").map((url) => url.trim())
    : [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001"
    ];
// Adicionar suporte para origens HTTPS em produção
if (process.env.NODE_ENV === "production") {
    // Adicionar origens HTTPS se não estiverem na lista
    const httpsOrigins = ALLOWED_ORIGINS.map(origin => origin.replace("http://", "https://")).filter(origin => !ALLOWED_ORIGINS.includes(origin));
    ALLOWED_ORIGINS.push(...httpsOrigins);
}
// Adicionar v1.chatia.cloud se não estiver na lista
if (!ALLOWED_ORIGINS.some(origin => origin.includes("chatia.cloud"))) {
    ALLOWED_ORIGINS.push("https://v1.chatia.cloud", "http://v1.chatia.cloud");
}
// Ajuste da classe AppError para compatibilidade com Error
class SocketCompatibleAppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.name = "AppError";
        // Garante que a stack trace seja capturada
        Error.captureStackTrace?.(this, SocketCompatibleAppError);
    }
}
let io;
const initIO = (httpServer) => {
    logger_1.default.info("🚀 [Socket.IO] Inicializando com origens permitidas:", ALLOWED_ORIGINS);
    io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: true,
            methods: ["GET", "POST"],
            credentials: true,
            allowedHeaders: ["authorization", "content-type"],
        },
        maxHttpBufferSize: 1e6,
        pingTimeout: 20000,
        pingInterval: 25000,
        transports: ["polling", "websocket"], // Permitir ambos os transportes
    });
    // Middleware de autenticação JWT
    io.use((socket, next) => {
        const token = socket.handshake.query.token;
        const userId = socket.handshake.query.userId;
        logger_1.default.info("🔐 [Socket Auth] Tentativa de autenticação:", {
            hasToken: !!token,
            userId: userId,
            namespace: socket.nsp.name
        });
        if (!token) {
            logger_1.default.warn("❌ [Socket Auth] Tentativa de conexão sem token");
            return next(new SocketCompatibleAppError("Token ausente", 401));
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "default_secret");
            logger_1.default.info("🔍 [Socket Auth] Token decodificado:", {
                id: decoded.id,
                companyId: decoded.companyId,
                profile: decoded.profile
            });
            const validatedPayload = jwtPayloadSchema.parse(decoded);
            socket.data.user = validatedPayload;
            logger_1.default.info("✅ [Socket Auth] Autenticação bem-sucedida:", {
                userId: validatedPayload.id,
                companyId: validatedPayload.companyId
            });
            next();
        }
        catch (err) {
            logger_1.default.error("❌ [Socket Auth] Falha na autenticação:", {
                error: err instanceof Error ? err.message : String(err),
                tokenSample: token ? token.substring(0, 20) + "..." : "no token"
            });
            return next(new SocketCompatibleAppError("Token inválido", 401));
        }
    });
    // Admin UI apenas em desenvolvimento
    const isAdminEnabled = process.env.SOCKET_ADMIN === "true" && process.env.NODE_ENV !== "production";
    if (isAdminEnabled && process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD) {
        try {
            (0, admin_ui_1.instrument)(io, {
                auth: {
                    type: "basic",
                    username: process.env.ADMIN_USERNAME,
                    password: process.env.ADMIN_PASSWORD,
                },
                mode: "development",
                readonly: true,
            });
            logger_1.default.info("Socket.IO Admin UI inicializado em modo de desenvolvimento");
        }
        catch (error) {
            logger_1.default.error("Falha ao inicializar Socket.IO Admin UI", error);
        }
    }
    else if (isAdminEnabled) {
        logger_1.default.warn("Credenciais de administrador ausentes, Admin UI não inicializado");
    }
    // Namespaces dinâmicos com validação
    const workspaces = io.of((name, auth, next) => {
        if (ALLOWED_NAMESPACES.test(name)) {
            next(null, true);
        }
        else {
            logger_1.default.warn(`Tentativa de conexão a namespace inválido: ${name}`);
            next(new SocketCompatibleAppError("Namespace inválido", 403), false);
        }
    });
    workspaces.on("connection", (socket) => {
        const clientIp = socket.handshake.address;
        // Valida userId (mais flexível)
        let userId;
        const rawUserId = socket.handshake.query.userId;
        logger_1.default.info("🔍 [Socket Connection] Validando userId:", {
            rawUserId,
            type: typeof rawUserId,
            namespace: socket.nsp.name
        });
        try {
            // Se userId não foi enviado, é opcional, então apenas continue
            if (rawUserId) {
                userId = userIdSchema.parse(rawUserId);
            }
        }
        catch (error) {
            logger_1.default.warn(`⚠️ [Socket Connection] userId inválido mas continuando conexão:`, {
                userId: rawUserId,
                error: error instanceof Error ? error.message : String(error),
                clientIp
            });
            // NÃO desconectar - deixar continuar mesmo sem userId válido
            // socket.disconnect(true);
            // return;
        }
        logger_1.default.info(`✅ [Socket Connection] Cliente conectado:`, {
            namespace: socket.nsp.name,
            clientIp,
            userId,
            socketId: socket.id
        });
        // ✅ CORREÇÃO: Callback opcional
        socket.on("joinChatBox", (ticketId, callback) => {
            try {
                const validatedTicketId = ticketIdSchema.parse(ticketId);
                socket.join(validatedTicketId);
                logger_1.default.info(`Cliente entrou no canal de ticket ${validatedTicketId} no namespace ${socket.nsp.name}`);
                if (callback)
                    callback();
            }
            catch (error) {
                logger_1.default.warn(`ticketId inválido: ${ticketId}`);
                if (callback)
                    callback("ID de ticket inválido");
            }
        });
        // ✅ CORREÇÃO: Callback opcional
        socket.on("joinNotification", (callback) => {
            socket.join("notification");
            logger_1.default.info(`Cliente entrou no canal de notificações no namespace ${socket.nsp.name}`);
            if (callback)
                callback();
        });
        // ✅ CORREÇÃO: Callback opcional
        socket.on("joinTickets", (status, callback) => {
            try {
                const validatedStatus = statusSchema.parse(status);
                socket.join(validatedStatus);
                logger_1.default.info(`Cliente entrou no canal ${validatedStatus} no namespace ${socket.nsp.name}`);
                if (callback)
                    callback();
            }
            catch (error) {
                logger_1.default.warn(`Status inválido: ${status}`);
                if (callback)
                    callback("Status inválido");
            }
        });
        // ✅ CORREÇÃO: Callback opcional
        socket.on("joinTicketsLeave", (status, callback) => {
            try {
                const validatedStatus = statusSchema.parse(status);
                socket.leave(validatedStatus);
                logger_1.default.info(`Cliente saiu do canal ${validatedStatus} no namespace ${socket.nsp.name}`);
                if (callback)
                    callback();
            }
            catch (error) {
                logger_1.default.warn(`Status inválido: ${status}`);
                if (callback)
                    callback("Status inválido");
            }
        });
        // ✅ CORREÇÃO: Callback opcional
        socket.on("joinChatBoxLeave", (ticketId, callback) => {
            try {
                const validatedTicketId = ticketIdSchema.parse(ticketId);
                socket.leave(validatedTicketId);
                logger_1.default.info(`Cliente saiu do canal de ticket ${validatedTicketId} no namespace ${socket.nsp.name}`);
                if (callback)
                    callback();
            }
            catch (error) {
                logger_1.default.warn(`ticketId inválido: ${ticketId}`);
                if (callback)
                    callback("ID de ticket inválido");
            }
        });
        socket.on("disconnect", () => {
            logger_1.default.info(`Cliente desconectado do namespace ${socket.nsp.name} (IP: ${clientIp})`);
        });
        socket.on("error", (error) => {
            logger_1.default.error(`Erro no socket do namespace ${socket.nsp.name}: ${error.message}`);
        });
    });
    return io;
};
exports.initIO = initIO;
const getIO = () => {
    if (!io) {
        throw new SocketCompatibleAppError("Socket IO não inicializado", 500);
    }
    return io;
};
exports.getIO = getIO;
