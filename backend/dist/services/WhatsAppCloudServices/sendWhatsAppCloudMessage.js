"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsAppCloudMessage = void 0;
const axios_1 = __importDefault(require("axios"));
const sendWhatsAppCloudMessage = async ({ body, ticket }) => {
    const whatsapp = ticket.whatsapp || await ticket.$get("whatsapp");
    if (!whatsapp || !whatsapp.facebookUserToken || !whatsapp.facebookPageUserId) {
        throw new Error("ERR_WABA_NOT_CONFIGURED");
    }
    const token = whatsapp.facebookUserToken;
    const phoneNumberId = whatsapp.facebookPageUserId;
    const to = ticket.contact.number.replace(/\D/g, "");
    const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
    const { data } = await axios_1.default.post(url, {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: { body }
    }, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
};
exports.sendWhatsAppCloudMessage = sendWhatsAppCloudMessage;
exports.default = exports.sendWhatsAppCloudMessage;
