"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.createTable("ContactIdentities", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            companyId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: { model: "Companies", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            contactId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: { model: "Contacts", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            identityType: {
                type: sequelize_1.DataTypes.ENUM("lid", "jid", "phone"),
                allowNull: false
            },
            identityValue: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            isPrimary: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: false
            },
            lastSeenAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW
            }
        });
        // Constraint: mesma identidade não pode pertencer a dois contatos na mesma empresa
        await queryInterface.addIndex("ContactIdentities", ["companyId", "identityType", "identityValue"], {
            unique: true,
            name: "idx_contact_identities_unique"
        });
        // Índice para busca rápida por valor de identidade (independente do tipo)
        await queryInterface.addIndex("ContactIdentities", ["companyId", "identityValue"], {
            name: "idx_contact_identities_lookup"
        });
        // Índice para busca por contato
        await queryInterface.addIndex("ContactIdentities", ["contactId"], {
            name: "idx_contact_identities_contact"
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("ContactIdentities");
    }
};
