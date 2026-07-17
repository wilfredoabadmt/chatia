"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        // Soft merge: em vez de deletar contatos fantasma, marcar como merged
        await queryInterface.addColumn("Contacts", "mergedIntoContactId", {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            references: { model: "Contacts", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        });
        await queryInterface.addColumn("Contacts", "isMerged", {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("Contacts", "mergedIntoContactId");
        await queryInterface.removeColumn("Contacts", "isMerged");
    }
};
