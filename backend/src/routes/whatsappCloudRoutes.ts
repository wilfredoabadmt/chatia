import { Router } from "express";
import * as WhatsAppCloudController from "../controllers/WhatsAppCloudController";

const whatsappCloudRoutes = Router();

whatsappCloudRoutes.post("/webhooks/whatsapp-cloud/connect", WhatsAppCloudController.connect);

export default whatsappCloudRoutes;
