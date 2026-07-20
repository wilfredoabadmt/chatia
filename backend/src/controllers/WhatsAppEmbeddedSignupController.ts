import { Request, Response } from "express";
import axios from "axios";
import Whatsapp from "../models/Whatsapp";
import { getIO } from "../libs/socket";

const GRAPH_VERSION = "v24.0";
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`;

interface TokenExchangeResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface WabaInfo {
  id: string;
  name: string;
  status: string;
  business_status: string;
}

interface PhoneNumber {
  id: string;
  display_phone_number: string;
  verified_name: string;
  quality_rating: string;
  status: string;
}

interface PhoneNumbersResponse {
  data: PhoneNumber[];
}

interface WhatsAppInfoResponse {
  id: string;
  display_phone_number: string;
  verified_name: string;
  quality_rating: string;
  status: string;
  account_mode: string;
  business: {
    id: string;
    name: string;
  };
}

export const exchangeToken = async (req: Request, res: Response): Promise<Response> => {
  const { code, wabaId, phoneNumberId } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Missing required field: code" });
  }

  const appId = process.env.FACEBOOK_APP_ID;
  const appSecret = process.env.FACEBOOK_APP_SECRET;

  if (!appId || !appSecret) {
    console.error("[Embedded Signup] FACEBOOK_APP_ID or FACEBOOK_APP_SECRET not configured");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    // Step 1: Exchange code for short-lived access token
    const tokenRes = await axios.get<TokenExchangeResponse>(
      `${GRAPH_VERSION}/oauth/access_token`,
      {
        params: {
          client_id: appId,
          client_secret: appSecret,
          redirect_uri: "https://toi.bo/embedded-whatsapp/",
          code
        }
      }
    );

    const shortLivedToken = tokenRes.data.access_token;

    // Step 2: Exchange short-lived token for long-lived token
    const longTokenRes = await axios.get<TokenExchangeResponse>(
      `${GRAPH_VERSION}/oauth/access_token`,
      {
        params: {
          grant_type: "fb_exchange_token",
          client_id: appId,
          client_secret: appSecret,
          fb_exchange_token: shortLivedToken
        }
      }
    );

    const longLivedToken = longTokenRes.data.access_token;

    // Step 3: Get WABA info and phone numbers
    let finalWabaId = wabaId;
    let phoneNumber = "";
    let verifiedName = "";

    if (phoneNumberId) {
      // We have the phone number ID, fetch its details
      const phoneRes = await axios.get<WhatsAppInfoResponse>(
        `${GRAPH_VERSION}/${phoneNumberId}`,
        {
          params: {
            fields: "id,display_phone_number,verified_name,quality_rating,status,business",
            access_token: longLivedToken
          }
        }
      );

      phoneNumber = phoneRes.data.display_phone_number?.replace(/\D/g, "") || "";
      verifiedName = phoneRes.data.verified_name || "WhatsApp Oficial";

      // If we don't have a WABA ID, try to get it from the business
      if (!finalWabaId && phoneRes.data.business?.id) {
        // Fetch WABAs owned by this business
        const wabaListRes = await axios.get(
          `${GRAPH_VERSION}/${phoneRes.data.business.id}/owned_whatsapp_business_accounts`,
          {
            params: {
              access_token: longLivedToken
            }
          }
        );

        if (wabaListRes.data?.data?.length > 0) {
          finalWabaId = wabaListRes.data.data[0].id;
        }
      }
    }

    // Step 4: If we have WABA ID but no phone number, fetch phone numbers
    if (finalWabaId && !phoneNumber) {
      const phonesRes = await axios.get<PhoneNumbersResponse>(
        `${GRAPH_VERSION}/${finalWabaId}/phone_numbers`,
        {
          params: {
            access_token: longLivedToken
          }
        }
      );

      if (phonesRes.data?.data?.length > 0) {
        // Use the first phone number
        const firstPhone = phonesRes.data.data[0];
        phoneNumber = firstPhone.display_phone_number?.replace(/\D/g, "") || "";
        verifiedName = firstPhone.verified_name || "WhatsApp Oficial";
      }
    }

    if (!finalWabaId || !phoneNumber) {
      return res.status(400).json({
        error: "Could not retrieve WABA or phone number information. Please try again."
      });
    }

    // Step 5: Create or update Whatsapp record
    const companyId = req.user?.companyId;

    if (!companyId) {
      return res.status(400).json({ error: "Company not found in session" });
    }

    let whatsapp = await Whatsapp.findOne({
      where: {
        facebookPageUserId: phoneNumberId || finalWabaId,
        companyId
      }
    });

    if (whatsapp) {
      await whatsapp.update({
        name: verifiedName || whatsapp.name,
        facebookUserId: finalWabaId,
        facebookUserToken: longLivedToken,
        facebookPageUserId: phoneNumberId || finalWabaId,
        number: phoneNumber,
        status: "CONNECTED",
        channel: "waba",
        provider: "meta"
      });
    } else {
      whatsapp = await Whatsapp.create({
        name: verifiedName || "WhatsApp Oficial",
        status: "CONNECTED",
        facebookUserId: finalWabaId,
        facebookPageUserId: phoneNumberId || finalWabaId,
        facebookUserToken: longLivedToken,
        number: phoneNumber,
        channel: "waba",
        provider: "meta",
        isDefault: false,
        companyId
      });
    }

    const io = getIO();
    io.emit(`company-${companyId}-whatsapp`, {
      action: "update",
      whatsapp
    });

    return res.status(200).json({
      success: true,
      whatsappId: whatsapp.id,
      number: phoneNumber,
      name: verifiedName
    });
  } catch (error: any) {
    console.error("[Embedded Signup] Token exchange error:", error?.response?.data || error.message);

    if (error?.response?.data?.error?.message) {
      return res.status(400).json({
        error: `Meta API error: ${error.response.data.error.message}`
      });
    }

    return res.status(500).json({ error: "Internal server error during token exchange" });
  }
};
