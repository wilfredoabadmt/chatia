"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @TercioSantos-0 |
 * serviço/atualizar 1 configuração da empresa |
 * @params:companyId/column(name)/data
 */
const CompaniesSettings_1 = __importDefault(require("../../models/CompaniesSettings"));
const UpdateCompanySettingsService = async ({ companyId, column, data }) => {
    const [settings] = await CompaniesSettings_1.default.findOrCreate({
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
        }
    });
    let value = data;
    if (data === "true" || data === true) {
        value = true;
    }
    else if (data === "false" || data === false) {
        value = false;
    }
    await settings.update({
        [column]: value
    });
    return settings;
};
exports.default = UpdateCompanySettingsService;
