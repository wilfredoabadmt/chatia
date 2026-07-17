"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isAuth_1 = __importDefault(require("../middleware/isAuth"));
const multer_1 = __importDefault(require("multer"));
const uploadExt_1 = __importDefault(require("../config/uploadExt"));
const FlowBuilderController = __importStar(require("../controllers/FlowBuilderController"));
const FlowExportController_1 = __importDefault(require("../controllers/FlowExportController"));
const FlowImportController_1 = __importDefault(require("../controllers/FlowImportController"));
// NOVO: Importação para o controller de documentos que vamos criar.
const DocumentController = __importStar(require("../controllers/DocumentController"));
const upload = (0, multer_1.default)(uploadExt_1.default);
const uploadMemory = (0, multer_1.default)();
const flowBuilder = express_1.default.Router();
flowBuilder.post("/flowbuilder", isAuth_1.default, FlowBuilderController.createFlow);
flowBuilder.put("/flowbuilder", isAuth_1.default, FlowBuilderController.updateFlow);
flowBuilder.delete("/flowbuilder/:idFlow", isAuth_1.default, FlowBuilderController.deleteFlow);
flowBuilder.get("/flowbuilder", isAuth_1.default, FlowBuilderController.myFlows);
flowBuilder.get("/flowbuilder/:idFlow", isAuth_1.default, FlowBuilderController.flowOne);
flowBuilder.get("/flowbuilder/export/:id", isAuth_1.default, FlowExportController_1.default);
flowBuilder.post("/flowbuilder/import", isAuth_1.default, uploadMemory.single("file"), FlowImportController_1.default);
flowBuilder.post("/flowbuilder/flow", isAuth_1.default, FlowBuilderController.FlowDataUpdate);
flowBuilder.post("/flowbuilder/duplicate", isAuth_1.default, FlowBuilderController.FlowDuplicate);
flowBuilder.get("/flowbuilder/flow/:idFlow", isAuth_1.default, FlowBuilderController.FlowDataGetOne);
flowBuilder.post("/flowbuilder/img", isAuth_1.default, upload.array("medias"), FlowBuilderController.FlowUploadImg);
flowBuilder.post("/flowbuilder/audio", isAuth_1.default, upload.array("medias"), FlowBuilderController.FlowUploadAudio);
flowBuilder.post("/flowbuilder/content", isAuth_1.default, upload.array("medias"), FlowBuilderController.FlowUploadAll);
// ------------------- NOVA ROTA ADICIONADA -------------------
// Rota dedicada e limpa para receber e enviar documentos.
flowBuilder.post("/flow/send-document", // Endpoint específico
isAuth_1.default, // Middleware de autenticação
upload.single("document"), // Espera um único arquivo chamado "document"
DocumentController.send // Chama a função 'send' do nosso novo controller
);
// -------------------------------------------------------------
exports.default = flowBuilder;
