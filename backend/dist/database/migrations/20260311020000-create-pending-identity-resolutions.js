"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.createTable("PendingIdentityResolutions", {
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
            whatsappId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: { model: "Whatsapps", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            lidValue: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            messageWid: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            messageDataJson: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            pushName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            status: {
                type: sequelize_1.DataTypes.ENUM("pending", "resolved", "expired"),
                defaultValue: "pending",
                allowNull: false
            },
            resolvedContactId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: { model: "Contacts", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "SET NULL"
            },
            resolvedAt: {
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
        await queryInterface.addIndex("PendingIdentityResolutions", ["companyId", "lidValue", "status"], {
            name: "idx_pending_identity_lid_status"
        });
        await queryInterface.addIndex("PendingIdentityResolutions", ["status"], {
            name: "idx_pending_identity_status"
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("PendingIdentityResolutions");
    }
};
