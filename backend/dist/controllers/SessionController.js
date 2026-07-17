"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.remove = exports.me = exports.update = exports.store = exports.forgotPassword = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const socket_1 = require("../libs/socket");
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const sequelize_1 = require("sequelize");
const AuthUserService_1 = __importDefault(require("../services/UserServices/AuthUserService"));
const RefreshTokenService_1 = require("../services/AuthServices/RefreshTokenService");
const FindUserFromToken_1 = __importDefault(require("../services/AuthServices/FindUserFromToken"));
const User_1 = __importDefault(require("../models/User"));
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log('Forgot password request received:', { email });
    const user = await User_1.default.findOne({ where: { email } });
    if (!user) {
        console.warn('No user found for email:', email);
        throw new AppError_1.default("E-mail não encontrado.", 404);
    }
    const token = crypto_1.default.randomBytes(32).toString("hex");
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
    user.passwordResetToken = token;
    user.passwordResetExpires = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes
    await user.save();
    console.log('Password reset token generated:', {
        userId: user.id,
        email,
        token,
        expires: user.passwordResetExpires,
    });
    const transporter = nodemailer_1.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: email,
            subject: "Redefinição de Senha",
            text: `Clique no link para redefinir sua senha: ${resetUrl}`,
        });
        console.log('Password reset email sent to:', email);
    }
    catch (error) {
        console.error('Failed to send password reset email:', error);
        throw new AppError_1.default("Erro ao enviar e-mail de redefinição.", 500);
    }
    return res.status(200).json({ message: "E-mail enviado com sucesso." });
};
exports.forgotPassword = forgotPassword;
const store = async (req, res) => {
    const { email, password } = req.body;
    const { token, serializedUser, refreshToken } = await (0, AuthUserService_1.default)({
        email,
        password
    });
    // Não envia mais o refreshToken como cookie httpOnly
    // SendRefreshToken(res, refreshToken);
    const io = (0, socket_1.getIO)();
    io.of(serializedUser.companyId.toString())
        .emit(`company-${serializedUser.companyId}-auth`, {
        action: "update",
        user: {
            id: serializedUser.id,
            email: serializedUser.email,
            companyId: serializedUser.companyId,
            token: serializedUser.token
        }
    });
    // Retorna refreshToken no JSON para armazenamento no localStorage
    return res.status(200).json({
        token,
        refreshToken,
        user: serializedUser
    });
};
exports.store = store;
const update = async (req, res) => {
    // Recebe refreshToken do body ao invés de cookie
    const token = req.body.refreshToken;
    if (!token) {
        throw new AppError_1.default("ERR_SESSION_EXPIRED", 401);
    }
    const { user, newToken, refreshToken } = await (0, RefreshTokenService_1.RefreshTokenService)(res, token);
    // Não envia mais refreshToken como cookie
    // SendRefreshToken(res, refreshToken);
    // Retorna refreshToken no JSON
    return res.json({ token: newToken, refreshToken, user });
};
exports.update = update;
const me = async (req, res) => {
    // Recebe refreshToken do body ou query ao invés de cookie
    const token = req.body.refreshToken || req.query.refreshToken;
    if (!token) {
        throw new AppError_1.default("ERR_SESSION_EXPIRED", 401);
    }
    const user = await (0, FindUserFromToken_1.default)(token);
    const { id, profile, super: superAdmin } = user;
    return res.json({ id, profile, super: superAdmin });
};
exports.me = me;
const remove = async (req, res) => {
    const { id } = req.user;
    if (id) {
        const user = await User_1.default.findByPk(id);
        await user.update({ online: false });
    }
    // Não precisa mais limpar cookie
    // res.clearCookie("jrt");
    return res.send();
};
exports.remove = remove;
const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    console.log('Reset password request received:', { token, newPassword: '***' }); // Hide password in logs
    const user = await User_1.default.findOne({
        where: {
            passwordResetToken: token,
            passwordResetExpires: { [sequelize_1.Op.gt]: new Date() },
        },
    });
    if (!user) {
        console.warn('No user found for token:', token);
        // Check if token exists but is expired or invalid
        const userWithToken = await User_1.default.findOne({
            where: { passwordResetToken: token },
        });
        if (userWithToken) {
            console.warn('Token found but expired or invalid:', {
                token,
                expires: userWithToken.passwordResetExpires,
            });
        }
        throw new AppError_1.default("Token inválido ou expirado.", 400);
    }
    console.log('User found for password reset:', { userId: user.id, email: user.email });
    user.password = newPassword;
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    await user.save();
    console.log('Password reset successful for user:', user.id);
    return res.status(200).json({ message: "Senha redefinida com sucesso." });
};
exports.resetPassword = resetPassword;
