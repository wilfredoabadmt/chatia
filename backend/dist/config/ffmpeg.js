"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFfmpegPath = void 0;
const resolveFfmpegPath = () => {
    const envPath = process.env.FFMPEG_PATH?.trim();
    if (envPath) {
        return envPath;
    }
    try {
        const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
        return ffmpegInstaller.path;
    }
    catch {
        return "ffmpeg";
    }
};
const getFfmpegPath = () => resolveFfmpegPath();
exports.getFfmpegPath = getFfmpegPath;
exports.default = exports.getFfmpegPath;
