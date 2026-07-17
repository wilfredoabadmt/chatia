"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlowCampaign_1 = require("../../models/FlowCampaign");
const UpdateFlowCampaignService = async ({ companyId, name, flowId, phrase, id, status, matchType }) => {
    try {
        const flow = await FlowCampaign_1.FlowCampaignModel.update({ name, phrase, flowId, status, matchType }, {
            where: { id: id }
        });
        return 'ok';
    }
    catch (error) {
        console.error("Erro ao inserir o usuário:", error);
        return error;
    }
};
exports.default = UpdateFlowCampaignService;
