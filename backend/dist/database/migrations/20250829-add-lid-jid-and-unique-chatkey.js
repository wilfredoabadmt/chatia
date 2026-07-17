"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const CONTACTS = `"Contacts"`;
const TICKETS = `"Tickets"`;
const IDX_CONTACTS = `"contacts_company_whats_chatkey_uq"`;
const IDX_TICKETS = `"tickets_company_whats_chatkey_uq"`;
module.exports = {
    up: async (queryInterface, SequelizeLib) => {
        const qi = queryInterface;
        const seq = qi.sequelize;
        const hasColumn = async (table, column) => {
            const [rows] = await seq.query(`SELECT 1 FROM information_schema.columns
         WHERE table_name = ${seq.escape(table.replace(/"/g, ''))}
           AND column_name = ${seq.escape(column)}`);
            return rows.length > 0;
        };
        const hasIndex = async (indexName) => {
            const [rows] = await seq.query(`SELECT 1 FROM pg_indexes
         WHERE schemaname = current_schema()
           AND indexname = ${seq.escape(indexName.replace(/"/g, ''))}`);
            return rows.length > 0;
        };
        // Contacts
        if (!(await hasColumn("Contacts", "lid"))) {
            await qi.addColumn("Contacts", "lid", { type: sequelize_1.DataTypes.TEXT, allowNull: true });
        }
        if (!(await hasColumn("Contacts", "jid"))) {
            await qi.addColumn("Contacts", "jid", { type: sequelize_1.DataTypes.TEXT, allowNull: true });
        }
        // Tickets
        if (!(await hasColumn("Tickets", "lid"))) {
            await qi.addColumn("Tickets", "lid", { type: sequelize_1.DataTypes.TEXT, allowNull: true });
        }
        if (!(await hasColumn("Tickets", "jid"))) {
            await qi.addColumn("Tickets", "jid", { type: sequelize_1.DataTypes.TEXT, allowNull: true });
        }
        // Índices
        if (!(await hasIndex(IDX_CONTACTS))) {
            await seq.query(`CREATE UNIQUE INDEX ${IDX_CONTACTS}
           ON ${CONTACTS} ("companyId","whatsappId", COALESCE("lid","jid"))
           WHERE ("lid" IS NOT NULL OR "jid" IS NOT NULL);`);
        }
        if (!(await hasIndex(IDX_TICKETS))) {
            await seq.query(`CREATE UNIQUE INDEX ${IDX_TICKETS}
           ON ${TICKETS} ("companyId","whatsappId", COALESCE("lid","jid"))
           WHERE ("lid" IS NOT NULL OR "jid" IS NOT NULL);`);
        }
    },
    down: async (queryInterface) => {
        const qi = queryInterface;
        const seq = qi.sequelize;
        const hasColumn = async (table, column) => {
            const [rows] = await seq.query(`SELECT 1 FROM information_schema.columns
         WHERE table_name = ${seq.escape(table.replace(/"/g, ''))}
           AND column_name = ${seq.escape(column)}`);
            return rows.length > 0;
        };
        const hasIndex = async (indexName) => {
            const [rows] = await seq.query(`SELECT 1 FROM pg_indexes
         WHERE schemaname = current_schema()
           AND indexname = ${seq.escape(indexName.replace(/"/g, ''))}`);
            return rows.length > 0;
        };
        if (await hasIndex("tickets_company_whats_chatkey_uq")) {
            await seq.query(`DROP INDEX ${IDX_TICKETS};`);
        }
        if (await hasIndex("contacts_company_whats_chatkey_uq")) {
            await seq.query(`DROP INDEX ${IDX_CONTACTS};`);
        }
        if (await hasColumn("Tickets", "jid"))
            await qi.removeColumn("Tickets", "jid");
        if (await hasColumn("Tickets", "lid"))
            await qi.removeColumn("Tickets", "lid");
        if (await hasColumn("Contacts", "jid"))
            await qi.removeColumn("Contacts", "jid");
        if (await hasColumn("Contacts", "lid"))
            await qi.removeColumn("Contacts", "lid");
    }
};
