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
const Company_1 = __importDefault(require("./Company"));
const Contact_1 = __importDefault(require("./Contact"));
const Whatsapp_1 = __importDefault(require("./Whatsapp"));
let PendingIdentityResolution = class PendingIdentityResolution extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PendingIdentityResolution.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Company_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PendingIdentityResolution.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Company_1.default),
    __metadata("design:type", Company_1.default)
], PendingIdentityResolution.prototype, "company", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Whatsapp_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PendingIdentityResolution.prototype, "whatsappId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Whatsapp_1.default),
    __metadata("design:type", Whatsapp_1.default)
], PendingIdentityResolution.prototype, "whatsapp", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PendingIdentityResolution.prototype, "lidValue", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PendingIdentityResolution.prototype, "messageWid", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], PendingIdentityResolution.prototype, "messageDataJson", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PendingIdentityResolution.prototype, "pushName", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)("pending"),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.ENUM("pending", "resolved", "expired")),
    __metadata("design:type", String)
], PendingIdentityResolution.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Contact_1.default),
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PendingIdentityResolution.prototype, "resolvedContactId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Contact_1.default),
    __metadata("design:type", Contact_1.default)
], PendingIdentityResolution.prototype, "resolvedContact", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], PendingIdentityResolution.prototype, "resolvedAt", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], PendingIdentityResolution.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], PendingIdentityResolution.prototype, "updatedAt", void 0);
PendingIdentityResolution = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "PendingIdentityResolutions" })
], PendingIdentityResolution);
exports.default = PendingIdentityResolution;
