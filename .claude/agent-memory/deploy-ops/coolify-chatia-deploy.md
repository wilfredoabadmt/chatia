---
name: coolify-chatia-deploy
description: Coolify deploy facts for ChatIA (infra UUIDs, compose layout, env vars, MCP requirement)
metadata:
  type: reference
---

# ChatIA — Coolify deploy reference (Fase 1)

Plan maestro: `PLAN-IMPLEMENTACION-CRM.md` (Rev 3, 2026-07-16). Guía paso a paso: `coolify/README-COOLIFY.md`.

## Infraestructura Coolify (del plan, verificada vía MCP el 2026-07-16)
- Servidor: `localhost` — UUID `zcockokck4o084040g8g40kc` — IP `89.116.29.168` — reachable ✅
- GitHub App: `cool-wilfredoabad` — UUID `uww80ocswk0s0gccgok44kc8` — app_id `2979352`
- Proyecto ChatIA: PENDIENTE CREAR (no existe todavía).

## Repo
- `https://github.com/wilfredoabadmt/chatia.git`, rama `main`, último commit `841525f`.
- Deploy files YA integrados y verificados en el repo:
  - `docker-compose.coolify.yml` (raíz) — 4 servicios: `backend`(3000), `frontend`(80), `postgres`(5432), `redis`(6379).
  - `backend/docker-entrypoint.sh` + `backend/scripts/{db-wait,db-prepare,db-check-tables,seed_admin}.js`.
  - `backend/Dockerfile` líneas 37-39 copian entrypoint+scripts y hacen chmod.
  - `bcryptjs ^2.4.3` y `pg ^8.7.3` están en dependencies ✅.

## Coolify: cómo crear el recurso (Build Pack Docker Compose)
- Build Pack: `Docker Compose`; Compose Location: `/docker-compose.coolify.yml`.
- El compose usa magic vars de Coolify: `SERVICE_FQDN_BACKEND_3000`, `SERVICE_FQDN_FRONTEND_80`,
  y `SERVICE_PASSWORD_POSTGRES/REDIS/64_JWTSECRET/64_JWTREFRESH/64_SESSION` (auto-generadas, no tocar).

## Variables a definir manualmente (obligatorias)
`BACKEND_DOMAIN`, `FRONTEND_DOMAIN` (sin https://), `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
Opcionales: `COMPANY_NAME`, `CONTACT_PHONE`, `PRIMARY_COLOR`, `PRIMARY_DARK`, `TZ=America/Sao_Paulo`.
⚠️ `BACKEND_DOMAIN` y branding se hornean en el build del frontend (REACT_APP_*): cambiarlos exige REDEPLOY del frontend.

## Avisos críticos
- Sesiones WhatsApp viven en Redis → volumen `redis_data:/data` + `redis-server ... --appendonly yes` (ya en el compose, línea 169). Perder Redis = re-escanear todos los QR.
- Seeders NO idempotentes (salvo ensure-super-admin) → seeds solo en BD limpia (entrypoint usa flag FRESH_INSTALL). Primer deploy = BD limpia ✅.
- 1 sola réplica del backend (Bull queues + cronjobs corren in-process).
- NO existe endpoint `/health` → verificar por logs (`Server started` / líneas `[entrypoint]`) y respuesta HTTP.
- Cert PIX `.p12` no está en la imagen → volumen `backend_certs:/app/certs`, subir manualmente si se usa PIX.

## DNS
Crear registros A: `BACKEND_DOMAIN` y `FRONTEND_DOMAIN` → `89.116.29.168`. SSL (Let's Encrypt) automático al primer deploy.

## Entrypoint (orden de arranque)
postgres/redis (healthcheck) → backend: db-wait → db-prepare → migrations ×3 rondas → db-check-tables (aborta si faltan tablas esenciales) → seeds si BD limpia → seed_admin (respeta ADMIN_EMAIL/PASSWORD) → server → frontend.

## ⚠️ BLOQUEO conocido (sesión 2026-07-16)
El plan asume tools `@mcp:coolify:*`. En esta sesión el MCP `coolify` está *habilitado* en
`.claude/settings.local.json` (`enabledMcpjsonServers: ["coolify"]`) pero NO está *definido*
(no hay `.mcp.json` ni entrada en `~/.claude.json`), así que NO hay tools de Coolify cargadas
ni token de API de Coolify en el entorno. Sin eso no se puede crear proyecto/servicio ni disparar deploy.
Falta también: valores concretos de `BACKEND_DOMAIN`, `FRONTEND_DOMAIN`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`
(en el plan solo hay ejemplos, no valores definitivos).
