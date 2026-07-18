"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webHook = exports.index = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mime_1 = __importDefault(require("mime"));
const Whatsapp_1 = __importDefault(require("../models/Whatsapp"));
const Message_1 = __importDefault(require("../models/Message"));
const CreateOrUpdateContactService_1 = __importDefault(require("../services/ContactServices/CreateOrUpdateContactService"));
const FindOrCreateTicketService_1 = __importDefault(require("../services/TicketServices/FindOrCreateTicketService"));
const CreateMessageService_1 = __importDefault(require("../services/MessageServices/CreateMessageService"));
const socket_1 = require("../libs/socket");
const getWhatsAppMediaUrl = async (mediaId, token) => {
    const { data } = await axios_1.default.get(`https://graph.facebook.com/v20.0/${mediaId}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data.url;
};
const downloadWhatsAppMedia = async (url, token) => {
    const { data } = await axios_1.default.get(url, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "arraybuffer"
    });
    return data;
};
const verifyContact = async (from, profileName, whatsapp) => {
    const contactData = {
        name: profileName || from,
        number: from,
        profilePicUrl: "",
        isGroup: false,
        companyId: whatsapp.companyId,
        channel: "waba",
        whatsappId: whatsapp.id
    };
    return (0, CreateOrUpdateContactService_1.default)(contactData);
};
const index = async (req, res) => {
    const { webhookToken } = req.params;
    const verifyToken = process.env.VERIFY_TOKEN || "whaticket";
    if (webhookToken !== verifyToken) {
        return res.status(404).send("Not found");
    }
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    if (mode === "subscribe" && token === verifyToken) {
        return res.status(200).send(challenge);
    }
    return res.status(403).send("Forbidden");
};
exports.index = index;
const webHook = async (req, res) => {
    const { webhookToken } = req.params;
    const verifyToken = process.env.VERIFY_TOKEN || "whaticket";
    if (webhookToken !== verifyToken) {
        return res.status(404).send("Not found");
    }
    const { body } = req;
    // Meta expects a 200 immediately to avoid retrying.
    res.status(200).json({ received: true });
    try {
        if (body.object === "whatsapp_business_account") {
            for (const entry of body.entry) {
                for (const change of entry.changes) {
                    const value = change.value;
                    if (change.field !== "messages" || !value)
                        continue;
                    const metadata = value.metadata;
                    if (!metadata)
                        continue;
                    const phoneNumberId = metadata.phone_number_id;
                    const whatsapp = await Whatsapp_1.default.findOne({
                        where: {
                            facebookPageUserId: phoneNumberId,
                            channel: "waba"
                        }
                    });
                    if (!whatsapp) {
                        console.warn(`[WABA Webhook] No matching channel found for phone_number_id: ${phoneNumberId}`);
                        continue;
                    }
                    // Process messages
                    if (value.messages) {
                        for (const msg of value.messages) {
                            const from = msg.from;
                            const contactProfile = value.contacts?.find((c) => c.wa_id === from);
                            const profileName = contactProfile?.profile?.name || null;
                            const contact = await verifyContact(from, profileName, whatsapp);
                            const ticket = await (0, FindOrCreateTicketService_1.default)(contact, whatsapp, 1, whatsapp.companyId);
                            const messageId = msg.id;
                            // Check if message already exists to prevent duplicate processing
                            const existingMsg = await Message_1.default.findOne({
                                where: { wid: messageId, companyId: whatsapp.companyId }
                            });
                            if (existingMsg)
                                continue;
                            if (msg.type === "text") {
                                const bodyText = msg.text.body;
                                const messageData = {
                                    wid: messageId,
                                    ticketId: ticket.id,
                                    contactId: contact.id,
                                    body: bodyText,
                                    fromMe: false,
                                    read: false,
                                    quotedMsgId: null,
                                    ack: 3,
                                    dataJson: JSON.stringify(msg),
                                    channel: "waba"
                                };
                                await (0, CreateMessageService_1.default)({ messageData, companyId: whatsapp.companyId });
                            }
                            else if (["image", "audio", "video", "document", "sticker"].includes(msg.type)) {
                                try {
                                    const mediaData = msg[msg.type];
                                    const mediaId = mediaData.id;
                                    const caption = mediaData.caption || "";
                                    const mediaUrl = await getWhatsAppMediaUrl(mediaId, whatsapp.facebookUserToken);
                                    const fileBuffer = await downloadWhatsAppMedia(mediaUrl, whatsapp.facebookUserToken);
                                    const mimeType = mediaData.mime_type || "application/octet-stream";
                                    const ext = mime_1.default.getExtension(mimeType) || "bin";
                                    const filename = `${new Date().getTime()}_${mediaId}.${ext}`;
                                    const dirPath = path_1.default.resolve("public", `company${whatsapp.companyId}`);
                                    if (!fs_1.default.existsSync(dirPath)) {
                                        fs_1.default.mkdirSync(dirPath, { recursive: true });
                                    }
                                    const filePath = path_1.default.join(dirPath, filename);
                                    fs_1.default.writeFileSync(filePath, fileBuffer);
                                    const messageData = {
                                        wid: messageId,
                                        ticketId: ticket.id,
                                        contactId: contact.id,
                                        body: caption || filename,
                                        fromMe: false,
                                        read: false,
                                        mediaType: msg.type,
                                        mediaUrl: filename,
                                        quotedMsgId: null,
                                        ack: 3,
                                        dataJson: JSON.stringify(msg),
                                        channel: "waba"
                                    };
                                    await (0, CreateMessageService_1.default)({ messageData, companyId: whatsapp.companyId });
                                }
                                catch (mediaError) {
                                    console.error("[WABA Webhook] Error processing media message:", mediaError);
                                }
                            }
                        }
                    }
                    // Process statuses
                    if (value.statuses) {
                        for (const status of value.statuses) {
                            const msgId = status.id;
                            const ackStatus = status.status; // read, delivered, sent, failed
                            let ack = 1;
                            if (ackStatus === "sent")
                                ack = 1;
                            if (ackStatus === "delivered")
                                ack = 2;
                            if (ackStatus === "read")
                                ack = 3;
                            if (ackStatus === "failed")
                                ack = -1;
                            const message = await Message_1.default.findOne({
                                where: { wid: msgId, companyId: whatsapp.companyId }
                            });
                            if (message) {
                                await message.update({ ack });
                                const io = (0, socket_1.getIO)();
                                io.to(message.ticketId.toString())
                                    .to(`company-${whatsapp.companyId}-notification`)
                                    .emit(`company-${whatsapp.companyId}-appMessage`, {
                                    action: "update",
                                    message
                                });
                            }
                        }
                    }
                }
            }
        }
    }
    catch (error) {
        console.error("[WABA Webhook] Global processing error:", error);
    }
    return;
};
exports.webHook = webHook;
