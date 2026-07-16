# ChatIA - Configuração de Desenvolvimento Local

## Portas Configuradas

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **PostgreSQL**: localhost:5434
- **Redis**: localhost:6380

## Requisitos

- Node.js (versão 14 ou superior)
- Docker e Docker Compose
- npm ou yarn

## Configuração Inicial

### 1. Iniciar Containers Docker

```bash
docker-compose up -d
```

Isso iniciará:
- PostgreSQL na porta 5434
- Redis na porta 6380

### 2. Instalar Dependências

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Executar Migrations do Banco de Dados

```bash
cd backend
npm run db:migrate
```

### 4. (Opcional) Criar Seeds Iniciais

```bash
cd backend
npm run db:seed
```

## Executar em Modo Desenvolvimento

Você precisará de dois terminais:

### Terminal 1 - Backend
```bash
cd backend
npm run dev:server
```

O backend estará disponível em: http://localhost:3001

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```

O frontend estará disponível em: http://localhost:3000

## Credenciais Padrão

**Admin:**
- Email: `admin@chatia.local`
- Senha: `admin123`

## Comandos Úteis

### Docker

```bash
# Verificar status dos containers
docker-compose ps

# Ver logs dos containers
docker-compose logs -f

# Parar containers
docker-compose stop

# Parar e remover containers
docker-compose down

# Parar e remover containers + volumes (CUIDADO: apaga dados do banco)
docker-compose down -v
```

### Backend

```bash
# Modo desenvolvimento (com hot reload)
npm run dev:server

# Build para produção
npm run build

# Executar versão compilada
npm start

# Executar migrations
npm run db:migrate

# Reverter última migration
npm run db:migrate:undo

# Executar seeds
npm run db:seed

# Testes
npm test
```

### Frontend

```bash
# Modo desenvolvimento
npm start

# Build para produção
npm run build

# Testes
npm test
```

## Estrutura de Pastas

```
chatia-4.1.0-main/
├── backend/           # API Node.js + Express
│   ├── src/          # Código fonte
│   ├── dist/         # Código compilado
│   └── .env          # Variáveis de ambiente
├── frontend/          # React App
│   ├── src/          # Código fonte
│   ├── public/       # Arquivos estáticos
│   └── .env          # Variáveis de ambiente
├── docker-compose.yml # Configuração Docker
└── .env              # Variáveis globais
```

## Troubleshooting

### Porta já em uso

Se alguma porta estiver em uso, você pode modificar nos arquivos `.env`:

**Backend (.env e backend/.env):**
```
PORT=3001
```

**Frontend (frontend/.env):**
```
PORT=3000
```

**PostgreSQL (docker-compose.yml):**
```yaml
ports:
  - "5434:5432"
```

**Redis (docker-compose.yml):**
```yaml
ports:
  - "6380:6379"
```

### Erro de conexão com o banco

1. Verifique se os containers estão rodando:
```bash
docker-compose ps
```

2. Verifique os logs:
```bash
docker-compose logs postgres
```

3. Teste a conexão:
```bash
docker exec -it chatia_postgres_dev psql -U chatia -d chatia_dev
```

### Limpar cache do npm

```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Resetar banco de dados

```bash
# Parar containers e remover volumes
docker-compose down -v

# Subir novamente
docker-compose up -d

# Executar migrations
cd backend
npm run db:migrate
npm run db:seed
```

## Variáveis de Ambiente Importantes

### Backend (.env)

```env
NODE_ENV=development
PORT=3001
DB_HOST=localhost
DB_PORT=5434
DB_USER=chatia
DB_PASS=chatia123dev
DB_NAME=chatia_dev
REDIS_HOST=localhost
REDIS_PORT=6380
JWT_SECRET=dev_jwt_secret_change_in_production_12345678
```

### Frontend (.env)

```env
REACT_APP_BACKEND_URL=http://localhost:3001
REACT_APP_NAME_SYSTEM=ChatIA
NODE_ENV=development
PORT=3000
```

## Próximos Passos

1. Acesse http://localhost:3000
2. Faça login com as credenciais de admin
3. Configure suas integrações (WhatsApp, OpenAI, etc.)
4. Comece a desenvolver!
