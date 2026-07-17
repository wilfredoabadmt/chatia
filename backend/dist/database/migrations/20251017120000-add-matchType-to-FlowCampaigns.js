"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("FlowCampaigns", "matchType", {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: false,
            defaultValue: "exact"
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("FlowCampaigns", "matchType");
    }
};
