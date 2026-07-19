/** 
 * @TercioSantos-0 |
 * serviço/todas as configurações de 1 empresa |
 * @param:companyId
 */
import CompaniesSettings from "../../models/CompaniesSettings";

interface Request {
  companyId: number;
};

const FindCompanySettingsService = async ({
  companyId
}: Request): Promise<CompaniesSettings> => {
  const [companySettings] = await CompaniesSettings.findOrCreate({
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

export default FindCompanySettingsService;