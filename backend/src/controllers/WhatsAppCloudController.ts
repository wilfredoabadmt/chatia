import { Request, Response } from "express";
import Whatsapp from "../models/Whatsapp";
import { getIO } from "../libs/socket";

export const connect = async (req: Request, res: Response): Promise<Response> => {
  const secretHeader = req.headers["x-toi-secret"];
  const verifyToken = process.env.VERIFY_TOKEN || "whaticket";

  if (!secretHeader || secretHeader !== verifyToken) {
    return res.status(401).json({ error: "Unauthorized: Invalid secret token" });
  }

  const {
    companyId,
    name,
    wabaId,
    phoneNumberId,
    accessToken,
    number
  }: {
    companyId: number;
    name: string;
    wabaId: string;
    phoneNumberId: string;
    accessToken: string;
    number: string;
  } = req.body;

  if (!companyId || !wabaId || !phoneNumberId || !accessToken || !number) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    let whatsapp = await Whatsapp.findOne({
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

      const io = getIO();
      io.emit(`company-${companyId}-whatsapp`, {
        action: "update",
        whatsapp
      });
    } else {
      whatsapp = await Whatsapp.create({
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

      const io = getIO();
      io.emit(`company-${companyId}-whatsapp`, {
        action: "update",
        whatsapp
      });
    }

    return res.status(200).json({ success: true, whatsappId: whatsapp.id });
  } catch (error) {
    console.error("Error connecting WhatsApp Cloud channel:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
