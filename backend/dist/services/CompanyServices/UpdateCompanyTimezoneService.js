"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Company_1 = __importDefault(require("../../models/Company"));
const TimezoneService_1 = __importDefault(require("../TimezoneServices/TimezoneService"));
const socket_1 = require("../../libs/socket");
const User_1 = __importDefault(require("../../models/User"));
const UpdateCompanyTimezoneService = async ({ companyId, timezone, userId }) => {
    // Check if user is super admin
    const user = await User_1.default.findByPk(userId);
    if (user?.super) {
        throw new AppError_1.default("ERR_SUPER_ADMIN_CANNOT_UPDATE_COMPANY_TIMEZONE", 403);
    }
    // Validate timezone
    if (!TimezoneService_1.default.isValidTimezone(timezone)) {
        throw new AppError_1.default("ERR_INVALID_TIMEZONE", 400);
    }
    // Find company
    const company = await Company_1.default.findByPk(companyId);
    if (!company) {
        throw new AppError_1.default("ERR_NO_COMPANY_FOUND", 404);
    }
    // Update company timezone
    await company.update({ timezone });
    // Emit socket event to all company users
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`).emit(`company-${companyId}-timezone-updated`, {
        action: "update",
        timezone,
        updatedBy: userId,
        updatedAt: new Date()
    });
    return company;
};
exports.default = UpdateCompanyTimezoneService;
