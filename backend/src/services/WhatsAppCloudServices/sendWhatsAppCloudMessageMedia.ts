import axios from "axios";
import Ticket from "../../models/Ticket";

interface MediaMessageData {
  media: Express.Multer.File;
  ticket: Ticket;
  body?: string;
}

export const sendWhatsAppCloudMessageMedia = async ({
  media,
  ticket,
  body
}: MediaMessageData): Promise<any> => {
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
  let type: "image" | "video" | "audio" | "document" = "document";

  if (mimeType.startsWith("image/")) {
    type = "image";
  } else if (mimeType.startsWith("video/")) {
    type = "video";
  } else if (mimeType.startsWith("audio/")) {
    type = "audio";
  }

  const mediaPayload: any = {
    link: publicUrl
  };

  if (body && (type === "image" || type === "video" || type === "document")) {
    mediaPayload.caption = body;
  }

  if (type === "document") {
    mediaPayload.filename = media.originalname || "document";
  }

  const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;

  const { data } = await axios.post(
    url,
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type,
      [type]: mediaPayload
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  return data;
};

export default sendWhatsAppCloudMessageMedia;
