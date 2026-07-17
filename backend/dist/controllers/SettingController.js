"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanyTimezone = exports.updateDefaultTimezone = exports.getAvailableTimezones = exports.updateCurrency = exports.getCurrency = exports.storePrivateFile = exports.storeLogo = exports.publicShow = exports.updateOne = exports.getSetting = exports.update = exports.showOne = exports.index = void 0;
const socket_1 = require("../libs/socket");
const AppError_1 = __importDefault(require("../errors/AppError"));
const UpdateSettingService_1 = __importDefault(require("../services/SettingServices/UpdateSettingService"));
const ListSettingsService_1 = __importDefault(require("../services/SettingServices/ListSettingsService"));
const ListSettingsServiceOne_1 = __importDefault(require("../services/SettingServices/ListSettingsServiceOne"));
const GetSettingService_1 = __importDefault(require("../services/SettingServices/GetSettingService"));
const UpdateOneSettingService_1 = __importDefault(require("../services/SettingServices/UpdateOneSettingService"));
const GetPublicSettingService_1 = __importDefault(require("../services/SettingServices/GetPublicSettingService"));
const index = async (req, res) => {
    const { companyId } = req.user;
    // if (req.user.profile !== "admin") {
    //   throw new AppError("ERR_NO_PERMISSION", 403);
    // }
    const settings = await (0, ListSettingsService_1.default)({ companyId });
    return res.status(200).json(settings);
};
exports.index = index;
const showOne = async (req, res) => {
    const { companyId } = req.user;
    const { settingKey: key } = req.params;
    console.log("|======== GetPublicSettingService ========|");
    console.log("key", key);
    console.log("|=========================================|");
    const settingsTransfTicket = await (0, ListSettingsServiceOne_1.default)({ companyId: companyId, key: key });
    return res.status(200).json(settingsTransfTicket);
};
exports.showOne = showOne;
const update = async (req, res) => {
    if (req.user.profile !== "admin") {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    const { settingKey: key } = req.params;
    const { value } = req.body;
    const { companyId } = req.user;
    const setting = await (0, UpdateSettingService_1.default)({
        key,
        value,
        companyId
    });
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`)
        .emit(`company-${companyId}-settings`, {
        action: "update",
        setting
    });
    return res.status(200).json(setting);
};
exports.update = update;
const getSetting = async (req, res) => {
    const { settingKey: key } = req.params;
    const setting = await (0, GetSettingService_1.default)({ key });
    return res.status(200).json(setting);
};
exports.getSetting = getSetting;
const updateOne = async (req, res) => {
    const { settingKey: key } = req.params;
    const { value } = req.body;
    const setting = await (0, UpdateOneSettingService_1.default)({
        key,
        value
    });
    return res.status(200).json(setting);
};
exports.updateOne = updateOne;
const publicShow = async (req, res) => {
    console.log("|=============== publicShow  ==============|");
    const { settingKey: key } = req.params;
    const settingValue = await (0, GetPublicSettingService_1.default)({ key });
    return res.status(200).json(settingValue);
};
exports.publicShow = publicShow;
const storeLogo = async (req, res) => {
    const file = req.file;
    const { mode } = req.body;
    const { companyId } = req.user;
    const validModes = ["Light", "Dark", "Favicon"];
    console.log("|=============== storeLogo  ==============|", exports.storeLogo);
    if (validModes.indexOf(mode) === -1) {
        return res.status(406);
    }
    if (file && file.mimetype.startsWith("image/")) {
        const setting = await (0, UpdateSettingService_1.default)({
            key: `appLogo${mode}`,
            value: file.filename,
            companyId
        });
        return res.status(200).json(setting.value);
    }
    return res.status(406);
};
exports.storeLogo = storeLogo;
const storePrivateFile = async (req, res) => {
    const file = req.file;
    const { settingKey } = req.body;
    const { companyId } = req.user;
    console.log("|=============== storePrivateFile  ==============|", exports.storeLogo);
    const setting = await (0, UpdateSettingService_1.default)({
        key: `_${settingKey}`,
        value: file.filename,
        companyId
    });
    return res.status(200).json(setting.value);
};
exports.storePrivateFile = storePrivateFile;
const getCurrency = async (req, res) => {
    const { getCurrency, getSupportedCurrencies } = await Promise.resolve().then(() => __importStar(require("../services/CurrencyService")));
    try {
        const currency = await getCurrency();
        const supportedCurrencies = getSupportedCurrencies();
        return res.status(200).json({
            systemCurrency: currency,
            supported: supportedCurrencies
        });
    }
    catch (error) {
        console.error('Error getting currency:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getCurrency = getCurrency;
const updateCurrency = async (req, res) => {
    const { updateCurrency } = await Promise.resolve().then(() => __importStar(require("../services/CurrencyService")));
    try {
        const { systemCurrency, currencyCode } = req.body;
        // Aceitar tanto o formato novo quanto o antigo
        const code = systemCurrency?.code || currencyCode;
        if (!code) {
            return res.status(400).json({ error: 'Currency code is required' });
        }
        const setting = await updateCurrency({
            currencyData: { code, symbol: '', locale: '' },
            userId: req.user.id
        });
        return res.status(200).json({
            message: 'Currency updated successfully',
            setting
        });
    }
    catch (error) {
        console.error('Error updating currency:', error);
        if (error.message === "ERR_NO_PERMISSION_CURRENCY") {
            return res.status(403).json({ error: 'Only super-admin can update system currency' });
        }
        if (error.message === "ERR_UNSUPPORTED_CURRENCY") {
            return res.status(400).json({ error: 'Unsupported currency code' });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateCurrency = updateCurrency;
// Timezone management endpoints
const getAvailableTimezones = async (req, res) => {
    try {
        const { default: TimezoneService } = await Promise.resolve().then(() => __importStar(require("../services/TimezoneServices/TimezoneService")));
        const timezones = TimezoneService.listAvailableTimezones();
        const defaultTimezone = await TimezoneService.getDefaultTimezone();
        return res.status(200).json({
            availableTimezones: timezones,
            defaultTimezone
        });
    }
    catch (error) {
        console.error('Error getting available timezones:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getAvailableTimezones = getAvailableTimezones;
const updateDefaultTimezone = async (req, res) => {
    try {
        const { default: UpdateDefaultTimezoneService } = await Promise.resolve().then(() => __importStar(require("../services/SettingServices/UpdateDefaultTimezoneService")));
        const { timezone } = req.body;
        const userId = parseInt(req.user.id);
        if (!timezone) {
            return res.status(400).json({ error: 'Timezone is required' });
        }
        const setting = await UpdateDefaultTimezoneService({
            timezone,
            userId
        });
        return res.status(200).json({
            message: 'Default timezone updated successfully',
            setting
        });
    }
    catch (error) {
        console.error('Error updating default timezone:', error);
        if (error.message === "ERR_NO_PERMISSION") {
            return res.status(403).json({ error: 'Only super-admin can update default timezone' });
        }
        if (error.message === "ERR_INVALID_TIMEZONE") {
            return res.status(400).json({ error: 'Invalid timezone provided' });
        }
        if (error.message === "ERR_NO_USER_FOUND") {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateDefaultTimezone = updateDefaultTimezone;
const updateCompanyTimezone = async (req, res) => {
    try {
        const { default: UpdateCompanyTimezoneService } = await Promise.resolve().then(() => __importStar(require("../services/CompanyServices/UpdateCompanyTimezoneService")));
        const { timezone } = req.body;
        const { companyId } = req.user;
        const userId = parseInt(req.user.id);
        if (!timezone) {
            return res.status(400).json({ error: 'Timezone is required' });
        }
        const company = await UpdateCompanyTimezoneService({
            companyId,
            timezone,
            userId
        });
        return res.status(200).json({
            message: 'Company timezone updated successfully',
            company: {
                id: company.id,
                name: company.name,
                timezone: company.timezone
            }
        });
    }
    catch (error) {
        console.error('Error updating company timezone:', error);
        if (error.message === "ERR_SUPER_ADMIN_CANNOT_UPDATE_COMPANY_TIMEZONE") {
            return res.status(403).json({ error: 'Super admin cannot update company timezone' });
        }
        if (error.message === "ERR_INVALID_TIMEZONE") {
            return res.status(400).json({ error: 'Invalid timezone provided' });
        }
        if (error.message === "ERR_NO_COMPANY_FOUND") {
            return res.status(404).json({ error: 'Company not found' });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateCompanyTimezone = updateCompanyTimezone;
