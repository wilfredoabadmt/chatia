# PLAN DE IMPLEMENTACIÓN — ChatIA CRM WhatsApp → GitHub + Coolify (Deploy Automatizado)

> **Documento maestro de despliegue.** Inventario funcional completo del CRM + plan por fases
> para crear el repositorio en GitHub, desplegar en Coolify y operar todo con herramientas MCP
> automatizadas (sin SSH, sin scripts manuales).
>
> **Fecha:** 2026-07-16 · **Revisión 3 — plan ejecutable con MCP GitHub + MCP Coolify**
>
> **Fuentes de evidencia:** Código fuente completo (`backend/` — 46 controllers, 43 rutas,
> 48 servicios, 55 models, 302 migrations, 6 seeders; `frontend/` — 44 páginas, 152 componentes,
> 11 contexts, 5 idiomas). `.env.example`, `CLAUDE.md`, `README.md`, auditorías de BD,
> sprints completados, `coolify/docker-compose.coolify.yml`, `coolify/backend/docker-entrypoint.sh`,
> e infraestructura Coolify verificada via MCP.
>
> **Infraestructura Coolify verificada (2026-07-16):**
> - Servidor: `localhost` (UUID: `zcockokck4o084040g8g40kc`, IP: `host.docker.internal`, reachable ✅)
> - GitHub App: `cool-wilfredoabad` (UUID: `uww80ocswk0s0gccgok44kc8`, app_id: `2979352`)
> - Proyectos existentes: `n8n`, `Test` — ChatIA será un **proyecto nuevo**

---

## Índice

1. [Visión general y objetivo](#1-visión-general-y-objetivo)
2. [Arquitectura técnica completa](#2-arquitectura-técnica-completa)
3. [Hallazgos críticos de la migración](#3-hallazgos-críticos)
4. [Inventario funcional completo del CRM (15 módulos)](#4-inventario-funcional-completo-del-crm)
5. [Modelo de datos confirmado (56 tablas)](#5-modelo-de-datos-confirmado)
6. [Variables de entorno completas (60+ variables)](#6-variables-de-entorno-completas)
7. [Plan de despliegue por fases con MCP](#7-plan-de-despliegue-por-fases-con-mcp)
8. [Comandos MCP exactos (GitHub + Coolify)](#8-comandos-mcp-exactos)
9. [Checklist de verificación módulo a módulo](#9-checklist-de-verificación-módulo-a-módulo)
10. [Operación continua (CI/CD, backups, rollback)](#10-operación-continua)
11. [Riesgos y mitigaciones (14 riesgos)](#11-riesgos-y-mitigaciones)
12. [Herramientas del proyecto (skills, MCP, agentes)](#12-herramientas-del-proyecto)
13. [Glosario](#13-glosario)

---

## 1. Visión general y objetivo

### 1.1 Qué es ChatIA

CRM SaaS multi-tenant de atención al cliente por WhatsApp, versión **v2.2.2v-26**, fork
evolucionado del ecosistema Whaticket. Permite a múltiples empresas gestionar conversaciones
de WhatsApp, Facebook Messenger e Instagram con agentes, colas, chatbots con IA, campañas
masivas, flujos visuales y Kanban de ventas.

#### Stack técnico completo

| Capa | Tecnología | Versión | Notas |
|---|---|---|---|
| **Runtime** | Node.js | 20 (alpine) | Imagen Docker multi-stage |
| **Lenguaje backend** | TypeScript | 4.2.4 | `strict: false`, 852 archivos TS |
| **Framework HTTP** | Express | 4.17.3 | Con `express-async-errors` |
| **ORM** | Sequelize | 5.22.3 | ⚠️ Deprecated — con `sequelize-typescript` 1.1 |
| **Base de datos** | PostgreSQL | 13 | 56 tablas, 302 migrations, 6 seeders |
| **Cache/sesiones** | Redis | 6 (alpine) | ⚠️ **Sesiones WhatsApp en Redis** (no en disco) |
| **Colas** | Bull | 3.11 | 7 colas + CronJob; corre in-process |
| **Tiempo real** | Socket.IO | 4.7.4 | Con `@socket.io/admin-ui` |
| **WhatsApp** | Baileys | 7.0.0-rc.9 | Multi-device por QR; sesiones en Redis |
| **Frontend** | React | 17.0.2 | Con craco, 342 archivos JS |
| **UI** | MUI v4 + v5 | Simultáneos | ⚠️ Requiere `--legacy-peer-deps` |
| **Routing** | React Router | 5.2.0 | |
| **Gráficos** | Chart.js + Recharts | 3.9 / 2.0 | Dashboard y reportes |
| **Flow Builder** | react-flow-renderer + reactflow | 10.3 / 11.7 | Editor visual de chatbots |
| **IA - OpenAI** | openai | 4.24.7 | Chatbot IA, config por empresa |
| **IA - Google** | @google/generative-ai | 0.24.1 | Gemini como alternativa |
| **IA - Dialogflow** | @google-cloud/dialogflow | 5.9.0 | Integración por cola |
| **IA - Azure** | microsoft-cognitiveservices-speech-sdk | 1.31 | Transcripción de audio |
| **Pagos** | mercadopago + gn-api-sdk-typescript | 2.0 / 2.0 | MercadoPago + PIX Gerencianet |
| **Media** | ffmpeg + jimp + Puppeteer | Varies | Procesamiento multimedia |
| **Email** | nodemailer | 6.8 | Recuperación de contraseña |
| **i18n** | i18next | 19.9 | 5 idiomas: PT, EN, ES, AR, TR |
| **State** | zustand + React Context | 4.4 / 11 contexts | |
| **Softphone** | JsSIP | 3.10 | Componente Softphone en frontend |

### 1.2 Objetivo de la migración

| Antes (VPS directa + SSH) | Después (GitHub + Coolify + MCP) |
|---|---|
| SSH + `instalador-chatia-v4.5.1.sh` interactivo | `@mcp:coolify:service` (action: `create`) con docker-compose |
| SSH + `update-chatia-v4.5.sh` manual | `git push` → webhook → `@mcp:coolify:deploy` automático |
| Nginx + Certbot en el host | Traefik + Let's Encrypt automático de Coolify |
| Migrations/seeds vía `docker exec` | `docker-entrypoint.sh` automático dentro del contenedor |
| Backups manuales | `@mcp:coolify:scheduled_tasks` (action: `create`) (pg_dump cron) |
| Secretos en `.credentials` en disco | `@mcp:coolify:env_vars` en la UI de Coolify |
| Repo original `TappyID/chatia-4.4` | Repo propio `wilfredoabadmt/chatia` vía `@mcp:github:create_repository` |
| Sin CI/CD | GitHub Actions + Auto Deploy de Coolify |

**Regla de oro:** ningún módulo de la sección 4 se da por migrado sin pasar su checklist
de la sección 9.

---

## 2. Arquitectura técnica completa

### 2.1 Servicios Docker (4 contenedores)

| Servicio | Imagen/Build | Puerto interno | Función |
|---|---|---|---|
| **backend** | `backend/Dockerfile` — multi-stage node:20-alpine, instala ffmpeg + chromium (Puppeteer) | 3000 | API REST + Socket.IO + 7 Bull queues + CronJobs |
| **frontend** | `frontend/Dockerfile` — build craco (`NODE_OPTIONS=--max-old-space-size=2048`) → nginx:alpine | 80 | SPA React + proxy inverso interno al backend |
| **postgres** | `postgres:13` | 5432 | 56 tablas, 302 migrations |
| **redis** | `redis:6-alpine` con `--appendonly yes` + `requirepass` | 6379 | **Sesiones WhatsApp** + Bull queues + cache + rate limiter |

### 2.2 Nginx del frontend hace proxy al backend `[CONFIRMADO]`

El archivo `frontend/nginx.conf` contiene:
- `client_max_body_size 50M` — límite de subida
- `location /api` → `proxy_pass http://backend:3000` — proxy interno
- `location /socket.io` → mismo upstream con headers WebSocket, `proxy_read_timeout 300s`
- SPA fallback, gzip, cache 1 año para assets estáticos

**Decisión adoptada:** mantener dominios separados (`BACKEND_DOMAIN` / `FRONTEND_DOMAIN`)
como en la VPS. El proxy interno del nginx queda como redundancia inocua.

### 2.3 Bull Queues, CronJobs y Workers `[CONFIRMADO]`

| Cola Bull | Jobs | Función |
|---|---|---|
| `MessageQueue` | `SendMessage` | Envío asíncrono de mensajes |
| `ScheduleMonitor` | `Verify` (repetible) | Monitor de agendamientos |
| `SendSacheduledMessages` *(sic)* | `SendMessage` | Mensajes programados recurrentes |
| `CampaignQueue` | `VerifyCampaignsDaatabase`, `ProcessCampaign`, `PrepareContact`, `DispatchCampaign` | Pipeline completo de campañas masivas |
| `UserMonitor` | `VerifyLoginStatus` | Estado online de agentes |
| `QueueMonitor` | `VerifyQueueStatus` | Monitor de colas de atención |
| `ContactReconciler` | `Reconcile` | Deduplicación de contactos |

**CronJobs adicionales:**
- `ProcessExpiredLaneTimersJob` — cada minuto, mueve tickets entre lanes del Kanban
- `FlowTimeoutJob` — timeout de flujos abandonados
- `handleMessageAckQueue` — ACK de mensajes (cola dedicada opcional vía `REDIS_URI_ACK`)

⚠️ **Todo corre dentro del proceso del backend** → obligatorio: 1 sola réplica del backend.

### 2.4 Volúmenes persistentes (7 volúmenes)

| Volumen | Ruta contenedor | Contenido | Criticidad |
|---|---|---|---|
| `postgres_data` | `/var/lib/postgresql/data` | Base de datos completa | 🔴 Máxima |
| `redis_data` | `/data` | **Sesiones WhatsApp** + colas | 🔴 **Máxima** |
| `backend_public` | `/app/public` | Logos, media pública, `company{id}/`, announcements | 🟠 Alta |
| `backend_uploads` | `/app/uploads` | Adjuntos de conversaciones | 🟠 Alta |
| `backend_private` | `/app/private` | Archivos privados (Settings) | 🟡 Media |
| `backend_certs` | `/app/certs` | Certificado PIX `.p12` | 🟠 Alta si usa PIX |
| `backups` | `/backups` (postgres) | Dumps programados | 🟡 Media |

---

## 3. Hallazgos críticos

### 3.1 ⚠️ Las sesiones de WhatsApp viven en REDIS `[CONFIRMADO]`

`src/libs/wbot.ts` → `src/helpers/useMultiFileAuthState.ts` guarda credenciales y llaves
Signal en Redis (ioredis, `REDIS_URI`), con claves `sessions:{whatsappId}:creds` y
`sessions:{whatsappId}:{tipo}-{id}`.

- **NO hay sesiones en disco** — no existe `.wwebjs_auth` activo
- **Redeploy del backend NO desconecta WhatsApp** ✅ (sesión en Redis)
- **Perder Redis = re-escanear TODOS los QR** — Redis es dato de producción
- **Mitigación aplicada:** `--appendonly yes` + volumen `redis_data` + backup diario

### 3.2 ⚠️ El certificado PIX no está en la imagen Docker `[CONFIRMADO]`

`config/Gn.ts` busca `/app/certs/${GERENCIANET_PIX_CERT}.p12`, pero el Dockerfile del
backend **no copia `certs/`** al segundo stage. **Solución:** volumen `backend_certs:/app/certs`
+ subir el `.p12` una vez tras el primer deploy.

### 3.3 ⚠️ Timezone hardcoded `America/Sao_Paulo` `[CONFIRMADO]`

En `config/database.ts`. El compose define `TZ=${TZ:-America/Sao_Paulo}` para alinear
el contenedor con la app.

### 3.4 ⚠️ Los seeders NO son todos idempotentes `[CONFIRMADO]`

Solo `ensure-super-admin` es idempotente. Los demás pueden duplicar datos si se re-ejecutan.
**Solución:** el entrypoint detecta si la BD está limpia antes de migrar; los seeds se
ejecutan solo en instalación limpia (flag `FRESH_INSTALL`).

Los 6 seeders:
1. `20200904070003-create-default-company.ts` — Crea empresa ID 1
2. `20200904070004-create-default-settings.ts` — Settings por defecto
3. `20200904070006-create-default-user.ts` — Usuario `admin@admin.com` / `123456`
4. `20230901093700-create-default-companiessettings.ts` — CompaniesSettings
5. `20250101000000-ensure-super-admin.ts` — **Idempotente** ✅
6. `20251013000000-create-kanban-demo-tags.ts` — Tags demo para Kanban

### 3.5 Credenciales admin del `.env` ignoradas por el seeder `[CONFIRMADO]`

El seeder crea `admin@admin.com` / `123456`. El `seed_admin.js` del entrypoint sí respeta
`ADMIN_EMAIL`/`ADMIN_PASSWORD` y corre **después** de los seeds, creando/actualizando el
admin real. ✅

### 3.6 Migrations corren desde `dist/` `[CONFIRMADO]`

`.sequelizerc` apunta a `dist/database/`. En la imagen Docker ya compilada, `dist/` existe.
Sin impacto en el entrypoint.

### 3.7 Archivos legado inflando la imagen `[CONFIRMADO]`

- `wbotMessageListener.ts` — **184KB** (el archivo más grande)
- `wbotMessageListener-dontwork.ts` — 111KB
- Backup `.backup-20251015` y migration `.bak`
- Limpieza opcional en Fase 4.

### 3.8 Página Files retirada del frontend `[CONFIRMADO]`

La ruta `/files` está comentada en `frontend/src/routes/index.js`. El backend conserva
`filesRoutes.ts`. Marcar como retirada, no migrar como funcional.

### 3.9 Debug routes en producción `[NUEVO]`

`routes/index.ts` incluye `debugRoutes` con comentario `// 🔍 DEBUG ROUTES - REMOVER EM PRODUÇÃO`.
**Acción Fase 0:** remover o proteger con middleware de autenticación admin antes del deploy.

### 3.10 `messageRoutes` montado dos veces `[NUEVO]`

En `routes/index.ts`, línea 62: `routes.use(messageRoutes)` está duplicado. No causa error
funcional (Express monta las mismas rutas dos veces) pero es limpieza pendiente.

---

## 4. Inventario funcional completo del CRM

> **Verificado contra 43 archivos de rutas backend, 44 páginas frontend, 55 models,
> 302 migrations y 152 componentes.** Este inventario completo es lo que NO se puede perder
> en la migración.

### 4.1 🔐 Autenticación y gestión de usuarios

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Login JWT + refresh token | `authRoutes.ts` | `Login/` | `JWT_SECRET` + `JWT_REFRESH_SECRET`, `tokenVersion` en Users |
| Registro público de empresas | `authRoutes.ts` | `Signup/` | Controlado por setting `userCreation` |
| Recuperación de contraseña | `helpers/SendMail.ts` | `ForgetPassWord/` + `ResetPassword/` | Nodemailer con `MAIL_HOST/USER/PASS/FROM` |
| Roles: super admin, admin, user | Model `User` | Guards `OnlyForSuperUser`, `Can` | `super=true` + `profile` en Users |
| Estado online de agentes | Cola `UserMonitor` | — | Campo `online` + `VerifyLoginStatus` |
| CRUD de usuarios/agentes | `userRoutes.ts` | `Users/` | Relación `UserQueue` (asignación a colas) |
| Seeder de admin | `seed_admin.js` | — | Idempotente, respeta `ADMIN_EMAIL/PASSWORD` |

### 4.2 🏢 Multi-tenancy: Empresas, Planes y Facturación

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Empresas con vencimiento | Model `Company` | `Companies/` | `dueDate`, `recurrence`, `planId`, `status` |
| Planes con límites | Model `Plan` | — | Límites: users, connections, queues, `amount`, `currency` |
| Flags de plan | `Plan` | Menú lateral | `useWhatsapp`, `useFacebook`, `useInstagram`, `useCampaigns`, `useSchedules`, `useInternalChat`, `useExternalApi`, `useKanban` |
| Ajustes por empresa (24+) | `CompaniesSettings` | `SettingsCustom/` | Incluye claves IA/traducción por empresa |
| Facturas | `invoicesRoutes.ts` | `Financeiro/` | Model `Invoices` con montos y estados |
| Suscripciones | `subScriptionRoutes.ts` | `Subscription/` | Model `Subscriptions` + checkout |
| **Pago MercadoPago** | `SubscriptionController.ts` | `CheckoutPage/` | API MercadoPago (`checkout/preferences`), `MP_ACCESS_TOKEN` |
| **Pago PIX Gerencianet** | `config/Gn.ts` | — | Cert `.p12`, `GERENCIANET_*` (ver 3.2) |
| Socios/afiliados | `PartnerServices/` | — | Model `Partner` |
| Uso de API por empresa | Model `ApiUsages` | — | Registro de llamadas API |
| Documento único | Migration `unique-constraint` | — | Flag `FEATURE_COMPANY_DOCUMENT_OPTIONAL` |
| Trial/Demo | env `DEMO`, `APP_TRIALEXPIRATION` | — | Modo demostración |
| **Moneda configurable** | `CurrencyService.ts` + Context `Currency` | `CurrencyInput/` | BRL por defecto, configurable en Settings |

### 4.3 📱 Conexiones WhatsApp

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Múltiples conexiones por QR | `whatsappRoutes.ts` + `whatsappSessionRoutes.ts` | `Connections/` | Baileys 7.0.0-rc.9 multi-device |
| **Sesiones en Redis** | `useMultiFileAuthState.ts` | — | Claves `sessions:{id}:*` (ver 3.1) |
| Vista global (super admin) | — | `AllConnections/` | Todas las conexiones de todas las empresas |
| Monitor de conexión | `WbotServices/` | — | Reconexión automática, `delFromPattern` al desconectar |
| Token de API por conexión | Campo `token` en `Whatsapps` | — | Para API externa |
| Canal por conexión | Campos `provider`, `channel` | — | `whatsapp` / `facebook` / `instagram` |
| Import de contactos | `WbotServices/` | `Contacts/import.js` | Importar contactos del teléfono vinculado |
| Contactos espejados | Tabla `Baileys` | — | Solo contacts/chats, no credenciales |

### 4.4 📘 Canales Facebook / Instagram

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Listener de Messenger | `FacebookServices/` | — | Recepción de mensajes de FB Messenger |
| Envío de media por FB | `FacebookServices/` | — | Imágenes, videos por Messenger |
| Webhook Meta | `FacebookServices/` | — | `FACEBOOK_APP_ID` + `FACEBOOK_APP_SECRET` + `VERIFY_TOKEN` |
| Flags de plan | `useFacebook`/`useInstagram` en `Plan` | — | Activación por plan |

⚠️ **Acción post-deploy:** Re-verificar webhook de Meta contra el nuevo dominio.

### 4.5 🎫 Tickets (módulo núcleo)

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Tickets con UUID y estados | `ticketRoutes.ts` | 3 variantes UI | `Tickets/`, `TicketsCustom/`, `TicketsAdvanced/` (responsive via `TicketResponsiveContainer`) |
| Aceptar/transferir/resolver/reabrir | `TicketServices/` | Botones de acción | `TicketActionButtonsCustom/` |
| Notas internas | `ticketNoteRoutes.ts` | `ContactNotes*/` | Model `TicketNote` |
| Bitácora de eventos | Model `LogTicket` | `ShowTicketLogModal/` | Registro de cada acción |
| Tracking de atención | Model `TicketTraking` | — | Tiempos de espera, atención, resolución |
| NPS / Valoración | Model `UserRating` | — | `rated` en TicketTraking |
| Tags sobre tickets | `tagRoutes.ts` + `ticketTagRoutes.ts` | `Tags/`, `TagsKanban/` | Models `Tag`, `TicketTag` |
| **Kanban v2 + Legacy** | `ProcessExpiredLaneTimersJob` | `Kanban/` + `KanbanLegacy.jsx` | Flag `REACT_APP_FEATURE_KANBAN_V2`, lane timers, `allowAutomaticMove` |
| Integración Typebot | Campos en Ticket | — | `typebotSessionId/Status/SessionTime` |
| **Monitoreo en vivo** | — | `Moments/` | Ver chats activos en tiempo real |
| Cierre automático | CompaniesSettings `hoursCloseTicketsAuto` | — | Default 9999 (desactivado) |
| Tag obligatoria al cerrar | Setting `requiredTag` | — | Obliga asignar tag antes de resolver |
| Cierre al transferir | Setting `closeTicketOnTransfer` | — | Default disabled |
| Mensaje de firma | Setting `sendSignMessage` | — | Incluye nombre del agente |
| Saludo al aceptar | Setting `sendGreetingAccepted` | — | Mensaje automático |
| Posición en cola | Setting `sendQueuePosition` | — | Informa al contacto su posición |

### 4.6 💬 Mensajería y multimedia

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Texto, imagen, audio, video, docs | Model `Message` | `MessagesList/`, `MessageInput/` | `jsonMessage`, `remoteJid`, `wid` único |
| **Transcripción de audio (IA)** | `TranscribeAudioMessageService` | — | Azure Speech SDK |
| **Traducción de mensajes (IA)** | `translateRoutes.ts` + `TranslateService` | — | OpenAI, key por empresa en CompaniesSettings |
| Conversión de audio | ffmpeg (3 paquetes) + `audio-decode` | — | Procesamiento automático |
| ACK/estados de entrega | `handleMessageAckQueue` | — | Cola dedicada opcional (`REDIS_URI_ACK`) |
| Rate limit anti-ban | `REDIS_OPT_LIMITER_MAX=1/3000ms` | — | Limitador por conexión |
| Límite de subida | nginx `client_max_body_size 50M` | — | Configurable en `nginx.conf` |
| Reenviar mensajes | — | `ForwardMessageModal/` | Modal de reenvío |
| Editar mensajes | — | `EditMessageModal/` | Modal de edición |
| Preview de links | `link-preview-js` | — | Preview automático |
| Preview de vCards | — | `VcardPreview/` | Tarjetas de contacto |
| Preview de ubicación | — | `LocationPreview/` | Mapas embebidos |
| Preview de anuncios Meta | — | `AdMetaPreview/` | Ads de Facebook/Instagram |
| Excel import/export | `xlsx` | — | Importar/exportar contactos y datos |
| Zips | `archiver` + `adm-zip` | — | Compresión de archivos |

### 4.7 👥 Contactos

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| CRUD completo | `contactRoutes.ts` | `Contacts/` | Lista, buscar, crear, editar, eliminar |
| Import dedicado | `contactRoutes.ts` | `Contacts/import.js` | Importar desde archivo |
| Import WhatsApp | — | `ContactImportWpModal/` | Importar desde conexión WA |
| Campos personalizados | Model `ContactCustomField` | `ContactForm/` | Campos dinámicos por contacto |
| Tags de contacto | Model `ContactTag` | `ContactTag/`, `ContactTagListModal/` | Etiquetas |
| **Carteras (wallets)** | Model `ContactWallet` | — | Setting `DirectTicketsToWallets` — contacto a agente fijo |
| **Resolución/dedupe** | Models `ContactIdentity`, `PendingIdentityResolution` | — | Cola Bull `ContactReconciler` |
| **Productos por contacto** | Model `ContactProduct` | — | Migration mar-2026 (la más nueva) |
| Notas sobre contacto | — | `ContactNotes*/` (4 componentes) | Notas por contacto |
| Envío directo | — | `ContactSendModal/` | Enviar mensaje desde lista de contactos |
| Filtros avanzados | — | `ContactsFilter/` | Filtrar por múltiples criterios |
| LGPD | Settings `lgpd*` en CompaniesSettings | — | Consentimiento, borrar mensajes, ocultar número |
| Origen y seguimiento | Campos `source`, `isInAgenda`, `followUp`, `mergedInto` | — | Feature flags `FEATURE_CONTACTS_*` |

### 4.8 🔄 Colas, Chatbot clásico y Flow Builder

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Colas/departamentos | `queueRoutes.ts` | `Queues/` | Con horarios de atención, mensajes fuera de horario |
| Opciones/submenús de cola | `queueOptionRoutes.ts` | `QueueOptions/` | Model `QueueOption` — menús jerárquicos |
| Chatbot clásico (texto) | `chatBotRoutes.ts` | `ChatBots/` | Models `Chatbot`, `DialogChatBots` |
| **Flow Builder visual** | `flowBuilderRoutes.ts` | `FlowBuilder/` + `FlowBuilderConfig/` | react-flow con **16 tipos de nodos** |
| Nodos del Flow Builder | — | 14 modals de nodos | `message`, `audio`, `img`, `video`, `condition`, `menu`, `interval`, `openai`, `question`, `randomizer`, `singleBlock`, `start`, `ticket`, `typebot` |
| Flujo por defecto | `flowDefaultRoutes.ts` | `FlowDefault/` | Se activa para conversaciones nuevas |
| Flujos por campaña | `flowCampaignRoutes.ts` | — | Model `FlowCampaign` |
| Assets de flujo | Models `FlowAudio`, `FlowImg` | — | Audio e imágenes del flujo |
| Timeout de flujos | `FlowTimeoutJob` | — | `FLOW_MENU_COOLDOWN_SEC=30` |
| Export/Import de flujos | `FlowExportController.ts` + `FlowImportController.ts` | `FlowImportModal.jsx` | Exportar e importar flujos como JSON |

### 4.9 📢 Campañas y mensajes programados

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Campañas masivas | `campaignRoutes.ts` | `Campaigns/` | Models `Campaign`, `CampaignShipping` |
| Reporte de campaña | — | `CampaignReport/` | Estadísticas por campaña |
| Configuración de intervalos | `campaignSettingRoutes.ts` | `CampaignsConfig/` | `messageInterval`, `longerIntervalAfter`, `greaterInterval` |
| **Campañas por frase** | — | `CampaignsPhrase/` | Ruta `/phrase-lists` — disparo por palabra clave |
| Listas de contactos | `contactListRoutes.ts` + `contactListItemRoutes.ts` | `ContactLists/` + `ContactListItems/` | Listas para campañas |
| Pipeline Bull | Cola `CampaignQueue` | — | 4 jobs: Verify, Process, Prepare, Dispatch |
| **Agendamientos** | `scheduleRoutes.ts` | `Schedules/` | Model `Schedule`, cola `ScheduleMonitor` |
| **Mensajes programados** | `ScheduledMessagesRoutes.ts` | — | Recurrentes con `ScheduledMessages` + `ScheduledMessagesEnvio` |

### 4.10 🤖 IA e integraciones externas

| Integración | Backend | Frontend | Detalles |
|---|---|---|---|
| **OpenAI (chatbot IA)** | `promptRouter.ts`, `IntegrationsServices/OpenAiService.ts` | `Prompts/` | Model `Prompt` con `apiKey` y `model` configurables por empresa |
| **Google Gemini** | `@google/generative-ai` en `OpenAiService.ts` | — | Alternativa a OpenAI (detecta modelo) |
| **Dialogflow** | `QueueIntegrationServices/` | `QueueIntegration/` | CreateSession/Query/TestSession |
| **Typebot** | `TypebotServices/typebotListener.ts` | — | Campos en Ticket + QueueIntegrations + nodo Flow Builder |
| **N8N** | Columna `urlN8N` en `QueueIntegrations` | — | Integración webhook |
| Integraciones por cola | `queueIntegrationRoutes.ts` | `QueueIntegration/` | Model `QueueIntegrations` |
| Integraciones por empresa | Model `Integrations` | — | Configuración global |
| **Webhooks salientes** | `webHookRoutes.ts` | `WebhookModal/` | Model `Webhook`, `WebhookService/` (Dispatch, Actions, WorkerAction) |
| **API externa** | `apiRoutes.ts` + `api/apiCompany*.ts` + `api/apiContact*.ts` + `api/apiMessage*.ts` | `MessagesAPI/` | Docs + prueba interactiva; token por conexión; `ApiUsages` |
| Sentry | `@sentry/node` | — | `SENTRY_DSN` opcional |

### 4.11 ⚙️ Configuración por empresa (CompaniesSettings)

Los **24+ ajustes** del seed + claves IA/traducción:

| Setting | Default | Función |
|---|---|---|
| `hoursCloseTicketsAuto` | `9999` | Auto-cierre de tickets inactivos (horas) |
| `chatBotType` | `text` | Tipo de chatbot (`text` / `button` / `list`) |
| `acceptCallWhatsapp` | — | Aceptar llamadas de WA |
| `userRandom` | — | Asignación aleatoria de agente |
| `sendGreetingMessageOneQueues` | — | Saludo si hay una sola cola |
| `sendSignMessage` | — | Incluir firma del agente |
| `sendFarewellWaitingTicket` | — | Despedida en tickets en espera |
| `userRating` | — | Habilitar NPS |
| `sendGreetingAccepted` | — | Saludo al aceptar ticket |
| `CheckMsgIsGroup` | `enabled` | Ignorar mensajes de grupos |
| `sendQueuePosition` | — | Informar posición en cola |
| `scheduleType` | — | Tipo de horario |
| `acceptAudioMessageContact` | — | Aceptar audios |
| `enableLGPD` | — | Activar protección de datos |
| `sendMsgTransfTicket` | — | Notificar al transferir |
| `requiredTag` | — | Tag obligatoria al cerrar |
| `lgpdDeleteMessage` | — | Borrar mensajes por LGPD |
| `lgpdHideNumber` | — | Ocultar número por LGPD |
| `lgpdConsent` | — | Consentimiento LGPD |
| `showNotificationPending` | — | Notificaciones pendientes |
| `overrideDefaultTimezone` | `true` | Override de timezone |
| `createDemoUser` | `false` | Crear usuario demo |
| `DirectTicketsToWallets` | `enabled` | Tickets directo a cartera |
| `closeTicketOnTransfer` | `disabled` | Cerrar al transferir |
| `translateApiKey` | — | Key de traducción por empresa |

### 4.12 📦 Módulos auxiliares

| Módulo | Backend | Frontend | Estado |
|---|---|---|---|
| **Respuestas rápidas** | `quickMessageRoutes.ts` | `QuickMessages/` | ✅ Activo — atajos con `mediaPath` y flag `geral` |
| **Chat interno** | `chatRoutes.ts` | `Chat/` | ✅ Activo — entre agentes en tiempo real |
| **Anuncios** | `announcementRoutes.ts` | `Annoucements/` *(sic)* | ✅ Activo — banner para agentes |
| **Ayuda** | `helpRoutes.ts` | `Helps/` | ✅ Activo — centro de ayuda |
| **ToDoList** | — | `ToDoList/` | ✅ Activo — lista de tareas (frontend-only/localStorage) |
| **Archivos (Files)** | `filesRoutes.ts` | **Comentado** | ⛔ Retirado de UI |
| **Versiones** | `versionRoutes.ts` | `VersionControl/` | ✅ Activo — control de versión |
| **Debug** | `debugRoutes.ts` | — | ⚠️ Interno — remover en producción |
| **Softphone** | — | `Softphone/` | ✅ Activo — JsSIP |
| **PWA** | `App.js` (install prompt) | `serviceWorker.js` | ✅ Activo — instalable como app |

### 4.13 📊 Dashboard, reportes y estadísticas

| Función | Backend | Frontend | Detalles |
|---|---|---|---|
| Dashboard principal | `dashboardRoutes.ts` | `Dashboard/` | 5 sub-componentes: Chart, ChartDonut, ChartsDate, ChartsUser, Filters |
| Estadísticas | `statisticsRoutes.ts` | — | `services/Statistics/` |
| Reportes de atención | — | `Reports/` | `ReportService` con SQL directo |
| NPS | `UserRating` + `TicketTraking` | — | Valoración de agentes |
| Filtros combinados | — | 10 componentes de filtro | `ContactsFilter`, `ConnectionsFilter`, `QueueFilter`, `TagsFilter`, `UsersFilter`, `WhatsappsFilter`, `StatusFilter`, `CreatedAtFilter`, `UpdatedAtFilter`, `ParamsFilter` |

### 4.14 🎨 White-label y branding

Variables build-time del frontend (las 8 reales + 3 feature flags):

| Variable | Default | Función |
|---|---|---|
| `REACT_APP_BACKEND_URL` | — | URL del backend |
| `REACT_APP_NAME_SYSTEM` | `ChatIA` | Nombre del sistema |
| `REACT_APP_NUMBER_SUPPORT` | — | Teléfono de soporte |
| `REACT_APP_HOURS_CLOSE_TICKETS_AUTO` | `9999` | Auto-cierre frontend |
| `REACT_APP_PRIMARY_COLOR` | `#6B46C1` | Color primario light |
| `REACT_APP_PRIMARY_DARK` | `#4C1D95` | Color primario dark |
| `REACT_APP_FACEBOOK_APP_ID` | — | Facebook App ID |
| `REACT_APP_REQUIRE_BUSINESS_MANAGEMENT` | `FALSE` | Requerir gestión empresarial |
| `REACT_APP_FEATURE_KANBAN_V2` | `false` | Kanban v2 con drag-and-drop |
| `REACT_APP_FEATURE_NOVA` | `false` | Feature Nova (pendiente) |
| `REACT_APP_FEATURE_COMPANY_SEARCH` | `false` | Búsqueda de empresas |

Personalización runtime (Settings en BD): `appName`, `primaryColorLight`, `primaryColorDark`,
`appLogoLight`, `appLogoDark`, `appLogoFavicon`. Dark mode toggle guardado en localStorage.

⚠️ **Cambiar cualquier `REACT_APP_*` requiere REBUILD del frontend (Redeploy en Coolify).**

### 4.15 🔌 Tiempo real (Socket.IO)

Socket.IO 4.7.4 con eventos: tickets, mensajes, estado de conexiones (QR/connected),
presencia de usuarios, chat interno, notificaciones con sonido (`use-sound`).
Nginx interno soporta WebSocket upgrade; Traefik de Coolify también. ✅

### 4.16 🌍 Internacionalización (i18n)

5 idiomas completos: Portugués BR (`pt.js` 112KB), Español (`es.js` 113KB), English (`en.js` 107KB),
Türkçe (`tr.js` 110KB), العربية (`ar.js` 92KB). Selector: `UserLanguageSelector/`.

---

## 5. Modelo de datos confirmado

### 5.1 Resumen

- **56 tablas / 55 models** — consistencia 98.2% (`AUDIT-DATABASE-FINAL.md`)
- **302 migrations** — primera: `20200717133438-create-users`; última: `20260312150000-create-contact-products`
- **6 seeders** — solo `ensure-super-admin` idempotente
- Única anomalía: tabla huérfana `contacts_backup_20251014` (vacía, eliminar en Fase 4)

### 5.2 Lista completa de models (55)

```
Announcement          ApiUsages             Baileys
Campaign              CampaignSetting       CampaignShipping
Chat                  Chatbot               ChatMessage
ChatUser              CompaniesSettings     Company
Contact               ContactCustomField    ContactIdentity
ContactList           ContactListItem       ContactProduct
ContactTag            ContactWallet         DialogChatBots
Files                 FilesOptions          FlowAudio
FlowBuilder           FlowCampaign          FlowDefault
FlowImg               Help                  Integrations
Invoices              LogTicket             Message
Partner               PendingIdentityResolution  Plan
Prompt                Queue                 QueueIntegrations
QueueOption           QuickMessage          Schedule
ScheduledMessages     ScheduledMessagesEnvio  Setting
Subscriptions         Tag                   Ticket
TicketNote            TicketTag             TicketTraking
User                  UserQueue             UserRating
Versions              Webhook               Whatsapp
WhatsappQueue
```

### 5.3 Cuidado operativo

⚠️ Si `SequelizeMeta` se pierde, todas las 302 migrations se reintentan y fallan con
`table already exists`. **Nunca** recrear la BD sin restore completo del dump.

---

## 6. Variables de entorno completas

### 6.1 Obligatorias (definir en Coolify)

| Variable | Ejemplo | Descripción |
|---|---|---|
| `BACKEND_DOMAIN` | `api-chatia.clientify.click` | Dominio del backend (sin `https://`) |
| `FRONTEND_DOMAIN` | `chatia.clientify.click` | Dominio del frontend (sin `https://`) |
| `ADMIN_EMAIL` 🔒 | `admin@tuempresa.com` | Email del super admin |
| `ADMIN_PASSWORD` 🔒 | `MiPasswordSegura123!` | Contraseña del super admin |

### 6.2 Recomendadas

| Variable | Default | Descripción |
|---|---|---|
| `COMPANY_NAME` | `ChatIA` | Nombre (branding) |
| `CONTACT_PHONE` | — | Teléfono de soporte |
| `PRIMARY_COLOR` | `#6B46C1` | Color primario light |
| `PRIMARY_DARK` | `#4C1D95` | Color primario dark |
| `TZ` | `America/Sao_Paulo` | Timezone |

### 6.3 Email / SMTP (si reset de contraseña)

| Variable | Descripción |
|---|---|
| `MAIL_HOST` 🔒 | Host SMTP |
| `MAIL_USER` 🔒 | Usuario SMTP |
| `MAIL_PASS` 🔒 | Contraseña SMTP |
| `MAIL_FROM` | Email remitente |

### 6.4 Pagos (opcionales)

`MP_ACCESS_TOKEN`, `GERENCIANET_CLIENT_ID`, `GERENCIANET_CLIENT_SECRET`, `GERENCIANET_PIX_CERT`, `GERENCIANET_SANDBOX`

### 6.5 Meta/Facebook (opcionales)

`FACEBOOK_APP_ID`, `FACEBOOK_APP_SECRET`, `VERIFY_TOKEN`

### 6.6 Varios opcionales

`SENTRY_DSN`, `MASTER_KEY`, `COMPANY_TOKEN`, `ENV_TOKEN`, `DEMO`, `APP_TRIALEXPIRATION`,
`FLOW_MENU_COOLDOWN_SEC`, `REDIS_URI_ACK`, `FEATURE_COMPANY_DOCUMENT_OPTIONAL`,
`FEATURE_CONTACTS_FIX`, `FEATURE_CONTACTS_NORMALIZE_E`, `FEATURE_CONTACTS_ONLY_AGENDA_FILTER`,
`FEATURE_CONTACTS_SOURCE_FIELD`

### 6.7 Auto-generadas por Coolify (no tocar)

`SERVICE_PASSWORD_POSTGRES`, `SERVICE_PASSWORD_REDIS`, `SERVICE_PASSWORD_64_JWTSECRET`,
`SERVICE_PASSWORD_64_JWTREFRESH`, `SERVICE_PASSWORD_64_SESSION`

### 6.8 Nota sobre claves de IA

Las claves de **OpenAI/Gemini/Dialogflow/Typebot/N8N NO van en el `.env`**: se configuran
**por empresa** dentro del sistema (model `Prompt.apiKey`, `CompaniesSettings.translateApiKey`,
`QueueIntegrations`). Viven en la BD.

---

## 7. Plan de despliegue por fases con MCP

### FASE 0 — Preparación del repositorio (1 día)

#### 0.1 Crear repositorio propio en GitHub
```
@mcp:github:create_repository
  name: "chatia"
  description: "ChatIA CRM WhatsApp - SaaS multi-tenant v2.2.2v-26"
  private: true
  autoInit: false
```

#### 0.2 Push del código al repositorio
```bash
cd d:\Documentos\GitHub\chatia
git remote add origin https://github.com/wilfredoabadmt/chatia.git
git push -u origin main
```

#### 0.3 Preparar archivos de deploy
- [ ] Copiar `coolify/docker-compose.coolify.yml` a la raíz del repo
- [ ] Copiar `coolify/backend/docker-entrypoint.sh` a `backend/docker-entrypoint.sh`
- [ ] Copiar `coolify/backend/scripts/*` a `backend/scripts/`
- [ ] Editar `backend/Dockerfile`: añadir antes del CMD:
  ```dockerfile
  COPY docker-entrypoint.sh /app/docker-entrypoint.sh
  COPY scripts/ /app/scripts/
  RUN chmod +x /app/docker-entrypoint.sh
  ```

#### 0.4 Ajustes de seguridad
- [ ] Proteger/remover `debugRoutes.ts` en producción (hallazgo 3.9)
- [ ] Fix: `messageRoutes` duplicado en `routes/index.ts` (hallazgo 3.10)

#### 0.5 Feature flags del frontend
- [ ] Añadir ARGs `REACT_APP_FEATURE_KANBAN_V2`, `REACT_APP_FEATURE_NOVA`, `REACT_APP_FEATURE_COMPANY_SEARCH` al `frontend/Dockerfile`

#### 0.6 Decisión del certificado PIX
- [ ] Si se usa PIX: verificar `.p12` existe; si no: ignorar

#### 0.7 Commit y push
```bash
git add -A
git commit -m "feat: Coolify deploy setup"
git push origin main
```

---

### FASE 1 — Crear proyecto y servicio en Coolify (1 día)

#### 1.1 Crear proyecto en Coolify
```
@mcp:coolify:projects
  action: "create"
  name: "ChatIA CRM"
  description: "CRM WhatsApp multi-tenant SaaS"
```

#### 1.2 Verificar GitHub App
```
@mcp:coolify:github_apps
  action: "list"
```
Confirmar `cool-wilfredoabad` (UUID: `uww80ocswk0s0gccgok44kc8`) tiene acceso al repo.

#### 1.3 Crear servicio Docker Compose
```
@mcp:coolify:service
  action: "create"
  name: "chatia-crm"
  project_uuid: "<UUID del proyecto>"
  server_uuid: "zcockokck4o084040g8g40kc"
  type: "docker-compose"
  docker_compose_raw: "<contenido del docker-compose.coolify.yml>"
  instant_deploy: false
```

#### 1.4 Configurar variables de entorno
```
@mcp:coolify:env_vars
  action: "bulk_update"
  resource: "service"
  uuid: "<UUID>"
  data:
    - key: "BACKEND_DOMAIN"
      value: "backend.su-dominio.com"
    - key: "FRONTEND_DOMAIN"
      value: "su-dominio.com"
    - key: "ADMIN_EMAIL"
      value: "admin@su-dominio.com"
    - key: "ADMIN_PASSWORD"
      value: "su-contrasena-segura"
    - key: "COMPANY_NAME"
      value: "ChatIA"
    - key: "TZ"
      value: "America/Santiago"
```

#### 1.5 DNS: Crear registros A apuntando a `89.116.29.168`

#### 1.6 Primer deploy
```
@mcp:coolify:deploy
  tag_or_uuid: "<UUID del servicio>"
  wait: true
  timeout_seconds: 600
```

#### 1.7 Verificar logs y login

---

### FASE 2 — Validación funcional en staging (2–4 días)

Ejecutar el checklist completo de la **sección 9**.

---

### FASE 3 — Producción (1 día)

#### 3.1 Activar Auto Deploy
#### 3.2 Crear backups programados con `@mcp:coolify:scheduled_tasks` (action: `create`)
#### 3.3 Conectar WhatsApp reales (QR)
#### 3.4 Re-verificar webhooks Meta (si aplica)

---

### FASE 4 — Endurecimiento (1–2 días, opcional)

#### 4.1 GitHub Actions CI (`tsc --noEmit` + `craco build`)
#### 4.2 Protección de rama `main` + crear rama `develop`
#### 4.3 Monitoreo externo
#### 4.4 Limpieza técnica (archivos legado, tabla huérfana)
#### 4.5 Deuda técnica (Sequelize v5, MUI dual, Bull 3)

---

## 8. Comandos MCP exactos

### 8.1 GitHub MCP

| Tool | Uso |
|---|---|
| `create_repository` | Crear repo propio (Fase 0.1) |
| `push_files` | Push de archivos de deploy (Fase 0.7) |
| `create_branch` | Crear rama `develop` (Fase 4.2) |
| `create_issue` | Issues del checklist (Fase 2) |
| `create_pull_request` | PR de features |

### 8.2 Coolify MCP

| Tool | Uso |
|---|---|
| `projects` | Crear proyecto ChatIA (Fase 1.1) |
| `github_apps` | Verificar acceso al repo (Fase 1.2) |
| `service` | Crear servicio Docker Compose (Fase 1.3) |
| `env_vars` | Configurar variables (Fase 1.4) |
| `deploy` | Ejecutar deploy (Fase 1.6) |
| `application_logs` | Ver logs del backend (Fase 1.7) |
| `scheduled_tasks` | Crear backups (Fase 3.2) |
| `diagnose_app` | Diagnosticar problemas |
| `list_deployments` | Historial de deploys |
| `control` | Start/stop/restart |

### 8.3 Datos de infraestructura

| Recurso | UUID | Estado |
|---|---|---|
| Servidor | `zcockokck4o084040g8g40kc` | ✅ Reachable |
| GitHub App | `uww80ocswk0s0gccgok44kc8` | ✅ Configurada |
| IP servidor | `89.116.29.168` | ✅ |

---

## 9. Checklist de verificación módulo a módulo

> ⭐ = smoke test mínimo de producción.

### 🔐 Autenticación
- [ ] ⭐ Login admin (credenciales `ADMIN_EMAIL`, no `admin@admin.com`)
- [ ] ⭐ Logout y re-login
- [ ] Signup público de empresa (si `userCreation` activo)
- [ ] Reset de contraseña por email
- [ ] Agente sin permisos NO ve Settings/Companies

### 🏢 Empresas y planes
- [ ] Crear empresa, asignar plan, límites respetados
- [ ] Flags de plan ocultan módulos
- [ ] Financeiro lista facturas
- [ ] (Si aplica) Checkout MercadoPago sandbox
- [ ] (Si aplica) PIX: cert `.p12` accesible

### 📱 WhatsApp
- [ ] ⭐ Conectar por QR; estado "connected"
- [ ] ⭐ **Redeploy → sesión sobrevive** (Redis)
- [ ] ⭐ **Restart Redis → sesión sobrevive** (appendonly + volumen)
- [ ] Mensaje entrante crea ticket
- [ ] Enviar texto, imagen, audio, documento, video
- [ ] Transcripción de audio (si configurado)
- [ ] Subida 40MB pasa; límite 50M
- [ ] Grupo ignorado con `CheckMsgIsGroup=enabled`
- [ ] Import de contactos

### 🎫 Tickets
- [ ] Aceptar, transferir, resolver, reabrir
- [ ] Notas internas y log
- [ ] Autocierre con `hoursCloseTicketsAuto` bajo
- [ ] Firma, saludo, aviso transferencia, posición en cola
- [ ] NPS al cerrar
- [ ] Tag obligatoria al cerrar
- [ ] Wallets funcionan
- [ ] Moments muestra chats
- [ ] Kanban: mover entre lanes

### 🔄 Colas y Flow Builder
- [ ] Cola con menú clásico funciona
- [ ] Flow Builder: crear y probar flujo
- [ ] Nodo OpenAI responde
- [ ] Typebot funciona
- [ ] Flujo default activo
- [ ] Timeout de flujo funciona
- [ ] Horarios de atención correctos (TZ)
- [ ] Export/import de flujos

### 📢 Campañas
- [ ] Campaña a 3 contactos funciona
- [ ] Campaña por frase dispara
- [ ] Pausar/reanudar campaña
- [ ] Agendamiento puntual
- [ ] Mensaje recurrente se repite

### 🤖 IA e integraciones
- [ ] Prompt OpenAI responde
- [ ] Traducción funciona
- [ ] Webhook saliente dispara
- [ ] ⭐ API externa: `POST /api/messages/send`
- [ ] Página MessagesAPI con URL nueva

### 📦 Módulos auxiliares
- [ ] Respuesta rápida con atajo
- [ ] Chat interno en tiempo real
- [ ] Anuncio visible
- [ ] ToDoList, Reports, Dashboard con datos

### 🔧 Plataforma
- [ ] ⭐ Socket.IO estable 30 min
- [ ] ⭐ Logos y adjuntos sobreviven redeploy
- [ ] Backup BD genera dump; restore funciona
- [ ] ⭐ `git push` → redeploy → migrations → healthchecks
- [ ] Dark mode funciona
- [ ] Cambio de idioma funciona (5 idiomas)
- [ ] PWA instalable

---

## 10. Operación continua

### 10.1 Flujo CI/CD

```
rama feature → PR → CI (tsc + craco build) → merge a main → webhook
→ Coolify rebuild → entrypoint (db-wait → db-prepare → migrations×3
→ db-check-tables → seeds si limpia → seed_admin → server) → healthchecks → Traefik
```

### 10.2 Backups

| Qué | Cómo | Frecuencia |
|---|---|---|
| PostgreSQL | `pg_dump` + gzip via `@mcp:coolify:scheduled_tasks` | Diaria 3am |
| Redis (sesiones WA) | AOF + copia volumen `redis_data` | Diaria |
| uploads + public | `tar` de volúmenes | Semanal |

### 10.3 Rollback

1. **Código:** `@mcp:coolify:list_deployments` → `@mcp:coolify:deploy` con UUID anterior
2. **BD:** restore del dump (`gunzip < dump | psql`)
3. Smoke tests ⭐

---

## 11. Riesgos y mitigaciones

| # | Riesgo | Impacto | Mitigación |
|---|---|---|---|
| 1 | Pérdida de Redis = re-escanear QR | 🔴 Crítico | `--appendonly yes` + volumen + backup |
| 2 | Cert PIX ausente | 🟠 Alto | Volumen `backend_certs` |
| 3 | Seeds duplican datos | 🟠 Alto | Solo con BD limpia |
| 4 | TZ desalineado | 🟡 Medio | `TZ` en compose |
| 5 | SequelizeMeta perdida | 🟠 Alto | Backup pre-release |
| 6 | Build frontend OOM | 🟡 Medio | Server 4GB+ RAM |
| 7 | REACT_APP sin rebuild | 🟢 Bajo | Documentado |
| 8 | Bull duplicado con replicas | 🟠 Alto | 1 réplica fija |
| 9 | Webhook Meta dominio viejo | 🟡 Medio | Fase 3.4 |
| 10 | Límite 50M vs 100M | 🟢 Bajo | Ajustar nginx.conf |
| 11 | Pool DB saturado | 🟡 Medio | max_connections >= 120 |
| 12 | Deuda técnica | 📋 Largo | Fase 4.5 |
| 13 | Debug routes en prod | 🟡 Medio | Fase 0.4 |
| 14 | package-lock.json gitignored | 🟡 Medio | Evaluar remover de .gitignore |

---

## 12. Herramientas del proyecto

### 12.1 MCP confirmados

| MCP Server | Uso |
|---|---|
| **`@mcp:github`** | Crear repo, push, branches, issues, PRs |
| **`@mcp:coolify`** | Proyecto, servicio, deploy, env vars, backups, diagnóstico |

### 12.2 Skills disponibles

| Skill | Uso post-migración |
|---|---|
| `launch-strategy` | Lanzamiento |
| `pricing-strategy` | Modelo de precios |
| `onboarding-cro` | Onboarding de usuarios |
| `churn-prevention` | Retención |
| `email-sequence` | Secuencias email |
| `analytics-tracking` | Tracking de uso |
| `page-cro` | Optimizar landing/login |

### 12.3 Datos de infraestructura Coolify

```
Servidor: localhost (UUID: zcockokck4o084040g8g40kc)
  IP: 89.116.29.168
  Estado: reachable ✅

GitHub App: cool-wilfredoabad (UUID: uww80ocswk0s0gccgok44kc8)
  App ID: 2979352

Recursos actuales: 11 apps, 5 DBs, 6 services
Proyecto ChatIA: PENDIENTE CREAR
```

---

## 13. Glosario

| Término | Significado |
|---|---|
| **Ticket** | Conversación de atención con un contacto |
| **Cola (Queue)** | Departamento con chatbot, horarios e integraciones |
| **Conexión (Whatsapp)** | Sesión de un número vinculada por QR (Baileys) |
| **Wallet (cartera)** | Asignación fija contacto a agente |
| **Flow Builder** | Editor visual de flujos (16 tipos de nodos) |
| **Campaña por frase** | Disparo automático por palabra clave |
| **Baileys** | Librería WhatsApp multi-device (v7.0.0-rc.9) |
| **Bull** | Colas de trabajos sobre Redis (7 colas) |
| **Moments** | Monitor en vivo de conversaciones |
| **LGPD** | Ley brasileña de protección de datos |
| **CompaniesSettings** | Tabla de 24+ ajustes por empresa |
| **SERVICE_PASSWORD_*** | Secretos auto-generados por Coolify |
| **entrypoint** | Script pre-servidor: migrations, seeds, admin |
| **appendonly** | Persistencia Redis (AOF) — crítico para sesiones WA |
| **craco** | Build tool del frontend React |
| **PWA** | Progressive Web App |
| **NPS** | Net Promoter Score |

---

## Historial de revisiones

- **Rev 3 (2026-07-16):** Reescritura completa con plan ejecutable. Inventario de 152
  componentes, 302 migrations, 5 idiomas, 11 contexts, PWA, Softphone, 10 filtros.
  MCP GitHub + Coolify con UUIDs reales. Nuevos hallazgos: debug routes (3.9),
  messageRoutes duplicado (3.10). GitHub Actions CI/CD template. Backups con scheduled_tasks.
- **Rev 2 (2026-07-15):** Inventario verificado contra código fuente.
- **Rev 1 (2026-07-15):** Versión inicial basada en scripts VPS.

---

## Próximos pasos inmediatos

1. **Fase 0.1:** Crear repositorio con `@mcp:github:create_repository`
2. **Fase 0.3:** Preparar archivos de deploy (copiar coolify/ al lugar correcto)
3. **Fase 0.4:** Proteger debug routes
4. **Fase 0.7:** Commit + push al repo nuevo
5. **Fase 1.1:** Crear proyecto en Coolify con `@mcp:coolify:projects` (action: `create`)
6. **Fase 1.3:** Crear servicio con `@mcp:coolify:service` (action: `create`)
7. **Fase 1.6:** Primer deploy con `@mcp:coolify:deploy`
