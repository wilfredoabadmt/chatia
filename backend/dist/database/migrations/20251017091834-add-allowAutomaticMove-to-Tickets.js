"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Tickets", "allowAutomaticMove", {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
            comment: "Flag para controlar se o ticket pode ser movido automaticamente pelo cron job. False quando cliente responde e vai para rollbackLane."
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Tickets", "allowAutomaticMove");
    }
};
