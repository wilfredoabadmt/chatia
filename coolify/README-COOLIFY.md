# ChatIA v4.5 — Despliegue con GitHub + Coolify

Guía para desplegar ChatIA en Coolify, eliminando la instalación manual por SSH en la VPS
(`instalador-chatia-v4.5.1.sh`) y el update manual (`update-chatia-v4.5.sh`).

---

## 1. Qué reemplaza a qué

| VPS clásica (scripts .sh) | Coolify |
|---|---|
| Instalación de Docker, swap, daemon.json | Ya lo hace la instalación de Coolify |
| Nginx del host + vhosts | Traefik/Caddy integrado (proxy automático) |
| Certbot + renovación SSL | Let's Encrypt automático al asignar dominio |
| Validación DNS del instalador | La haces una vez al apuntar el dominio al server de Coolify |
| Prompts interactivos (dominios, admin, contraseñas) | Variables de entorno en la UI de Coolify |
| Token de GitHub en la URL de clone | GitHub App de Coolify (repos privados sin token en claro) |
| `docker exec` migrations/seeds desde el host | `docker-entrypoint.sh` dentro del contenedor backend |
| `update-chatia-v4.5.sh` (SSH manual) | `git push` → webhook → redeploy automático |
| Backups con pg_dump manual del updater | Backups programados de Coolify (UI → base de datos → Backups) |

## 2. Archivos a copiar al repositorio de la aplicación

Desde la carpeta `coolify/` de este repo, copia al repo de la app (`chatia-4.4`):

```
chatia-4.4/
├── docker-compose.coolify.yml          ← coolify/docker-compose.coolify.yml
└── backend/
    ├── docker-entrypoint.sh            ← coolify/backend/docker-entrypoint.sh
    └── scripts/
        ├── db-wait.js                  ← coolify/backend/scripts/db-wait.js
        ├── db-prepare.js               ← coolify/backend/scripts/db-prepare.js
        ├── db-check-tables.js          ← coolify/backend/scripts/db-check-tables.js
        └── seed_admin.js               ← coolify/backend/scripts/seed_admin.js
```

Y **edita `backend/Dockerfile`** añadiendo (antes del CMD final, después del build de TypeScript):

```dockerfile
# --- Coolify: entrypoint con migrations + seeds ---
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
COPY scripts/ /app/scripts/
RUN chmod +x /app/docker-entrypoint.sh
```

> No cambies el `CMD` original: el compose de Coolify sobreescribe el comando con
> `sh /app/docker-entrypoint.sh`, así el mismo Dockerfile sigue funcionando en la VPS clásica.

**Requisito:** el entrypoint usa `bcryptjs` y `pg` — ambos ya son dependencias del backend
(el instalador VPS los usaba igual vía `docker exec`). Verifica que estén en
`backend/package.json` como `dependencies` (no `devDependencies`).

## 3. Configuración en Coolify (paso a paso)

### 3.1 Conectar GitHub

1. Coolify → **Sources** → **+ Add** → **GitHub App**
2. Sigue el asistente para instalar la GitHub App en tu cuenta/organización
3. Dale acceso al repo `chatia-4.4` (funciona con repos privados, sin tokens manuales)

### 3.2 Crear el recurso

1. **Projects** → tu proyecto → **+ New Resource**
2. Elige **Private Repository (with GitHub App)** → selecciona `chatia-4.4` y la rama (`main`)
3. **Build Pack:** `Docker Compose`
4. **Docker Compose Location:** `/docker-compose.coolify.yml`
5. Guarda. Coolify parseará el compose y creará los 4 servicios (backend, frontend, postgres, redis)

### 3.3 Dominios

En cada servicio de la UI:

- **backend** → Domains: `https://crmback.tuempresa.com` (Coolify lo mapea al puerto 3000 vía `SERVICE_FQDN_BACKEND_3000`)
- **frontend** → Domains: `https://crm.tuempresa.com` (puerto 80)

Antes, crea los registros DNS tipo **A** apuntando a la IP del servidor donde corre Coolify.
El SSL se emite automáticamente al primer deploy.

### 3.4 Variables de entorno (Environment Variables del recurso)

**Debes definir manualmente:**

| Variable | Ejemplo | Nota |
|---|---|---|
| `BACKEND_DOMAIN` | `crmback.tuempresa.com` | Sin `https://` (el compose lo añade) |
| `FRONTEND_DOMAIN` | `crm.tuempresa.com` | Sin `https://` |
| `ADMIN_EMAIL` | `admin@tuempresa.com` | Login del panel |
| `ADMIN_PASSWORD` | `********` | Márcala como secreta 🔒 |
| `COMPANY_NAME` | `Mi Empresa` | Opcional (default: ChatIA) |
| `CONTACT_PHONE` | `5511999999999` | Opcional |
| `PRIMARY_COLOR` | `#6B46C1` | Opcional |
| `PRIMARY_DARK` | `#4C1D95` | Opcional |

**Coolify genera solo** (no las toques — reemplazan al `openssl rand` del instalador):

- `SERVICE_PASSWORD_POSTGRES` — contraseña de PostgreSQL
- `SERVICE_PASSWORD_REDIS` — contraseña de Redis
- `SERVICE_PASSWORD_64_JWTSECRET`, `SERVICE_PASSWORD_64_JWTREFRESH`, `SERVICE_PASSWORD_64_SESSION` — secretos de 64 chars

> ⚠️ **Importante:** `BACKEND_DOMAIN` y las variables de empresa/color se hornean en el **build**
> del frontend (`REACT_APP_*`). Si las cambias después, tienes que **redesplegar el frontend**
> (rebuild), no basta un restart.

### 3.5 Primer deploy

1. Pulsa **Deploy**
2. Orden de arranque: postgres/redis (con healthcheck) → backend (entrypoint: espera DB →
   db-prepare → migrations ×3 rondas → seeds → seed admin → servidor) → frontend
3. Sigue los logs del backend: verás las líneas `[entrypoint] ...`
4. Si el entrypoint detecta tablas esenciales faltantes tras las migrations, **aborta el contenedor**
   (mismo comportamiento de seguridad que el instalador VPS)

### 3.6 Deploy automático (reemplaza a update-chatia-v4.5.sh)

1. En el recurso → **Webhooks** / ajustes → activa **Auto Deploy** (con GitHub App viene activo por defecto)
2. Flujo nuevo de actualización:

```
git commit → git push origin main → Coolify rebuilds → entrypoint aplica migrations → listo
```

Ya no hay SSH, ni token en prompts, ni protección manual de archivos de producción:
el compose y los Dockerfiles ahora **viven en el repo** y se versionan con el código.

Para desplegar una rama/tag concreta: cambia la rama del recurso en la UI o usa
la API de Coolify (`/api/v1/deploy?uuid=...&tag=...`).

## 4. Backups (reemplaza el paso 3 del updater)

El compose monta un volumen `backups` en postgres. Dos opciones:

**Opción A — Backups nativos de Coolify (recomendado):**
Si en lugar del servicio postgres del compose usas una **base de datos gestionada por Coolify**
(recurso PostgreSQL separado), tienes backups programados con retención y subida a S3 desde la UI.

**Opción B — Scheduled Task de Coolify sobre el compose actual:**
Recurso → **Scheduled Tasks** → nueva tarea:

- Frecuencia: `0 3 * * *` (diaria 3am)
- Contenedor: `postgres`
- Comando:
  ```bash
  sh -c 'pg_dump -U chatia chatia | gzip > /backups/db_$(date +%Y%m%d_%H%M%S).sql.gz && ls -t /backups/db_*.sql.gz | tail -n +6 | xargs rm -f'
  ```
  (igual que el updater: dump + gzip + retiene los últimos 5)

Los uploads (`backend_uploads`) y public (`backend_public`) son volúmenes Docker con nombre;
inclúyelos en el backup del servidor o añade otra Scheduled Task con `tar`.

## 5. Rollback

- **Código:** `git revert` + push (redeploy automático), o redeploy de un commit anterior desde la UI de Coolify (historial de deployments → redeploy)
- **Base de datos:** restaurar dump del volumen `backups`:
  ```bash
  # dentro del contenedor postgres
  gunzip < /backups/db_XXXX.sql.gz | psql -U chatia -d chatia
  ```
- Las migrations no se revierten automáticamente (igual que en la VPS) — restaura el dump si una migration rompió el esquema

## 6. Diferencias de comportamiento vs los scripts VPS

| Tema | VPS | Coolify |
|---|---|---|
| Puertos expuestos | `127.0.0.1:3000/3001/5432/6379` | Nada expuesto; red interna del stack |
| Postgres/Redis accesibles desde el host | Sí (localhost) | No (usa `docker exec` o Coolify terminal) |
| `.credentials` en disco | `/opt/chatia/.credentials` | No existe; los secretos viven en la UI de Coolify |
| Contraseña Redis con caracteres especiales | Necesitaba URL-encode | No aplica: `SERVICE_PASSWORD_*` es alfanumérica |
| Migrations con retry ×3 | Sí (script host) | Sí (entrypoint) — misma lógica |
| Columnas problemáticas pre-creadas | Sí (SQLPREP) | Sí (`db-prepare.js`) — mismo SQL |
| Seed admin idempotente | Sí (`seed_admin.js` vía docker cp) | Sí (mismo script, dentro de la imagen) |
| Restart del backend post-migrations | `docker restart` manual | No necesario: migrations corren **antes** de arrancar el server |

## 7. Checklist de puesta en marcha

- [ ] Copiar los 6 archivos al repo de la app y editar `backend/Dockerfile`
- [ ] Verificar `pg` y `bcryptjs` en `dependencies` del backend
- [ ] Commit + push al repo
- [ ] Conectar GitHub App en Coolify
- [ ] Crear recurso Docker Compose apuntando a `docker-compose.coolify.yml`
- [ ] Configurar dominios (DNS tipo A → IP del server Coolify)
- [ ] Definir variables: `BACKEND_DOMAIN`, `FRONTEND_DOMAIN`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `COMPANY_NAME`, `CONTACT_PHONE`
- [ ] Deploy y revisar logs `[entrypoint]` del backend
- [ ] Login en el panel con las credenciales de admin
- [ ] Activar Auto Deploy y programar backup diario
