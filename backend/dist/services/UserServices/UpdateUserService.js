"use strict";
// ARQUIVO COMPLETO E CORRIGIDO: backend/src/services/UserServices/UpdateUserService.ts
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
const Yup = __importStar(require("yup"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const ShowUserService_1 = __importDefault(require("./ShowUserService"));
const Company_1 = __importDefault(require("../../models/Company"));
const UpdateUserService = async ({ userData, userId, companyId, requestUserId }) => {
    const user = await (0, ShowUserService_1.default)(userId, companyId);
    const schema = Yup.object().shape({
        name: Yup.string().min(2),
        email: Yup.string().email(),
        profile: Yup.string(),
        password: Yup.string()
    });
    const { name, email, password, profile, queueIds } = userData;
    try {
        await schema.validate({ name, email, password, profile });
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
    // Cria um objeto para armazenar apenas os dados que serão atualizados.
    const dataToUpdate = {};
    // Preenche o objeto apenas com os campos que foram realmente fornecidos.
    if (userData.email) {
        dataToUpdate.email = userData.email;
    }
    if (userData.name) {
        dataToUpdate.name = userData.name;
    }
    if (userData.password) {
        dataToUpdate.password = userData.password;
    }
    if (userData.profile) {
        dataToUpdate.profile = userData.profile;
    }
    if (userData.startWork) {
        dataToUpdate.startWork = userData.startWork;
    }
    if (userData.endWork) {
        dataToUpdate.endWork = userData.endWork;
    }
    if (userData.farewellMessage) {
        dataToUpdate.farewellMessage = userData.farewellMessage;
    }
    if (userData.allTicket) {
        dataToUpdate.allTicket = userData.allTicket;
    }
    if (userData.defaultTheme) {
        dataToUpdate.defaultTheme = userData.defaultTheme;
    }
    if (userData.defaultMenu) {
        dataToUpdate.defaultMenu = userData.defaultMenu;
    }
    if (userData.allowGroup !== undefined) {
        dataToUpdate.allowGroup = userData.allowGroup;
    }
    if (userData.allHistoric) {
        dataToUpdate.allHistoric = userData.allHistoric;
    }
    if (userData.allUserChat) {
        dataToUpdate.allUserChat = userData.allUserChat;
    }
    if (userData.userClosePendingTicket) {
        dataToUpdate.userClosePendingTicket = userData.userClosePendingTicket;
    }
    if (userData.showDashboard) {
        dataToUpdate.showDashboard = userData.showDashboard;
    }
    if (userData.defaultTicketsManagerWidth) {
        dataToUpdate.defaultTicketsManagerWidth = userData.defaultTicketsManagerWidth;
    }
    if (userData.allowRealTime) {
        dataToUpdate.allowRealTime = userData.allowRealTime;
    }
    if (userData.profileImage) {
        dataToUpdate.profileImage = userData.profileImage;
    }
    if (userData.allowConnections) {
        dataToUpdate.allowConnections = userData.allowConnections;
    }
    if (userData.language) {
        dataToUpdate.language = userData.language;
    }
    // Coerção booleana explícita
    if (userData.canViewAllContacts !== undefined) {
        dataToUpdate.canViewAllContacts = !!userData.canViewAllContacts;
    }
    // Lógica especial para a conexão (whatsappId):
    // Só atualiza se o campo for enviado, permitindo que seja definido como nulo.
    if (userData.whatsappId !== undefined) {
        dataToUpdate.whatsappId = userData.whatsappId === 0 ? null : userData.whatsappId;
    }
    await user.update(dataToUpdate);
    // Lógica especial para as filas:
    // Só atualiza as filas se o campo queueIds for enviado.
    if (queueIds !== undefined) {
        await user.$set("queues", queueIds);
    }
    await user.reload();
    const company = await Company_1.default.findByPk(user.companyId);
    const oldUserEmail = user.email;
    if (company?.email === oldUserEmail) {
        await company.update({
            email,
            password
        });
    }
    const serializedUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        profile: user.profile,
        companyId: user.companyId,
        company,
        queues: user.queues,
        startWork: user.startWork,
        endWork: user.endWork,
        greetingMessage: user.farewellMessage,
        allTicket: user.allTicket,
        defaultMenu: user.defaultMenu,
        defaultTheme: user.defaultTheme,
        allowGroup: user.allowGroup,
        allHistoric: user.allHistoric,
        userClosePendingTicket: user.userClosePendingTicket,
        showDashboard: user.showDashboard,
        defaultTicketsManagerWidth: user.defaultTicketsManagerWidth,
        allowRealTime: user.allowRealTime,
        allowConnections: user.allowConnections,
        profileImage: user.profileImage,
        // >>> IMPORTANTE: devolver para o front persistir o estado do select
        canViewAllContacts: !!user.canViewAllContacts
    };
    return serializedUser;
};
exports.default = UpdateUserService;
