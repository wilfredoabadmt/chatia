"use strict";
// ARQUIVO COMPLETO: backend/src/controllers/UserController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAvatar = exports.upload = exports.updateLanguage = exports.getUserCreationStatus = exports.toggleChangeWidht = exports.mediaUpload = exports.list = exports.remove = exports.update = exports.showEmail = exports.show = exports.store = exports.index = void 0;
const socket_1 = require("../libs/socket");
const lodash_1 = require("lodash");
const CheckSettings_1 = __importDefault(require("../helpers/CheckSettings"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const CreateUserService_1 = __importDefault(require("../services/UserServices/CreateUserService"));
const ListUsersService_1 = __importDefault(require("../services/UserServices/ListUsersService"));
const UpdateUserService_1 = __importDefault(require("../services/UserServices/UpdateUserService"));
const ShowUserService_1 = __importDefault(require("../services/UserServices/ShowUserService"));
const DeleteUserService_1 = __importDefault(require("../services/UserServices/DeleteUserService"));
const SimpleListService_1 = __importDefault(require("../services/UserServices/SimpleListService"));
const CreateCompanyService_1 = __importDefault(require("../services/CompanyService/CreateCompanyService"));
const SendMail_1 = require("../helpers/SendMail");
const useDate_1 = require("../utils/useDate");
const ShowCompanyService_1 = __importDefault(require("../services/CompanyService/ShowCompanyService"));
const wbot_1 = require("../libs/wbot");
const FindCompaniesWhatsappService_1 = __importDefault(require("../services/CompanyService/FindCompaniesWhatsappService"));
const User_1 = __importDefault(require("../models/User"));
const lodash_2 = require("lodash");
const ToggleChangeWidthService_1 = __importDefault(require("../services/UserServices/ToggleChangeWidthService"));
const APIShowEmailUserService_1 = __importDefault(require("../services/UserServices/APIShowEmailUserService"));
const Setting_1 = __importDefault(require("../models/Setting"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const index = async (req, res) => {
    const { searchParam, pageNumber } = req.query;
    const { companyId, profile } = req.user;
    const { users, count, hasMore } = await (0, ListUsersService_1.default)({
        searchParam,
        pageNumber,
        companyId,
        profile
    });
    return res.json({ users, count, hasMore });
};
exports.index = index;
const store = async (req, res) => {
    const { email, password, name, phone, profile, companyId: bodyCompanyId, queueIds, companyName, planId, startWork, endWork, whatsappId, allTicket, defaultTheme, defaultMenu, allowGroup, allHistoric, allUserChat, userClosePendingTicket, showDashboard, defaultTicketsManagerWidth = 550, allowRealTime, allowConnections, canViewAllContacts // <<< NOVO: permissão
     } = req.body;
    let userCompanyId = null;
    const { dateToClient } = (0, useDate_1.useDate)();
    if (req.user !== undefined) {
        const { companyId: cId } = req.user;
        userCompanyId = cId;
    }
    if (req.url === "/signup" &&
        (await (0, CheckSettings_1.default)("userCreation")) === "disabled") {
        throw new AppError_1.default("ERR_USER_CREATION_DISABLED", 403);
    }
    else if (req.url !== "/signup" && req.user.profile !== "admin") {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    if (process.env.DEMO === "ON") {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    const companyUser = bodyCompanyId || userCompanyId;
    if (!companyUser) {
        const trialDays = parseInt(process.env.APP_TRIALEXPIRATION || "3", 10);
        const dataNowMoreTrialDays = new Date();
        dataNowMoreTrialDays.setDate(dataNowMoreTrialDays.getDate() + trialDays);
        const date = dataNowMoreTrialDays.toISOString().split("T")[0];
        const companyData = {
            name: companyName,
            email: email,
            phone: phone,
            planId: planId,
            status: true,
            dueDate: date,
            recurrence: "",
            document: "",
            paymentMethod: "",
            password: password,
            companyUserName: name,
            startWork: startWork,
            endWork: endWork,
            defaultTheme: "light",
            defaultMenu: "closed",
            allowGroup: false,
            allHistoric: false,
            userClosePendingTicket: "enabled",
            showDashboard: "disabled",
            defaultTicketsManagerWidth: 550,
            allowRealTime: "disabled",
            allowConnections: "disabled"
        };
        const user = await (0, CreateCompanyService_1.default)(companyData);
        try {
            const _email = {
                to: email,
                subject: `Login e senha da Empresa ${companyName}`,
                text: `Olá ${name}, este é um email sobre o cadastro da ${companyName}!<br><br>
        Segue os dados da sua empresa:<br><br>Nome: ${companyName}<br>Email: ${email}<br>Senha: ${password}<br>Data Vencimento Trial: ${dateToClient(date)}`
            };
            await (0, SendMail_1.SendMail)(_email);
        }
        catch (error) {
            console.log("Não consegui enviar o email");
        }
        try {
            const company = await (0, ShowCompanyService_1.default)(1);
            const whatsappCompany = await (0, FindCompaniesWhatsappService_1.default)(company.id);
            if (whatsappCompany.whatsapps[0].status === "CONNECTED" &&
                (phone !== undefined || !(0, lodash_1.isNil)(phone) || !(0, lodash_1.isEmpty)(phone))) {
                const whatsappId = whatsappCompany.whatsapps[0].id;
                const wbot = (0, wbot_1.getWbot)(whatsappId);
                const body = `Olá ${name}, este é uma mensagem sobre o cadastro da ${companyName}!\n\nSegue os dados da sua empresa:\n\nNome: ${companyName}\nEmail: ${email}\nSenha: ${password}\nData Vencimento Trial: ${dateToClient(date)}`;
                await wbot.sendMessage(`55${phone}@s.whatsapp.net`, { text: body });
            }
        }
        catch (error) {
            console.log("Não consegui enviar a mensagem");
        }
        return res.status(200).json(user);
    }
    if (companyUser) {
        const user = await (0, CreateUserService_1.default)({
            email,
            password,
            name,
            profile,
            companyId: companyUser,
            queueIds,
            startWork,
            endWork,
            whatsappId,
            allTicket,
            defaultTheme,
            defaultMenu,
            allowGroup,
            allHistoric,
            allUserChat,
            userClosePendingTicket,
            showDashboard,
            defaultTicketsManagerWidth,
            allowRealTime,
            allowConnections,
            canViewAllContacts: !!canViewAllContacts // <<< coerção booleana
        });
        const io = (0, socket_1.getIO)();
        io.of(userCompanyId.toString()).emit(`company-${userCompanyId}-user`, {
            action: "create",
            user
        });
        return res.status(200).json(user);
    }
    // fallback (nunca chega aqui)
    return res.status(400).json({ error: "Bad request" });
};
exports.store = store;
// backend/src/controllers/UserController.ts
const show = async (req, res) => {
    const { userId } = req.params;
    const { companyId } = req.user;
    const user = await (0, ShowUserService_1.default)(userId, companyId);
    // LOG útil de depuração
    console.log("DADOS DO USUÁRIO SENDO ENVIADOS PARA O FRONTEND:", user.toJSON());
    return res.status(200).json(user);
};
exports.show = show;
const showEmail = async (req, res) => {
    const { email } = req.params;
    const user = await (0, APIShowEmailUserService_1.default)(email);
    return res.status(200).json(user);
};
exports.showEmail = showEmail;
const update = async (req, res) => {
    if (process.env.DEMO === "ON") {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    const { id: requestUserId, companyId, profile } = req.user;
    const { userId } = req.params;
    const userData = req.body;
    // PERMISSÃO: se não for admin, só pode alterar o próprio perfil
    if (profile !== "admin" && Number(userId) !== Number(requestUserId)) {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    // coerção booleana se vier "1"/"0" ou true/false
    if (Object.prototype.hasOwnProperty.call(userData, "canViewAllContacts")) {
        userData.canViewAllContacts = !!userData.canViewAllContacts;
    }
    const user = await (0, UpdateUserService_1.default)({
        userData,
        userId,
        companyId,
        requestUserId: +requestUserId
    });
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`).emit(`company-${companyId}-user`, {
        action: "update",
        user
    });
    return res.status(200).json(user);
};
exports.update = update;
const remove = async (req, res) => {
    const { userId } = req.params;
    const { companyId, profile } = req.user;
    if (profile !== "admin") {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    if (process.env.DEMO === "ON") {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    const user = await User_1.default.findOne({
        where: { id: userId }
    });
    if (!user || companyId !== user.companyId) {
        return res
            .status(400)
            .json({ error: "Você não possui permissão para acessar este recurso!" });
    }
    if (user.id === 1 || user.email === "admin@admin.com") {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    {
        await (0, DeleteUserService_1.default)(userId, companyId);
        const io = (0, socket_1.getIO)();
        io.of(`/workspace-${companyId}`).emit(`company-${companyId}-user`, {
            action: "delete",
            userId
        });
        return res.status(200).json({ message: "User deleted" });
    }
};
exports.remove = remove;
const list = async (req, res) => {
    const { companyId } = req.query;
    const { companyId: userCompanyId } = req.user;
    const users = await (0, SimpleListService_1.default)({
        companyId: companyId ? +companyId : userCompanyId
    });
    return res.status(200).json(users);
};
exports.list = list;
const mediaUpload = async (req, res) => {
    const { userId } = req.params;
    const { companyId, id: requesterId, profile } = req.user;
    const files = req.files;
    const file = (0, lodash_2.head)(files);
    // PERMISSÃO: só o próprio usuário ou admin pode trocar a foto
    if (profile !== "admin" && Number(userId) !== Number(requesterId)) {
        throw new AppError_1.default("ERR_NO_PERMISSION", 403);
    }
    try {
        let user = await User_1.default.findByPk(userId);
        if (!user)
            throw new AppError_1.default("User not found", 404);
        if (!file)
            throw new AppError_1.default("Arquivo não enviado.", 400);
        user.profileImage = file.filename.replace("/", "-");
        await user.save();
        user = await (0, ShowUserService_1.default)(userId, companyId);
        const io = (0, socket_1.getIO)();
        io.of(`/workspace-${companyId}`).emit(`company-${companyId}-user`, {
            action: "update",
            user
        });
        return res.status(200).json({ user, message: "Imagem atualizada" });
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
};
exports.mediaUpload = mediaUpload;
const toggleChangeWidht = async (req, res) => {
    const { userId } = req.params;
    const { defaultTicketsManagerWidth } = req.body;
    const { companyId } = req.user;
    const user = await (0, ToggleChangeWidthService_1.default)({
        userId,
        defaultTicketsManagerWidth
    });
    const io = (0, socket_1.getIO)();
    io.of(`/workspace-${companyId}`).emit(`company-${companyId}-user`, {
        action: "update",
        user
    });
    return res.status(200).json(user);
};
exports.toggleChangeWidht = toggleChangeWidht;
const getUserCreationStatus = async (req, res) => {
    try {
        const setting = await Setting_1.default.findOne({
            where: {
                companyId: 1,
                key: "userCreation"
            }
        });
        if (!setting) {
            return res.status(200).json({ userCreation: "disabled" }); // Valor padrão
        }
        return res.status(200).json({ userCreation: setting.value });
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: "Failed to fetch user creation status" });
    }
};
exports.getUserCreationStatus = getUserCreationStatus;
const updateLanguage = async (req, res) => {
    try {
        const { userId } = req.params;
        const { language } = req.body;
        const { profile } = req.user;
        // Validação básica do idioma
        const validLanguages = ["pt-BR", "en", "es", "tr"];
        if (!language || !validLanguages.includes(language)) {
            return res.status(400).json({
                error: "Invalid language. Must be one of: pt-BR, en, es, tr"
            });
        }
        const user = await User_1.default.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Apenas admins podem alterar o idioma.
        if (profile !== "admin") {
            throw new AppError_1.default("ERR_NO_PERMISSION", 403);
        }
        await user.update({ language });
        return res.status(200).json({ id: user.id, language: user.language });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.updateLanguage = updateLanguage;
// Configuração do multer
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path_1.default.resolve(__dirname, "..", "..", "public", "avatar");
        if (!fs_1.default.existsSync(uploadPath)) {
            fs_1.default.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const ext = path_1.default.extname(file.originalname);
        const fileName = `${Date.now()}-${file.fieldname}${ext}`;
        cb(null, fileName);
    }
});
exports.upload = (0, multer_1.default)({ storage });
const uploadAvatar = async (req, res) => {
    const userId = req.params.userId;
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: "Arquivo não enviado." });
    }
    try {
        const user = await User_1.default.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
        user.profileImage = `avatar/${file.filename}`;
        await user.save();
        return res
            .status(200)
            .json({ success: true, profileImage: user.profileImage });
    }
    catch (err) {
        return res.status(500).json({ error: "Erro ao salvar imagem." });
    }
};
exports.uploadAvatar = uploadAvatar;
