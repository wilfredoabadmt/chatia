"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Company_1 = __importDefault(require("../../models/Company"));
const Plan_1 = __importDefault(require("../../models/Plan"));
/**
 * Lista empresas com suporte a busca e paginação
 *
 * @param searchParam - Termo de busca (name, email, document, phone) - case-insensitive
 * @param pageNumber - Número da página (padrão: "1")
 * @returns Lista de empresas, contador total e flag hasMore
 *
 * @example
 * // Sem filtro (retorna todas)
 * ListCompaniesService({ searchParam: "", pageNumber: "1" })
 *
 * // Com filtro
 * ListCompaniesService({ searchParam: "ACME", pageNumber: "1" })
 */
const ListCompaniesService = async ({ searchParam = "", pageNumber = "1" }) => {
    const limit = 20;
    const offset = limit * (+pageNumber - 1);
    // Trim searchParam para evitar espaços desnecessários
    const trimmedSearch = searchParam?.trim() || "";
    // Construir whereClause condicional para retrocompatibilidade
    const whereClause = trimmedSearch ? {
        [sequelize_1.Op.or]: [
            { name: { [sequelize_1.Op.iLike]: `%${trimmedSearch}%` } },
            { email: { [sequelize_1.Op.iLike]: `%${trimmedSearch}%` } },
            { document: { [sequelize_1.Op.iLike]: `%${trimmedSearch}%` } },
            { phone: { [sequelize_1.Op.iLike]: `%${trimmedSearch}%` } }
        ]
    } : {};
    const { count, rows: companies } = await Company_1.default.findAndCountAll({
        where: whereClause,
        include: [{
                model: Plan_1.default,
                as: "plan",
                attributes: ["name"]
            }],
        limit,
        offset,
        order: [["name", "ASC"]]
    });
    const hasMore = count > offset + companies.length;
    return {
        companies,
        count,
        hasMore
    };
};
exports.default = ListCompaniesService;
