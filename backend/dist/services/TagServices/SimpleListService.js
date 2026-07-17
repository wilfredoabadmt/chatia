"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Tag_1 = __importDefault(require("../../models/Tag"));
const Contact_1 = __importDefault(require("../../models/Contact"));
const ListService = async ({ companyId, searchParam, kanban = 0 }) => {
    let whereCondition = {};
    if (searchParam) {
        whereCondition = {
            [sequelize_1.Op.or]: [
                { name: { [sequelize_1.Op.like]: `%${searchParam}%` } },
                { color: { [sequelize_1.Op.like]: `%${searchParam}%` } }
            ]
        };
    }
    try {
        console.log('🔍 SimpleListService - Iniciando query com:', { companyId, searchParam, kanban });
        const tags = await Tag_1.default.findAll({
            where: { ...whereCondition, companyId, kanban },
            order: [["name", "ASC"]],
            include: [
                {
                    model: Contact_1.default,
                    as: "contacts",
                    attributes: [],
                    through: {
                        attributes: [] // Não trazer colunas de ContactTag
                    }
                }
            ],
            attributes: [
                "id",
                "name",
                "color",
                "kanban",
                "companyId",
                "timeLane",
                "nextLaneId",
                "greetingMessageLane",
                "rollbackLaneId",
                "createdAt",
                "updatedAt",
                [sequelize_1.Sequelize.fn("COUNT", sequelize_1.Sequelize.col("contacts.id")), "contactsCount"]
            ],
            group: [
                "Tag.id",
                "Tag.name",
                "Tag.color",
                "Tag.kanban",
                "Tag.companyId",
                "Tag.timeLane",
                "Tag.nextLaneId",
                "Tag.greetingMessageLane",
                "Tag.rollbackLaneId",
                "Tag.createdAt",
                "Tag.updatedAt"
            ],
            subQuery: false
        });
        console.log('✅ SimpleListService - Query executada com sucesso. Tags encontradas:', tags.length);
        return tags;
    }
    catch (error) {
        console.error('❌ SimpleListService - ERRO NA QUERY:', {
            message: error.message,
            sql: error.sql,
            stack: error.stack,
            companyId,
            searchParam,
            kanban
        });
        throw error;
    }
};
exports.default = ListService;
