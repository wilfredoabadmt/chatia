"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("Prompts", "model", {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: "gpt-3.5-turbo-1106",
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("Prompts", "model");
    },
};
