"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsAppCloudTemplateMessage = void 0;
const axios_1 = __importDefault(require("axios"));
const MessageTemplate_1 = __importDefault(require("../../models/MessageTemplate"));
const sendWhatsAppCloudTemplateMessage = async ({ ticket, templateId, language, headerParams = [], bodyParams = [] }) => {
    const whatsapp = ticket.whatsapp || await ticket.$get("whatsapp");
    if (!whatsapp || !whatsapp.facebookUserToken || !whatsapp.facebookPageUserId) {
        throw new Error("ERR_WABA_NOT_CONFIGURED");
    }
    const template = await MessageTemplate_1.default.findByPk(templateId);
    if (!template) {
        throw new Error("ERR_TEMPLATE_NOT_FOUND");
    }
    const token = whatsapp.facebookUserToken;
    const phoneNumberId = whatsapp.facebookPageUserId;
    const to = ticket.contact.number.replace(/\D/g, "");
    const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
    const components = [];
    // Add header parameters if present
    if (headerParams.length > 0 && template.header) {
        components.push({
            type: "header",
            parameters: headerParams.map(param => ({
                type: param.type || "text",
                text: param.text || param.value
            }))
        });
    }
    // Add body parameters if present
    if (bodyParams.length > 0) {
        components.push({
            type: "body",
            parameters: bodyParams.map(param => ({
                type: "text",
                text: param.value || param.text
            }))
        });
    }
    const payload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "template",
        template: {
            name: template.name,
            language: {
                code: language || template.language
            }
        }
    };
    if (components.length > 0) {
        payload.template.components = components;
    }
    const { data } = await axios_1.default.post(url, payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
};
exports.sendWhatsAppCloudTemplateMessage = sendWhatsAppCloudTemplateMessage;
exports.default = exports.sendWhatsAppCloudTemplateMessage;
