"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const TimezoneService_1 = __importDefault(require("../services/TimezoneServices/TimezoneService"));
const AppError_1 = __importDefault(require("../errors/AppError"));
class DateHelper {
    /**
     * Format date according to company's timezone
     */
    static async formatDate(date, companyId) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            return (0, moment_timezone_1.default)(date).tz(timezone).format("YYYY-MM-DD HH:mm:ss z");
        }
        catch (error) {
            console.error("Error formatting date with timezone:", error);
            return (0, moment_timezone_1.default)(date).format("YYYY-MM-DD HH:mm:ss");
        }
    }
    /**
     * Format date with custom format according to company's timezone
     */
    static async formatDateCustom(date, companyId, format = "YYYY-MM-DD HH:mm:ss") {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            return (0, moment_timezone_1.default)(date).tz(timezone).format(format);
        }
        catch (error) {
            console.error("Error formatting date with custom format:", error);
            return (0, moment_timezone_1.default)(date).format(format);
        }
    }
    /**
     * Parse date string considering company's timezone
     */
    static async parseDate(dateString, companyId) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const momentDate = moment_timezone_1.default.tz(dateString, timezone);
            if (!momentDate.isValid()) {
                throw new AppError_1.default("ERR_INVALID_DATE", 400);
            }
            return momentDate.toDate();
        }
        catch (error) {
            console.error("Error parsing date with timezone:", error);
            throw new AppError_1.default("ERR_INVALID_DATE", 400);
        }
    }
    /**
     * Get current time in company's timezone
     */
    static async getCurrentTime(companyId) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            return (0, moment_timezone_1.default)().tz(timezone).toDate();
        }
        catch (error) {
            console.error("Error getting current time with timezone:", error);
            return new Date();
        }
    }
    /**
     * Get current time formatted in company's timezone
     */
    static async getCurrentTimeFormatted(companyId, format = "YYYY-MM-DD HH:mm:ss z") {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            return (0, moment_timezone_1.default)().tz(timezone).format(format);
        }
        catch (error) {
            console.error("Error getting current time formatted:", error);
            return (0, moment_timezone_1.default)().format(format);
        }
    }
    /**
     * Convert date from one timezone to another
     */
    static convertTimezone(date, fromTz, toTz) {
        if (!TimezoneService_1.default.isValidTimezone(fromTz) || !TimezoneService_1.default.isValidTimezone(toTz)) {
            throw new AppError_1.default("ERR_INVALID_TIMEZONE", 400);
        }
        return moment_timezone_1.default.tz(date, fromTz).tz(toTz).toDate();
    }
    /**
     * Get start of day in company timezone
     */
    static async getStartOfDay(companyId, date) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).tz(timezone).startOf('day').toDate();
        }
        catch (error) {
            console.error("Error getting start of day:", error);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).startOf('day').toDate();
        }
    }
    /**
     * Get end of day in company timezone
     */
    static async getEndOfDay(companyId, date) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).tz(timezone).endOf('day').toDate();
        }
        catch (error) {
            console.error("Error getting end of day:", error);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).endOf('day').toDate();
        }
    }
    /**
     * Get start of week in company timezone
     */
    static async getStartOfWeek(companyId, date) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).tz(timezone).startOf('week').toDate();
        }
        catch (error) {
            console.error("Error getting start of week:", error);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).startOf('week').toDate();
        }
    }
    /**
     * Get end of week in company timezone
     */
    static async getEndOfWeek(companyId, date) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).tz(timezone).endOf('week').toDate();
        }
        catch (error) {
            console.error("Error getting end of week:", error);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).endOf('week').toDate();
        }
    }
    /**
     * Get start of month in company timezone
     */
    static async getStartOfMonth(companyId, date) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).tz(timezone).startOf('month').toDate();
        }
        catch (error) {
            console.error("Error getting start of month:", error);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).startOf('month').toDate();
        }
    }
    /**
     * Get end of month in company timezone
     */
    static async getEndOfMonth(companyId, date) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).tz(timezone).endOf('month').toDate();
        }
        catch (error) {
            console.error("Error getting end of month:", error);
            const targetDate = date || new Date();
            return (0, moment_timezone_1.default)(targetDate).endOf('month').toDate();
        }
    }
    /**
     * Check if date is within business hours for company timezone
     */
    static async isBusinessHours(companyId, date, startHour = 9, endHour = 18) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            const targetDate = date || new Date();
            const momentDate = (0, moment_timezone_1.default)(targetDate).tz(timezone);
            const hour = momentDate.hour();
            const dayOfWeek = momentDate.day(); // 0 = Sunday, 6 = Saturday
            // Check if it's a weekday (Monday to Friday)
            const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
            const isWithinHours = hour >= startHour && hour < endHour;
            return isWeekday && isWithinHours;
        }
        catch (error) {
            console.error("Error checking business hours:", error);
            return false;
        }
    }
    /**
     * Add time to date considering company timezone
     */
    static async addTime(companyId, date, amount, unit) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            return (0, moment_timezone_1.default)(date).tz(timezone).add(amount, unit).toDate();
        }
        catch (error) {
            console.error("Error adding time:", error);
            return (0, moment_timezone_1.default)(date).add(amount, unit).toDate();
        }
    }
    /**
     * Subtract time from date considering company timezone
     */
    static async subtractTime(companyId, date, amount, unit) {
        try {
            const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
            return (0, moment_timezone_1.default)(date).tz(timezone).subtract(amount, unit).toDate();
        }
        catch (error) {
            console.error("Error subtracting time:", error);
            return (0, moment_timezone_1.default)(date).subtract(amount, unit).toDate();
        }
    }
}
exports.default = DateHelper;
