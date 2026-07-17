"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Company_1 = __importDefault(require("../../models/Company"));
const Setting_1 = __importDefault(require("../../models/Setting"));
class TimezoneService {
    /**
     * Get the default timezone set by super admin
     */
    static async getDefaultTimezone() {
        const setting = await Setting_1.default.findOne({
            where: { key: "defaultTimezone" }
        });
        return setting?.value || "America/Sao_Paulo";
    }
    /**
     * Get company specific timezone
     */
    static async getCompanyTimezone(companyId) {
        const company = await Company_1.default.findByPk(companyId, {
            attributes: ["timezone"]
        });
        if (!company) {
            throw new AppError_1.default("ERR_NO_COMPANY_FOUND", 404);
        }
        return company.timezone;
    }
    /**
     * Get the effective timezone for a company (company timezone or default)
     */
    static async getEffectiveTimezone(companyId) {
        const companyTimezone = await this.getCompanyTimezone(companyId);
        if (companyTimezone) {
            return companyTimezone;
        }
        return await this.getDefaultTimezone();
    }
    /**
     * List all available timezones
     */
    static listAvailableTimezones() {
        return moment_timezone_1.default.tz.names().filter(tz => {
            // Filter to show only major timezones (optional)
            return tz.includes('/') && !tz.startsWith('Etc/');
        }).sort();
    }
    /**
     * Format date with specific timezone
     */
    static formatDateWithTimezone(date, timezone) {
        if (!this.isValidTimezone(timezone)) {
            throw new AppError_1.default("ERR_INVALID_TIMEZONE", 400);
        }
        return (0, moment_timezone_1.default)(date).tz(timezone).format("YYYY-MM-DD HH:mm:ss z");
    }
    /**
     * Validate if timezone is valid
     */
    static isValidTimezone(timezone) {
        return moment_timezone_1.default.tz.names().includes(timezone);
    }
    /**
     * Get current time in company timezone
     */
    static async getCurrentTimeInCompanyTimezone(companyId) {
        const timezone = await this.getEffectiveTimezone(companyId);
        return (0, moment_timezone_1.default)().tz(timezone).format("YYYY-MM-DD HH:mm:ss z");
    }
    /**
     * Convert date from one timezone to another
     */
    static convertTimezone(date, fromTimezone, toTimezone) {
        if (!this.isValidTimezone(fromTimezone) || !this.isValidTimezone(toTimezone)) {
            throw new AppError_1.default("ERR_INVALID_TIMEZONE", 400);
        }
        return moment_timezone_1.default.tz(date, fromTimezone).tz(toTimezone).format("YYYY-MM-DD HH:mm:ss z");
    }
}
exports.default = TimezoneService;
