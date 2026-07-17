"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWidFromMsg = void 0;
/** Extrai o WID/JID do message key (grupo ou 1:1). */
function getWidFromMsg(msg) {
    const key = msg?.key ?? {};
    const wid = key.participant || key.remoteJid || null;
    return typeof wid === "string" && wid.length ? wid : null;
}
exports.getWidFromMsg = getWidFromMsg;
