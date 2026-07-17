# syntax=docker/dockerfile:1
FROM node:22-alpine AS builder

RUN apk add --no-cache git python3 make g++

ENV NODE_OPTIONS="--max-old-space-size=1024"

WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install --no-audit --no-fund --loglevel error --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:22-alpine

RUN apk add --no-cache \
    ffmpeg \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    NODE_ENV=production

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.sequelizerc ./
COPY --from=builder /app/database.config.js ./

# --- Coolify: entrypoint con migrations + seeds ---
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
COPY scripts/ /app/scripts/
RUN chmod +x /app/docker-entrypoint.sh

EXPOSE 3000
CMD ["node", "dist/server.js"]
