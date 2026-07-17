"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adm_zip_1 = __importDefault(require("adm-zip"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
// CORREÇÃO 1: Importando o modelo CORRETO com o NOME e CAMINHO corretos.
const FlowBuilder_1 = require("../models/FlowBuilder");
const FlowImportController = async (req, res) => {
    const { companyId, id: userId } = req.user;
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Arquivo .zip não enviado." });
        }
        // 1. Descompacta o arquivo e lê o flow.json
        const zip = new adm_zip_1.default(req.file.buffer);
        const flowEntry = zip.getEntry("flow.json");
        if (!flowEntry) {
            return res.status(400).json({ error: "O arquivo flow.json está ausente no .zip." });
        }
        const flowJsonData = JSON.parse(flowEntry.getData().toString("utf8"));
        // 2. Cria o diretório para as mídias deste novo fluxo (usando um ID temporário)
        const tempFlowId = (0, uuid_1.v4)(); // Usamos um ID temporário para o nome da pasta
        const mediaDirPublic = path_1.default.join("public", "flows", tempFlowId);
        fs_1.default.mkdirSync(mediaDirPublic, { recursive: true });
        // 3. Extrai as mídias e atualiza os caminhos dentro do JSON
        const mediaEntries = zip.getEntries().filter(entry => entry.entryName.startsWith("media/") && !entry.isDirectory);
        mediaEntries.forEach(entry => {
            const originalPath = entry.entryName;
            // Gera um novo nome de arquivo para evitar conflitos
            const newFileName = `${(0, uuid_1.v4)()}_${path_1.default.basename(originalPath)}`;
            const newDestPath = path_1.default.join(mediaDirPublic, newFileName);
            // Salva o arquivo de mídia no novo local
            fs_1.default.writeFileSync(newDestPath, entry.getData());
            // Calcula o caminho relativo para salvar no banco
            const relativeDbPath = path_1.default.join("flows", tempFlowId, newFileName).replace(/\\/g, "/");
            // Atualiza o caminho da mídia dentro do objeto JSON
            if (flowJsonData.flow && flowJsonData.flow.elements) {
                flowJsonData.flow.elements.forEach(block => {
                    if (["img", "audio", "video"].includes(block.type) && block.value === originalPath.replace('media/', '')) {
                        block.value = relativeDbPath;
                    }
                });
            }
        });
        // 4. Cria o registro do fluxo no banco de dados com o JSON já atualizado
        const newFlow = await FlowBuilder_1.FlowBuilderModel.create({
            name: `(Importado) ${flowJsonData.name || `Fluxo ${Date.now()}`}`,
            company_id: companyId,
            user_id: userId,
            active: true,
            // Salva o objeto 'flow' inteiro (com os caminhos de mídia atualizados) na coluna JSON
            flow: flowJsonData.flow
        });
        // 5. Renomeia a pasta de mídia com o ID real do banco
        const finalMediaDir = path_1.default.join("public", "flows", String(newFlow.id));
        fs_1.default.renameSync(mediaDirPublic, finalMediaDir);
        // 6. Atualiza o registro no banco com os caminhos finais (opcional, mas recomendado)
        if (mediaEntries.length > 0) {
            const finalFlowJson = JSON.parse(JSON.stringify(newFlow.flow));
            finalFlowJson.elements.forEach(block => {
                if (block.value && typeof block.value === 'string' && block.value.includes(tempFlowId)) {
                    block.value = block.value.replace(tempFlowId, String(newFlow.id));
                }
            });
            await newFlow.update({ flow: finalFlowJson });
        }
        return res.status(201).json({
            message: "Fluxo importado com sucesso!",
            flowId: newFlow.id
        });
    }
    catch (err) {
        console.error("Erro na importação:", err);
        return res.status(500).json({ error: "Falha ao importar fluxo." });
    }
};
exports.default = FlowImportController;
