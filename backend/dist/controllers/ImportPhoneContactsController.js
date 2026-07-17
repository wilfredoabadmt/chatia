"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const ImportContactsService_1 = __importDefault(require("../services/WbotServices/ImportContactsService"));
const store = async (req, res) => {
    const { companyId } = req.user;
    const { whatsappId, filterGroups, onlyAgenda } = req.body;
    await (0, ImportContactsService_1.default)({
        companyId,
        whatsappId: whatsappId ? Number(whatsappId) : undefined,
        filterGroups: filterGroups !== undefined ? filterGroups === 'true' || filterGroups === true : true,
        onlyAgenda: onlyAgenda !== undefined ? onlyAgenda === 'true' || onlyAgenda === true : true
    });
    return res.status(200).json({ message: "Contacts imported successfully" });
};
exports.store = store;
