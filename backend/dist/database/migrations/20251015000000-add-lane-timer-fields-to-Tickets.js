"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return Promise.all([
            queryInterface.addColumn("Tickets", "laneTimerStartedAt", {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                comment: "Data/hora quando o timer da lane foi iniciado (quando atendente enviou mensagem)"
            }),
            queryInterface.addColumn("Tickets", "laneNextMoveAt", {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                comment: "Data/hora quando o ticket deve ser movido automaticamente para nextLaneId"
            })
        ]);
    },
    down: (queryInterface) => {
        return Promise.all([
            queryInterface.removeColumn("Tickets", "laneTimerStartedAt"),
            queryInterface.removeColumn("Tickets", "laneNextMoveAt")
        ]);
    }
};
