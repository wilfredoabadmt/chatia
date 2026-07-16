#!/bin/sh
# ============================================
# ChatIA v4.5 - Entrypoint do backend (Coolify)
# Colocar em: backend/docker-entrypoint.sh
#
# Substitui as Etapas 7 e 9 do instalador VPS:
#  1. Espera o PostgreSQL aceitar conexões
#  2. Pré-cria colunas problemáticas (db-prepare.js)
#  3. Roda migrations em até 3 rodadas
#  4. Roda seeds
#  5. Cria/atualiza o admin (seed_admin.js, idempotente)
#  6. Inicia o servidor
#
# Controle por env:
#  RUN_MIGRATIONS=false  -> pula migrations/seeds (ex: réplicas)
#  RUN_SEED_ADMIN=false  -> pula seed do admin
# ============================================
set -u

log() { echo "[entrypoint] $1"; }

RUN_MIGRATIONS="${RUN_MIGRATIONS:-true}"
RUN_SEED_ADMIN="${RUN_SEED_ADMIN:-true}"

# ---------------------------------------------
# 1. Esperar PostgreSQL (até 120s)
# ---------------------------------------------
log "Aguardando PostgreSQL em ${DB_HOST:-postgres}:${DB_PORT:-5432}..."
ELAPSED=0
until node /app/scripts/db-wait.js 2>/dev/null; do
    ELAPSED=$((ELAPSED + 2))
    if [ "$ELAPSED" -ge 120 ]; then
        log "ERRO: PostgreSQL nao respondeu em 120s. Abortando."
        exit 1
    fi
    sleep 2
done
log "PostgreSQL pronto."

if [ "$RUN_MIGRATIONS" = "true" ]; then
    # ---------------------------------------------
    # 1b. Detectar si la BD está limpia ANTES de migrar
    # (los seeders del repo NO son idempotentes — solo
    #  ensure-super-admin lo es. Sembrar dos veces duplica datos.)
    # ---------------------------------------------
    if node /app/scripts/db-check-tables.js >/dev/null 2>&1; then
        FRESH_INSTALL="false"
        log "BD existente detectada - seeds seran omitidos."
    else
        FRESH_INSTALL="true"
        log "BD limpia detectada - seeds se ejecutaran tras las migrations."
    fi

    # ---------------------------------------------
    # 2. Pré-criar colunas problemáticas
    # (equivalente ao bloco SQLPREP do instalador)
    # ---------------------------------------------
    log "Pre-criando colunas problematicas..."
    node /app/scripts/db-prepare.js || log "AVISO: db-prepare falhou (normal em install limpo)"

    # ---------------------------------------------
    # 3. Migrations em até 3 rodadas
    # (mesma estratégia do instalador: dependências entre migrations)
    # ---------------------------------------------
    ROUND=1
    while [ "$ROUND" -le 3 ]; do
        log "Migrations - rodada ${ROUND}/3..."
        MIGRATE_OUTPUT=$(npx sequelize-cli db:migrate 2>&1) || true
        echo "$MIGRATE_OUTPUT" | tail -5

        if echo "$MIGRATE_OUTPUT" | grep -qi "error"; then
            if [ "$ROUND" -lt 3 ]; then
                log "Erros na rodada ${ROUND}, tentando novamente..."
                ROUND=$((ROUND + 1))
                continue
            fi
            log "AVISO: migrations terminaram com erros na rodada 3."
            break
        fi

        MIGRATED_COUNT=$(echo "$MIGRATE_OUTPUT" | grep -c "migrated" || true)
        if [ "${MIGRATED_COUNT:-0}" -eq 0 ]; then
            log "Todas migrations executadas."
            break
        fi
        log "${MIGRATED_COUNT} migrations na rodada ${ROUND}."
        ROUND=$((ROUND + 1))
    done

    # ---------------------------------------------
    # 3b. Validar tabelas essenciais (aborta se faltar)
    # ---------------------------------------------
    if ! node /app/scripts/db-check-tables.js; then
        log "ERRO: tabelas essenciais faltando. Migrations falharam."
        exit 1
    fi
    log "Tabelas essenciais validadas."

    # ---------------------------------------------
    # 4. Seeds — SOLO en instalación limpia
    # (seeders no idempotentes; ver PLAN-IMPLEMENTACION-CRM.md §3.4)
    # ---------------------------------------------
    if [ "$FRESH_INSTALL" = "true" ]; then
        log "Executando seeds (instalacao limpa)..."
        npx sequelize-cli db:seed:all 2>&1 | tail -3 || true
    else
        log "Seeds omitidos (BD ja poblada)."
    fi

    # ---------------------------------------------
    # 5. Seed do admin (idempotente)
    # ---------------------------------------------
    if [ "$RUN_SEED_ADMIN" = "true" ]; then
        log "Criando/atualizando admin..."
        node /app/scripts/seed_admin.js || {
            log "ERRO: seed do admin falhou."
            exit 1
        }
    fi
else
    log "RUN_MIGRATIONS=false - pulando migrations e seeds."
fi

# ---------------------------------------------
# 6. Iniciar servidor
# ---------------------------------------------
log "Iniciando servidor..."
exec node dist/server.js
