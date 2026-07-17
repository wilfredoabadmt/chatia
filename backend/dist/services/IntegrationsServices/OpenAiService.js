"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOpenAi = void 0;
const wbotMessageListener_1 = require("../WbotServices/wbotMessageListener");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const openai_1 = __importDefault(require("openai"));
const generative_ai_1 = require("@google/generative-ai");
const Message_1 = __importDefault(require("../../models/Message"));
// mantém letras (com acento), números, pontuação comum e quebras de linha
const keepOnlySpecifiedChars = (text) => {
    if (!text)
        return "";
    // remove caracteres de controle estranhos, preservando PT-BR
    return text
        .normalize("NFKC")
        .replace(/[^\p{L}\p{N}\p{P}\p{Zs}\n\r\t]/gu, "")
        .replace(/[ \t]+\n/g, "\n")
        .trim();
};
const sessionsOpenAi = [];
const sessionsGemini = [];
// ===== util =====
const deleteFileSync = (path) => {
    try {
        fs_1.default.unlinkSync(path);
    }
    catch (error) {
        console.error("Erro ao deletar o arquivo:", error);
    }
};
const sanitizeName = (name) => {
    let sanitized = name.split(" ")[0];
    sanitized = sanitized.replace(/[^a-zA-Z0-9]/g, "");
    return sanitized.substring(0, 60);
};
// sanitiza a API key que vem do fluxo
const cleanApiKey = (k) => (k || "").replace(/^["']|["']$/g, "").trim();
// mensagens de erro mais claras
function humanizeAIError(provider, err) {
    const status = err?.status || err?.response?.status;
    if (status === 401)
        return `${provider.toUpperCase()}: 401 (API key inválida). Verifique a chave do fluxo.`;
    if (status === 403)
        return `${provider.toUpperCase()}: 403 (acesso bloqueado/billing/quotas).`;
    if (status === 429)
        return `${provider.toUpperCase()}: 429 (limite/velocidade atingido). Tente novamente.`;
    if (status && status >= 500)
        return `${provider.toUpperCase()}: ${status} (instabilidade do provedor).`;
    if (err?.name === "AbortError")
        return `${provider.toUpperCase()}: tempo limite esgotado.`;
    return `${provider.toUpperCase()}: falha ao processar — ${err?.message || "erro desconhecido"}`;
}
// anti-loop de transferência e de mensagem "aguarde"
const NOTIFY_COOLDOWN_MS = 60000; // 1 min
const lastNotifyAt = new Map(); // ticketId -> timestamp
// ===== helpers =====
const prepareMessagesAI = (pastMessages, isGeminiModel, promptSystem) => {
    const messagesAI = [];
    if (!isGeminiModel) {
        messagesAI.push({ role: "system", content: promptSystem });
    }
    for (const message of pastMessages) {
        if (message.mediaType === "conversation" || message.mediaType === "extendedTextMessage") {
            if (message.fromMe) {
                messagesAI.push({ role: "assistant", content: message.body });
            }
            else {
                messagesAI.push({ role: "user", content: message.body });
            }
        }
    }
    return messagesAI;
};
// ===== processamento da resposta =====
const processResponse = async (responseText, wbot, msg, ticket, contact, openAiSettings, ticketTraking) => {
    let response = responseText;
    // disparo de transferência (idempotente e com cooldown)
    if (response?.toLowerCase().includes("ação: transferir para o setor de atendimento")) {
        const raw = openAiSettings?.queueId;
        const n = Number(raw);
        const targetQueueId = Number.isFinite(n) && n > 0 ? n : null;
        const now = Date.now();
        const last = lastNotifyAt.get(ticket.id) || 0;
        try {
            // só tenta transferir se mudou o destino ou passou o cooldown
            if (ticket?.queueId !== targetQueueId || (now - last) > NOTIFY_COOLDOWN_MS) {
                await (0, wbotMessageListener_1.transferQueue)(targetQueueId, ticket, contact);
                lastNotifyAt.set(ticket.id, now);
            }
            // avisa "aguarde" no máx. 1x por minuto
            if ((Date.now() - (lastNotifyAt.get(ticket.id) || 0)) >= NOTIFY_COOLDOWN_MS) {
                const sent = await wbot.sendMessage(msg.key.remoteJid, {
                    text: "Por favor, aguarde, em breve um de nossos colaboradores irá lhe atender. Para retornar ao bot, envie # a qualquer momento."
                });
                try {
                    await (0, wbotMessageListener_1.verifyMessage)(sent, ticket, contact);
                }
                catch (_) { }
                lastNotifyAt.set(ticket.id, Date.now());
            }
        }
        catch (e) {
            console.error("transferQueue falhou", { targetQueueId, ticketId: ticket.id, err: e?.message || e });
        }
        response = response.replace(/ação: transferir para o setor de atendimento/i, "").trim();
    }
    const publicFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public", `company${ticket.companyId}`);
    // "digitando..."
    await wbot.sendPresenceUpdate("composing", msg.key.remoteJid);
    await new Promise(resolve => setTimeout(resolve, 3000));
    await wbot.sendPresenceUpdate("paused", msg.key.remoteJid);
    // envia como texto ou áudio
    if (openAiSettings.voice === "texto") {
        const sentMessage = await wbot.sendMessage(msg.key.remoteJid, { text: `\u200e ${response}` });
        try {
            await (0, wbotMessageListener_1.verifyMessage)(sentMessage, ticket, contact);
        }
        catch (e) {
            if ((e?.message || e) !== "ERR_UPDATE_TICKET")
                console.warn("verifyMessage falhou:", e?.message || e);
        }
    }
    else {
        const fileNameWithOutExtension = `${ticket.id}_${Date.now()}`;
        try {
            await (0, wbotMessageListener_1.convertTextToSpeechAndSaveToFile)(keepOnlySpecifiedChars(response), `${publicFolder}/${fileNameWithOutExtension}`, openAiSettings.voiceKey, openAiSettings.voiceRegion, openAiSettings.voice, "mp3");
            const sendMessage = await wbot.sendMessage(msg.key.remoteJid, {
                audio: { url: `${publicFolder}/${fileNameWithOutExtension}.mp3` },
                mimetype: "audio/mpeg",
                ptt: true,
            });
            try {
                await (0, wbotMessageListener_1.verifyMediaMessage)(sendMessage, ticket, contact, ticketTraking, false, false, wbot);
            }
            catch (e) {
                if ((e?.message || e) !== "ERR_UPDATE_TICKET")
                    console.warn("verifyMediaMessage falhou:", e?.message || e);
            }
            deleteFileSync(`${publicFolder}/${fileNameWithOutExtension}.mp3`);
            deleteFileSync(`${publicFolder}/${fileNameWithOutExtension}.wav`);
        }
        catch (error) {
            console.error(`Erro para responder com audio: ${error}`);
            const sentMessage = await wbot.sendMessage(msg.key.remoteJid, { text: `\u200e ${response}` });
            try {
                await (0, wbotMessageListener_1.verifyMessage)(sentMessage, ticket, contact);
            }
            catch (e) {
                if ((e?.message || e) !== "ERR_UPDATE_TICKET")
                    console.warn("verifyMessage falhou:", e?.message || e);
            }
        }
    }
};
// ===== chamadas aos provedores =====
const handleOpenAIRequest = async (openai, messagesAI, openAiSettings) => {
    try {
        const chat = await openai.chat.completions.create({
            model: openAiSettings.model,
            messages: messagesAI,
            max_tokens: openAiSettings.maxTokens,
            temperature: openAiSettings.temperature,
        });
        return chat.choices[0].message?.content || "";
    }
    catch (error) {
        console.error("OpenAI request error:", error);
        throw error;
    }
};
const handleGeminiRequest = async (gemini, messagesAI, openAiSettings, bodyMessage, promptSystem) => {
    try {
        const model = gemini.getGenerativeModel({
            model: openAiSettings.model,
            systemInstruction: { role: "user", parts: [{ text: promptSystem || "" }] },
        });
        const geminiHistory = messagesAI.map((msg) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: String(msg.content ?? "") }],
        }));
        const chat = model.startChat({ history: geminiHistory });
        const result = await chat.sendMessage(bodyMessage);
        return result.response.text();
    }
    catch (error) {
        console.error("Gemini request error:", error);
        throw error;
    }
};
// ===== orquestração =====
const handleOpenAi = async (openAiSettings, msg, wbot, ticket, contact, mediaSent, ticketTraking) => {
    if (contact.disableBot)
        return;
    const bodyMessage = (0, wbotMessageListener_1.getBodyMessage)(msg);
    if (!bodyMessage && !msg.message?.audioMessage)
        return;
    if (!openAiSettings)
        return;
    if (msg.messageStubType)
        return;
    const publicFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public", `company${ticket.companyId}`);
    // detecção ampla de modelos
    const isOpenAIModel = /^gpt-/i.test(openAiSettings.model || "");
    const isGeminiModel = /^gemini-/i.test(openAiSettings.model || "");
    let openai = null;
    let gemini = null;
    if (isOpenAIModel) {
        const openAiIndex = sessionsOpenAi.findIndex(s => s.id === ticket.id);
        if (openAiIndex === -1) {
            openai = new openai_1.default({ apiKey: cleanApiKey(openAiSettings.apiKey) });
            openai.id = ticket.id;
            sessionsOpenAi.push(openai);
        }
        else {
            openai = sessionsOpenAi[openAiIndex];
        }
    }
    else if (isGeminiModel) {
        const geminiIndex = sessionsGemini.findIndex(s => s.id === ticket.id);
        if (geminiIndex === -1) {
            gemini = new generative_ai_1.GoogleGenerativeAI(cleanApiKey(openAiSettings.apiKey));
            gemini.id = ticket.id;
            sessionsGemini.push(gemini);
        }
        else {
            gemini = sessionsGemini[geminiIndex];
        }
    }
    else {
        console.error(`Unsupported model: ${openAiSettings.model}`);
        return;
    }
    // OpenAI para transcrição (se tiver chave específica)
    if (isOpenAIModel && openAiSettings.openAiApiKey && !openai) {
        const openAiIndex = sessionsOpenAi.findIndex(s => s.id === ticket.id);
        if (openAiIndex === -1) {
            openai = new openai_1.default({ apiKey: cleanApiKey(openAiSettings.openAiApiKey || openAiSettings.apiKey) });
            openai.id = ticket.id;
            sessionsOpenAi.push(openai);
        }
        else {
            openai = sessionsOpenAi[openAiIndex];
        }
    }
    // histórico
    const messages = await Message_1.default.findAll({
        where: { ticketId: ticket.id },
        order: [["createdAt", "ASC"]],
        limit: openAiSettings.maxMessages,
    });
    // prompt de sistema
    const clientName = sanitizeName(contact.name || "Amigo(a)");
    const promptSystem = `Instruções do Sistema:
  - Use o nome ${clientName} nas respostas para que o cliente se sinta mais próximo e acolhido.
  - Certifique-se de que a resposta tenha até ${openAiSettings.maxTokens} tokens e termine de forma completa, sem cortes.
  - Sempre que der, inclua o nome do cliente para tornar o atendimento mais pessoal e gentil. se não souber o nome pergunte
  - Se for preciso transferir para outro setor, comece a resposta com 'Ação: Transferir para o setor de atendimento'.
  
  Prompt Específico:
  ${openAiSettings.prompt}
  
  Siga essas instruções com cuidado para garantir um atendimento claro e amigável em todas as respostas.`;
    // texto
    if (msg.message?.conversation || msg.message?.extendedTextMessage?.text) {
        const messagesAI = prepareMessagesAI(messages, isGeminiModel, promptSystem);
        try {
            let responseText = null;
            if (isOpenAIModel && openai) {
                messagesAI.push({ role: "user", content: bodyMessage });
                responseText = await handleOpenAIRequest(openai, messagesAI, openAiSettings);
            }
            else if (isGeminiModel && gemini) {
                responseText = await handleGeminiRequest(gemini, messagesAI, openAiSettings, bodyMessage, promptSystem);
            }
            if (!responseText) {
                console.error("No response from AI provider");
                return;
            }
            await processResponse(responseText, wbot, msg, ticket, contact, openAiSettings, ticketTraking);
        }
        catch (error) {
            const isTicketErr = (error?.message || error) === "ERR_UPDATE_TICKET" ||
                error?.body === "ERR_UPDATE_TICKET" ||
                error?.errMsg === "ERR_UPDATE_TICKET_QUEUE_NOT_FOUND";
            if (isTicketErr) {
                console.error("Ticket update falhou durante resposta da IA (não é erro da IA).");
                return;
            }
            console.error("AI request failed:", {
                provider: isGeminiModel ? "gemini" : "openai",
                status: error?.status || error?.response?.status,
                body: error?.body || error?.response?.data || error?.message
            });
            const userMsg = humanizeAIError(isGeminiModel ? "gemini" : "openai", error);
            const sentMessage = await wbot.sendMessage(msg.key.remoteJid, { text: userMsg });
            try {
                await (0, wbotMessageListener_1.verifyMessage)(sentMessage, ticket, contact);
            }
            catch (_) { }
        }
    }
    // áudio
    else if (msg.message?.audioMessage && mediaSent) {
        const messagesAI = prepareMessagesAI(messages, isGeminiModel, promptSystem);
        try {
            const mediaUrl = mediaSent.mediaUrl.split("/").pop();
            const audioFilePath = `${publicFolder}/${mediaUrl}`;
            if (!fs_1.default.existsSync(audioFilePath)) {
                console.error(`Arquivo de áudio não encontrado: ${audioFilePath}`);
                const sentMessage = await wbot.sendMessage(msg.key.remoteJid, {
                    text: "Desculpe, não foi possível processar seu áudio. Por favor, tente novamente.",
                });
                try {
                    await (0, wbotMessageListener_1.verifyMessage)(sentMessage, ticket, contact);
                }
                catch (_) { }
                return;
            }
            let transcription = null;
            if (isOpenAIModel && openai) {
                const file = fs_1.default.createReadStream(audioFilePath);
                const transcriptionResult = await openai.audio.transcriptions.create({
                    model: "whisper-1",
                    file: file,
                });
                transcription = transcriptionResult.text;
                const sentTranscriptMessage = await wbot.sendMessage(msg.key.remoteJid, {
                    text: `🎤 *Sua mensagem de voz:* ${transcription}`,
                });
                try {
                    await (0, wbotMessageListener_1.verifyMessage)(sentTranscriptMessage, ticket, contact);
                }
                catch (_) { }
                messagesAI.push({ role: "user", content: transcription });
                const responseText = await handleOpenAIRequest(openai, messagesAI, openAiSettings);
                if (responseText) {
                    await processResponse(responseText, wbot, msg, ticket, contact, openAiSettings, ticketTraking);
                }
            }
            else if (isGeminiModel && gemini) {
                const model = gemini.getGenerativeModel({
                    model: openAiSettings.model,
                    systemInstruction: { role: "user", parts: [{ text: promptSystem || "" }] },
                });
                const audioFileBase64 = fs_1.default.readFileSync(audioFilePath, { encoding: "base64" });
                const fileExtension = path_1.default.extname(audioFilePath).toLowerCase();
                let mimeType = "audio/mpeg";
                switch (fileExtension) {
                    case ".wav":
                        mimeType = "audio/wav";
                        break;
                    case ".mp3":
                        mimeType = "audio/mpeg";
                        break;
                    case ".aac":
                        mimeType = "audio/aac";
                        break;
                    case ".ogg":
                        mimeType = "audio/ogg";
                        break;
                    case ".flac":
                        mimeType = "audio/flac";
                        break;
                    case ".aiff":
                        mimeType = "audio/aiff";
                        break;
                }
                const transcriptionRequest = await model.generateContent({
                    contents: [
                        {
                            role: "user",
                            parts: [
                                { text: "Gere uma transcrição precisa deste áudio." },
                                { inlineData: { mimeType, data: audioFileBase64 } },
                            ],
                        },
                    ],
                });
                transcription = transcriptionRequest.response.text();
                const sentTranscriptMessage = await wbot.sendMessage(msg.key.remoteJid, {
                    text: `🎤 *Sua mensagem de voz:* ${transcription}`,
                });
                // (proposital) não salvar confirmação no histórico
                const responseText = await handleGeminiRequest(gemini, messagesAI, openAiSettings, transcription, promptSystem);
                if (responseText) {
                    await processResponse(responseText, wbot, msg, ticket, contact, openAiSettings, ticketTraking);
                }
            }
            if (!transcription) {
                console.warn("Transcrição vazia recebida");
                const sentMessage = await wbot.sendMessage(msg.key.remoteJid, {
                    text: "Desculpe, não consegui entender o áudio. Por favor, tente novamente ou envie uma mensagem de texto.",
                });
                try {
                    await (0, wbotMessageListener_1.verifyMessage)(sentMessage, ticket, contact);
                }
                catch (_) { }
            }
        }
        catch (error) {
            console.error("Erro no processamento de áudio:", error);
            const errorMessage = error?.response?.error?.message || error.message || "Erro desconhecido";
            const sentMessage = await wbot.sendMessage(msg.key.remoteJid, {
                text: `Desculpe, houve um erro ao processar sua mensagem de áudio: ${errorMessage}`,
            });
            try {
                await (0, wbotMessageListener_1.verifyMessage)(sentMessage, ticket, contact);
            }
            catch (_) { }
        }
    }
};
exports.handleOpenAi = handleOpenAi;
