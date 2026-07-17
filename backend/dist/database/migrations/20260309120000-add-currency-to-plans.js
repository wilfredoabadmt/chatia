"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Plans", "currency", {
            type: sequelize_1.DataTypes.STRING(3),
            allowNull: false,
            defaultValue: "BRL"
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Plans", "currency");
    }
};
