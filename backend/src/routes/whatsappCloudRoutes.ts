import { Router } from "express";
import isAuth from "../middleware/isAuth";
import * as WhatsAppCloudController from "../controllers/WhatsAppCloudController";
import * as WhatsAppEmbeddedSignupController from "../controllers/WhatsAppEmbeddedSignupController";

const whatsappCloudRoutes = Router();

// Manual WABA connect (from TOI portal or manual entry)
whatsappCloudRoutes.post("/webhooks/whatsapp-cloud/connect", WhatsAppCloudController.connect);

// Embedded Signup: exchange authorization code for access token
whatsappCloudRoutes.post("/whatsapp/exchange-token", isAuth, WhatsAppEmbeddedSignupController.exchangeToken);

export default whatsappCloudRoutes;
