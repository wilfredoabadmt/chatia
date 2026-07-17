"use strict";
// backend/src/controllers/FlowBuilder/FlowExportController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const archiver_1 = __importDefault(require("archiver"));
// CORREÇÃO 1: Importamos apenas o seu modelo real, que se chama "FlowBuilderModel"
const FlowBuilder_1 = require("../models/FlowBuilder");
const FlowExportController = async (req, res) => {
    const { id } = req.params;
    try {
        // CORREÇÃO 2: Buscamos o fluxo usando apenas o FlowBuilderModel, sem includes.
        const flowInstance = await FlowBuilder_1.FlowBuilderModel.findByPk(id);
        if (!flowInstance) {
            return res.status(404).json({ error: "Fluxo não encontrado." });
        }
        // CORREÇÃO 3: Os "blocos" (elements) estão dentro da coluna JSON 'flow'.
        const flowJsonContent = flowInstance.flow || {};
        const blocks = flowJsonContent.elements || [];
        const exportData = {
            id: flowInstance.id,
            name: flowInstance.name,
            // Usamos o conteúdo da coluna 'flow' para a exportação
            flow: flowJsonContent
        };
        const tempDir = path_1.default.resolve(__dirname, "..", "..", "temp", `flow-${flowInstance.id}`);
        if (fs_1.default.existsSync(tempDir)) {
            fs_1.default.rmSync(tempDir, { recursive: true, force: true });
        }
        fs_1.default.mkdirSync(tempDir, { recursive: true });
        const flowJsonPath = path_1.default.join(tempDir, "flow.json");
        await (0, promises_1.writeFile)(flowJsonPath, JSON.stringify(exportData, null, 2));
        const mediaDir = path_1.default.join(tempDir, "media");
        fs_1.default.mkdirSync(mediaDir, { recursive: true });
        // Copiar mídias associadas (lógica ajustada para usar a variável 'blocks')
        for (const block of blocks) {
            if (block.type === "img" || block.type === "audio" || block.type === "video") {
                const mediaPath = block.value;
                if (mediaPath) {
                    const sourcePath = path_1.default.resolve("public", mediaPath);
                    if (fs_1.default.existsSync(sourcePath)) {
                        const fileName = path_1.default.basename(mediaPath);
                        const destPath = path_1.default.join(mediaDir, fileName);
                        fs_1.default.copyFileSync(sourcePath, destPath);
                    }
                }
            }
        }
        const zipPath = path_1.default.join(tempDir, `flow-${flowInstance.id}.zip`);
        const output = fs_1.default.createWriteStream(zipPath);
        const archive = (0, archiver_1.default)("zip", { zlib: { level: 9 } });
        archive.pipe(output);
        archive.directory(tempDir, false);
        output.on("close", () => {
            res.download(zipPath, `flow-${flowInstance.id}.zip`, (err) => {
                if (err) {
                    console.error("Erro ao enviar o arquivo de download:", err);
                }
                fs_1.default.rmSync(tempDir, { recursive: true, force: true });
            });
        });
        await archive.finalize();
    }
    catch (err) {
        console.error("Erro ao exportar fluxo:", err);
        // Limpa o diretório temporário em caso de erro
        const tempDir = path_1.default.resolve(__dirname, "..", "..", "temp", `flow-${id}`);
        if (fs_1.default.existsSync(tempDir)) {
            fs_1.default.rmSync(tempDir, { recursive: true, force: true });
        }
        return res.status(500).json({ error: "Erro ao exportar fluxo." });
    }
};
exports.default = FlowExportController;
