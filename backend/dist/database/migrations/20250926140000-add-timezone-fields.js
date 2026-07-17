"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/**
 * Migration: add timezone fields for timezone management system
 * - Add optional timezone column to Companies table
 * - Add defaultTimezone setting in Settings table (global configuration for super admin)
 */
module.exports = {
    async up(queryInterface) {
        const companiesTable = await queryInterface.describeTable("Companies");
        const settingsTable = await queryInterface.describeTable("Settings");
        // Add timezone field to Companies table
        if (!companiesTable.timezone) {
            await queryInterface.addColumn("Companies", "timezone", {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                comment: "Company specific timezone (e.g., America/Sao_Paulo, America/New_York)"
            });
        }
        // Check if defaultTimezone setting already exists
        const [results] = await queryInterface.sequelize.query(`
      SELECT COUNT(*) as count FROM "Settings" WHERE key = 'defaultTimezone'
    `);
        // Insert defaultTimezone setting if it doesn't exist
        if (results[0].count === '0') {
            await queryInterface.sequelize.query(`
        INSERT INTO "Settings" (key, value, "companyId", "createdAt", "updatedAt")
        VALUES ('defaultTimezone', 'America/Sao_Paulo', NULL, NOW(), NOW())
      `);
        }
    },
    async down(queryInterface) {
        const companiesTable = await queryInterface.describeTable("Companies");
        // Remove timezone field from Companies
        if (companiesTable.timezone) {
            await queryInterface.removeColumn("Companies", "timezone");
        }
        // Remove defaultTimezone setting
        await queryInterface.sequelize.query(`
      DELETE FROM "Settings" WHERE key = 'defaultTimezone'
    `);
    }
};
