"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.store = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const TicketTag_1 = __importDefault(require("../models/TicketTag"));
const Tag_1 = __importDefault(require("../models/Tag"));
const socket_1 = require("../libs/socket");
const ShowTicketService_1 = __importDefault(require("../services/TicketServices/ShowTicketService"));
const store = async (req, res) => {
    const { ticketId, tagId } = req.params;
    const { companyId } = req.user;
    try {
        // SECURITY: Validate ticket belongs to company BEFORE creating tag
        const ticket = await (0, ShowTicketService_1.default)(ticketId, companyId);
        // SECURITY: Validate tag exists, is Kanban type, and belongs to company
        const tag = await Tag_1.default.findOne({
            where: {
                id: tagId,
                kanban: 1,
                companyId
            }
        });
        if (!tag) {
            return res.status(400).json({ error: 'Tag não encontrada ou não é do tipo Kanban.' });
        }
        // Create TicketTag after validations pass
        const ticketTag = await TicketTag_1.default.create({ ticketId, tagId });
        // Re-fetch ticket with updated tags
        const updatedTicket = await (0, ShowTicketService_1.default)(ticketId, companyId);
        // FIXED: Use correct namespace pattern /workspace-{companyId}
        const io = (0, socket_1.getIO)();
        io.of(`/workspace-${companyId}`)
            .emit(`company-${companyId}-ticket`, {
            action: "update",
            ticket: updatedTicket
        });
        return res.status(201).json(ticketTag);
    }
    catch (error) {
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Failed to store ticket tag.' });
    }
};
exports.store = store;
/*
export const remove = async (req: Request, res: Response): Promise<Response> => {
  const { ticketId } = req.params;

  console.log("remove");
  console.log(req.params);

  try {
    await TicketTag.destroy({ where: { ticketId } });
    return res.status(200).json({ message: 'Ticket tags removed successfully.' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to remove ticket tags.' });
  }
};
*/
const remove = async (req, res) => {
    const { ticketId } = req.params;
    const { companyId } = req.user;
    try {
        // SECURITY: Validate ticket belongs to company BEFORE any operation
        const ticket = await (0, ShowTicketService_1.default)(ticketId, companyId);
        // Retrieve tagIds associated with the provided ticketId from TicketTags
        const ticketTags = await TicketTag_1.default.findAll({ where: { ticketId } });
        const tagIds = ticketTags.map((ticketTag) => ticketTag.tagId);
        // SECURITY: Find tagIds with kanban=1 AND companyId (multi-tenant filter)
        const tagsWithKanbanOne = await Tag_1.default.findAll({
            where: {
                id: tagIds,
                kanban: 1,
                companyId // ADDED: Multi-tenant filter
            },
        });
        // Remove the tagIds with kanban = 1 from TicketTags
        const tagIdsWithKanbanOne = tagsWithKanbanOne.map((tag) => tag.id);
        if (tagIdsWithKanbanOne.length > 0) {
            await TicketTag_1.default.destroy({ where: { ticketId, tagId: tagIdsWithKanbanOne } });
        }
        // Re-fetch ticket with updated tags
        const updatedTicket = await (0, ShowTicketService_1.default)(ticketId, companyId);
        // FIXED: Use correct namespace pattern /workspace-{companyId}
        const io = (0, socket_1.getIO)();
        io.of(`/workspace-${companyId}`)
            .emit(`company-${companyId}-ticket`, {
            action: "update",
            ticket: updatedTicket
        });
        return res.status(200).json({ message: 'Ticket tags removed successfully.' });
    }
    catch (error) {
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Failed to remove ticket tags.' });
    }
};
exports.remove = remove;
