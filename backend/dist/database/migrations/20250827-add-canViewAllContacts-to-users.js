"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adiciona a coluna canViewAllContacts na tabela Users.
 * Compatível com o padrão do Sequelize-CLI (o segundo argumento é o "Sequelize" com os DataTypes).
 */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const table = "Users";
        const column = "canViewAllContacts";
        // Garante que só cria se não existir
        const desc = await queryInterface.describeTable(table);
        if (!desc[column]) {
            await queryInterface.addColumn(table, column, {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            });
        }
    },
    down: async (queryInterface) => {
        const table = "Users";
        const column = "canViewAllContacts";
        const desc = await queryInterface.describeTable(table);
        if (desc[column]) {
            await queryInterface.removeColumn(table, column);
        }
    }
};
