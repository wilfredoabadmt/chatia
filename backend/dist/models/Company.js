"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Contact_1 = __importDefault(require("./Contact"));
const Message_1 = __importDefault(require("./Message"));
const Plan_1 = __importDefault(require("./Plan"));
const Queue_1 = __importDefault(require("./Queue"));
const Setting_1 = __importDefault(require("./Setting"));
const Ticket_1 = __importDefault(require("./Ticket"));
const TicketTraking_1 = __importDefault(require("./TicketTraking"));
const User_1 = __importDefault(require("./User"));
const UserRating_1 = __importDefault(require("./UserRating"));
const Whatsapp_1 = __importDefault(require("./Whatsapp"));
const CompaniesSettings_1 = __importDefault(require("./CompaniesSettings"));
const Invoices_1 = __importDefault(require("./Invoices"));
const logger_1 = __importDefault(require("../utils/logger"));
let Company = class Company extends sequelize_typescript_1.Model {
    static async createDemoUser(company) {
        try {
            // 1. Buscar setting de demo user
            const setting = await CompaniesSettings_1.default.findOne({
                where: {
                    companyId: company.id
                }
            });
            // 2. Se habilitado, criar usuário demo
            if (setting?.createDemoUser === 'enabled') {
                // Gerar email único baseado no nome da empresa
                const companySlug = company.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
                const demoEmail = `demo@${companySlug}.local`;
                await User_1.default.create({
                    name: 'Usuário Demo',
                    email: demoEmail,
                    password: 'demo123',
                    profile: 'user',
                    companyId: company.id
                });
                logger_1.default.info({
                    message: 'Demo user created successfully',
                    companyId: company.id,
                    companyName: company.name,
                    demoEmail
                });
            }
        }
        catch (err) {
            logger_1.default.error({
                message: 'Error creating demo user',
                error: err.message,
                companyId: company.id,
                stack: err.stack
            });
            // Não lançar erro para não quebrar criação da empresa
        }
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
        defaultValue: null
    }),
    __metadata("design:type", String)
], Company.prototype, "document", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: "" }),
    __metadata("design:type", String)
], Company.prototype, "paymentMethod", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Company.prototype, "lastLogin", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Company.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "dueDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "recurrence", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.JSONB
    }),
    __metadata("design:type", Array)
], Company.prototype, "schedules", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        comment: "Company specific timezone (e.g., America/Sao_Paulo, America/New_York)"
    }),
    __metadata("design:type", String)
], Company.prototype, "timezone", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Plan_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Company.prototype, "planId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Plan_1.default),
    __metadata("design:type", Plan_1.default)
], Company.prototype, "plan", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "folderSize", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "numberFileFolder", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "updatedAtFolder", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => User_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => UserRating_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "userRatings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Queue_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "queues", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Whatsapp_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "whatsapps", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Message_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "messages", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Contact_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "contacts", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Setting_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "settings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CompaniesSettings_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", CompaniesSettings_1.default)
], Company.prototype, "companieSettings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Ticket_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "tickets", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TicketTraking_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "ticketTrankins", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Invoices_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Company.prototype, "invoices", void 0);
__decorate([
    sequelize_typescript_1.AfterCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Company]),
    __metadata("design:returntype", Promise)
], Company, "createDemoUser", null);
Company = __decorate([
    sequelize_typescript_1.Table
], Company);
exports.default = Company;
