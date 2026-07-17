"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("Users", "passwordResetToken", {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        });
        await queryInterface.addColumn("Users", "passwordResetExpires", {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("Users", "passwordResetToken");
        await queryInterface.removeColumn("Users", "passwordResetExpires");
    },
};
