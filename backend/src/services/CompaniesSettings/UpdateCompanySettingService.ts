/** 
 * @TercioSantos-0 |
 * serviço/atualizar 1 configuração da empresa |
 * @params:companyId/column(name)/data
 */
import CompaniesSettings from "../../models/CompaniesSettings";

type Params = {
  companyId: number;
  column: string;
  data: any;
};

const UpdateCompanySettingsService = async ({
  companyId,
  column,
  data
}: Params): Promise<any> => {
  const [settings] = await CompaniesSettings.findOrCreate({
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

  let value: any = data;
  if (data === "true" || data === true) {
    value = true;
  } else if (data === "false" || data === false) {
    value = false;
  }

  await settings.update({
    [column]: value
  });

  return settings;
};

export default UpdateCompanySettingsService;