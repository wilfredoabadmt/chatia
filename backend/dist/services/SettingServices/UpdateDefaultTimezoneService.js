"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Setting_1 = __importDefault(require("../../models/Setting"));
const User_1 = __importDefault(require("../../models/User"));
const TimezoneService_1 = __importDefault(require("../TimezoneServices/TimezoneService"));
const socket_1 = require("../../libs/socket");
const UpdateDefaultTimezoneService = async ({ timezone, userId }) => {
    // Validate that user is super admin
    const user = await User_1.default.findByPk(userId, {
        attributes: ["id", "super"]
    });
    if (!user) {
        throw new AppError_1.default("ERR_NO_USER_FOUND", 404);
    }
    if (!user.super) {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    // Validate timezone
    if (!TimezoneService_1.default.isValidTimezone(timezone)) {
        throw new AppError_1.default("ERR_INVALID_TIMEZONE", 400);
    }
    // Update or create default timezone setting
    const [setting] = await Setting_1.default.findOrCreate({
        where: {
            key: "defaultTimezone"
        },
        defaults: {
            key: "defaultTimezone",
            value: timezone,
            companyId: null // Global setting
        }
    });
    // Update the value if setting already exists
    if (setting.value !== timezone) {
        await setting.update({ value: timezone });
    }
    // Emit socket event to all companies (global event)
    const io = (0, socket_1.getIO)();
    // Get all namespaces (companies) to emit the event
    const namespaces = Array.from(io._nsps.keys()).filter(ns => ns !== "/");
    namespaces.forEach(namespace => {
        io.of(namespace).emit("default-timezone-updated", {
            action: "update",
            timezone,
            updatedBy: userId,
            updatedAt: new Date()
        });
    });
    return setting;
};
exports.default = UpdateDefaultTimezoneService;
