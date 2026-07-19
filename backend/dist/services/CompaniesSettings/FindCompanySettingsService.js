"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @TercioSantos-0 |
 * serviço/todas as configurações de 1 empresa |
 * @param:companyId
 */
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
;
const FindCompanySettingsService = async ({ companyId }) => {
    const [companySettings] = await CompaniesSettings_1.default.findOrCreate({
        where: { companyId },
        defaults: {
            companyId,
            hoursCloseTicketsAuto: "9999999999",
            chatBotType: "text",
            acceptCallWhatsapp: "enabled",
            userRandom: "enabled",
            sendGreetingMessageOneQueues: "enabled",
            sendSignMessage: "enabled",
            sendFarewellWaitingTicket: "disabled",
            userRating: "disabled",
            sendGreetingAccepted: "enabled",
            CheckMsgIsGroup: "enabled",
            sendQueuePosition: "disabled",
            scheduleType: "disabled",
            acceptAudioMessageContact: "enabled",
            sendMsgTransfTicket: "disabled",
            enableLGPD: "disabled",
            requiredTag: "disabled",
            lgpdDeleteMessage: "disabled",
            lgpdHideNumber: "disabled",
            lgpdConsent: "disabled",
            lgpdLink: "",
            lgpdMessage: "",
            DirectTicketsToWallets: false,
            closeTicketOnTransfer: false,
            transferMessage: "",
            greetingAcceptedMessage: "",
            AcceptCallWhatsappMessage: "",
            sendQueuePositionMessage: "",
            showNotificationPending: false,
            overrideDefaultTimezone: false,
            createDemoUser: "disabled",
            autoTranslate: "disabled",
            translateApiKey: "",
        }
    });
    return companySettings;
};
exports.default = FindCompanySettingsService;
