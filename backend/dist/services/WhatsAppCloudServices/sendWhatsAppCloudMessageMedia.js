"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsAppCloudMessageMedia = void 0;
const axios_1 = __importDefault(require("axios"));
const sendWhatsAppCloudMessageMedia = async ({ media, ticket, body }) => {
    const whatsapp = ticket.whatsapp || await ticket.$get("whatsapp");
    if (!whatsapp || !whatsapp.facebookUserToken || !whatsapp.facebookPageUserId) {
        throw new Error("ERR_WABA_NOT_CONFIGURED");
    }
    const token = whatsapp.facebookUserToken;
    const phoneNumberId = whatsapp.facebookPageUserId;
    const to = ticket.contact.number.replace(/\D/g, "");
    const backendUrl = process.env.BACKEND_URL || "http://localhost:3000";
    const publicUrl = `${backendUrl}/public/company${ticket.companyId}/${media.filename}`;
    const mimeType = media.mimetype || "application/octet-stream";
    let type = "document";
    if (mimeType.startsWith("image/")) {
        type = "image";
    }
    else if (mimeType.startsWith("video/")) {
        type = "video";
    }
    else if (mimeType.startsWith("audio/")) {
        type = "audio";
    }
    const mediaPayload = {
        link: publicUrl
    };
    if (body && (type === "image" || type === "video" || type === "document")) {
        mediaPayload.caption = body;
    }
    if (type === "document") {
        mediaPayload.filename = media.originalname || "document";
    }
    const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
    const { data } = await axios_1.default.post(url, {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type,
        [type]: mediaPayload
    }, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
};
exports.sendWhatsAppCloudMessageMedia = sendWhatsAppCloudMessageMedia;
exports.default = exports.sendWhatsAppCloudMessageMedia;
