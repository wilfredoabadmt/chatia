"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const socket_1 = require("../libs/socket");
const isAuth_1 = __importDefault(require("../middleware/isAuth"));
const logger_1 = __importDefault(require("../utils/logger"));
const debugRoutes = (0, express_1.Router)();
// 🔍 DEBUG: Verificar clientes conectados ao namespace
debugRoutes.get("/debug/socket-status", isAuth_1.default, async (req, res) => {
    try {
        const io = (0, socket_1.getIO)();
        const companyId = req.user.companyId;
        const namespace = `/workspace-${companyId}`;
        const workspaceNamespace = io.of(namespace);
        // Buscar todos os sockets conectados
        const sockets = await workspaceNamespace.fetchSockets();
        // Listar todos os rooms
        const rooms = Array.from(workspaceNamespace.adapter.rooms.keys());
        const status = {
            namespace,
            connectedClients: sockets.length,
            socketIds: sockets.map(s => ({
                id: s.id,
                rooms: Array.from(s.rooms),
                data: s.data
            })),
            allRooms: rooms,
            timestamp: new Date().toISOString()
        };
        logger_1.default.info("🔍 [DEBUG] Socket status requested:", status);
        return res.json(status);
    }
    catch (error) {
        logger_1.default.error("❌ [DEBUG] Error getting socket status:", error);
        return res.status(500).json({ error: error.message });
    }
});
// 🧪 DEBUG: Emitir mensagem de teste
debugRoutes.post("/debug/emit-test", isAuth_1.default, async (req, res) => {
    try {
        const io = (0, socket_1.getIO)();
        const companyId = req.user.companyId;
        const { ticketId, ticketUuid, message = "🧪 MENSAGEM DE TESTE" } = req.body;
        const namespace = `/workspace-${companyId}`;
        const eventName = `company-${companyId}-appMessage`;
        const workspaceNamespace = io.of(namespace);
        const testPayload = {
            action: "create",
            message: {
                id: Date.now(),
                body: message,
                ticketId: ticketId || 1,
                fromMe: false,
                createdAt: new Date().toISOString(),
                ticket: {
                    id: ticketId || 1,
                    uuid: ticketUuid || "test-uuid-123"
                }
            },
            ticket: {
                id: ticketId || 1,
                uuid: ticketUuid || "test-uuid-123",
                status: "open",
                contact: {
                    id: 1,
                    name: "Teste Debug",
                    number: "5511999999999"
                }
            },
            contact: {
                id: 1,
                name: "Teste Debug",
                number: "5511999999999"
            }
        };
        logger_1.default.info("🧪 [DEBUG] Emitting test message:", {
            namespace,
            eventName,
            ticketUuid: testPayload.ticket.uuid
        });
        // Emitir para todos no namespace
        workspaceNamespace.emit(eventName, testPayload);
        // Emitir também para o room específico do ticket
        if (ticketUuid) {
            workspaceNamespace.to(ticketUuid).emit(eventName, testPayload);
            logger_1.default.info(`🧪 [DEBUG] Also emitted to room: ${ticketUuid}`);
        }
        return res.json({
            success: true,
            namespace,
            eventName,
            payload: testPayload,
            connectedClients: (await workspaceNamespace.fetchSockets()).length
        });
    }
    catch (error) {
        logger_1.default.error("❌ [DEBUG] Error emitting test message:", error);
        return res.status(500).json({ error: error.message });
    }
});
// 🔬 DEBUG: Verificar se um socket específico está conectado
debugRoutes.get("/debug/socket/:socketId", isAuth_1.default, async (req, res) => {
    try {
        const io = (0, socket_1.getIO)();
        const companyId = req.user.companyId;
        const { socketId } = req.params;
        const namespace = `/workspace-${companyId}`;
        const workspaceNamespace = io.of(namespace);
        const sockets = await workspaceNamespace.fetchSockets();
        const targetSocket = sockets.find(s => s.id === socketId);
        if (targetSocket) {
            return res.json({
                found: true,
                socketId: targetSocket.id,
                rooms: Array.from(targetSocket.rooms),
                data: targetSocket.data
            });
        }
        else {
            return res.json({
                found: false,
                socketId,
                message: "Socket not found in namespace"
            });
        }
    }
    catch (error) {
        logger_1.default.error("❌ [DEBUG] Error finding socket:", error);
        return res.status(500).json({ error: error.message });
    }
});
// 📊 DEBUG: Listar todos os namespaces ativos
debugRoutes.get("/debug/namespaces", isAuth_1.default, async (req, res) => {
    try {
        const io = (0, socket_1.getIO)();
        // Pegar todos os namespaces
        const namespaces = Array.from(io._nsps.keys());
        const namespaceDetails = await Promise.all(namespaces.map(async (ns) => {
            const namespace = io.of(ns);
            const sockets = await namespace.fetchSockets();
            return {
                name: ns,
                connectedClients: sockets.length,
                socketIds: sockets.map(s => s.id)
            };
        }));
        return res.json({
            totalNamespaces: namespaces.length,
            namespaces: namespaceDetails
        });
    }
    catch (error) {
        logger_1.default.error("❌ [DEBUG] Error listing namespaces:", error);
        return res.status(500).json({ error: error.message });
    }
});
exports.default = debugRoutes;
