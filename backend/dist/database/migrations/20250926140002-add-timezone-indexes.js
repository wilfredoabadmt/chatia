"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Migration: add indexes for timezone fields to improve performance
 * - Add index on Companies.timezone for efficient timezone-based queries
 */
module.exports = {
    async up(queryInterface) {
        const companiesTable = await queryInterface.describeTable("Companies");
        // Add index on timezone field for Companies table if field exists
        if (companiesTable.timezone) {
            await queryInterface.addIndex("Companies", ["timezone"], {
                name: "companies_timezone_idx"
            });
        }
    },
    async down(queryInterface) {
        // Remove timezone index
        try {
            await queryInterface.removeIndex("Companies", "companies_timezone_idx");
        }
        catch (error) {
            console.log("Error removing timezone index:", error);
        }
    }
};
