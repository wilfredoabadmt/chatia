import axios from "axios";
import Ticket from "../../models/Ticket";

interface MessageData {
  body: string;
  ticket: Ticket;
}

export const sendWhatsAppCloudMessage = async ({
  body,
  ticket
}: MessageData): Promise<any> => {
  const whatsapp = ticket.whatsapp || await ticket.$get("whatsapp");
  if (!whatsapp || !whatsapp.facebookUserToken || !whatsapp.facebookPageUserId) {
    throw new Error("ERR_WABA_NOT_CONFIGURED");
  }

  const token = whatsapp.facebookUserToken;
  const phoneNumberId = whatsapp.facebookPageUserId;
  const to = ticket.contact.number.replace(/\D/g, "");

  const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;

  const { data } = await axios.post(
    url,
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "text",
      text: { body }
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  return data;
};

export default sendWhatsAppCloudMessage;
