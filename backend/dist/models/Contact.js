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
var Contact_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const ContactCustomField_1 = __importDefault(require("./ContactCustomField"));
const ContactIdentity_1 = __importDefault(require("./ContactIdentity"));
const Ticket_1 = __importDefault(require("./Ticket"));
const Company_1 = __importDefault(require("./Company"));
const Schedule_1 = __importDefault(require("./Schedule"));
const ContactTag_1 = __importDefault(require("./ContactTag"));
const Tag_1 = __importDefault(require("./Tag"));
const ContactWallet_1 = __importDefault(require("./ContactWallet"));
const ContactProduct_1 = __importDefault(require("./ContactProduct"));
const User_1 = __importDefault(require("./User"));
const Whatsapp_1 = __importDefault(require("./Whatsapp"));
const normalizePhoneNumber_1 = require("../utils/normalizePhoneNumber");
const AppError_1 = __importDefault(require("../errors/AppError"));
const logger_1 = __importDefault(require("../utils/logger"));
let Contact = Contact_1 = class Contact extends sequelize_typescript_1.Model {
    // Getter utilitário (não persiste em DB): chave canônica do chat
    get chatKey() {
        return this.lid ?? this.jid ?? null;
    }
    get urlPicture() {
        if (this.getDataValue("urlPicture")) {
            // BACKEND_URL já inclui a porta, não precisa adicionar PROXY_PORT
            return this.getDataValue("urlPicture") === 'nopicture.png' ?
                `${process.env.FRONTEND_URL}/nopicture.png` :
                `${process.env.BACKEND_URL}/public/company${this.companyId}/contacts/${this.getDataValue("urlPicture")}`;
        }
        return null;
    }
    /**
     * Hook de normalização E.164 para números de telefone
     * Executado antes de criar ou atualizar contatos
     * Controlado pela feature flag FEATURE_CONTACTS_NORMALIZE_E164
     */
    static async normalizeNumberHook(contact) {
        // Pular se feature flag desabilitada
        if (process.env.FEATURE_CONTACTS_NORMALIZE_E164 !== 'true') {
            return;
        }
        // Pular se é grupo
        if (contact.isGroup) {
            return;
        }
        // Pular se número está vazio (permite contatos sem número)
        if (!contact.number || contact.number.trim() === '') {
            logger_1.default.info({
                action: 'contact_without_number',
                contactId: contact.id || 'new',
                message: 'Contact created/updated without phone number',
                companyId: contact.companyId
            });
            return; // Pular normalização, permitir contato sem número
        }
        // Salvar número original para log
        const rawNumber = contact.number;
        // Normalizar
        const normalized = (0, normalizePhoneNumber_1.normalizePhoneNumber)(contact.number);
        if (normalized) {
            logger_1.default.info({
                action: 'contact_number_normalized',
                contactId: contact.id || 'new',
                rawNumber,
                normalizedNumber: normalized,
                companyId: contact.companyId
            });
            contact.number = normalized;
        }
        else {
            logger_1.default.error({
                action: 'contact_number_normalization_failed',
                contactId: contact.id || 'new',
                rawNumber,
                companyId: contact.companyId
            });
            throw new AppError_1.default('ERR_INVALID_PHONE_NUMBER', 400);
        }
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Contact.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "number", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(""),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "profilePicUrl", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Contact.prototype, "isGroup", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Contact.prototype, "disableBot", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Contact.prototype, "acceptAudioMessage", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Contact.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)("whatsapp"),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "channel", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)("manual"),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('manual', 'whatsapp_roster', 'excel_import', 'auto_created', 'chat_import')
    }),
    __metadata("design:type", String)
], Contact.prototype, "source", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(10)),
    __metadata("design:type", String)
], Contact.prototype, "language", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Contact.prototype, "isInAgenda", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Contact.prototype, "followUp", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Contact.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Contact.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Ticket_1.default),
    __metadata("design:type", Array)
], Contact.prototype, "tickets", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ContactCustomField_1.default),
    __metadata("design:type", Array)
], Contact.prototype, "extraInfo", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ContactIdentity_1.default),
    __metadata("design:type", Array)
], Contact.prototype, "identities", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ContactTag_1.default),
    __metadata("design:type", Array)
], Contact.prototype, "contactTags", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Tag_1.default, () => ContactTag_1.default),
    __metadata("design:type", Array)
], Contact.prototype, "tags", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ContactProduct_1.default),
    __metadata("design:type", Array)
], Contact.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Company_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Contact.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Company_1.default),
    __metadata("design:type", Company_1.default)
], Contact.prototype, "company", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Schedule_1.default, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    }),
    __metadata("design:type", Array)
], Contact.prototype, "schedules", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "remoteJid", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "lid", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Contact.prototype, "jid", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Contact.prototype, "isMerged", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.ForeignKey)(() => Contact_1),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Contact.prototype, "mergedIntoContactId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Contact.prototype, "lgpdAcceptedAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Contact.prototype, "pictureUpdated", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Contact.prototype, "urlPicture", null);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => User_1.default, () => ContactWallet_1.default, "contactId", "walletId"),
    __metadata("design:type", Array)
], Contact.prototype, "wallets", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ContactWallet_1.default),
    __metadata("design:type", Array)
], Contact.prototype, "contactWallets", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Whatsapp_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Contact.prototype, "whatsappId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Whatsapp_1.default),
    __metadata("design:type", Whatsapp_1.default)
], Contact.prototype, "whatsapp", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact]),
    __metadata("design:returntype", Promise)
], Contact, "normalizeNumberHook", null);
Contact = Contact_1 = __decorate([
    sequelize_typescript_1.Table
], Contact);
exports.default = Contact;
