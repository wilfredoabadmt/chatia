"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
const Setting_1 = __importDefault(require("../../models/Setting"));
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
const Prompt_1 = __importDefault(require("../../models/Prompt"));
class TranscribeAudioMessageService {
    async execute(fileName, companyId) {
        // Validação dos parâmetros de entrada
        if (!fileName || typeof fileName !== 'string') {
            return { error: 'fileName é obrigatório e deve ser uma string.' };
        }
        if (!companyId || typeof companyId !== 'number') {
            return { error: 'companyId é obrigatório e deve ser um número.' };
        }
        // Construção e verificação do caminho do arquivo
        const publicFolder = path_1.default.resolve(__dirname, '..', '..', '..', 'public');
        const filePath = `${publicFolder}/company${companyId}/${fileName}`;
        if (!fs_1.default.existsSync(filePath)) {
            console.error(`Arquivo não encontrado: ${filePath}`);
            return { error: 'Arquivo não encontrado' };
        }
        // Busca da chave da API - prioridade: translateApiKey (CompaniesSettings) → apiTranscription (Setting) → Prompt.apiKey
        let apiKey = null;
        // 1. Tentar CompaniesSettings.translateApiKey (mesma chave da tradução)
        const settings = await CompaniesSettings_1.default.findOne({
            where: { companyId },
            attributes: ["translateApiKey"],
        });
        const translateKey = settings?.getDataValue("translateApiKey");
        if (translateKey) {
            apiKey = translateKey;
        }
        // 2. Fallback: Setting.apiTranscription
        if (!apiKey) {
            const transcriptionSetting = await Setting_1.default.findOne({
                where: { key: 'apiTranscription', companyId },
            });
            if (transcriptionSetting?.value) {
                apiKey = transcriptionSetting.value;
            }
        }
        // 3. Fallback: Prompt.apiKey
        if (!apiKey) {
            const prompt = await Prompt_1.default.findOne({
                where: { companyId },
                attributes: ["apiKey"],
                order: [["id", "ASC"]],
            });
            if (prompt?.apiKey) {
                apiKey = prompt.apiKey;
            }
        }
        if (!apiKey) {
            console.error(`Chave da API não encontrada para companyId: ${companyId}`);
            return { error: 'Chave da API não configurada' };
        }
        // Identificação do provedor baseado na chave da API
        let transcriptionProvider;
        if (apiKey.startsWith('sk-')) {
            transcriptionProvider = 'openai';
        }
        else if (apiKey.startsWith('AIzaSy')) {
            transcriptionProvider = 'gemini';
        }
        else {
            console.error(`Formato de chave da API desconhecido: ${apiKey} para companyId: ${companyId}`);
            return { error: 'Formato de chave da API inválido' };
        }
        try {
            const audioFile = fs_1.default.createReadStream(filePath);
            if (transcriptionProvider === 'openai') {
                // Configuração para a API da OpenAI
                const form = new form_data_1.default();
                form.append('file', audioFile);
                form.append('model', 'whisper-1');
                form.append('response_format', 'text');
                // Não define language para Whisper detectar automaticamente
                const response = await axios_1.default.post('https://api.openai.com/v1/audio/transcriptions', form, {
                    headers: {
                        ...form.getHeaders(),
                        Authorization: `Bearer ${apiKey}`,
                    },
                });
                return { transcribedText: response.data };
            }
            else if (transcriptionProvider === 'gemini') {
                // Placeholder para a API do Gemini (ajuste necessário)
                const form = new form_data_1.default();
                form.append('file', audioFile);
                // Nota: A URL e a estrutura da resposta devem ser ajustadas conforme a API real do Gemini
                const response = await axios_1.default.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:transcribe', form, {
                    headers: {
                        ...form.getHeaders(),
                        Authorization: `Bearer ${apiKey}`,
                    },
                });
                // Ajuste conforme a resposta real da API do Gemini
                return { transcribedText: response.data.text || 'Transcrição não disponível' };
            }
            else {
                console.error(`Provedor de transcrição desconhecido: ${transcriptionProvider} para companyId: ${companyId}`);
                return { error: 'Provedor de transcrição inválido' };
            }
        }
        catch (error) {
            console.error(`Erro ao transcrever áudio para fileName: ${fileName}, companyId: ${companyId}`, error);
            return { error: 'Conversão para texto falhou' };
        }
    }
}
exports.default = TranscribeAudioMessageService;
