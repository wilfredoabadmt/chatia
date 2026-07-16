# PLANO DE EXECUÇÃO - SPRINT 1 e 2
# Estabilização do Banco de Dados ChatIA

> **Data:** 07/03/2026
> **Foco:** Desbloqueio e Limpeza (SEM modernização de stack)
> **Duração Estimada:** 4-7 dias
> **Status:** Aguardando aprovação

---

## 📋 VISÃO GERAL

**Objetivo:** Deixar setup do banco de dados funcional, confiável e sem dependência de passos manuais ocultos.

**O que NÃO faremos:**
- ❌ Migrar Sequelize v5 → v6
- ❌ Atualizar dependências
- ❌ Refatorar migrations antigas
- ❌ Consolidar migrations

**O que faremos:**
- ✅ Criar script de setup automático
- ✅ Validar build antes de migrations
- ✅ Documentar fluxo real
- ✅ Corrigir seeder que sobrescreve admin
- ✅ Investigar tabela órfã
- ✅ Remover SQL manual redundante

---

## 🔥 SPRINT 1 - DESBLOQUEIO (1-2 dias)

**Meta:** Setup do banco funcionando do zero sem intervenção manual.

---

### ITEM 1.1: Criar Script de Setup Automático

**Descrição:** Script bash que automatiza todo o processo de setup do banco.

**Problema Resolvido:**
- Banco não é criado automaticamente
- Desenvolvedor precisa saber comandos exatos
- Erros não são claros

#### Arquivos Envolvidos

**Novos arquivos:**
- `scripts/setup-database.sh` (novo)
- `scripts/validate-build.sh` (novo)

**Arquivos modificados:**
- Nenhum

#### Alterações

**Tipo:** Infraestrutura + Documentação

**Código do script `scripts/setup-database.sh`:**
```bash
#!/bin/bash
set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 ChatIA Database Setup Script v1.0"
echo "========================================"
echo ""

# 1. Verificar se Docker está rodando
echo "📦 Verificando Docker..."
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker não está rodando!${NC}"
    echo "Execute: docker-compose up -d"
    exit 1
fi
echo -e "${GREEN}✓ Docker OK${NC}"

# 2. Verificar se containers PostgreSQL e Redis estão rodando
echo ""
echo "🐘 Verificando containers..."
if ! docker ps | grep -q "chatia_postgres_dev"; then
    echo -e "${YELLOW}⚠️  Container PostgreSQL não encontrado. Iniciando...${NC}"
    docker-compose up -d postgres
    sleep 5
fi
if ! docker ps | grep -q "chatia_redis_dev"; then
    echo -e "${YELLOW}⚠️  Container Redis não encontrado. Iniciando...${NC}"
    docker-compose up -d redis
    sleep 3
fi
echo -e "${GREEN}✓ Containers OK${NC}"

# 3. Aguardar PostgreSQL ficar pronto
echo ""
echo "⏳ Aguardando PostgreSQL ficar pronto..."
for i in {1..30}; do
    if docker exec chatia_postgres_dev pg_isready -U chatia > /dev/null 2>&1; then
        echo -e "${GREEN}✓ PostgreSQL pronto${NC}"
        break
    fi
    if [ $i -eq 30 ]; then
        echo -e "${RED}❌ PostgreSQL não ficou pronto em 30 segundos${NC}"
        exit 1
    fi
    sleep 1
done

# 4. Criar banco de dados se não existir
echo ""
echo "🗄️  Verificando banco de dados..."
DB_EXISTS=$(docker exec chatia_postgres_dev psql -U chatia -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='chatia_dev'" 2>/dev/null || echo "")

if [ "$DB_EXISTS" != "1" ]; then
    echo -e "${YELLOW}⚠️  Banco 'chatia_dev' não existe. Criando...${NC}"
    docker exec chatia_postgres_dev psql -U chatia -d postgres -c "CREATE DATABASE chatia_dev;" > /dev/null
    echo -e "${GREEN}✓ Banco criado${NC}"
else
    echo -e "${GREEN}✓ Banco já existe${NC}"
fi

# 5. Verificar se backend/dist existe e está atualizado
echo ""
echo "🔨 Verificando build do backend..."
if [ ! -d "backend/dist" ]; then
    echo -e "${YELLOW}⚠️  Pasta dist/ não encontrada. Compilando...${NC}"
    cd backend && npm run build && cd ..
    echo -e "${GREEN}✓ Build concluído${NC}"
else
    # Verificar se há arquivos .ts mais novos que .js correspondentes
    NEEDS_BUILD=0
    if [ -f "backend/src/database/index.ts" ] && [ -f "backend/dist/database/index.js" ]; then
        if [ "backend/src/database/index.ts" -nt "backend/dist/database/index.js" ]; then
            NEEDS_BUILD=1
        fi
    fi

    if [ $NEEDS_BUILD -eq 1 ]; then
        echo -e "${YELLOW}⚠️  Código-fonte mais recente que build. Recompilando...${NC}"
        cd backend && npm run build && cd ..
        echo -e "${GREEN}✓ Build atualizado${NC}"
    else
        echo -e "${GREEN}✓ Build está atualizado${NC}"
    fi
fi

# 6. Executar migrations
echo ""
echo "📊 Executando migrations..."
cd backend
if npm run db:migrate; then
    echo -e "${GREEN}✓ Migrations executadas${NC}"
else
    echo -e "${RED}❌ Erro ao executar migrations${NC}"
    cd ..
    exit 1
fi
cd ..

# 7. Executar seeders
echo ""
echo "🌱 Executando seeders..."
cd backend
if npm run db:seed; then
    echo -e "${GREEN}✓ Seeders executados${NC}"
else
    echo -e "${RED}❌ Erro ao executar seeders${NC}"
    cd ..
    exit 1
fi
cd ..

# 8. Verificar se super admin foi criado
echo ""
echo "👤 Verificando super admin..."
ADMIN_EXISTS=$(docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -tAc "SELECT 1 FROM \"Users\" WHERE email='admin@admin.com' LIMIT 1" 2>/dev/null || echo "")

if [ "$ADMIN_EXISTS" = "1" ]; then
    echo -e "${GREEN}✓ Super admin criado${NC}"
    echo ""
    echo "📝 Credenciais de acesso:"
    echo "   Email: admin@admin.com"
    echo "   Senha: 123456"
else
    echo -e "${RED}❌ Super admin não foi criado${NC}"
    exit 1
fi

# 9. Exibir informações finais
echo ""
echo "========================================"
echo -e "${GREEN}✅ Setup concluído com sucesso!${NC}"
echo ""
echo "Próximos passos:"
echo "  1. Backend: cd backend && npm run dev:server"
echo "  2. Frontend: cd frontend && npm start"
echo ""
echo "URLs:"
echo "  Backend:  http://localhost:3001"
echo "  Frontend: http://localhost:3000"
echo ""
```

**Código do script `scripts/validate-build.sh`:**
```bash
#!/bin/bash

# Script para validar se build está atualizado
# Retorna 0 se atualizado, 1 se precisa rebuild

BACKEND_DIR="backend"

# Verificar se dist existe
if [ ! -d "$BACKEND_DIR/dist" ]; then
    echo "⚠️  Build não encontrado. Execute: npm run build"
    exit 1
fi

# Verificar se algum arquivo .ts em src/ é mais novo que dist/
NEEDS_BUILD=0

# Verificar arquivo principal
if [ -f "$BACKEND_DIR/src/server.ts" ] && [ -f "$BACKEND_DIR/dist/server.js" ]; then
    if [ "$BACKEND_DIR/src/server.ts" -nt "$BACKEND_DIR/dist/server.js" ]; then
        NEEDS_BUILD=1
    fi
fi

# Verificar database/index.ts
if [ -f "$BACKEND_DIR/src/database/index.ts" ] && [ -f "$BACKEND_DIR/dist/database/index.js" ]; then
    if [ "$BACKEND_DIR/src/database/index.ts" -nt "$BACKEND_DIR/dist/database/index.js" ]; then
        NEEDS_BUILD=1
    fi
fi

if [ $NEEDS_BUILD -eq 1 ]; then
    echo "⚠️  Código-fonte mais recente que build. Execute: npm run build"
    exit 1
fi

echo "✓ Build está atualizado"
exit 0
```

#### Risco

**Nível:** 🟢 BAIXO

**Justificativa:**
- Não altera código existente
- Não altera banco de dados
- Apenas automatiza comandos já conhecidos
- Pode ser revertido facilmente (deletar scripts)

**Riscos Identificados:**
- Script pode falhar em ambiente não-Linux (WSL/Mac)
- Permissões de execução podem ser perdidas no Git

**Mitigações:**
- Testar em WSL (ambiente do projeto)
- Documentar `chmod +x` no README
- Adicionar `.gitattributes` para manter permissões

#### Impacto

**Positivo:**
- ✅ Setup automatizado (de 30min manual → 5min automático)
- ✅ Reduz erros humanos
- ✅ Facilita onboarding de novos desenvolvedores
- ✅ Documenta processo em código (não apenas texto)

**Negativo:**
- Nenhum impacto negativo identificado

#### Como Validar

**Teste 1: Setup Limpo**
```bash
# 1. Resetar banco
docker-compose down -v
docker volume rm chatia_postgres_data chatia_redis_data

# 2. Subir containers
docker-compose up -d

# 3. Executar script
chmod +x scripts/setup-database.sh
./scripts/setup-database.sh

# 4. Validar resultado
# - Script deve concluir sem erros
# - Banco 'chatia_dev' deve existir
# - Todas migrations executadas
# - Super admin criado (admin@admin.com)
```

**Teste 2: Setup Incremental**
```bash
# 1. Executar script novamente (deve ser idempotente)
./scripts/setup-database.sh

# 2. Validar resultado
# - Script deve detectar que banco já existe
# - Migrations devem pular as já executadas
# - Seeders devem pular registros já existentes
# - Nenhum erro deve ocorrer
```

**Teste 3: Validação de Build**
```bash
# 1. Alterar arquivo src/server.ts (adicionar comentário)
echo "// test" >> backend/src/server.ts

# 2. Executar validação
./scripts/validate-build.sh

# 3. Resultado esperado
# - Deve retornar código 1 (precisa rebuild)
# - Mensagem de warning exibida

# 4. Fazer build e testar novamente
cd backend && npm run build && cd ..
./scripts/validate-build.sh

# 5. Resultado esperado
# - Deve retornar código 0 (atualizado)
```

**Critérios de Sucesso:**
- ✅ Script cria banco automaticamente
- ✅ Script valida build antes de migrations
- ✅ Script executa migrations e seeds
- ✅ Script valida criação do super admin
- ✅ Script é idempotente (pode rodar múltiplas vezes)
- ✅ Mensagens de erro são claras

---

### ITEM 1.2: Documentar Fluxo Real no README

**Descrição:** Criar/atualizar README.md na raiz do projeto com instruções exatas de setup.

**Problema Resolvido:**
- Falta documentação clara de setup
- Credenciais reais não estão documentadas
- Troubleshooting não está documentado

#### Arquivos Envolvidos

**Novos arquivos:**
- `README.md` (raiz do projeto) - pode existir, será sobrescrito

**Arquivos modificados:**
- Nenhum

#### Alterações

**Tipo:** Documentação

**Conteúdo do README.md:**
```markdown
# ChatIA v2.2.2v-26

Sistema SaaS multi-tenant de atendimento via WhatsApp.

## 🚀 Setup Rápido

### Pré-requisitos

- Node.js 24.12.0
- Docker & Docker Compose
- Git

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <repo-url>
   cd chatia-4.1.0-main
   ```

2. **Configurar variáveis de ambiente**
   ```bash
   cp .env.example .env
   # Editar .env com suas configurações
   ```

3. **Instalar dependências**
   ```bash
   # Backend
   cd backend && npm install && cd ..

   # Frontend
   cd frontend && npm install --legacy-peer-deps && cd ..
   ```

4. **Setup do banco de dados (AUTOMÁTICO)**
   ```bash
   chmod +x scripts/setup-database.sh
   ./scripts/setup-database.sh
   ```

5. **Iniciar servidores**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev:server

   # Terminal 2 - Frontend
   cd frontend && npm start
   ```

6. **Acessar sistema**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

   **Credenciais padrão:**
   - Email: `admin@admin.com`
   - Senha: `123456`

---

## 📊 Setup Manual (se script falhar)

### 1. Subir containers Docker

```bash
docker-compose up -d
```

### 2. Criar banco de dados

```bash
docker exec chatia_postgres_dev psql -U chatia -d postgres -c "CREATE DATABASE chatia_dev;"
```

### 3. Compilar backend

```bash
cd backend
npm run build
```

**⚠️ IMPORTANTE:** Migrations rodam de `dist/` (código compilado), não de `src/`.
Sempre execute `npm run build` antes de `npm run db:migrate`.

### 4. Executar migrations

```bash
npm run db:migrate
```

### 5. Executar seeders

```bash
npm run db:seed
```

### 6. Validar criação do super admin

```bash
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "SELECT email, super FROM \"Users\" WHERE email='admin@admin.com';"
```

Resultado esperado:
```
       email        | super
-------------------+-------
 admin@admin.com   | t
```

---

## 🗄️ Banco de Dados

### Tecnologia

- **SGBD:** PostgreSQL 15
- **ORM:** Sequelize 5.22.3
- **Porta:** 5434 (mapeada de 5432 no Docker)

### Estrutura

- **Migrations:** 263 arquivos TypeScript em `backend/src/database/migrations/`
- **Seeders:** 6 arquivos em `backend/src/database/seeds/`
- **Models:** 55 models em `backend/src/models/`

### Comandos Úteis

```bash
# Ver status de migrations
cd backend
npx sequelize-cli db:migrate:status

# Desfazer última migration
npm run db:migrate:undo

# Resetar banco (CUIDADO: perde todos os dados)
docker-compose down -v
docker-compose up -d
./scripts/setup-database.sh
```

---

## 🔧 Desenvolvimento

### Estrutura de Pastas

```
chatia-4.1.0-main/
├── backend/           # API Node.js + TypeScript
│   ├── src/          # Código-fonte
│   ├── dist/         # Código compilado (⚠️ migrations rodam daqui)
│   └── package.json
├── frontend/         # React 17 SPA
│   ├── src/
│   └── package.json
├── scripts/          # Scripts de automação
│   ├── setup-database.sh
│   └── validate-build.sh
├── docker-compose.yml
├── .env
└── README.md
```

### Fluxo de Migrations

**⚠️ IMPORTANTE:** Sequelize CLI lê configuração de `.sequelizerc` que aponta para `dist/`.

**Ordem correta:**
1. Criar migration em `src/database/migrations/`
2. Compilar: `npm run build`
3. Executar: `npm run db:migrate`

**Erro comum:**
```
"Alterei a migration mas não teve efeito"
→ Solução: Você esqueceu de rodar npm run build
```

---

## 🐛 Troubleshooting

### Erro: "database chatia_dev does not exist"

**Causa:** Banco não foi criado.

**Solução:**
```bash
docker exec chatia_postgres_dev psql -U chatia -d postgres -c "CREATE DATABASE chatia_dev;"
```

### Erro: "relation Users does not exist"

**Causa:** Migrations não foram executadas.

**Solução:**
```bash
cd backend
npm run build
npm run db:migrate
```

### Erro: "Cannot find module 'dist/...' "

**Causa:** Build não foi executado ou está desatualizado.

**Solução:**
```bash
cd backend
npm run build
```

### Login não funciona com admin@chatia.local

**Causa:** Credenciais do `.env` são ignoradas pelos seeders.

**Solução:** Use as credenciais REAIS criadas pelos seeders:
- Email: `admin@admin.com`
- Senha: `123456`

### Migration não executa alteração recente

**Causa:** Build desatualizado.

**Solução:**
```bash
cd backend
npm run build
npm run db:migrate
```

### WSL: npm install demora 20-30min no frontend

**Causa:** Conhecido do WSL2 + npm.

**Solução:** É normal. Use `npm ci` para instalar mais rápido em setup limpo.

---

## 📚 Documentação Adicional

- **Auditoria de Banco:** `AUDIT-DATABASE.md`
- **Guia Técnico:** `CLAUDE.md`
- **Plano de Sprints:** `PLAN-SPRINT1-2.md`

---

## 🔒 Segurança

### Credenciais Padrão

**⚠️ MUDAR EM PRODUÇÃO:**
- Super admin: `admin@admin.com` / `123456`
- PostgreSQL: `chatia` / `chatia123dev`
- Redis: `redis123dev`

### Variáveis Sensíveis

Nunca commitar:
- `.env`
- `backend/.env`
- `frontend/.env`

---

## 📦 Portas Utilizadas

| Serviço | Porta Externa | Porta Interna |
|---------|---------------|---------------|
| Frontend | 3000 | 3000 |
| Backend | 3001 | 3001 |
| PostgreSQL | 5434 | 5432 |
| Redis | 6380 | 6379 |

**⚠️ NÃO USAR:** Portas 5173, 8080, 5050 (conflito com outro sistema)

---

## 🤝 Contribuindo

1. Criar branch feature
2. Fazer alterações
3. Testar localmente
4. Criar Pull Request

---

## 📄 Licença

[Informar licença do projeto]

---

**Última atualização:** 07/03/2026
```

#### Risco

**Nível:** 🟢 NENHUM

**Justificativa:**
- Apenas documentação
- Não altera código
- Não altera banco
- Pode ser revertido facilmente

#### Impacto

**Positivo:**
- ✅ Novos desenvolvedores conseguem fazer setup sozinhos
- ✅ Credenciais reais documentadas
- ✅ Troubleshooting reduz tickets de suporte
- ✅ Comandos exatos evitam erros

**Negativo:**
- Nenhum

#### Como Validar

**Teste 1: Setup por Novo Desenvolvedor**
```bash
# 1. Pedir para alguém que não conhece o projeto fazer setup
# 2. Observar se consegue sem ajuda externa
# 3. Medir tempo (meta: < 15min)
```

**Teste 2: Troubleshooting**
```bash
# 1. Simular cada erro do troubleshooting
# 2. Seguir solução documentada
# 3. Validar que resolve o problema
```

**Critérios de Sucesso:**
- ✅ Desenvolvedor novo consegue fazer setup sozinho
- ✅ Todos comandos estão corretos
- ✅ Credenciais reais estão documentadas
- ✅ Troubleshooting cobre erros comuns
- ✅ README está sincronizado com CLAUDE.md

---

### ITEM 1.3: Adicionar Validação de Build nos Scripts

**Descrição:** Modificar scripts `db:migrate` e `db:seed` para validar/fazer build automaticamente.

**Problema Resolvido:**
- Migrations rodam de `dist/` mas desenvolvedor altera `src/`
- Confusão: "Alterei mas não funcionou"

#### Arquivos Envolvidos

**Modificados:**
- `backend/package.json`

**Novos:**
- Nenhum (usa script criado no Item 1.1)

#### Alterações

**Tipo:** Configuração

**Antes:**
```json
{
  "scripts": {
    "build": "tsc",
    "db:migrate": "npx sequelize-cli db:migrate",
    "db:seed": "npx sequelize-cli db:seed:all"
  }
}
```

**Depois:**
```json
{
  "scripts": {
    "build": "tsc",
    "db:migrate": "npm run build && npx sequelize-cli db:migrate",
    "db:seed": "npm run build && npx sequelize-cli db:seed:all",
    "db:migrate:undo": "npm run build && npx sequelize-cli db:migrate:undo",
    "db:migrate:undo:all": "npm run build && npx sequelize-cli db:migrate:undo:all"
  }
}
```

**Alternativa (se build for muito lento):**
```json
{
  "scripts": {
    "build": "tsc",
    "db:migrate": "../scripts/validate-build.sh && npx sequelize-cli db:migrate || (npm run build && npx sequelize-cli db:migrate)",
    "db:seed": "../scripts/validate-build.sh && npx sequelize-cli db:seed:all || (npm run build && npx sequelize-cli db:seed:all)"
  }
}
```

#### Risco

**Nível:** 🟡 BAIXO-MÉDIO

**Justificativa:**
- Altera scripts existentes
- Pode aumentar tempo de execução
- MAS: Não altera comportamento do banco
- MAS: Pode ser revertido facilmente

**Riscos Identificados:**
- Build pode falhar e bloquear migrations
- Build demora 2-3min (pode frustrar desenvolvedor)

**Mitigações:**
- Manter scripts antigos como `db:migrate:fast` (sem build)
- Adicionar comentário explicando o motivo
- Documentar no README

#### Impacto

**Positivo:**
- ✅ Migrations sempre usam código atualizado
- ✅ Elimina erro "alterei mas não funcionou"
- ✅ Força boa prática (build antes de migrate)

**Negativo:**
- ⚠️ Aumenta tempo de execução (+2-3min)
- ⚠️ Build pode falhar e bloquear migrations

#### Como Validar

**Teste 1: Build Automático**
```bash
# 1. Alterar migration
echo "// test" >> backend/src/database/migrations/20200717133438-create-users.ts

# 2. Executar migrate (deve fazer build automático)
cd backend
npm run db:migrate

# 3. Validar que build foi executado
ls -la dist/database/migrations/20200717133438-create-users.js
# Arquivo deve ter timestamp recente
```

**Teste 2: Build com Erro**
```bash
# 1. Introduzir erro de sintaxe
echo "syntax error here" >> backend/src/server.ts

# 2. Tentar migrate
cd backend
npm run db:migrate

# 3. Resultado esperado
# - Build deve falhar
# - Migrations NÃO devem executar
# - Mensagem de erro clara

# 4. Corrigir erro e testar novamente
git checkout backend/src/server.ts
npm run db:migrate
```

**Critérios de Sucesso:**
- ✅ Migrations sempre fazem build antes
- ✅ Erro de build bloqueia migrations
- ✅ Mensagens de erro são claras
- ✅ Tempo total aceitável (< 5min)

---

## 🧹 SPRINT 2 - LIMPEZA (3-5 dias)

**Meta:** Remover inconsistências e corrigir problemas de dados.

---

### ITEM 2.1: Remover SQL Manual Redundante

**Descrição:** Deletar arquivo `MANUAL-add-createDemoUser.sql` que é redundante com migration TypeScript.

**Problema Resolvido:**
- Arquivo SQL manual confunde desenvolvedores
- Campo pode existir ou não dependendo de histórico
- Não está claro qual versão usar

#### Arquivos Envolvidos

**Deletados:**
- `backend/src/database/migrations/MANUAL-add-createDemoUser.sql`

**Modificados:**
- Nenhum

#### Alterações

**Tipo:** Limpeza de Código

**Ação:**
```bash
rm backend/src/database/migrations/MANUAL-add-createDemoUser.sql
```

**Validação prévia:**
```bash
# Verificar que migration TypeScript equivalente existe
ls -la backend/src/database/migrations/20251012120000-add-createDemoUser-to-companies-settings.ts
```

**Migration equivalente confirmada:**
- ✅ `20251012120000-add-createDemoUser-to-companies-settings.ts` existe
- ✅ Adiciona mesmo campo: `createDemoUser VARCHAR(255)`
- ✅ Migration TypeScript é oficial e rastreada

#### Risco

**Nível:** 🟢 BAIXO

**Justificativa:**
- Arquivo SQL não é executado automaticamente
- Migration TypeScript equivalente já existe
- Apenas remove confusão
- Pode ser restaurado do Git se necessário

**Riscos Identificados:**
- Alguém pode ter executado SQL manual mas não a migration TS
- Campo pode existir em algum ambiente mas não estar em `SequelizeMeta`

**Mitigações:**
- Validar em todos ambientes que campo existe
- Se não existir, rodar migration TS oficial

#### Impacto

**Positivo:**
- ✅ Remove confusão sobre qual arquivo usar
- ✅ Clarifica que apenas migrations TS são oficiais
- ✅ Facilita auditoria (menos arquivos especiais)

**Negativo:**
- Nenhum (arquivo não era usado)

#### Como Validar

**Teste 1: Campo Existe no Banco**
```bash
# Em TODOS os ambientes (dev, staging, prod)
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "\d \"CompaniesSettings\"" | grep createDemoUser
```

**Resultado esperado:**
```
 createDemoUser | character varying(255) | | not null | 'disabled'::character varying
```

**Teste 2: Migration Está Registrada**
```bash
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "SELECT name FROM \"SequelizeMeta\" WHERE name LIKE '%createDemoUser%';"
```

**Resultado esperado:**
```
                         name
------------------------------------------------------
 20251012120000-add-createDemoUser-to-companies-settings.ts
```

**Se campo NÃO existir:**
```bash
# Executar migration TypeScript oficial
cd backend
npm run build
npm run db:migrate
```

**Critérios de Sucesso:**
- ✅ Arquivo SQL deletado
- ✅ Migration TS existe e está registrada
- ✅ Campo existe em todos ambientes
- ✅ Nenhum código referencia arquivo SQL

---

### ITEM 2.2: Investigar Tabela ContactGroups

**Descrição:** Verificar se tabela `ContactGroups` é usada. Se não, remover migration. Se sim, criar model faltante.

**Problema Resolvido:**
- Tabela criada mas sem model
- Não está claro se é usada ou é feature abandonada

#### Arquivos Envolvidos

**Para investigar:**
- `backend/src/database/migrations/20240102230241-create-ContactGroup.ts`
- Todo código backend (buscar por "ContactGroup" ou "contact_groups")

**Possíveis ações:**

**OPÇÃO A: Se NÃO usada → Deletar migration**
- `backend/src/database/migrations/20240102230241-create-ContactGroup.ts`

**OPÇÃO B: Se usada → Criar model**
- `backend/src/models/ContactGroup.ts` (novo)
- `backend/src/database/index.ts` (modificar)

#### Alterações

**Tipo:** Investigação + Limpeza ou Implementação

**Etapa 1: Buscar Uso da Tabela**
```bash
# Buscar em código JavaScript/TypeScript
cd backend
grep -r "ContactGroup" src/
grep -r "contact_groups" src/

# Buscar queries SQL diretas
grep -r "ContactGroups" src/
grep -r "FROM.*ContactGroup" src/
grep -r "INSERT.*ContactGroup" src/

# Buscar em migrations posteriores
grep -r "ContactGroup" src/database/migrations/ | grep -v "20240102230241"
```

**Etapa 2: Verificar se Tabela Tem Dados**
```bash
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "SELECT COUNT(*) FROM \"ContactGroups\";"
```

**Etapa 3: Analisar Migration**
```bash
cat backend/src/database/migrations/20240102230241-create-ContactGroup.ts
```

**DECISÃO:** Com base nas descobertas acima.

---

**CENÁRIO A: Tabela NÃO é usada (mais provável)**

**Ação:** Criar migration para remover tabela

**Novo arquivo:** `backend/src/database/migrations/20260307000000-remove-unused-contact-groups-table.ts`

```typescript
import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    // Remove tabela ContactGroups que não tem model correspondente
    // e não é usada por nenhum código
    await queryInterface.dropTable("ContactGroups");
  },

  down: async (queryInterface: QueryInterface) => {
    // Recria tabela se necessário
    await queryInterface.createTable("ContactGroups", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: { model: "Companies", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  }
};
```

---

**CENÁRIO B: Tabela é usada (menos provável)**

**Ação:** Criar model faltante

**Novo arquivo:** `backend/src/models/ContactGroup.ts`

```typescript
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
  CreatedAt,
  UpdatedAt
} from "sequelize-typescript";
import Company from "./Company";

@Table
class ContactGroup extends Model<ContactGroup> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default ContactGroup;
```

**Modificar:** `backend/src/database/index.ts`

Adicionar import e registro:
```typescript
import ContactGroup from "../models/ContactGroup";

// ... no array de models
ContactGroup,
```

---

#### Risco

**Nível:** 🟡 MÉDIO

**Justificativa:**
- Se tabela for usada por queries SQL diretas não detectadas, deletar pode quebrar funcionalidade
- Se criar model para tabela não usada, adiciona código morto

**Mitigações:**
- Buscar exaustivamente antes de decidir
- Testar em staging primeiro
- Manter migration de rollback (down)
- Backup do banco antes de aplicar

#### Impacto

**CENÁRIO A (Remover tabela):**

**Positivo:**
- ✅ Remove tabela órfã
- ✅ Reduz tamanho do banco (mínimo)
- ✅ Clarifica estrutura

**Negativo:**
- ⚠️ Se estava em uso, quebra funcionalidade

**CENÁRIO B (Criar model):**

**Positivo:**
- ✅ Sincroniza model com banco
- ✅ Permite usar tabela via Sequelize

**Negativo:**
- ⚠️ Se não é usada, adiciona código morto

#### Como Validar

**Validação da Investigação:**
```bash
# 1. Executar todas buscas mencionadas
# 2. Documentar resultados
# 3. Verificar se tabela tem dados
# 4. Tomar decisão baseada em evidências
```

**Validação Pós-Ação (CENÁRIO A - Remover):**
```bash
# 1. Aplicar migration de remoção em staging
cd backend
npm run build
npm run db:migrate

# 2. Testar funcionalidades relacionadas a contatos
# - Criar contato
# - Editar contato
# - Listar contatos
# - Criar contact list
# - Todas devem funcionar normalmente

# 3. Verificar logs de erro
# - Não deve haver erros relacionados a ContactGroups

# 4. Se tudo OK, aplicar em produção
```

**Validação Pós-Ação (CENÁRIO B - Criar model):**
```bash
# 1. Compilar backend
cd backend
npm run build

# 2. Verificar se model foi registrado
node -e "const db = require('./dist/database'); console.log(db.default.models.ContactGroup ? 'OK' : 'ERRO')"

# 3. Testar CRUD básico (se houver interface)
# - Criar ContactGroup
# - Listar ContactGroups
# - Deletar ContactGroup

# 4. Verificar logs
# - Nenhum erro deve ocorrer
```

**Critérios de Sucesso (CENÁRIO A):**
- ✅ Evidências confirmam que tabela não é usada
- ✅ Migration de remoção executada com sucesso
- ✅ Funcionalidades de contatos continuam funcionando
- ✅ Nenhum erro de "table not found"

**Critérios de Sucesso (CENÁRIO B):**
- ✅ Evidências confirmam que tabela é usada
- ✅ Model criado e registrado
- ✅ Model pode ser importado e usado
- ✅ Relacionamentos funcionam (se houver)

---

### ITEM 2.3: Corrigir Seeder de Super Admin

**Descrição:** Modificar seeder `ensure-super-admin.ts` para NÃO sobrescrever usuário existente.

**Problema Resolvido:**
- Seeder reseta senha para "123456" se admin já existe
- Permissões customizadas são perdidas
- Comportamento inesperado em ambientes de produção

#### Arquivos Envolvidos

**Modificados:**
- `backend/src/database/seeds/20250101000000-ensure-super-admin.ts`

#### Alterações

**Tipo:** Correção de Lógica

**Antes (problemático):**
```typescript
// Se usuário já existe
const [user] = await queryInterface.rawSelect('Users', {
  where: { email: 'admin@admin.com' },
  plain: false
}, ['id']);

if (user) {
  // ❌ PROBLEMA: Sobrescreve usuário existente
  await queryInterface.bulkUpdate('Users', {
    passwordHash: await hash("123456", 8),  // Reseta senha!
    super: true,
    profile: 'admin',
    // ... outros campos sobrescritos
  }, { email: 'admin@admin.com' });
}
```

**Depois (corrigido):**
```typescript
// Verifica se usuário já existe
const [user] = await queryInterface.rawSelect('Users', {
  where: { email: 'admin@admin.com' },
  plain: false
}, ['id']);

if (user) {
  // ✅ CORREÇÃO: Apenas loga que já existe, não sobrescreve
  console.log('✓ Super admin já existe (admin@admin.com)');
  return;
}

// Se não existe, cria
// ... código de criação mantido
```

**Código completo do seeder corrigido:**
```typescript
import Sequelize from "sequelize";
import { QueryInterface } from "sequelize";
import { hash } from "bcryptjs";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    // 1. Verificar se usuário super admin já existe
    const [existingUser] = await queryInterface.rawSelect(
      'Users',
      {
        where: { email: 'admin@admin.com' },
        plain: false
      },
      ['id']
    );

    if (existingUser) {
      console.log('✓ Super admin já existe (admin@admin.com). Nenhuma alteração feita.');
      return;
    }

    // 2. Garantir que Plan ID=1 existe
    const [existingPlan] = await queryInterface.rawSelect(
      'Plans',
      {
        where: { id: 1 },
        plain: false
      },
      ['id']
    );

    if (!existingPlan) {
      await queryInterface.bulkInsert('Plans', [{
        id: 1,
        name: "Plano Super Admin",
        users: 999999,
        connections: 999999,
        queues: 999999,
        amount: 0,
        trial: false,
        isPublic: true,
        useWhatsapp: true,
        useFacebook: true,
        useInstagram: true,
        useCampaigns: true,
        useSchedules: true,
        useInternalChat: true,
        useExternalApi: true,
        useKanban: true,
        useOpenAi: true,
        useIntegrations: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }

    // 3. Garantir que Company ID=1 existe
    const [existingCompany] = await queryInterface.rawSelect(
      'Companies',
      {
        where: { id: 1 },
        plain: false
      },
      ['id']
    );

    if (!existingCompany) {
      await queryInterface.bulkInsert('Companies', [{
        id: 1,
        name: "Empresa 1",
        planId: 1,
        dueDate: "2999-12-31",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }

    // 4. Criar super admin (só se não existe)
    const passwordHash = await hash("123456", 8);

    await queryInterface.bulkInsert('Users', [{
      name: "Super Admin",
      email: "admin@admin.com",
      profile: "admin",
      passwordHash: passwordHash,
      companyId: 1,
      super: true,
      online: false,
      startWork: "00:00",
      endWork: "23:59",
      allTicket: "enable",
      allHistoric: "enabled",
      allUserChat: "enabled",
      defaultTheme: "light",
      defaultMenu: "closed",
      farewellMessage: "",
      transferToOtherQueues: true,
      allConnections: true,
      isTricked: "enabled",
      allowGroup: false,
      spy: false,
      allowRealTime: "enabled",
      canViewAllContacts: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    console.log('✅ Super admin criado com sucesso (admin@admin.com / 123456)');
  },

  down: async (queryInterface: QueryInterface) => {
    // Remover super admin criado
    await queryInterface.bulkDelete('Users', {
      email: 'admin@admin.com'
    });
  }
};
```

#### Risco

**Nível:** 🟡 MÉDIO

**Justificativa:**
- Altera comportamento de seeder crítico
- Seeder é executado em múltiplos ambientes
- MAS: Mudança torna comportamento mais seguro
- MAS: Pode ser revertido facilmente

**Riscos Identificados:**
- Se alguém dependia do comportamento de "resetar senha", pode estranhar
- Em ambiente onde admin está "corrompido", não haverá correção automática

**Mitigações:**
- Documentar mudança no README
- Adicionar comando manual para "resetar admin se necessário"
- Testar em dev e staging antes de prod

#### Impacto

**Positivo:**
- ✅ Admin não terá senha resetada inesperadamente
- ✅ Permissões customizadas preservadas
- ✅ Comportamento mais seguro e previsível
- ✅ Alinhado com comportamento de outros seeders

**Negativo:**
- ⚠️ Se admin estiver "corrompido", não haverá correção automática
- ⚠️ Mudança de comportamento pode confundir quem conhecia seeder antigo

#### Como Validar

**Teste 1: Seeder Não Sobrescreve Admin Existente**
```bash
# 1. Criar admin manualmente
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "
  INSERT INTO \"Users\" (name, email, \"passwordHash\", profile, \"companyId\", super, \"createdAt\", \"updatedAt\")
  VALUES ('Admin Teste', 'admin@admin.com', '\$2a\$08\$custom_hash', 'admin', 1, true, NOW(), NOW());
"

# 2. Executar seeder
cd backend
npm run db:seed

# 3. Verificar que senha NÃO foi alterada
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "
  SELECT name, email, \"passwordHash\" FROM \"Users\" WHERE email='admin@admin.com';
"

# Resultado esperado:
# - name deve ser 'Admin Teste' (não 'Super Admin')
# - passwordHash deve ser '$2a$08$custom_hash' (não mudou)
```

**Teste 2: Seeder Cria Admin se Não Existe**
```bash
# 1. Resetar banco (ou deletar admin)
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "
  DELETE FROM \"Users\" WHERE email='admin@admin.com';
"

# 2. Executar seeder
cd backend
npm run db:seed

# 3. Verificar que admin foi criado
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "
  SELECT name, email, super FROM \"Users\" WHERE email='admin@admin.com';
"

# Resultado esperado:
# - name: 'Super Admin'
# - email: 'admin@admin.com'
# - super: true
```

**Teste 3: Mensagem de Log**
```bash
# 1. Executar seeder com admin existente
cd backend
npm run db:seed 2>&1 | grep "Super admin"

# Resultado esperado:
# "✓ Super admin já existe (admin@admin.com). Nenhuma alteração feita."
```

**Critérios de Sucesso:**
- ✅ Seeder não sobrescreve admin existente
- ✅ Seeder cria admin se não existe
- ✅ Mensagem de log clara sobre o que foi feito
- ✅ Senha não é resetada
- ✅ Funcionalidade de login permanece funcionando

---

## 📊 RESUMO DAS ALTERAÇÕES

### Arquivos Criados (3)
1. `scripts/setup-database.sh` - Script de setup automático
2. `scripts/validate-build.sh` - Validação de build
3. `README.md` - Documentação completa (pode existir, será sobrescrito)

### Arquivos Modificados (2)
1. `backend/package.json` - Scripts com validação de build
2. `backend/src/database/seeds/20250101000000-ensure-super-admin.ts` - Corrigir sobrescrita

### Arquivos Deletados (1)
1. `backend/src/database/migrations/MANUAL-add-createDemoUser.sql` - SQL redundante

### Arquivos Investigados (1)
1. `backend/src/database/migrations/20240102230241-create-ContactGroup.ts` - Decisão: deletar ou criar model

### Possíveis Arquivos Novos (2 - dependendo da investigação)
1. `backend/src/models/ContactGroup.ts` - Se tabela for usada
2. `backend/src/database/migrations/20260307000000-remove-unused-contact-groups-table.ts` - Se tabela não for usada

---

## ⚠️ CHECKLIST DE EXECUÇÃO

### Antes de Iniciar
- [ ] Fazer backup do banco de dados
- [ ] Commitar código atual no Git
- [ ] Criar branch feature: `git checkout -b feature/stabilize-database`
- [ ] Documentar estado atual (já feito: AUDIT-DATABASE.md)

### Sprint 1 (Ordem de Execução)
- [ ] **ITEM 1.1:** Criar scripts de setup
  - [ ] Criar `scripts/setup-database.sh`
  - [ ] Criar `scripts/validate-build.sh`
  - [ ] Dar permissões: `chmod +x scripts/*.sh`
  - [ ] Testar em setup limpo
  - [ ] Validar idempotência

- [ ] **ITEM 1.2:** Documentar fluxo
  - [ ] Criar/atualizar `README.md`
  - [ ] Validar todos comandos
  - [ ] Testar troubleshooting
  - [ ] Sincronizar com CLAUDE.md

- [ ] **ITEM 1.3:** Validação de build
  - [ ] Modificar `backend/package.json`
  - [ ] Testar build automático
  - [ ] Testar erro de build
  - [ ] Validar tempo de execução aceitável

### Sprint 2 (Ordem de Execução)
- [ ] **ITEM 2.1:** Remover SQL manual
  - [ ] Validar que migration TS existe
  - [ ] Validar que campo existe no banco
  - [ ] Deletar arquivo SQL
  - [ ] Commitar mudança

- [ ] **ITEM 2.2:** Investigar ContactGroups
  - [ ] Buscar uso no código
  - [ ] Verificar dados na tabela
  - [ ] Tomar decisão (deletar ou criar model)
  - [ ] Implementar ação escolhida
  - [ ] Testar em staging
  - [ ] Aplicar em produção

- [ ] **ITEM 2.3:** Corrigir seeder
  - [ ] Modificar seeder `ensure-super-admin.ts`
  - [ ] Testar que não sobrescreve
  - [ ] Testar que cria se não existe
  - [ ] Validar mensagens de log

### Após Conclusão
- [ ] Executar todos testes de validação
- [ ] Documentar mudanças em CHANGELOG (se houver)
- [ ] Criar Pull Request
- [ ] Code review
- [ ] Merge para main
- [ ] Aplicar em produção (se aplicável)

---

## 🎯 CRITÉRIOS DE SUCESSO GLOBAL

### Sprint 1
- ✅ Setup do zero funciona com 1 comando
- ✅ Documentação está completa e validada
- ✅ Migrations sempre usam código atualizado

### Sprint 2
- ✅ Nenhum arquivo redundante
- ✅ Tabela ContactGroups decidida (removida ou com model)
- ✅ Seeder de admin não sobrescreve

### Ambos
- ✅ Nenhuma funcionalidade existente quebrada
- ✅ Banco de dados íntegro
- ✅ Todos testes de validação passando
- ✅ Código limpo e documentado

---

## 📞 SUPORTE

Em caso de dúvidas ou problemas durante execução:
1. Consultar AUDIT-DATABASE.md (relatório completo)
2. Consultar CLAUDE.md (guia técnico)
3. Fazer rollback se necessário: `git checkout main`
4. Restaurar backup do banco se necessário

---

**FIM DO PLANO DE EXECUÇÃO**

**Próximo Passo:** Aguardando aprovação para iniciar implementação.
