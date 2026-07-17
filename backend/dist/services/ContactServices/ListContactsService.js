"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Contact_1 = __importDefault(require("../../models/Contact"));
const Ticket_1 = __importDefault(require("../../models/Ticket"));
const ContactTag_1 = __importDefault(require("../../models/ContactTag"));
const lodash_1 = require("lodash");
const Tag_1 = __importDefault(require("../../models/Tag"));
const ContactProduct_1 = __importDefault(require("../../models/ContactProduct"));
const remove_accents_1 = __importDefault(require("remove-accents"));
const Whatsapp_1 = __importDefault(require("../../models/Whatsapp"));
const User_1 = __importDefault(require("../../models/User"));
const ListContactsService = async ({ searchParam = "", pageNumber = "1", companyId, tagsIds, isGroup, userId, profile, canViewAllContacts, source, onlyAgenda }) => {
    let whereCondition = {};
    // Lógica principal de restrição de contatos
    // Se o perfil do usuário não for 'admin', aplicamos o filtro.
    if (!(profile === "admin" || canViewAllContacts)) {
        // 1. Busca todos os 'contactId' da tabela de Tickets que pertencem ao 'userId' atual.
        const userTickets = await Ticket_1.default.findAll({
            where: { userId },
            attributes: ["contactId"],
            group: ["contactId"] // Agrupa para obter IDs de contato únicos
        });
        // 2. Mapeia o resultado para um array de números (IDs dos contatos)
        const contactIds = userTickets.map(t => t.contactId);
        // 3. Adiciona a condição à query: o ID do contato DEVE estar na lista de IDs que o usuário atendeu.
        // Se o usuário não atendeu nenhum ticket, a lista 'contactIds' será vazia e nenhum contato será retornado.
        whereCondition.id = {
            [sequelize_1.Op.in]: contactIds
        };
    }
    if (searchParam) {
        const sanitizedSearchParam = (0, remove_accents_1.default)(searchParam.toLocaleLowerCase().trim());
        whereCondition = {
            ...whereCondition,
            [sequelize_1.Op.or]: [
                {
                    name: (0, sequelize_1.where)((0, sequelize_1.fn)("LOWER", (0, sequelize_1.fn)("unaccent", (0, sequelize_1.col)("Contact.name"))), "LIKE", `%${sanitizedSearchParam}%`)
                },
                { number: { [sequelize_1.Op.like]: `%${sanitizedSearchParam}%` } }
            ]
        };
    }
    whereCondition = {
        ...whereCondition,
        companyId
    };
    if (Array.isArray(tagsIds) && tagsIds.length > 0) {
        const contactTagFilter = [];
        const contactTags = await ContactTag_1.default.findAll({
            where: { tagId: { [sequelize_1.Op.in]: tagsIds } }
        });
        if (contactTags) {
            contactTagFilter.push(contactTags.map(t => t.contactId));
        }
        const contactTagsIntersection = (0, lodash_1.intersection)(...contactTagFilter);
        whereCondition = {
            ...whereCondition,
            id: {
                [sequelize_1.Op.in]: contactTagsIntersection
            }
        };
    }
    if (isGroup === "false") {
        console.log("isGroup", isGroup);
        whereCondition = {
            ...whereCondition,
            isGroup: false
        };
    }
    // Filtro por source (se feature flag ativa)
    if (source && process.env.FEATURE_CONTACTS_SOURCE_FIELD === 'true') {
        whereCondition = {
            ...whereCondition,
            source
        };
    }
    // Filtro por isInAgenda (somente contatos da agenda)
    if (onlyAgenda === true && process.env.FEATURE_CONTACTS_ONLY_AGENDA_FILTER === 'true') {
        whereCondition = {
            ...whereCondition,
            isInAgenda: true
        };
    }
    const limit = 100;
    const offset = limit * (+pageNumber - 1);
    // Contagem total sem filtros (para header X-Total-Count-All)
    const totalAll = await Contact_1.default.count({
        where: { companyId }
    });
    const { count, rows: contacts } = await Contact_1.default.findAndCountAll({
        where: whereCondition,
        attributes: [
            "id", "name", "number", "email", "followUp", "isGroup", "urlPicture",
            "active", "companyId", "channel",
            // Condicionar novos campos à feature flag para evitar erro SQL quando campos não existem
            ...(process.env.FEATURE_CONTACTS_SOURCE_FIELD === 'true' ? ["source"] : []),
            ...(process.env.FEATURE_CONTACTS_ONLY_AGENDA_FILTER === 'true' ? ["isInAgenda"] : [])
        ],
        limit,
        include: [
            {
                model: Tag_1.default,
                as: "tags",
                attributes: ["id", "name", "color"]
            },
            {
                model: ContactProduct_1.default,
                as: "products",
                attributes: ["id", "name", "status"]
            },
            {
                model: Ticket_1.default,
                as: "tickets",
                attributes: ["id", "status", "userId"],
                where: { status: { [sequelize_1.Op.in]: ["open", "pending"] } },
                required: false,
                include: [
                    {
                        model: User_1.default,
                        as: "user",
                        attributes: ["id", "name"]
                    }
                ]
            },
            {
                model: Whatsapp_1.default,
                as: "whatsapp",
                attributes: ["id", "name"]
            }
        ],
        offset,
        order: [["name", "ASC"]]
    });
    const hasMore = count > offset + contacts.length;
    return {
        contacts,
        count,
        hasMore,
        totalAll
    };
};
exports.default = ListContactsService;
