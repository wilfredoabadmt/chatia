"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Company_1 = __importDefault(require("../../models/Company"));
const Setting_1 = __importDefault(require("../../models/Setting"));
const User_1 = __importDefault(require("../../models/User"));
const DocumentValidator_1 = require("../../helpers/DocumentValidator");
const logger_1 = __importDefault(require("../../utils/logger"));
const UpdateCompanyService = async (companyData) => {
    const company = await Company_1.default.findByPk(companyData.id);
    const { name, phone, email, status, planId, campaignsEnabled, dueDate, recurrence, document, paymentMethod, password } = companyData;
    if (!company) {
        throw new AppError_1.default("ERR_NO_COMPANY_FOUND", 404);
    }
    const existUser = await User_1.default.findOne({
        where: {
            companyId: company.id,
            email: email
        }
    });
    if (existUser && existUser.email !== company.email) {
        throw new AppError_1.default("Usuário já existe com esse e-mail!", 404);
    }
    const user = await User_1.default.findOne({
        where: {
            companyId: company.id,
            email: company.email
        }
    });
    if (!user) {
        throw new AppError_1.default("ERR_NO_USER_FOUND", 404);
    }
    // Validar document se fornecido (validação adicional)
    if (document !== undefined) {
        const featureFlagEnabled = process.env.FEATURE_COMPANY_DOCUMENT_OPTIONAL !== 'false';
        if (featureFlagEnabled) {
            const normalizedDoc = (0, DocumentValidator_1.normalizeDocument)(document);
            if (normalizedDoc && !(0, DocumentValidator_1.validateCPFOrCNPJ)(normalizedDoc)) {
                throw new AppError_1.default("ERR_COMPANY_INVALID_DOCUMENT", 400);
            }
        }
    }
    await user.update({ email, password });
    await company.update({
        name,
        phone,
        email,
        status,
        planId,
        dueDate,
        recurrence,
        document: (0, DocumentValidator_1.normalizeDocument)(document),
        paymentMethod
    });
    // Log de atualização
    logger_1.default.info({
        message: 'Company updated successfully',
        companyId: company.id,
        companyName: company.name,
        documentUpdated: document !== undefined,
        documentPresent: !!company.document
    });
    if (companyData.campaignsEnabled !== undefined) {
        const [setting, created] = await Setting_1.default.findOrCreate({
            where: {
                companyId: company.id,
                key: "campaignsEnabled"
            },
            defaults: {
                companyId: company.id,
                key: "campaignsEnabled",
                value: `${campaignsEnabled}`
            }
        });
        if (!created) {
            await setting.update({ value: `${campaignsEnabled}` });
        }
    }
    return company;
};
exports.default = UpdateCompanyService;
