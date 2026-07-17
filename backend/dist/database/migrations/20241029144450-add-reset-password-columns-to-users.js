"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("Users", "resetPasswordToken", {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        });
        await queryInterface.addColumn("Users", "resetPasswordExpires", {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("Users", "resetPasswordToken");
        await queryInterface.removeColumn("Users", "resetPasswordExpires");
    }
};
