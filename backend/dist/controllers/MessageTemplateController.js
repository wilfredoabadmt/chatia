"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncFromMeta = exports.remove = exports.update = exports.store = exports.show = exports.index = void 0;
const MessageTemplate_1 = __importDefault(require("../models/MessageTemplate"));
const socket_1 = require("../libs/socket");
const index = async (req, res) => {
    const { companyId } = req.user;
    try {
        const templates = await MessageTemplate_1.default.findAll({
            where: { companyId },
            order: [["name", "ASC"]]
        });
        return res.status(200).json(templates);
    }
    catch (error) {
        console.error("Error listing message templates:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.index = index;
const show = async (req, res) => {
    const { id } = req.params;
    const { companyId } = req.user;
    try {
        const template = await MessageTemplate_1.default.findOne({
            where: { id, companyId }
        });
        if (!template) {
            return res.status(404).json({ error: "Template not found" });
        }
        return res.status(200).json(template);
    }
    catch (error) {
        console.error("Error showing message template:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.show = show;
const store = async (req, res) => {
    const { companyId } = req.user;
    const { name, language, category, body, components, header, buttons, metaTemplateId } = req.body;
    if (!name || !language || !category) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const template = await MessageTemplate_1.default.create({
            name,
            language,
            category,
            body,
            components,
            header,
            buttons,
            metaTemplateId,
            status: "PENDING",
            companyId
        });
        const io = (0, socket_1.getIO)();
        io.emit(`company-${companyId}-messageTemplate`, {
            action: "create",
            template
        });
        return res.status(200).json(template);
    }
    catch (error) {
        console.error("Error creating message template:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.store = store;
const update = async (req, res) => {
    const { id } = req.params;
    const { companyId } = req.user;
    const { name, language, category, body, components, header, buttons, metaTemplateId, status } = req.body;
    try {
        const template = await MessageTemplate_1.default.findOne({
            where: { id, companyId }
        });
        if (!template) {
            return res.status(404).json({ error: "Template not found" });
        }
        await template.update({
            name,
            language,
            category,
            body,
            components,
            header,
            buttons,
            metaTemplateId,
            status
        });
        const io = (0, socket_1.getIO)();
        io.emit(`company-${companyId}-messageTemplate`, {
            action: "update",
            template
        });
        return res.status(200).json(template);
    }
    catch (error) {
        console.error("Error updating message template:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.update = update;
const remove = async (req, res) => {
    const { id } = req.params;
    const { companyId } = req.user;
    try {
        const template = await MessageTemplate_1.default.findOne({
            where: { id, companyId }
        });
        if (!template) {
            return res.status(404).json({ error: "Template not found" });
        }
        await template.destroy();
        const io = (0, socket_1.getIO)();
        io.emit(`company-${companyId}-messageTemplate`, {
            action: "delete",
            templateId: id
        });
        return res.status(200).json({ message: "Template deleted" });
    }
    catch (error) {
        console.error("Error deleting message template:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.remove = remove;
const syncFromMeta = async (req, res) => {
    const { companyId } = req.user;
    const { wabaId, accessToken } = req.body;
    if (!wabaId || !accessToken) {
        return res.status(400).json({ error: "Missing wabaId or accessToken" });
    }
    try {
        const axios = require("axios");
        const response = await axios.get(`https://graph.facebook.com/v20.0/${wabaId}/message_templates`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            params: { limit: 1000 }
        });
        const metaTemplates = response.data.data || [];
        let created = 0;
        let updated = 0;
        for (const metaTemplate of metaTemplates) {
            const existing = await MessageTemplate_1.default.findOne({
                where: {
                    name: metaTemplate.name,
                    companyId
                }
            });
            const templateData = {
                name: metaTemplate.name,
                language: metaTemplate.language,
                category: metaTemplate.category,
                status: metaTemplate.status,
                body: metaTemplate.components?.find((c) => c.type === "BODY")?.text || "",
                components: metaTemplate.components,
                header: metaTemplate.components?.find((c) => c.type === "HEADER"),
                buttons: metaTemplate.components?.filter((c) => c.type === "BUTTONS"),
                metaTemplateId: metaTemplate.id
            };
            if (existing) {
                await existing.update(templateData);
                updated++;
            }
            else {
                await MessageTemplate_1.default.create({
                    ...templateData,
                    companyId
                });
                created++;
            }
        }
        return res.status(200).json({
            message: "Templates synced successfully",
            created,
            updated,
            total: metaTemplates.length
        });
    }
    catch (error) {
        console.error("Error syncing templates from Meta:", error);
        return res.status(500).json({ error: "Error syncing templates from Meta" });
    }
};
exports.syncFromMeta = syncFromMeta;
