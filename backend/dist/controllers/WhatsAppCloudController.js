"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const Whatsapp_1 = __importDefault(require("../models/Whatsapp"));
const socket_1 = require("../libs/socket");
const connect = async (req, res) => {
    const secretHeader = req.headers["x-toi-secret"];
    const verifyToken = process.env.VERIFY_TOKEN || "whaticket";
    if (!secretHeader || secretHeader !== verifyToken) {
        return res.status(401).json({ error: "Unauthorized: Invalid secret token" });
    }
    const { companyId, name, wabaId, phoneNumberId, accessToken, number } = req.body;
    if (!companyId || !wabaId || !phoneNumberId || !accessToken || !number) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        let whatsapp = await Whatsapp_1.default.findOne({
            where: {
                facebookPageUserId: phoneNumberId,
                companyId
            }
        });
        const cleanNumber = number.replace(/\D/g, "");
        if (whatsapp) {
            await whatsapp.update({
                facebookUserId: wabaId,
                facebookUserToken: accessToken,
                number: cleanNumber,
                status: "CONNECTED"
            });
            const io = (0, socket_1.getIO)();
            io.emit(`company-${companyId}-whatsapp`, {
                action: "update",
                whatsapp
            });
        }
        else {
            whatsapp = await Whatsapp_1.default.create({
                name: name || "WhatsApp Oficial",
                status: "CONNECTED",
                facebookUserId: wabaId,
                facebookPageUserId: phoneNumberId,
                facebookUserToken: accessToken,
                number: cleanNumber,
                channel: "waba",
                provider: "meta",
                isDefault: false,
                companyId
            });
            const io = (0, socket_1.getIO)();
            io.emit(`company-${companyId}-whatsapp`, {
                action: "update",
                whatsapp
            });
        }
        return res.status(200).json({ success: true, whatsappId: whatsapp.id });
    }
    catch (error) {
        console.error("Error connecting WhatsApp Cloud channel:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.connect = connect;
