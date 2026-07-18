import { Router } from "express";
import * as WhatsAppCloudWebhookController from "../controllers/WhatsAppCloudWebhookController";

const whatsappCloudWebhookRoutes = Router();

whatsappCloudWebhookRoutes.get("/webhooks/wa/:webhookToken", WhatsAppCloudWebhookController.index);
whatsappCloudWebhookRoutes.post("/webhooks/wa/:webhookToken", WhatsAppCloudWebhookController.webHook);

export default whatsappCloudWebhookRoutes;
