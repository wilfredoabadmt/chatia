"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.removeConstraint("Queues", "Queues_color_key");
    },
    down: async (queryInterface) => {
        await queryInterface.addIndex("Queues", ["color", "companyId"], {
            name: "Queues_color_key",
            unique: true
        });
    }
};
