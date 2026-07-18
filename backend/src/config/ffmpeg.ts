const resolveFfmpegPath = (): string => {
  const envPath = process.env.FFMPEG_PATH?.trim();
  if (envPath) {
    return envPath;
  }

  try {
    const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
    return ffmpegInstaller.path;
  } catch {
    return "ffmpeg";
  }
};

export const getFfmpegPath = (): string => resolveFfmpegPath();

export default getFfmpegPath;
