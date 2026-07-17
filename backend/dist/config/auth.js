"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    secret: process.env.JWT_SECRET || "mysecret",
    expiresIn: "7d",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "myanothersecret",
    refreshExpiresIn: "30d" // ✅ Refresh token: 30 dias (antes: 7 dias)
};
