import express from "express";
import isAuth from "../middleware/isAuth";

import * as MessageTemplateController from "../controllers/MessageTemplateController";

const messageTemplateRoutes = express.Router();

messageTemplateRoutes.get("/message-templates/", isAuth, MessageTemplateController.index);
messageTemplateRoutes.get("/message-templates/:id", isAuth, MessageTemplateController.show);
messageTemplateRoutes.post("/message-templates/", isAuth, MessageTemplateController.store);
messageTemplateRoutes.put("/message-templates/:id", isAuth, MessageTemplateController.update);
messageTemplateRoutes.delete("/message-templates/:id", isAuth, MessageTemplateController.remove);
messageTemplateRoutes.post("/message-templates/sync", isAuth, MessageTemplateController.syncFromMeta);

export default messageTemplateRoutes;
