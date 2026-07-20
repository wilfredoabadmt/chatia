import { Request, Response } from "express";
import MessageTemplate from "../models/MessageTemplate";
import { getIO } from "../libs/socket";

export const index = async (req: Request, res: Response): Promise<Response> => {
  const { companyId } = req.user;

  try {
    const templates = await MessageTemplate.findAll({
      where: { companyId },
      order: [["name", "ASC"]]
    });

    return res.status(200).json(templates);
  } catch (error) {
    console.error("Error listing message templates:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const show = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { companyId } = req.user;

  try {
    const template = await MessageTemplate.findOne({
      where: { id, companyId }
    });

    if (!template) {
      return res.status(404).json({ error: "Template not found" });
    }

    return res.status(200).json(template);
  } catch (error) {
    console.error("Error showing message template:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { companyId } = req.user;
  const {
    name,
    language,
    category,
    body,
    components,
    header,
    buttons,
    metaTemplateId
  } = req.body;

  if (!name || !language || !category) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const template = await MessageTemplate.create({
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

    const io = getIO();
    io.emit(`company-${companyId}-messageTemplate`, {
      action: "create",
      template
    });

    return res.status(200).json(template);
  } catch (error) {
    console.error("Error creating message template:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { companyId } = req.user;
  const {
    name,
    language,
    category,
    body,
    components,
    header,
    buttons,
    metaTemplateId,
    status
  } = req.body;

  try {
    const template = await MessageTemplate.findOne({
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

    const io = getIO();
    io.emit(`company-${companyId}-messageTemplate`, {
      action: "update",
      template
    });

    return res.status(200).json(template);
  } catch (error) {
    console.error("Error updating message template:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const remove = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { companyId } = req.user;

  try {
    const template = await MessageTemplate.findOne({
      where: { id, companyId }
    });

    if (!template) {
      return res.status(404).json({ error: "Template not found" });
    }

    await template.destroy();

    const io = getIO();
    io.emit(`company-${companyId}-messageTemplate`, {
      action: "delete",
      templateId: id
    });

    return res.status(200).json({ message: "Template deleted" });
  } catch (error) {
    console.error("Error deleting message template:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const syncFromMeta = async (req: Request, res: Response): Promise<Response> => {
  const { companyId } = req.user;
  const { wabaId, accessToken } = req.body;

  if (!wabaId || !accessToken) {
    return res.status(400).json({ error: "Missing wabaId or accessToken" });
  }

  try {
    const axios = require("axios");
    const response = await axios.get(
      `https://graph.facebook.com/v20.0/${wabaId}/message_templates`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { limit: 1000 }
      }
    );

    const metaTemplates = response.data.data || [];
    let created = 0;
    let updated = 0;

    for (const metaTemplate of metaTemplates) {
      const existing = await MessageTemplate.findOne({
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
        body: metaTemplate.components?.find((c: any) => c.type === "BODY")?.text || "",
        components: metaTemplate.components,
        header: metaTemplate.components?.find((c: any) => c.type === "HEADER"),
        buttons: metaTemplate.components?.filter((c: any) => c.type === "BUTTONS"),
        metaTemplateId: metaTemplate.id
      };

      if (existing) {
        await existing.update(templateData);
        updated++;
      } else {
        await MessageTemplate.create({
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
  } catch (error) {
    console.error("Error syncing templates from Meta:", error);
    return res.status(500).json({ error: "Error syncing templates from Meta" });
  }
};
