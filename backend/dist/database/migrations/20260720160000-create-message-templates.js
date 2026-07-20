"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable("MessageTemplates", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            language: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false
            },
            category: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            status: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: false,
                defaultValue: "PENDING"
            },
            body: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            components: {
                type: sequelize_1.DataTypes.JSONB,
                allowNull: true
            },
            header: {
                type: sequelize_1.DataTypes.JSONB,
                allowNull: true
            },
            buttons: {
                type: sequelize_1.DataTypes.JSONB,
                allowNull: true
            },
            metaTemplateId: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            companyId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "Companies",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("MessageTemplates");
    }
};
