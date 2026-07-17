"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/database/migrations/202509171135-add-messageId-to-messages.ts
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (qi) => {
        const table = "Messages";
        const desc = (await qi.describeTable(table)); // <-- tipado
        if (!desc.messageId) { // ok agora
            await qi.addColumn(table, "messageId", {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            });
            await qi.addIndex(table, ["companyId", "messageId"], {
                name: "messages_company_messageId_idx"
            });
        }
    },
    down: async (qi) => {
        const table = "Messages";
        const desc = (await qi.describeTable(table)); // <-- tipado
        if (desc.messageId) {
            await qi.removeIndex(table, "messages_company_messageId_idx").catch(() => { });
            await qi.removeColumn(table, "messageId");
        }
    }
};
