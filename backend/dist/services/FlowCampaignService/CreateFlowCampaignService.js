"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlowCampaign_1 = require("../../models/FlowCampaign");
const CreateFlowCampaignService = async ({ userId, name, companyId, phrase, whatsappId, flowId, matchType = "contains", status = true }) => {
    const flow = await FlowCampaign_1.FlowCampaignModel.create({
        userId: userId,
        companyId: companyId,
        name: name,
        phrase: phrase,
        flowId: flowId,
        whatsappId: whatsappId,
        matchType: matchType,
        status: status
    });
    return flow;
};
exports.default = CreateFlowCampaignService;
