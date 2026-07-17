"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFfmpegPath = void 0;
const ffmpeg_1 = __importDefault(require("@ffmpeg-installer/ffmpeg"));
const resolveFfmpegPath = () => {
    const envPath = process.env.FFMPEG_PATH?.trim();
    if (envPath) {
        return envPath;
    }
    return ffmpeg_1.default.path;
};
const getFfmpegPath = () => resolveFfmpegPath();
exports.getFfmpegPath = getFfmpegPath;
exports.default = exports.getFfmpegPath;
