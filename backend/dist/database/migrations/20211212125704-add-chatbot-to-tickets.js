"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("Tickets", "chatbot", {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        });
        await queryInterface.addColumn("Tickets", "queueOptionId", {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            references: { model: "QueueOptions", key: "id" },
            onUpdate: "SET NULL",
            onDelete: "SET NULL"
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("Tickets", "queueOptionId");
        await queryInterface.removeColumn("Tickets", "chatbot");
    }
};
