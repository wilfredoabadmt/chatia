"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutoTranslateEnabled = exports.detectAndTranslate = exports.translateText = exports.detectLanguage = exports.validateDetectedLanguage = exports.getLanguageFromPhoneNumber = exports.invalidateTranslateCache = void 0;
const openai_1 = __importDefault(require("openai"));
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
const Prompt_1 = __importDefault(require("../../models/Prompt"));
// Cache de instâncias OpenAI por companyId
const openaiInstances = new Map();
/**
 * Obtém a API key para tradução.
 * Prioridade: CompaniesSettings.translateApiKey → primeiro Prompt.apiKey
 */
const getApiKey = async (companyId) => {
    try {
        // 1. Tentar CompaniesSettings
        const settings = await CompaniesSettings_1.default.findOne({
            where: { companyId },
            attributes: ["translateApiKey", "autoTranslate"]
        });
        if (settings?.getDataValue("autoTranslate") !== "enabled") {
            return null;
        }
        const settingsKey = settings?.getDataValue("translateApiKey");
        if (settingsKey)
            return settingsKey;
        // 2. Fallback: primeiro Prompt da empresa
        const prompt = await Prompt_1.default.findOne({
            where: { companyId },
            attributes: ["apiKey"],
            order: [["id", "ASC"]]
        });
        return prompt?.apiKey || null;
    }
    catch (err) {
        console.error("[TranslateService] Erro ao buscar API key:", err);
        return null;
    }
};
const getOpenAI = async (companyId) => {
    if (openaiInstances.has(companyId)) {
        return openaiInstances.get(companyId);
    }
    const apiKey = await getApiKey(companyId);
    if (!apiKey)
        return null;
    const instance = new openai_1.default({ apiKey });
    openaiInstances.set(companyId, instance);
    return instance;
};
/**
 * Invalida cache de OpenAI quando API key muda
 */
const invalidateTranslateCache = (companyId) => {
    openaiInstances.delete(companyId);
};
exports.invalidateTranslateCache = invalidateTranslateCache;
// Mapa de códigos para nomes legíveis
const LANGUAGE_NAMES = {
    "pt-BR": "Portuguese (Brazil)",
    "pt": "Portuguese",
    "en": "English",
    "es": "Spanish",
    "fr": "French",
    "de": "German",
    "it": "Italian",
    "zh": "Chinese",
    "ja": "Japanese",
    "ko": "Korean",
    "ar": "Arabic",
    "ru": "Russian",
    "hi": "Hindi",
    "tr": "Turkish",
    "nl": "Dutch",
    "pl": "Polish",
    "uk": "Ukrainian",
    "th": "Thai",
    "vi": "Vietnamese",
    "id": "Indonesian",
    "ms": "Malay"
};
/**
 * Mapa de código de país (DDI) → idioma provável
 * Usado como validação/fallback quando a detecção por IA falha ou é ambígua
 */
const COUNTRY_CODE_TO_LANGUAGE = {
    "55": "pt-BR",
    "351": "pt",
    "1": "en",
    "44": "en",
    "61": "en",
    "34": "es",
    "52": "es",
    "54": "es",
    "56": "es",
    "57": "es",
    "58": "es",
    "51": "es",
    "593": "es",
    "591": "es",
    "595": "es",
    "598": "es",
    "506": "es",
    "502": "es",
    "503": "es",
    "504": "es",
    "505": "es",
    "507": "es",
    "509": "es",
    "53": "es",
    "33": "fr",
    "49": "de",
    "39": "it",
    "81": "ja",
    "82": "ko",
    "86": "zh",
    "7": "ru",
    "91": "hi",
    "90": "tr",
    "31": "nl",
    "48": "pl",
    "380": "uk",
    "66": "th",
    "84": "vi",
    "62": "id",
    "60": "ms",
    "966": "ar",
    "971": "ar",
    "20": "ar",
    "212": "ar",
    "972": "he",
    "46": "sv",
    "47": "no",
    "45": "da",
    "358": "fi", // Finlândia
};
/**
 * Detecta o idioma provável pelo número de telefone (DDI)
 * Retorna null se não conseguir determinar
 */
const getLanguageFromPhoneNumber = (phoneNumber) => {
    if (!phoneNumber)
        return null;
    // Limpar número - manter só dígitos
    const clean = phoneNumber.replace(/\D/g, "");
    if (clean.length < 4)
        return null;
    // Tentar DDI de 3 dígitos primeiro, depois 2, depois 1
    for (const len of [3, 2, 1]) {
        const prefix = clean.substring(0, len);
        if (COUNTRY_CODE_TO_LANGUAGE[prefix]) {
            return COUNTRY_CODE_TO_LANGUAGE[prefix];
        }
    }
    return null;
};
exports.getLanguageFromPhoneNumber = getLanguageFromPhoneNumber;
/**
 * Valida/corrige o idioma detectado pela IA usando o DDI do telefone.
 * Se a IA detectou pt-BR mas o número é do México (+52), marca como "es".
 * Útil para mensagens curtas onde a IA pode errar.
 */
const validateDetectedLanguage = (detectedLang, phoneNumber) => {
    if (!phoneNumber)
        return detectedLang;
    const phoneLang = (0, exports.getLanguageFromPhoneNumber)(phoneNumber);
    if (!phoneLang)
        return detectedLang;
    const detectedBase = detectedLang.split("-")[0];
    const phoneBase = phoneLang.split("-")[0];
    // Se a IA detectou o mesmo idioma-base que o DDI sugere, tudo OK
    if (detectedBase === phoneBase)
        return detectedLang;
    // Se a IA detectou pt-BR mas o número não é do Brasil/Portugal → confiar no DDI
    // (mensagens curtas em espanhol podem ser confundidas com português)
    if (detectedBase === "pt" && phoneBase !== "pt") {
        return phoneLang;
    }
    // Se a IA detectou espanhol mas o número é do Brasil → confiar na IA
    // (pode ser que a pessoa realmente escreveu em espanhol)
    if (detectedBase === "es" && phoneBase === "pt") {
        return detectedLang; // confiar na IA neste caso
    }
    // Para outros casos, confiar na IA (ela geralmente é melhor com textos longos)
    return detectedLang;
};
exports.validateDetectedLanguage = validateDetectedLanguage;
/**
 * Detecta o idioma de um texto
 */
const detectLanguage = async (text, companyId) => {
    if (!text || text.trim().length < 3)
        return null;
    const openai = await getOpenAI(companyId);
    if (!openai)
        return null;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a language detection tool. Respond with ONLY the ISO 639-1 language code (e.g., "en", "pt-BR", "es", "fr", "de", "zh", "ja", "ar"). For Brazilian Portuguese use "pt-BR". For European Portuguese use "pt". No explanation, just the code.`
                },
                {
                    role: "user",
                    content: text
                }
            ],
            max_tokens: 10,
            temperature: 0
        });
        const detected = response.choices[0]?.message?.content?.trim();
        return detected || null;
    }
    catch (err) {
        console.error("[TranslateService] Erro na detecção de idioma:", err);
        return null;
    }
};
exports.detectLanguage = detectLanguage;
/**
 * Traduz texto de um idioma para outro
 */
const translateText = async (text, fromLang, toLang, companyId) => {
    if (!text || text.trim().length === 0)
        return null;
    // Mesmo idioma, não precisa traduzir
    const fromBase = fromLang.split("-")[0];
    const toBase = toLang.split("-")[0];
    if (fromBase === toBase)
        return null;
    const openai = await getOpenAI(companyId);
    if (!openai)
        return null;
    const fromName = LANGUAGE_NAMES[fromLang] || LANGUAGE_NAMES[fromBase] || fromLang;
    const toName = LANGUAGE_NAMES[toLang] || LANGUAGE_NAMES[toBase] || toLang;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a professional WhatsApp message translator. Translate the following text from ${fromName} to ${toName}.

CRITICAL RULES:
- Translate 100% of the text. Never leave any part in the original language
- The translation must sound natural and fluent in ${toName}, not word-by-word
- Keep emojis, URLs, phone numbers, and proper nouns (names of people, brands) unchanged
- Maintain the conversational/informal tone typical of WhatsApp chats
- Do NOT add any explanation, notes, or extra text
- Return ONLY the translated text, nothing else`
                },
                {
                    role: "user",
                    content: text
                }
            ],
            max_tokens: 2000,
            temperature: 0.3
        });
        return response.choices[0]?.message?.content?.trim() || null;
    }
    catch (err) {
        console.error("[TranslateService] Erro na tradução:", err);
        return null;
    }
};
exports.translateText = translateText;
/**
 * Detecta e traduz em uma única chamada (mais eficiente)
 */
const detectAndTranslate = async (text, targetLang, companyId, phoneNumber) => {
    if (!text || text.trim().length < 3)
        return null;
    const openai = await getOpenAI(companyId);
    if (!openai)
        return null;
    const targetName = LANGUAGE_NAMES[targetLang] || LANGUAGE_NAMES[targetLang.split("-")[0]] || targetLang;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a professional WhatsApp message translator.

TASK:
1. Detect the language of the input text
2. If it is already in ${targetName}, respond: {"lang":"${targetLang}","text":null}
3. If it is in ANY other language, you MUST translate it completely to ${targetName} and respond: {"lang":"<detected-iso-code>","text":"<fully translated text>"}

CRITICAL RULES:
- ALWAYS translate 100% of the text. Never leave parts in the original language
- The translated text must sound natural in ${targetName}, not a word-by-word translation
- Use ISO 639-1 codes (en, es, fr, de, etc). For Brazilian Portuguese use "pt-BR"
- Keep emojis, URLs, phone numbers, and proper nouns (names of people, brands) unchanged
- Maintain the conversational/informal tone typical of WhatsApp chats
- Respond ONLY with the JSON object, absolutely nothing else
- If unsure about the language, still translate to ${targetName}`
                },
                {
                    role: "user",
                    content: text
                }
            ],
            max_tokens: 2000,
            temperature: 0.1
        });
        const content = response.choices[0]?.message?.content?.trim();
        if (!content)
            return null;
        const parsed = JSON.parse(content);
        // Validar idioma detectado pela IA usando DDI do telefone
        const validatedLang = phoneNumber
            ? (0, exports.validateDetectedLanguage)(parsed.lang, phoneNumber)
            : parsed.lang;
        // Se a validação mudou o idioma e o texto não foi traduzido (era "mesmo idioma"),
        // mas na verdade é outro idioma → precisamos traduzir
        if (validatedLang !== parsed.lang && !parsed.text) {
            // IA achou que era o mesmo idioma do target, mas DDI diz que é outro
            // Neste caso, retornar com idioma corrigido (sem tradução necessária se target = validatedLang)
            const validatedBase = validatedLang.split("-")[0];
            const targetBase = targetLang.split("-")[0];
            if (validatedBase === targetBase) {
                return { detectedLanguage: validatedLang, translatedText: "" };
            }
            // Precisa traduzir de fato — fazer chamada separada
            const translated = await (0, exports.translateText)(text, validatedLang, targetLang, companyId);
            return {
                detectedLanguage: validatedLang,
                translatedText: translated || ""
            };
        }
        return {
            detectedLanguage: validatedLang,
            translatedText: parsed.text || ""
        };
    }
    catch (err) {
        console.error("[TranslateService] Erro na detecção+tradução:", err);
        return null;
    }
};
exports.detectAndTranslate = detectAndTranslate;
/**
 * Verifica se a tradução automática está habilitada para a empresa
 */
const isAutoTranslateEnabled = async (companyId) => {
    try {
        const settings = await CompaniesSettings_1.default.findOne({
            where: { companyId },
            attributes: ["autoTranslate"]
        });
        return settings?.getDataValue("autoTranslate") === "enabled";
    }
    catch {
        return false;
    }
};
exports.isAutoTranslateEnabled = isAutoTranslateEnabled;
