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
const Yup = __importStar(require("yup"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const ShowPromptService_1 = __importDefault(require("./ShowPromptService"));
const UpdatePromptService = async ({ promptId, promptData, companyId, }) => {
    const promptTable = await (0, ShowPromptService_1.default)({ promptId, companyId });
    const promptSchema = Yup.object().shape({
        name: Yup.string()
            .min(5, "ERR_PROMPT_NAME_MIN")
            .max(100, "ERR_PROMPT_NAME_MAX"),
        prompt: Yup.string().min(50, "ERR_PROMPT_INTELLIGENCE_MIN"),
        apiKey: Yup.string(),
        queueId: Yup.number(),
        maxMessages: Yup.number()
            .min(1, "ERR_PROMPT_MAX_MESSAGES_MIN")
            .max(50, "ERR_PROMPT_MAX_MESSAGES_MAX"),
        model: Yup.string().oneOf([
            "gpt-3.5-turbo-1106",
            "gpt-4o",
            "gemini-1.5-flash",
            "gemini-1.5-pro",
            "gemini-2.0-flash",
            "gemini-2.0-pro"
        ], "ERR_PROMPT_MODEL_INVALID"),
        maxTokens: Yup.number()
            .min(10, "ERR_PROMPT_MAX_TOKENS_MIN")
            .max(4096, "ERR_PROMPT_MAX_TOKENS_MAX"),
        temperature: Yup.number()
            .min(0, "ERR_PROMPT_TEMPERATURE_MIN")
            .max(1, "ERR_PROMPT_TEMPERATURE_MAX"),
        voice: Yup.string().when("model", {
            is: (val) => val === "gpt-3.5-turbo-1106",
            then: Yup.string().required("ERR_PROMPT_VOICE_REQUIRED"),
            otherwise: Yup.string().notRequired(),
        }),
        voiceKey: Yup.string().when("model", {
            is: (val) => val === "gpt-3.5-turbo-1106",
            then: Yup.string().notRequired(),
            otherwise: Yup.string().notRequired(),
        }),
        voiceRegion: Yup.string().when("model", {
            is: (val) => val === "gpt-3.5-turbo-1106",
            then: Yup.string().notRequired(),
            otherwise: Yup.string().notRequired(),
        }),
    });
    try {
        await promptSchema.validate(promptData, { abortEarly: false });
    }
    catch (err) {
        throw new AppError_1.default(`${JSON.stringify(err, undefined, 2)}`);
    }
    await promptTable.update(promptData);
    await promptTable.reload();
    return promptTable;
};
exports.default = UpdatePromptService;
