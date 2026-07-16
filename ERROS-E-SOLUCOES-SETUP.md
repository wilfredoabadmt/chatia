# Guia Completo: Erros e Soluções para Rodar o Sistema

> **Data:** 07/03/2026
> **Objetivo:** Documentar TODOS os problemas encontrados e como fazer o sistema rodar corretamente
> **Sistema:** ChatIA v2.2.2v-26

---

## 📋 Índice

1. [Pré-requisitos OBRIGATÓRIOS](#pré-requisitos-obrigatórios)
2. [Erros Comuns e Soluções](#erros-comuns-e-soluções)
3. [Setup Correto Passo-a-Passo](#setup-correto-passo-a-passo)
4. [Validação Final](#validação-final)
5. [Checklist de Troubleshooting](#checklist-de-troubleshooting)

---

## ⚠️ Pré-requisitos OBRIGATÓRIOS

### 1. Docker Desktop DEVE estar rodando

**Erro comum:**
```
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

**Solução:**
1. Abrir **Docker Desktop** no Windows
2. Aguardar até aparecer "Docker Desktop is running"
3. No WSL, testar: `docker ps`
4. **Se não funcionar:** Reiniciar Docker Desktop

**Validação:**
```bash
docker ps
# Deve mostrar lista de containers (pode estar vazia)
# NÃO deve dar erro "Cannot connect"
```

---

### 2. Portas DEVEM estar livres

**Portas necessárias:**
- 3000 - Frontend
- 3001 - Backend
- 5434 - PostgreSQL
- 6380 - Redis

**Erro comum:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solução:**
```bash
# Verificar portas em uso
lsof -i :3000
lsof -i :3001

# Matar processos se necessário
kill -9 <PID>
```

---

### 3. Node.js Versão Correta

**Versão necessária:** Node.js 24.12.0 ou superior

**Verificar:**
```bash
node --version
# Deve retornar v24.x.x ou superior
```

---

## 🔴 Erros Comuns e Soluções

### ERRO 1: Backend não sobe / trava silenciosamente

**Sintoma:**
```bash
npm run dev:server
# Inicia mas nunca mostra "Server started on port 3001"
```

**Causa:** ts-node-dev trava no WSL com projetos grandes

**Solução:** **NÃO usar nohup ou &**
```bash
# ❌ ERRADO (trava silenciosamente):
cd backend
nohup npm run dev:server > /tmp/backend.log 2>&1 &

# ✅ CORRETO (terminal interativo):
cd backend
npm run dev:server
# Aguardar ver: "Server started on port: 3001"
```

**Tempo esperado:** 2-5 minutos no WSL para primeira compilação

---

### ERRO 2: Frontend não carrega variáveis de ambiente

**Sintoma:**
```
WebSocket connection to 'ws://localhost:3000/ws' failed
```

**Causa:** Frontend tentando conectar na porta errada (deveria ser 3001)

**Solução COMPLETA:**

1. **Verificar .env existe:**
```bash
cat frontend/.env | grep BACKEND_URL
# Deve mostrar: REACT_APP_BACKEND_URL=http://localhost:3001
```

2. **Limpar cache React:**
```bash
cd frontend
rm -rf node_modules/.cache build
```

3. **Iniciar SEM usar &:**
```bash
cd frontend
BROWSER=none npm start
# Aguardar "Compiled successfully!"
```

**Tempo esperado:** 5-10 minutos no WSL para primeira compilação

---

### ERRO 3: Database não existe

**Sintoma:**
```
database "chatia_dev" does not exist
```

**Causa:** PostgreSQL não cria banco automaticamente

**Solução:**
```bash
# Executar script de setup
./scripts/setup-database.sh

# OU manualmente:
docker exec chatia_postgres_dev psql -U chatia -d postgres -c "CREATE DATABASE chatia_dev;"
cd backend && npm run db:migrate && npm run db:seed
```

---

### ERRO 4: Redis ECONNREFUSED

**Sintoma:**
```
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6380
```

**Causa:** Backend iniciou ANTES do Redis estar pronto

**Solução:**
```bash
# 1. Parar backend
pkill -f "ts-node-dev"

# 2. Verificar Redis está rodando
docker-compose ps | grep redis
docker exec chatia_redis_dev redis-cli -a redis123dev ping
# Deve retornar: PONG

# 3. Reiniciar backend
cd backend && npm run dev:server
```

---

### ERRO 5: Frontend demora MUITO para compilar

**Sintoma:**
```
npm start
# Fica em "Starting the development server..." por 10+ minutos
```

**Causa:** WSL é LENTO para compilar React

**Solução:**
- **É NORMAL no WSL!**
- Primeira compilação: 5-10 minutos
- Próximas compilações: 2-3 minutos
- **Aguardar até ver "Compiled successfully!"**

**Dica:** Abrir `htop` em outro terminal para ver CPU em 100% (indica que está compilando)

---

### ERRO 6: "too many clients already" no PostgreSQL

**Sintoma:**
```
FATAL: sorry, too many clients already
```

**Causa:** Muitas conexões abertas (pool esgotado)

**Solução:**
```bash
# Opção 1: Reiniciar PostgreSQL
docker-compose restart postgres

# Opção 2: Aumentar max_connections (temporário)
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "SHOW max_connections;"

# Opção 3: Matar backend que está segurando conexões
pkill -f "ts-node-dev"
```

---

### ERRO 7: Migration falha com "Sequelize CLI not found"

**Sintoma:**
```
npm run db:migrate
# Error: Cannot find module 'sequelize-cli'
```

**Causa:** Backend não foi compilado (dist/ não existe)

**Solução:**
```bash
cd backend
npm run build
# Aguardar compilação
npm run db:migrate
```

**Agora automático:** Scripts db:migrate e db:seed já fazem build automático!

---

### ERRO 8: Super admin não existe após seeders

**Sintoma:**
```
Login com admin@admin.com / 123456 falha
```

**Solução:**
```bash
# Verificar se admin existe
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c \
  "SELECT email, super FROM \"Users\" WHERE email='admin@admin.com';"

# Se não existir, rodar seeders:
cd backend
npm run db:seed

# Verificar novamente
```

**Credenciais corretas:**
- Email: `admin@admin.com` (NÃO admin@chatia.local)
- Senha: `123456`

---

### ERRO 9: Chrome mostra "chrome-error://chromewebdata/"

**Sintomas:**
- Navegador não carrega nada
- Mostra erro genérico do Chrome/Edge
- Funciona com `curl` mas não no navegador

**Possíveis Causas:**

**Causa 1: Frontend não carregou REACT_APP_BACKEND_URL**
```bash
# Solução:
cd frontend
rm -rf node_modules/.cache build
pkill -f craco
npm start
# Aguardar "Compiled successfully!"
```

**Causa 2: CORS bloqueando conexão**
```bash
# Verificar logs do backend
tail -f /tmp/backend.log | grep -i cors

# Backend DEVE ter Access-Control-Allow-Origin: *
```

**Causa 3: Cache do navegador**
```bash
# Solução:
1. Ctrl+Shift+Delete (limpar cache)
2. Ctrl+Shift+N (modo anônimo)
3. Testar http://192.168.91.220:3000 (IP da máquina WSL)
```

**Causa 4: Backend não está respondendo**
```bash
# Testar backend diretamente:
curl -v http://localhost:3001

# Deve retornar HTTP 403 (autenticação)
# Se retornar HTTP 000 ou timeout = backend NÃO está rodando
```

---

## ✅ Setup Correto Passo-a-Passo

### Passo 1: Verificar Pré-requisitos

```bash
# Docker Desktop DEVE estar rodando
docker ps
# ✅ Deve funcionar sem erro

# Node.js versão correta
node --version
# ✅ Deve ser v24.x.x ou superior

# Portas livres
lsof -i :3000 && echo "❌ Porta 3000 em uso" || echo "✅ Porta 3000 livre"
lsof -i :3001 && echo "❌ Porta 3001 em uso" || echo "✅ Porta 3001 livre"
```

---

### Passo 2: Subir Containers Docker

```bash
cd /caminho/do/projeto

# Subir PostgreSQL e Redis
docker-compose up -d

# Aguardar containers ficarem "healthy"
sleep 10
docker-compose ps
# ✅ chatia_postgres_dev: Up (healthy)
# ✅ chatia_redis_dev: Up (healthy)
```

---

### Passo 3: Setup do Banco de Dados

```bash
# Opção A: Script automatizado (RECOMENDADO)
./scripts/setup-database.sh

# OU Opção B: Manual
docker exec chatia_postgres_dev psql -U chatia -d postgres -c \
  "SELECT 'CREATE DATABASE chatia_dev' \
   WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'chatia_dev')\gexec"

cd backend
npm run build    # Demora 2-3 minutos
npm run db:migrate
npm run db:seed
```

**Validação:**
```bash
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c \
  "SELECT email FROM \"Users\" WHERE super=true;"
# ✅ Deve mostrar: admin@admin.com
```

---

### Passo 4: Instalar Dependências (Primeira Vez)

**Backend:**
```bash
cd backend
npm install
# ⏰ Tempo: 2-3 minutos
```

**Frontend:**
```bash
cd frontend
npm install --legacy-peer-deps
# ⏰ Tempo: 20-30 minutos no WSL (NORMAL!)
```

⚠️ **IMPORTANTE:** Use `--legacy-peer-deps` no frontend devido a conflito entre Material-UI v4 e v5

---

### Passo 5: Iniciar Backend (Terminal 1)

```bash
cd backend
npm run dev:server
```

**Aguardar aparecer:**
```
Server started on port: 3001
```

⏰ **Tempo:** 2-5 minutos no WSL

⚠️ **NÃO FECHAR ESTE TERMINAL**

---

### Passo 6: Iniciar Frontend (Terminal 2)

```bash
cd frontend
BROWSER=none npm start
```

**Aguardar aparecer:**
```
Compiled successfully!
You can now view frontend in the browser.
  Local: http://localhost:3000
```

⏰ **Tempo:** 5-10 minutos no WSL (primeira vez)

⚠️ **NÃO FECHAR ESTE TERMINAL**

---

### Passo 7: Acessar Sistema

**URL:** http://localhost:3000/login

**Credenciais:**
- Email: `admin@admin.com`
- Senha: `123456`

---

## ✅ Validação Final

### Checklist Completo

```bash
# 1. Docker containers rodando
docker-compose ps
# ✅ postgres: Up (healthy)
# ✅ redis: Up (healthy)

# 2. PostgreSQL aceitando conexões
docker exec chatia_postgres_dev pg_isready -U chatia
# ✅ /var/run/postgresql:5432 - accepting connections

# 3. Redis respondendo
docker exec chatia_redis_dev redis-cli -a redis123dev --no-auth-warning ping
# ✅ PONG

# 4. Banco de dados existe e tem dados
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c \
  "SELECT COUNT(*) FROM \"Users\";"
# ✅ count: 1 (ou mais)

# 5. Backend rodando
curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3001
# ✅ HTTP 403 (autenticação OK)

# 6. Frontend rodando
curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3000
# ✅ HTTP 200

# 7. WebSocket configurado corretamente
curl -s http://localhost:3000 | grep -o "localhost:[0-9]*" | sort | uniq
# ✅ Deve mostrar localhost:3001 (NÃO localhost:3000)
```

---

## 🔧 Checklist de Troubleshooting

### Sistema não carrega no navegador

**1. Backend está rodando?**
```bash
lsof -i :3001 | grep LISTEN
# Se vazio: Backend NÃO está rodando
```

**2. Backend responde?**
```bash
curl -v http://localhost:3001
# Deve retornar HTTP 403
# Se HTTP 000 ou timeout: Backend travado
```

**3. Frontend está rodando?**
```bash
lsof -i :3000 | grep LISTEN
# Se vazio: Frontend NÃO está rodando
```

**4. Frontend compilou?**
```bash
ps aux | grep craco | grep -v grep
# Verificar se processo está ativo

# Verificar logs
tail -50 /tmp/frontend*.log | grep "Compiled"
# Deve mostrar "Compiled successfully!"
```

**5. Frontend carregou variáveis de ambiente?**
```bash
# Verificar .env
cat frontend/.env | grep BACKEND_URL
# ✅ Deve mostrar: http://localhost:3001

# Se variáveis não carregaram:
cd frontend
rm -rf node_modules/.cache
pkill -f craco
npm start
```

**6. Containers Docker rodando?**
```bash
docker-compose ps
# postgres: Up (healthy)
# redis: Up (healthy)
```

---

## ⏱️ Tempos Esperados (WSL)

| Operação | Tempo Normal | Preocupar Se |
|----------|--------------|--------------|
| `docker-compose up -d` | 5-10s | > 30s |
| `npm run db:migrate` | 1-2min | > 5min |
| Backend `npm run dev:server` | 2-5min | > 10min |
| Frontend primeira compilação | 5-10min | > 20min |
| Frontend compilações seguintes | 2-3min | > 10min |
| `npm install` backend | 2-3min | > 10min |
| `npm install` frontend | 20-30min | > 60min |

---

## 🚨 Erros Críticos (NÃO IGNORAR)

### 1. "Sequelize v5 deprecated"
- **Status:** Conhecido
- **Impacto:** Funcional mas sem suporte
- **Solução:** Sprint 3 (modernização) - FORA DE ESCOPO AGORA

### 2. "Material-UI v4 e v5 duplicados"
- **Status:** Conhecido
- **Impacto:** Bundle maior, possíveis conflitos CSS
- **Solução:** Sprint 3 (modernização) - FORA DE ESCOPO AGORA
- **Workaround:** Usar `--legacy-peer-deps` ao instalar

### 3. "ts-node-dev trava no WSL"
- **Status:** Problema do WSL
- **Impacto:** Backend não sobe em background
- **Solução:** **SEMPRE usar terminal interativo**

---

## 📝 Comandos Úteis de Debug

### Ver logs em tempo real

```bash
# Backend
tail -f /tmp/backend*.log

# Frontend
tail -f /tmp/frontend*.log

# PostgreSQL
docker logs -f chatia_postgres_dev

# Redis
docker logs -f chatia_redis_dev
```

### Testar conexões

```bash
# PostgreSQL
docker exec chatia_postgres_dev psql -U chatia -d chatia_dev -c "SELECT 1;"

# Redis
docker exec chatia_redis_dev redis-cli -a redis123dev ping

# Backend API
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@admin.com","password":"123456"}'

# Frontend
curl http://localhost:3000 | head -c 200
```

### Reiniciar tudo do zero

```bash
# Parar tudo
pkill -f "ts-node-dev"
pkill -f "craco"
docker-compose down

# Limpar
cd backend && rm -rf dist
cd frontend && rm -rf node_modules/.cache build

# Subir novamente
docker-compose up -d
sleep 10

# Backend (terminal 1)
cd backend && npm run dev:server

# Frontend (terminal 2)
cd frontend && npm start
```

---

## 🎯 Resumo: Como Fazer Funcionar

**Regra de ouro:** **NÃO usar `&` ou `nohup` para backend e frontend no WSL**

**Sequência correta:**
1. ✅ Docker Desktop rodando
2. ✅ `docker-compose up -d`
3. ✅ `./scripts/setup-database.sh` (primeira vez)
4. ✅ Terminal 1: `cd backend && npm run dev:server` (aguardar "Server started")
5. ✅ Terminal 2: `cd frontend && npm start` (aguardar "Compiled successfully")
6. ✅ Acessar http://localhost:3000/login

**Tempo total:** ~10-15 minutos após `npm install` feito

---

## 📞 Quando Pedir Ajuda

Se após seguir TODOS os passos ainda não funcionar, coletar estas informações:

```bash
# Sistema
uname -a
node --version
docker --version

# Status
docker-compose ps
lsof -i :3000
lsof -i :3001

# Logs (últimas 50 linhas)
tail -50 /tmp/backend*.log
tail -50 /tmp/frontend*.log

# Testes
curl -v http://localhost:3001
curl -v http://localhost:3000
```

---

**Criado em:** 07/03/2026 19:30
**Baseado em:** Problemas reais encontrados durante Sprints 1 e 2
**Mantenha atualizado:** Adicione novos erros conforme encontrar!
