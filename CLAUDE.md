# ChatIA - Documentação Técnica para Estabilização e Saneamento

> **Versão:** 2.2.2v-26
> **Última Atualização:** 10/03/2026
> **Tipo:** Sistema Multi-tenant de Atendimento WhatsApp
> **Foco Atual:** Estabilização e preparação para comercialização

---

## REGRA #1 - NUNCA QUEBRAR O BUILD NA MAIN (INSTALADOR DEPENDE DISSO)

**O instalador de produção (`instalador-chatia-v4.5.sh`) faz `git clone` da branch `main`.**
Se a `main` tiver código que não compila, o instalador FALHA em qualquer VPS.

**ANTES de fazer push para `main`, SEMPRE verificar que o build compila:**
```bash
cd /opt/chatia/backend && npx tsc --noEmit
```
Se der erro de TypeScript, CORRIGIR ANTES de commitar/pushar.

**Fluxo obrigatório para qualquer mudança:**
1. Fazer as alterações
2. Testar: `npx tsc --noEmit` (deve dar ZERO erros)
3. `git add` dos arquivos alterados
4. `git commit` com mensagem descritiva
5. `git push origin main`

**NUNCA:**
- Pushar código que não compila
- Deixar commits locais sem push (o instalador não vê commits não pushados)
- Commitar imports quebrados (ex: `import X from` quando o módulo só tem `export class X`)
- Trabalhar em branches sem mergear na main quando estiver pronto

**Branch atual de trabalho:** `main` (push direto, sem PR)
**Repositório:** `https://github.com/TappyID/chatia-4.4.git`

---

## REGRAS OBRIGATÓRIAS DE DESENVOLVIMENTO

**NUNCA fazer alterações diretas no banco de dados (INSERT, UPDATE, DELETE manuais).**
Toda alteração de schema ou dados iniciais DEVE ser feita via:
- **Migrations** (para schema: criar tabelas, adicionar colunas, índices)
- **Seeders** (para dados iniciais: empresa padrão, admin, settings)

Isso garante que uma instalação limpa do zero funcione sem intervenção manual.

**A cada mudança, fazer commit no GitHub** com mensagem descritiva.

**Fluxo de trabalho:**
1. Criar/editar migration ou seeder em `backend/src/database/migrations/` ou `seeds/`
2. Compilar: `npx tsc --noEmit` (verificar ZERO erros)
3. Executar: `npx sequelize-cli db:migrate` ou `db:seed`
4. Testar que funciona
5. `git add` + `git commit` + `git push origin main`

**Stack do projeto:**
- Backend: Node.js + Express + TypeScript + Sequelize 5 (script dev: `npm run dev:server`)
- Frontend: React 17 + **craco** (NÃO Vite) (script: `npm start` que roda `craco start`)
- Docker: postgres:13, redis:6-alpine, node:20-alpine
- Migrations rodam de `dist/` (compilado), não de `src/`

---

## Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Objetivo Atual](#objetivo-atual)
3. [O Que NÃO Será Feito Agora](#o-que-não-será-feito-agora)
4. [Estrutura Real do Backend](#estrutura-real-do-backend)
5. [Estrutura Real do Frontend](#estrutura-real-do-frontend)
6. [Estrutura Real do Banco de Dados](#estrutura-real-do-banco-de-dados)
7. [Caminho Real das Migrations](#caminho-real-das-migrations)
8. [Caminho Real dos Seeders](#caminho-real-dos-seeders)
9. [Arquivo Real de Configuração do Sequelize](#arquivo-real-de-configuração-do-sequelize)
10. [Scripts Reais Usados para Migrate e Seed](#scripts-reais-usados-para-migrate-e-seed)
11. [Alterações Manuais Fora do Fluxo Oficial](#alterações-manuais-fora-do-fluxo-oficial)
12. [Fluxos Críticos do Sistema](#fluxos-críticos-do-sistema)
13. [Problemas Reais de Funcionamento](#problemas-reais-de-funcionamento)
14. [Problemas Reais de Consistência do Banco](#problemas-reais-de-consistência-do-banco)
15. [Pontos Pendentes para Internacionalização](#pontos-pendentes-para-internacionalização)
16. [Checklist de Saneamento](#checklist-de-saneamento)
17. [Backlog Futuro (Fora do Escopo Atual)](#backlog-futuro-fora-do-escopo-atual)

---

## 🎯 Visão Geral do Projeto

ChatIA é um sistema SaaS multi-tenant de atendimento via WhatsApp com suporte a:
- Múltiplas empresas isoladas (multi-tenancy via `companyId`)
- Múltiplos atendentes e filas de atendimento
- Integração com WhatsApp via Baileys (nightly)
- Sistema de tags, kanban e gerenciamento de tickets
- Chatbots (OpenAI GPT, Dialogflow, N8N)
- Mensagens agendadas (Bull Queue)
- Integração com gateways de pagamento (Mercado Pago, Gerencianet/Efí PIX)
- LGPD compliance

**Principal Caso de Uso:** Centrais de atendimento que precisam gerenciar múltiplos canais de WhatsApp com diferentes equipes.

**Arquitetura:**
```
┌─────────────────┐         ┌──────────────────┐
│   Frontend      │◄────────│   Backend API    │
│   React 17 SPA  │  HTTP   │   Express.js     │
│   Port: 3000    │ Socket  │   Port: 3001     │
└─────────────────┘         └──────────────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
              ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐
              │ PostgreSQL │   │   Redis   │   │  WhatsApp │
              │ Port: 5434 │   │ Port: 6380│   │  Baileys  │
              └────────────┘   └───────────┘   └───────────┘
```

---

## 🎯 Objetivo Atual

**Fase:** Preparação para comercialização com base limpa

**Meta:** Deixar o sistema funcional, previsível e consistente com a stack atual, sem clientes utilizando ainda.

**Foco:**
1. Corrigir problemas que impedem funcionamento básico
2. Garantir consistência do banco de dados
3. Eliminar hardcodes e configurações conflitantes
4. Documentar fluxos reais para manutenção segura
5. Preparar setup reproduzível para novos ambientes
6. Identificar e documentar pontos de internacionalização necessários

**Não é objetivo agora:**
- Modernizar stack tecnológico
- Migrar frameworks ou bibliotecas principais
- Refatorar arquitetura
- Adicionar novas features

---

## 📍 Fonte da Verdade Confirmada

Antes de qualquer intervenção, estes são os caminhos e arquivos críticos do sistema:

### Configuração do Sequelize CLI
- **Arquivo de config:** `/backend/.sequelizerc` (aponta para código compilado)
- **Config de conexão:** `/backend/src/config/database.ts` (timezone, pool, dialect)

### Migrations
- **Código-fonte:** `/backend/src/database/migrations/` (TypeScript)
- **Código executado:** `/backend/dist/database/migrations/` (JavaScript compilado)
- **Tabela de controle:** `public.SequelizeMeta` (registra migrations executadas)
- **Quantidade:** 293 itens **confirmados** (291 arquivos .ts + 1 arquivo .sql manual + 1 pasta scripts/)
  - Comando usado: `ls -1 backend/src/database/migrations | wc -l` → 293

### Seeders
- **Código-fonte:** `/backend/src/database/seeds/`
- **Código executado:** `/backend/dist/database/seeds/`
- **Quantidade:** 6 seeders **confirmados**
  - Comando usado: `ls -1 backend/src/database/seeds | wc -l` → 6
- **⚠️ Não há tabela de controle** - seeders podem ser executados múltiplas vezes

### Models
- **Código-fonte:** `/backend/src/models/`
- **Código executado:** `/backend/dist/models/`
- **Quantidade:** 40+ arquivos

### Credenciais Reais (criadas por seed)
- **Email:** `admin@admin.com`
- **Senha:** `123456`
- **Source:** `/backend/src/database/seeds/20250101000000-ensure-super-admin.ts`

### Compilação
- **Comando:** `npm run build` (compila src/ → dist/)
- **Obrigatório antes de:** migrations, seeds, produção
- **⚠️ CRÍTICO:** Sequelize CLI **sempre** executa de `dist/`, não de `src/`

---

## ❌ O Que NÃO Será Feito Agora

### Migrações de Stack (Backlog Futuro)

**Não faremos agora:**
- ❌ Migrar React 17 → 18
- ❌ Migrar Sequelize 5 → 6+
- ❌ Migrar Bull → BullMQ
- ❌ Unificar Material-UI v4/v5
- ❌ Atualizar TypeScript 4.2 → 5.x
- ❌ Migrar React Router 5 → 6
- ❌ Atualizar Express 4.17 → 4.21+
- ❌ Refatorações amplas de código

### Melhorias de Performance (Backlog Futuro)

**Não faremos agora:**
- ❌ Otimizar queries N+1
- ❌ Implementar cache Redis avançado
- ❌ Virtualizar listas longas
- ❌ Code splitting frontend
- ❌ Lazy loading de rotas

### Melhorias de Arquitetura (Backlog Futuro)

**Não faremos agora:**
- ❌ Quebrar arquivo gigante `wbotMessageListener.ts` (184KB)
- ❌ Unificar logging (Winston/Pino)
- ❌ Adicionar testes automatizados
- ❌ Implementar CI/CD
- ❌ Documentar API com Swagger

**Justificativa:** Essas melhorias são importantes, mas não afetam o funcionamento básico do sistema. Serão feitas em fase futura de modernização controlada, após comercialização inicial.

---

## 📁 Estrutura Real do Backend

**Caminho base:** `/backend`

### Arquivos Principais

```
backend/
├── src/                          # Código-fonte TypeScript
│   ├── server.ts                 # Entry point (17KB) ⚠️ Porta hardcoded
│   ├── app.ts                    # Express app configuration (8KB)
│   ├── bootstrap.ts              # Bootstrap initialization (3KB)
│   ├── queues.ts                 # Queue definitions (56KB)
│   ├── server-cluster.ts         # Cluster mode server
│   └── userMonitor.ts            # User monitoring
│
├── dist/                         # Código compilado (build output)
│   └── (espelho de src/)         # ⚠️ Migrations rodam daqui
│
├── node_modules/                 # Dependências (não versionado)
├── private/                      # Arquivos privados (uploads)
├── public/                       # Arquivos públicos (mídia)
├── certs/                        # Certificados SSL
│
├── .sequelizerc                  # ⚠️ Config Sequelize aponta para dist/
├── package.json                  # Dependências (v2.2.2v-26)
├── tsconfig.json                 # TypeScript config (strict: false ⚠️)
├── .env                          # Variáveis de ambiente
├── .env.example                  # Template de .env (113 linhas)
└── jest.config.js                # Config de testes (não usado)
```

### Estrutura de Pastas src/

```
src/
├── config/                       # 8 arquivos de configuração
│   ├── database.ts               # ⚠️ Config Sequelize (timezone, pool, etc)
│   ├── auth.ts                   # JWT config
│   ├── redis.ts                  # Redis config
│   ├── upload.ts                 # Upload config
│   ├── uploadExt.ts              # Extended upload
│   ├── ffmpeg.ts                 # FFmpeg paths
│   ├── privateFiles.ts           # Private file paths
│   └── Gn.ts                     # Gerencianet config
│
├── database/                     # Database layer
│   ├── index.ts                  # Sequelize initialization
│   ├── migrations/               # 293 migrations ⚠️
│   │   ├── 20200717133438-create-users.ts
│   │   ├── ...
│   │   ├── 20251202120000-remove-color-unique-constraint.ts
│   │   ├── MANUAL-add-createDemoUser.sql  # ⚠️ SQL manual
│   │   └── scripts/
│   │       └── test-document-unique.sql
│   └── seeds/                    # 6 seeders
│       ├── 20200904070003-create-default-company.ts
│       ├── 20200904070004-create-default-settings.ts
│       ├── 20200904070006-create-default-user.ts
│       ├── 20230901093700-create-default-companiessettings.ts
│       ├── 20250101000000-ensure-super-admin.ts  # ⚠️ Cria admin@admin.com
│       └── 20251013000000-create-kanban-demo-tags.ts
│
├── models/                       # 40+ Sequelize models
│   ├── User.ts
│   ├── Ticket.ts
│   ├── Contact.ts
│   ├── Company.ts
│   ├── CompaniesSettings.ts
│   ├── Whatsapp.ts
│   ├── Queue.ts
│   ├── Message.ts
│   ├── Tag.ts
│   ├── Schedule.ts
│   └── ... (40+ modelos totais)
│
├── controllers/                  # 46 controllers
│   ├── UserController.ts
│   ├── TicketController.ts
│   ├── MessageController.ts      # 37KB (maior controller)
│   ├── ContactController.ts
│   ├── CompanyController.ts
│   ├── WhatsAppController.ts
│   ├── SessionController.ts      # Login
│   ├── SettingController.ts
│   ├── ApiController.ts          # 19KB
│   └── api/                      # Controllers API específicos
│
├── services/                     # 48 pastas de serviços
│   ├── WbotServices/             # ⚠️ SERVIÇOS WHATSAPP CRÍTICOS (26 arquivos)
│   │   ├── wbotMessageListener.ts           # 184KB ⚠️ ARQUIVO GIGANTE
│   │   ├── wbotMessageListener.ts.backup-20251015-132959  # Backup manual
│   │   ├── wbotMessageListener-dontwork.ts  # 111KB versão quebrada
│   │   ├── SendWhatsAppMedia.ts             # 8KB (usa mime.lookup)
│   │   ├── SendWhatsAppMediaFlow.ts         # 4KB (usa mime.lookup)
│   │   ├── ChatBotListener.ts               # 64KB
│   │   ├── StartAllWhatsAppsSessions.ts     # Inicia conexões WhatsApp
│   │   └── ...
│   ├── TicketServices/           # Gerenciamento de tickets
│   ├── UserServices/             # Gerenciamento de usuários
│   ├── ContactServices/          # Gerenciamento de contatos
│   ├── AuthServices/             # Autenticação JWT
│   ├── CompanyServices/          # Multi-tenancy
│   ├── MessageServices/          # Mensagens
│   ├── FacebookServices/         # Integração Facebook
│   ├── DialogChatBotsServices/   # Dialogflow
│   ├── FlowBuilderService/       # Construtor de fluxos
│   ├── CampaignService/          # Campanhas de envio
│   └── ... (48 pastas totais)
│
├── routes/                       # 43 arquivos de rotas
│   ├── authRoutes.ts
│   ├── userRoutes.ts
│   ├── ticketRoutes.ts
│   ├── contactRoutes.ts
│   ├── whatsappRoutes.ts
│   ├── apiRoutes.ts
│   ├── debugRoutes.ts
│   └── api/                      # Rotas API específicas
│
├── middleware/                   # 6 middlewares
│   ├── isAuth.ts                 # Autenticação JWT
│   ├── isSuper.ts                # Verificação super admin
│   ├── isAuthCompany.ts          # Multi-tenancy check
│   ├── tokenAuth.ts              # Token validation
│   └── envTokenAuth.ts           # Environment token
│
├── libs/                         # 7 bibliotecas core
│   ├── wbot.ts (15KB)            # WhatsApp Baileys connection
│   ├── socket.ts (9KB)           # Socket.IO configuration
│   ├── queue.ts                  # Bull queue setup
│   ├── cache.ts                  # Redis cache
│   ├── store.ts                  # Store management
│   ├── store.d.ts                # TypeScript definitions
│   └── ticketLock.ts             # Ticket locking mechanism
│
├── queues/                       # Background jobs
│   └── userMonitor.ts            # User monitoring queue
│
├── helpers/                      # 18 arquivos helper
│   ├── CheckContactOpenTickets.ts
│   ├── CheckSettings.ts
│   ├── GetDefaultWhatsApp.ts
│   ├── GetTicketWbot.ts
│   ├── Mustache.ts               # Template engine
│   ├── DateHelper.ts (7KB)
│   ├── DocumentValidator.ts (7KB)  # CPF/CNPJ validation
│   └── ...
│
├── utils/                        # 6 utilitários
│   ├── logger.ts                 # Winston logger
│   ├── normalizePhoneNumber.ts
│   ├── randomCode.ts
│   ├── randomizador.ts
│   ├── useDate.ts
│   └── version.ts
│
├── errors/                       # 1 arquivo
│   └── AppError.ts               # Custom error class
│
├── jobs/                         # Background jobs
├── scripts/                      # Scripts auxiliares
├── validators/                   # Validadores Yup
└── @types/                       # TypeScript type definitions
```

**Estatísticas:**
- 852 arquivos TypeScript (.ts)
- 293 migrations (291 TS + 1 SQL manual + 1 pasta scripts)
- 6 seeders
- 48 pastas de serviços
- 46 controllers
- 43 rotas
- 40+ models

---

## 📁 Estrutura Real do Frontend

**Caminho base:** `/frontend`

### Arquivos Principais

```
frontend/
├── src/                          # Código-fonte React
│   ├── App.js                    # Main App component
│   ├── index.js                  # React entry point
│   ├── config.js                 # App configuration
│   ├── rules.js                  # Authorization rules
│   ├── serviceWorker.js          # PWA service worker
│   └── react-app-env.d.ts        # TypeScript declarations
│
├── public/                       # Static files
│   ├── index.html
│   ├── favicon.ico
│   └── ...
│
├── node_modules/                 # Dependências (não versionado)
├── build/                        # Build output (npm run build)
│
├── package.json                  # Dependências (v2.2.2v-26)
├── craco.config.js               # ⚠️ Create React App Config Override
├── config-overrides.js           # React App Rewired config
├── tsconfig.json                 # TypeScript config
├── .env                          # Variáveis de ambiente
├── .env.example                  # Template de .env
├── server.js                     # Express server (produção)
└── nginx.conf                    # Nginx configuration
```

### Estrutura de Pastas src/

```
src/
├── pages/                        # 44 páginas
│   ├── Login/
│   ├── Signup/
│   ├── Dashboard/                # Analytics e métricas
│   ├── Tickets/                  # ⚠️ PÁGINA PRINCIPAL (interface de atendimento)
│   ├── TicketsCustom/
│   ├── TicketsAdvanced/
│   ├── Kanban/                   # Visão kanban de tickets
│   ├── Contacts/                 # Gerenciamento de contatos
│   ├── Companies/                # Gerenciamento de empresas (super admin)
│   ├── Users/                    # Gerenciamento de usuários
│   ├── Settings/                 # Configurações do sistema
│   │   └── index.js              # ⚠️ Verifica user.profile !== "user"
│   ├── SettingsCustom/
│   ├── Queues/                   # Filas de atendimento
│   ├── Connections/              # Conexões WhatsApp
│   ├── Campaigns/                # Campanhas de envio
│   ├── FlowBuilder/              # Construtor de fluxos de chatbot
│   ├── Reports/                  # Relatórios
│   ├── Financeiro/               # Gestão financeira
│   └── ... (44 páginas totais)
│
├── components/                   # 152 componentes reutilizáveis
│   ├── TicketsList/              # ⚠️ Performance crítica
│   ├── MessagesList/             # ⚠️ Atualização tempo real via Socket
│   ├── ContactDrawer/
│   ├── UserModal/
│   ├── TicketInfo/
│   ├── MainContainer/
│   ├── MainHeader/
│   ├── NotificationsPopOver/
│   ├── ChatBots/
│   ├── CompaniesModal/
│   └── ... (152 componentes)
│
├── services/                     # 8 serviços
│   ├── api.js (4KB)              # ⚠️ Axios instance (base URL, interceptors)
│   ├── socket.js                 # Socket.IO client
│   ├── SocketWorker.js (7KB)     # Socket worker thread
│   ├── config.js                 # Config service
│   ├── flowBuilder.js            # Flow builder API
│   ├── TimezoneService.js (5KB)  # ⚠️ Serviço de timezone
│   └── CurrencyService.js        # ⚠️ Serviço de moeda
│
├── context/                      # 11 contextos React
│   ├── Auth/
│   │   └── AuthContext.js        # ⚠️ User.super vem daqui (localStorage)
│   ├── Socket/                   # WebSocket context
│   ├── Tickets/                  # Tickets state management
│   ├── WhatsApp/                 # WhatsApp connections state
│   ├── Currency/                 # ⚠️ Currency context
│   ├── ReplyingMessage/
│   ├── EditingMessage/
│   ├── ForwarMessage/
│   ├── ProfileImage/
│   ├── QueuesSelected/
│   └── ActiveMenuContext/
│
├── hooks/                        # Custom React hooks
│   ├── useAuth.js                # Hook de autenticação
│   ├── useSocket.js              # Hook de Socket.IO
│   └── ...
│
├── layout/                       # Layout components
│   ├── MainLayout.js
│   └── ...
│
├── routes/                       # Route definitions
│   └── index.js                  # React Router config
│
├── translate/                    # i18n (internacionalização)
│   ├── languages/
│   │   ├── pt.js                 # Português (Brasil) ⚠️ Idioma padrão
│   │   ├── en.js                 # English
│   │   └── es.js                 # Español
│   └── i18n.js                   # i18next config
│
├── helpers/                      # Helper functions
│   ├── toastError.js             # Toast de erro
│   └── ...
│
├── errors/                       # Error handling
├── assets/                       # Images, icons, fonts
├── styles/                       # CSS/SCSS files
├── stores/                       # State management (Zustand)
├── config/                       # Configuration files
└── __tests__/                    # Tests (não implementados)
```

**Estatísticas:**
- 342 arquivos JavaScript/JSX
- 44 páginas
- 152 componentes
- 11 contextos React
- 8 serviços API

---

## 🗄️ Estrutura Real do Banco de Dados

### Tecnologia

- **SGBD:** PostgreSQL 15
- **ORM:** Sequelize 5.22.3 (deprecated)
- **Porta:** 5434 (mapeada de 5432 no Docker)
- **Charset:** utf8mb4
- **Collation:** utf8mb4_bin
- **Timezone:** America/Sao_Paulo ⚠️

### Principais Tabelas (40+ models)

```
┌─────────────────────┬──────────────────────────────────────┐
│ Tabela              │ Descrição                            │
├─────────────────────┼──────────────────────────────────────┤
│ Companies           │ Empresas (multi-tenancy)             │
│ CompaniesSettings   │ Configurações por empresa            │
│ Users               │ Usuários do sistema                  │
│ Tickets             │ Tickets de atendimento               │
│ Contacts            │ Contatos (clientes WhatsApp)         │
│ Messages            │ Mensagens trocadas                   │
│ Whatsapps           │ Conexões WhatsApp                    │
│ Queues              │ Filas de atendimento                 │
│ Tags                │ Tags para organização                │
│ TicketTags          │ Relacionamento ticket-tag            │
│ Schedules           │ Mensagens agendadas                  │
│ Campaigns           │ Campanhas de envio                   │
│ FlowBuilders        │ Fluxos de chatbot                    │
│ Invoices            │ Faturas                              │
│ Plans               │ Planos de assinatura                 │
│ Settings            │ Configurações globais                │
│ DialogChatBots      │ Chatbots Dialogflow                  │
│ SequelizeMeta       │ ⚠️ Controle de migrations            │
└─────────────────────┴──────────────────────────────────────┘
```

### Tabela SequelizeMeta (Crítica)

**Localização:** `public.SequelizeMeta`

```sql
CREATE TABLE "SequelizeMeta" (
  "name" VARCHAR(255) NOT NULL PRIMARY KEY
);
```

**Função:** Registra quais migrations já foram executadas para evitar duplicação.

**Exemplo de registros:**
```
20200717133438-create-users.ts
20200904070003-create-companies.ts
...
20251202120000-remove-color-unique-constraint.ts
```

**⚠️ CRÍTICO:** Se esta tabela for perdida ou corrompida, todas as migrations serão executadas novamente, causando erros de "tabela já existe".

### Multi-Tenancy via companyId

**Todos os modelos principais têm `companyId` como foreign key:**

```
┌─────────────────────────────────────────┐
│ Multi-Tenancy: Isolamento por empresa  │
├─────────────────────────────────────────┤
│ Users.companyId         → Companies.id  │
│ Tickets.companyId       → Companies.id  │
│ Contacts.companyId      → Companies.id  │
│ Queues.companyId        → Companies.id  │
│ Whatsapps.companyId     → Companies.id  │
│ Tags.companyId          → Companies.id  │
│ Campaigns.companyId     → Companies.id  │
│ FlowBuilders.companyId  → Companies.id  │
└─────────────────────────────────────────┘
```

**Middleware verifica:** `req.user.companyId === resource.companyId` em todas as operações.

---

## 📂 Caminho Real das Migrations

### Localização no Código-Fonte

**Caminho:** `/backend/src/database/migrations/`

**Conteúdo:** 293 migrations
- 291 arquivos `.ts` (TypeScript)
- 1 arquivo `.sql` manual: `MANUAL-add-createDemoUser.sql`
- 1 pasta `scripts/` com `test-document-unique.sql`

### Localização de Execução (Compilado)

**Caminho:** `/backend/dist/database/migrations/`

**⚠️ IMPORTANTE:** Sequelize executa migrations do código **compilado** (dist/), não do código-fonte (src/).

### Configuração (.sequelizerc)

**Arquivo:** `/backend/.sequelizerc`

```javascript
const { resolve } = require("path");

module.exports = {
  "config": resolve(__dirname, "dist", "config", "database.js"),
  "models-path": resolve(__dirname, "dist", "models"),
  "migrations-path": resolve(__dirname, "dist", "database", "migrations"),  // ⚠️ Aponta para dist/
  "seeders-path": resolve(__dirname, "dist", "database", "seeds")
};
```

### Nomenclatura das Migrations

**Padrão:** `YYYYMMDDHHMMSS-description.ts`

**Exemplos:**
```
20200717133438-create-users.ts
20200904070003-create-companies.ts
20210315120000-add-color-to-tags.ts
20251202120000-remove-color-unique-constraint.ts
```

**Ordem de execução:** Alfabética por nome do arquivo (timestamp garante ordem cronológica).

### Primeira e Última Migration

- **Primeira:** `20200717133438-create-users.ts` (17/07/2020)
- **Última:** `20251202120000-remove-color-unique-constraint.ts` (02/12/2025)
- **Total acumulado:** 5 anos e 5 meses de desenvolvimento

### Migrations Especiais

#### 1. Migration Manual SQL
**Arquivo:** `MANUAL-add-createDemoUser.sql`

```sql
-- Migration Manual: Adicionar campo createDemoUser
-- Data: 2025-10-12
-- ⚠️ ESTA MIGRATION NÃO É EXECUTADA POR npm run db:migrate
-- Precisa ser executada manualmente via psql
```

#### 2. Script de Teste
**Arquivo:** `scripts/test-document-unique.sql`

---

## 📂 Caminho Real dos Seeders

### Localização no Código-Fonte

**Caminho:** `/backend/src/database/seeds/`

**Conteúdo:** 6 seeders

### Localização de Execução (Compilado)

**Caminho:** `/backend/dist/database/seeds/`

### Lista de Seeders (Ordem de Execução)

1. **20200904070003-create-default-company.ts**
   - Cria empresa padrão (id: 1, nome: "Empresa 1")

2. **20200904070004-create-default-settings.ts**
   - Cria configurações globais do sistema

3. **20200904070006-create-default-user.ts**
   - ⚠️ Versão antiga (pode estar sobrescrita pelo seeder 5)

4. **20230901093700-create-default-companiessettings.ts**
   - Cria configurações específicas da empresa 1

5. **20250101000000-ensure-super-admin.ts**
   - ⚠️ **SEEDER CRÍTICO:** Cria/atualiza super admin
   - Email: `admin@admin.com`
   - Senha: `123456` (hash bcrypt)
   - Profile: `admin`
   - Super: `true`
   - CompanyId: `1`

6. **20251013000000-create-kanban-demo-tags.ts**
   - Cria tags de demonstração para kanban

### Credenciais Criadas pelos Seeders

**Super Admin:**
```
Email: admin@admin.com
Senha: 123456
Profile: admin
Super: true
CompanyId: 1
```

**⚠️ NÃO USAR:**
- `admin@chatia.local` (não existe, está apenas no .env mas é ignorado pelo seed)
- Senha `admin123` (não existe)

---

## ⚙️ Arquivo Real de Configuração do Sequelize

### Localização

**Caminho:** `/backend/src/config/database.ts`

### Conteúdo Completo

```typescript
require("../bootstrap");

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_bin"
  },
  options: {
    requestTimeout: 600000,  // 10 minutos
    encrypt: true
  },
  retry: {
    match: [
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/,
      /TimeoutError/,
      /SequelizeDatabaseError/
    ],
    max: 100  // ⚠️ Muitas tentativas
  },
  pool: {
    max: parseInt(process.env.DB_POOL_MAX) || 100,
    min: parseInt(process.env.DB_POOL_MIN) || 15,
    acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000,
    idle: parseInt(process.env.DB_POOL_IDLE) || 600000
  },
  dialect: process.env.DB_DIALECT || "postgres",
  timezone: 'America/Sao_Paulo',  // ⚠️ Timezone hardcoded
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false  // SQL logging desabilitado
};
```

### Pontos de Atenção

1. **Timezone hardcoded:** `America/Sao_Paulo` (não configurável por empresa)
2. **Pool grande:** Max 100 conexões (pode ser excessivo para dev)
3. **Retry agressivo:** Até 100 tentativas de reconexão
4. **Logging desabilitado:** `logging: false` (dificulta debug de queries)
5. **Bootstrap:** Carrega `.env` via `../bootstrap.ts`

---

## 🔧 Scripts Reais Usados para Migrate e Seed

### package.json Backend

**Localização:** `/backend/package.json`

```json
{
  "name": "backend",
  "version": "2.2.2v-26",
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "start": "nodemon dist/server.js",
    "dev:server": "ts-node-dev --respawn --transpile-only --ignore node_modules src/server.ts",
    "db:migrate": "npx sequelize-cli db:migrate",
    "db:migrate:undo": "npx sequelize-cli db:migrate:undo",
    "db:migrate:undo:all": "npx sequelize-cli db:migrate:undo:all",
    "db:seed": "npx sequelize-cli db:seed:all",
    "db:seed:undo": "npx sequelize-cli db:seed:undo:all",
    "pretest": "NODE_ENV=test npx sequelize-cli db:migrate && NODE_ENV=test npx sequelize-cli db:seed:all",
    "test": "NODE_ENV=test jest",
    "test:once": "node ../scripts/test_lock.js",
    "posttest": "NODE_ENV=test npx sequelize-cli db:migrate:undo:all",
    "lint": "eslint src/**/*.ts"
  }
}
```

### Comandos de Migration

#### Executar todas migrations pendentes
```bash
npm run db:migrate
# ou
npx sequelize-cli db:migrate
```

**O que faz:**
1. Lê `.sequelizerc` para encontrar o caminho das migrations (`dist/database/migrations`)
2. Conecta no banco usando `dist/config/database.js`
3. Consulta tabela `SequelizeMeta` para ver quais migrations já rodaram
4. Executa migrations pendentes em ordem alfabética
5. Registra migrations executadas na tabela `SequelizeMeta`

#### Desfazer última migration
```bash
npm run db:migrate:undo
```

#### Desfazer todas migrations
```bash
npm run db:migrate:undo:all
# ⚠️ PERIGOSO: Remove todas as tabelas
```

### Comandos de Seed

#### Executar todos seeders
```bash
npm run db:seed
# ou
npx sequelize-cli db:seed:all
```

**O que faz:**
1. Lê `.sequelizerc` para encontrar seeders (`dist/database/seeds`)
2. Executa todos seeders em ordem alfabética
3. **⚠️ NÃO registra** quais seeders já foram executados (podem duplicar dados)

#### Desfazer todos seeders
```bash
npm run db:seed:undo
# ⚠️ Pode não funcionar se seeders não implementarem método down()
```

### Fluxo de Setup Completo

```bash
# 1. Compilar TypeScript (src/ → dist/)
npm run build

# 2. Executar migrations (cria tabelas)
npm run db:migrate

# 3. Executar seeders (popula dados iniciais)
npm run db:seed

# 4. Iniciar servidor em modo dev
npm run dev:server
```

### Observações Importantes

1. **Compilação obrigatória:** Migrations/seeds rodam de `dist/`, não de `src/`
2. **--transpile-only:** Dev server ignora erros TypeScript
3. **Seeders não são idempotentes:** Executar `db:seed` múltiplas vezes pode duplicar dados
4. **Migration manual não é executada:** `MANUAL-add-createDemoUser.sql` precisa ser rodado manualmente

---

## ⚠️ Alterações Manuais Fora do Fluxo Oficial

### 1. Migration SQL Manual

**Arquivo:** `/backend/src/database/migrations/MANUAL-add-createDemoUser.sql`

**Conteúdo:**
```sql
-- Migration Manual: Adicionar campo createDemoUser
-- Data: 2025-10-12
-- Descrição: Adiciona campo createDemoUser à tabela CompaniesSettings

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'CompaniesSettings'
        AND column_name = 'createDemoUser'
    ) THEN
        ALTER TABLE "CompaniesSettings"
        ADD COLUMN "createDemoUser" VARCHAR(255) NOT NULL DEFAULT 'disabled';

        RAISE NOTICE 'Campo createDemoUser adicionado com sucesso.';
    ELSE
        RAISE NOTICE 'Campo createDemoUser já existe.';
    END IF;
END $$;
```

**⚠️ PROBLEMA:**
- Este SQL **NÃO é executado** por `npm run db:migrate`
- Precisa ser executado manualmente via `psql` ou `docker exec`
- Não há registro na tabela `SequelizeMeta`
- Se alguém fizer setup limpo, este campo não será criado

**Como executar manualmente:**
```bash
docker exec -i chatia_postgres_dev psql -U chatia -d chatia_dev < backend/src/database/migrations/MANUAL-add-createDemoUser.sql
```

### 2. Backup de Arquivo Crítico

**Arquivo:** `/backend/src/services/WbotServices/wbotMessageListener.ts.backup-20251015-132959`

**Tamanho:** 180KB

**Evidência:** Backup manual feito em 15/10/2025 13:29:59

**Indica:**
- Houve alteração significativa no arquivo `wbotMessageListener.ts` nesta data
- Desenvolvedor fez backup antes de mudança arriscada
- Este arquivo é crítico (processa todas mensagens WhatsApp recebidas)

### 3. Versão "Não Funciona" Mantida no Repositório

**Arquivo:** `/backend/src/services/WbotServices/wbotMessageListener-dontwork.ts`

**Tamanho:** 111KB

**Indica:**
- Versão anterior do listener que não funcionou
- Mantida para referência ou reversão futura
- **⚠️ Má prática:** Versionamento deveria ser feito via Git, não arquivos duplicados

### 4. Scripts de Teste Soltos

**Arquivo:** `/backend/src/database/migrations/scripts/test-document-unique.sql`

**Indica:**
- Scripts SQL de teste dentro da pasta de migrations
- Não fazem parte do fluxo oficial
- Podem confundir desenvolvedores

---

## 🔄 Fluxos Críticos do Sistema

### 1. Fluxo de Login

```
┌─────────────────────────────────────────────────────────┐
│ 1. User digita email/senha no frontend                 │
│ 2. Frontend → POST /auth/login (SessionController)     │
│ 3. Backend busca User no banco por email               │
│ 4. Backend valida senha com bcrypt.compare()           │
│ 5. Backend gera JWT com payload:                       │
│    { id, companyId, profile, super }                   │
│ 6. Backend retorna:                                     │
│    { token, refreshToken, user: {...super:true} }      │
│ 7. Frontend salva token em localStorage                │
│ 8. Frontend carrega user no AuthContext                │
│ 9. Frontend redireciona para /tickets                  │
└─────────────────────────────────────────────────────────┘
```

**Arquivos envolvidos:**
- Backend: `src/controllers/SessionController.ts`
- Backend: `src/services/AuthServices/AuthService.ts`
- Frontend: `src/pages/Login/index.js`
- Frontend: `src/context/Auth/AuthContext.js`

**⚠️ Problema conhecido:** Se user.super for alterado diretamente no banco, usuário precisa fazer logout + login para atualizar o token JWT.

### 2. Fluxo de Recebimento de Mensagem WhatsApp (Crítico)

```
┌─────────────────────────────────────────────────────────┐
│ 1. WhatsApp envia mensagem via Baileys WebSocket       │
│ 2. wbot.ts captura evento "messages.upsert"            │
│ 3. wbotMessageListener.ts processa mensagem (184KB!)   │
│    ├─ Normaliza número de telefone                     │
│    ├─ Busca ou cria Contact                            │
│    ├─ Busca ou cria Ticket                             │
│    ├─ Verifica se há chatbot ativo                     │
│    ├─ Salva Message no banco                           │
│    └─ Emite evento Socket.IO "ticket-updated"          │
│ 4. Backend emite para frontend via Socket.IO           │
│ 5. Frontend recebe evento no SocketWorker.js           │
│ 6. Frontend atualiza TicketsList e MessagesList        │
│ 7. Frontend toca som de notificação                    │
└─────────────────────────────────────────────────────────┘
```

**Arquivos envolvidos:**
- Backend: `src/libs/wbot.ts` (conexão Baileys)
- Backend: `src/services/WbotServices/wbotMessageListener.ts` (184KB - arquivo GIGANTE)
- Backend: `src/libs/socket.ts` (Socket.IO server)
- Frontend: `src/services/SocketWorker.js` (Socket.IO client worker)
- Frontend: `src/components/TicketsList/index.js`
- Frontend: `src/components/MessagesList/index.js`

**⚠️ Pontos de falha:**
1. Baileys pode desconectar (lib instável, versão nightly)
2. Arquivo wbotMessageListener.ts tem 184KB (difícil manutenção)
3. Socket.IO pode perder eventos se cliente estiver offline
4. Performance degrada com 1000+ tickets ativos

### 3. Fluxo de Multi-Tenancy

```
┌─────────────────────────────────────────────────────────┐
│ 1. User faz request autenticado (JWT no header)        │
│ 2. Middleware isAuth.ts valida JWT                     │
│ 3. Middleware extrai companyId do token                │
│ 4. Middleware adiciona req.user = { id, companyId }    │
│ 5. Controller busca resource no banco:                 │
│    WHERE id = :id AND companyId = req.user.companyId   │
│ 6. Se companyId não bater, retorna 404                 │
└─────────────────────────────────────────────────────────┘
```

**Arquivos envolvidos:**
- Backend: `src/middleware/isAuth.ts`
- Backend: `src/middleware/isAuthCompany.ts`
- Todos controllers e services verificam `companyId`

**⚠️ Segurança:** Se verificação falhar, uma empresa pode acessar dados de outra.

### 4. Fluxo de Mensagens Agendadas (Bull Queue)

```
┌─────────────────────────────────────────────────────────┐
│ 1. User agenda mensagem via frontend                   │
│ 2. Backend cria Schedule no banco                      │
│ 3. Backend adiciona job na fila Bull (Redis)           │
│    com delay até o horário agendado                    │
│ 4. Worker Bull processa job no horário                 │
│ 5. Worker chama SendWhatsAppMessage service            │
│ 6. Backend envia via Baileys                           │
│ 7. Backend atualiza Schedule.status = "sent"           │
└─────────────────────────────────────────────────────────┘
```

**Arquivos envolvidos:**
- Backend: `src/libs/queue.ts` (Bull setup)
- Backend: `src/queues.ts` (56KB - definições de filas)
- Backend: `src/controllers/ScheduleController.ts`
- Backend: `src/services/WbotServices/SendWhatsAppMessage.ts`

**⚠️ Dependência:** Requer Redis rodando. Se Redis cair, mensagens agendadas param.

---

## 🔴 Problemas Reais de Funcionamento

### 1. Porta Hardcoded no server.ts (CRÍTICO)

**Arquivo:** `/backend/src/server.ts` (linha 17)

```typescript
const PORT = Number(process.env.PORT) || 8080;  // ⚠️ ERRADO
```

**Problema:**
- `.env` na raiz define `PORT=3001`
- `.env.example` no backend define `PORT=3000`
- Código usa fallback `8080`
- **Inconsistência tripla**

**Impacto:**
- Se `.env` não for carregado corretamente, servidor sobe na porta errada
- Frontend tenta conectar em 3001, mas backend está em 8080
- Erro: "Network Error" no frontend

**Solução:**
```typescript
const PORT = Number(process.env.PORT) || 3001;  // ✅ Consistente
```

### 2. Credenciais de Admin Inconsistentes (CRÍTICO)

**Em `.env` (raiz):**
```bash
ADMIN_EMAIL=admin@chatia.local
ADMIN_PASSWORD=admin123
```

**Em seed `20250101000000-ensure-super-admin.ts`:**
```typescript
email: "admin@admin.com",
passwordHash: await hash("123456", 8),
```

**Resultado:**
- Usuário criado é `admin@admin.com` / `123456`
- Variáveis de ambiente são **ignoradas** pelo seed
- Desenvolvedores tentam logar com credenciais erradas

**Impacto:** 30min+ perdidos tentando logar com `admin@chatia.local`

**Solução:** Usar variáveis de ambiente no seed ou remover variáveis enganosas do .env

### 3. Banco de Dados NÃO Criado Automaticamente (CRÍTICO)

**Problema:**
- `docker-compose.yml` cria container PostgreSQL
- Mas **NÃO cria** o banco de dados `chatia_dev`
- `npm run db:migrate` falha com erro: `database "chatia_dev" does not exist`

**Solução atual:** Manual
```bash
docker exec chatia_postgres_dev psql -U chatia -d postgres -c "CREATE DATABASE chatia_dev;"
```

**Impacto:**
- Setup quebrado para novos desenvolvedores
- Wasted time: 30min+ descobrindo o problema

**Solução permanente:** Script de setup automático ou initdb.sql no Docker

### 4. TypeScript Strict Mode Desabilitado

**Arquivo:** `/backend/tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": false,
    "strictPropertyInitialization": false
  }
}
```

**Problema:**
- Erros de tipo não são detectados em tempo de compilação
- Bugs só aparecem em runtime

**Impacto:**
- Código não type-safe
- Mais bugs em produção

### 5. Build com --transpile-only (Ignora Erros)

**Arquivo:** `/backend/package.json`

```json
"dev:server": "ts-node-dev --respawn --transpile-only --ignore node_modules src/server.ts"
```

**Problema:**
- Flag `--transpile-only` ignora erros TypeScript
- Código com erros de tipo roda normalmente em dev

**Impacto:**
- Desenvolvedor não vê erros até tentar `npm run build`
- Build falha em CI/CD

### 6. ts-node-dev Não Mostra Erros de Startup

**Comportamento:**
```bash
$ npm run dev:server
[INFO] ts-node-dev ver. 1.1.8
# ... nada mais aparece se houver erro de conexão com banco
```

**Problema:**
- Se banco não existe, servidor não inicia mas não mostra erro claro
- Terminal fica "travado" sem feedback

**Impacto:** 30min+ debugando problema óbvio

**Solução:** Adicionar try-catch no `server.ts` e logar erros explicitamente

### 7. Migration SQL Manual Não É Executada

**Arquivo:** `MANUAL-add-createDemoUser.sql`

**Problema:**
- Está na pasta `migrations/` mas **NÃO é executada** por `db:migrate`
- Sequelize só executa arquivos `.ts` ou `.js`
- Desenvolvedores assumem que foi executada

**Impacto:**
- Campo `CompaniesSettings.createDemoUser` pode não existir
- Features que dependem dele quebram

**Solução:** Converter para migration TypeScript ou executar manualmente e documentar

### 8. Arquivo wbotMessageListener.ts Gigante (184KB)

**Arquivo:** `/backend/src/services/WbotServices/wbotMessageListener.ts`

**Tamanho:** 184KB (~5000 linhas estimadas)

**Problema:**
- Arquivo monolítico com TODA lógica de processamento de mensagens
- Dificulta manutenção, debug e code review
- Alta probabilidade de bugs e conflitos de merge

**Impacto:**
- Mudanças arriscadas (evidência: 2 backups/versões alternativas)
- Dificulta onboarding de novos desenvolvedores

**Solução futura (backlog):** Refatorar em módulos menores

### 9. Logs Duplicados (Winston + Pino)

**Evidência:**
```typescript
import logger from "./utils/logger"; // Winston
import pino from "pino"; // Pino
```

**Problema:**
- Dois sistemas de log diferentes no mesmo projeto
- Inconsistência de formato
- Performance overhead

**Impacto:** Confusão ao debuggar, logs desorganizados

**Solução futura (backlog):** Padronizar em Winston (já está mais usado)

---

## 🗄️ Problemas Reais de Consistência do Banco

### 1. Seeders Não São Idempotentes

**Problema:**
- Executar `npm run db:seed` múltiplas vezes **duplica dados**
- Seeders não verificam se dados já existem (exceto `ensure-super-admin.ts`)

**Exemplo:** Se rodar `db:seed` 2x:
- 2 empresas com nome "Empresa 1"
- Settings duplicados
- Tags duplicadas

**Impacto:**
- Banco de desenvolvimento fica poluído
- Testes podem falhar por dados duplicados

**Solução:** Fazer seeders verificarem `findOrCreate` em vez de `create`

### 2. 293 Migrations Acumuladas (5+ anos)

**Problema:**
- 293 migrations desde 2020
- Setup completo demora ~5-10min para rodar todas
- Histórico muito longo dificulta troubleshooting

**Impacto:**
- Setup lento
- Difícil identificar qual migration quebrou

**Solução futura (backlog):** Consolidar migrations antigas em schema base

### 3. Timezone Hardcoded (America/Sao_Paulo)

**Arquivo:** `/backend/src/config/database.ts`

```typescript
timezone: 'America/Sao_Paulo',  // ⚠️ Hardcoded
```

**Problema:**
- Timezone não é configurável por empresa
- Sistema assume Brasil (GMT-3)
- Clientes de outros países terão horários errados

**Impacto:**
- Campanhas agendadas disparam no horário errado
- Relatórios mostram horários incorretos

**Solução:** Adicionar campo `Company.timezone` e respeitar em queries

### 4. Falta Controle de Versão de Schema

**Problema:**
- Não há validação se schema está atualizado
- Sistema pode rodar com migrations pendentes

**Impacto:**
- Bugs esporádicos por schema desatualizado
- Difícil diagnosticar

**Solução:** Adicionar health check que valida migrations

### 5. Migration Manual Inconsistente

**Problema:**
- `MANUAL-add-createDemoUser.sql` não é rastreado por `SequelizeMeta`
- Não há como saber se foi executado

**Impacto:**
- Ambientes podem ter schemas diferentes
- Bugs esporádicos por campo faltando

**Solução:** Converter para migration TypeScript oficial

### 6. Risco de Perda da Tabela SequelizeMeta

**Problema:**
- Se `SequelizeMeta` for perdida ou truncada, todas migrations rodam novamente
- Causará erros "table already exists"

**Impacto:**
- Restauração de backup complicada
- Possível perda de dados

**Solução:** Backup obrigatório de `SequelizeMeta` antes de migrations

### 7. Falta Validação de Constraints Únicas

**Evidência:** Migration `remove-color-unique-constraint.ts` sugere que houve problema com constraint

**Problema:**
- Constraints podem ser alteradas manualmente
- Não há validação de integridade no startup

**Impacto:**
- Dados duplicados podem entrar
- Relatórios incorretos

---

## 🌍 Pontos Pendentes para Internacionalização

> **⚠️ IMPORTANTE:** Esta seção documenta lacunas de internacionalização identificadas. As implementações sugeridas são **propostas futuras**, não ações imediatas. Priorize estabilização antes de internacionalização.

### 1. Timezone

#### Estado Atual Confirmado
- **Config do Sequelize:** `timezone: 'America/Sao_Paulo'` hardcoded em `/backend/src/config/database.ts`
- **Banco de dados:** Não há campo `timezone` na tabela `Companies`
- **Frontend:** Existe `TimezoneService.js` mas não é usado
- **Impacto:** Sistema assume fuso horário de Brasília (GMT-3) para todas empresas

#### Lacunas Identificadas
- Empresas de outros países terão horários errados em:
  - Mensagens agendadas
  - Campanhas
  - Relatórios
- Não há como configurar timezone por empresa

#### Implementação Futura Sugerida (Não fazer agora)
1. Adicionar campo `timezone` na tabela `Companies`
   - Valores possíveis: `'America/Sao_Paulo'`, `'America/New_York'`, `'Europe/London'`, etc.
   - Default: `'America/Sao_Paulo'`

2. Remover hardcode de timezone do `database.ts`
   - Usar UTC no banco
   - Converter para timezone da empresa na camada de aplicação

3. Atualizar serviços críticos:
   - `ScheduleService` (mensagens agendadas)
   - `CampaignService` (campanhas)
   - `ReportService` (relatórios)
   - `DateHelper.ts` (converter datas para timezone correto)

4. Frontend: Adicionar seletor de timezone em `Settings/Companies`

5. Frontend: Usar `TimezoneService.js` (já existe) para converter datas exibidas

#### Arquivos Afetados
- `/backend/src/config/database.ts`
- `/backend/src/helpers/DateHelper.ts`
- `/backend/src/services/CampaignService/`
- `/backend/src/services/ScheduleService/`
- `/frontend/src/services/TimezoneService.js` (já existe, precisa ser usado)
- `/frontend/src/pages/Settings/Companies.js`

### 2. Moeda (Currency)

#### Estado Atual Confirmado
- **Frontend:** `CurrencyService.js` e `CurrencyContext` existem mas não são usados
- **Banco de dados:** Não há campos `currency` ou `currencySymbol` na tabela `Companies`
- **Valores hardcoded:** Sistema assume Real Brasileiro (R$) em relatórios financeiros
- **Localização:** `/frontend/src/services/CurrencyService.js`, `/frontend/src/context/Currency/`

#### Lacunas Identificadas
- Empresas que faturam em outras moedas (USD, EUR, ARS) não conseguem usar o sistema corretamente
- Valores monetários sempre exibidos como `R$`

#### Implementação Futura Sugerida (Não fazer agora)
1. Adicionar campo `currency` na tabela `Companies`
   - Valores: `'BRL'`, `'USD'`, `'EUR'`, `'ARS'`, etc.
   - Default: `'BRL'`

2. Adicionar campo `currencySymbol` na tabela `Companies`
   - Valores: `'R$'`, `'$'`, `'€'`, `'$'`, etc.
   - Default: `'R$'`

3. Backend: Retornar `currency` e `currencySymbol` no endpoint `/companies/:id`

4. Frontend: Salvar `currency` no `CurrencyContext` (já existe)

5. Frontend: Usar `CurrencyService.js` para formatar valores monetários

6. Atualizar componentes que exibem valores:
   - Dashboard (receita, tickets pagos)
   - Financeiro (faturas, planos)
   - Relatórios

#### Arquivos Afetados
- `/backend/src/models/Company.ts` (adicionar campos)
- `/backend/src/controllers/CompanyController.ts`
- `/frontend/src/services/CurrencyService.js` (já existe, precisa ser usado)
- `/frontend/src/context/Currency/CurrencyContext.js` (já existe)
- `/frontend/src/pages/Dashboard/`
- `/frontend/src/pages/Financeiro/`
- `/frontend/src/pages/Settings/Companies.js`

### 3. Gateway de Pagamento

#### Problema Atual
- **Gateways hardcoded:** Mercado Pago (Brasil) e Gerencianet/Efí (PIX Brasil)
- **Impacto:** Sistema só aceita pagamentos via gateways brasileiros
- **Empresas fora do Brasil:** Não conseguem processar pagamentos

#### O Que Precisa Ser Feito
1. Adicionar campo `paymentGateway` na tabela `Companies`
   - Valores: `'mercadopago'`, `'gerencianet'`, `'stripe'`, `'paypal'`, etc.
   - Default: `'mercadopago'`

2. Adicionar campo `paymentGatewayConfig` (JSONB) para credenciais específicas do gateway

3. Backend: Criar adapter pattern para gateways
   ```typescript
   interface PaymentGatewayAdapter {
     createCharge(amount, currency, description): Promise<Charge>
     checkStatus(chargeId): Promise<Status>
   }
   ```

4. Backend: Implementar adapters:
   - `MercadoPagoAdapter` (já existe implicitamente)
   - `GerencianetAdapter` (já existe implicitamente)
   - `StripeAdapter` (novo - internacional)
   - `PayPalAdapter` (novo - internacional)

5. Frontend: Seletor de gateway em `Settings/Companies`

6. Frontend: Formulário de configuração dinâmico baseado no gateway selecionado
   - Mercado Pago: Public Key, Access Token
   - Stripe: Publishable Key, Secret Key
   - PayPal: Client ID, Client Secret

#### Arquivos Afetados
- `/backend/src/models/Company.ts` (adicionar campos)
- `/backend/src/services/PaymentService/` (criar com adapters)
- `/backend/src/controllers/InvoiceController.ts`
- `/backend/src/config/Gn.ts` (Gerencianet - refatorar)
- `/frontend/src/pages/Settings/Companies.js`
- `/frontend/src/pages/Financeiro/`

### 4. Idioma (i18n)

#### Situação Atual (Funcional)
- **Frontend:** i18next implementado com 3 idiomas:
  - `pt-BR` (Português - Brasil) - default
  - `en` (English)
  - `es` (Español)
- **Localização:** `/frontend/src/translate/languages/`
- **Status:** ✅ Já funciona, mas precisa validação de completude

#### O Que Precisa Ser Validado
1. Verificar se todas strings estão traduzidas (pode ter hardcodes em português)
2. Testar seletor de idioma em `/frontend/src/pages/Settings/`
3. Validar traduções de mensagens de erro
4. Backend: Mensagens de erro ainda em português (não internacionalizadas)

#### Ação Recomendada
- Auditoria de strings hardcoded (buscar por `'texto português'` no código)
- Backend: Implementar i18n (pacote `i18next` para Node.js)
- Retornar mensagens de erro no idioma do usuário (`Accept-Language` header)

### 5. Formato de Data/Hora

#### Problema Atual
- **Formato hardcoded:** `DD/MM/YYYY HH:mm` (padrão brasileiro)
- **Frontend:** `date-fns` usado mas sem locale configurável
- **Impacto:** Usuários de outros países veem datas em formato brasileiro

#### O Que Precisa Ser Feito
1. Adicionar campo `dateFormat` na tabela `Companies`
   - Valores: `'DD/MM/YYYY'`, `'MM/DD/YYYY'`, `'YYYY-MM-DD'`, etc.
   - Default: `'DD/MM/YYYY'`

2. Frontend: Configurar `date-fns` com locale dinâmico
   ```javascript
   import { format } from 'date-fns';
   import { ptBR, enUS, es } from 'date-fns/locale';

   const locale = {
     'pt': ptBR,
     'en': enUS,
     'es': es
   }[user.language];

   format(date, user.company.dateFormat, { locale });
   ```

3. Backend: Retornar `dateFormat` no endpoint `/companies/:id`

#### Arquivos Afetados
- `/backend/src/models/Company.ts`
- `/frontend/src/helpers/dateHelper.js` (criar)
- Todos componentes que exibem datas (100+ arquivos)

### 6. Formato de Número de Telefone

#### Problema Atual
- **Validação hardcoded:** Assume formato brasileiro `+55 (11) 99999-9999`
- **Normalização:** Remove `+55` e formata para padrão BR
- **Impacto:** Números de telefone de outros países não funcionam

#### O Que Precisa Ser Feito
1. Adicionar campo `countryCode` na tabela `Companies`
   - Valores: `'BR'`, `'US'`, `'AR'`, `'MX'`, etc.
   - Default: `'BR'`

2. Backend: Usar biblioteca `libphonenumber-js` para validar/formatar números
   ```typescript
   import { parsePhoneNumber } from 'libphonenumber-js';

   const phone = parsePhoneNumber(input, company.countryCode);
   const normalized = phone.format('E.164'); // +5511999999999
   ```

3. Remover hardcodes em `normalizePhoneNumber.ts`

4. Frontend: Input de telefone com máscara dinâmica baseada no país

#### Arquivos Afetados
- `/backend/src/utils/normalizePhoneNumber.ts` ⚠️ (hardcoded BR)
- `/backend/src/models/Company.ts`
- `/backend/src/services/WbotServices/` (validação de números)
- `/frontend/src/components/ContactModal/` (input de telefone)

---

## ✅ Checklist de Saneamento

### Fase 1: Correções Críticas de Funcionamento (Prioridade ALTA)

- [ ] **1.1. Corrigir porta hardcoded em server.ts**
  - Arquivo: `/backend/src/server.ts` linha 17
  - Alterar `|| 8080` para `|| 3001`
  - Testar startup do backend

- [ ] **1.2. Alinhar credenciais de admin**
  - Opção A: Fazer seed usar variáveis de ambiente
  - Opção B: Remover variáveis enganosas do .env e documentar credenciais reais
  - Recomendado: Opção B (mais simples)
  - Documentar em README: `admin@admin.com` / `123456`

- [ ] **1.3. Criar banco automaticamente no Docker**
  - Criar `backend/docker/initdb.sh`:
    ```bash
    #!/bin/bash
    set -e

    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "postgres" <<-EOSQL
        SELECT 'CREATE DATABASE chatia_dev'
        WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'chatia_dev')\gexec
    EOSQL
    ```
  - Atualizar `docker-compose.yml`:
    ```yaml
    postgres:
      volumes:
        - ./backend/docker/initdb.sh:/docker-entrypoint-initdb.d/init.sh
    ```
  - Dar permissão de execução: `chmod +x backend/docker/initdb.sh`
  - Testar setup limpo

- [ ] **1.4. Adicionar try-catch no server.ts**
  - Envolver inicialização do servidor em try-catch
  - Logar erros claramente:
    ```typescript
    try {
      await initDatabase();
      await startServer();
    } catch (error) {
      console.error('❌ ERRO AO INICIAR SERVIDOR:', error.message);
      process.exit(1);
    }
    ```

- [ ] **1.5. Adicionar validação de .env no startup**
  - Criar `backend/src/config/validateEnv.ts`
  - Validar variáveis obrigatórias:
    - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS`
    - `REDIS_HOST`, `REDIS_PORT`
    - `JWT_SECRET`, `JWT_REFRESH_SECRET`
  - Falhar rápido se faltar alguma

- [ ] **1.6. Converter migration SQL manual para TypeScript**
  - Converter `MANUAL-add-createDemoUser.sql` para migration TypeScript
  - Renomear para `20251012000000-add-createDemoUser-to-companies-settings.ts`
  - Deletar arquivo `.sql`
  - Rodar migration e verificar campo criado

### Fase 2: Validação do Fluxo de Dados (Prioridade ALTA)

- [ ] **2.1. Validar e documentar o comportamento real dos seeders**
  - **⚠️ ANTES DE ALTERAR:** Validar como seeders atuais funcionam
  - Verificar quais usam `create` vs `findOrCreate` vs `upsert`
  - Rodar `npm run db:seed` 2x em ambiente de testes e documentar:
    - Quais seeders duplicam dados
    - Quais tabelas são afetadas
    - Qual é o comportamento esperado
  - **Só depois:** Planejar correção para torná-los idempotentes (se necessário)

- [ ] **2.2. Validar fluxo completo de migrations**
  - Testar em ambiente limpo:
    1. `npm run build`
    2. `npm run db:migrate`
    3. `npm run db:seed`
  - Documentar qualquer erro ou comportamento inesperado
  - Confirmar que `SequelizeMeta` está sendo populada corretamente
  - Verificar se migration manual `MANUAL-add-createDemoUser.sql` é necessária

### Fase 3: Melhorias de Setup e Documentação (Prioridade MÉDIA)

- [ ] **3.1. Adicionar health check básico**
  - Criar endpoint `GET /health` que:
    - Testa conexão com PostgreSQL
    - Testa conexão com Redis
    - Retorna status básico
  - Exemplo de resposta:
    ```json
    {
      "status": "healthy",
      "database": "connected",
      "redis": "connected",
      "uptime": 3600
    }
    ```

- [ ] **3.2. Verificar índices em companyId**
  - Consultar banco para verificar se tabelas principais têm índice em `companyId`
  - Documentar quais tabelas têm e quais não têm
  - **Só depois:** Criar migration para adicionar índices faltantes (se necessário)
  - Tabelas prioritárias: `Tickets`, `Messages`, `Contacts`, `Whatsapps`

- [ ] **3.3. Documentar estado atual do schema**
  - Gerar dump do schema atual:
    ```bash
    pg_dump -U chatia -d chatia_dev --schema-only > backend/docs/schema.sql
    ```
  - Versionar no Git
  - Facilita comparação futura

### Fase 4: Melhorias de Documentação (Prioridade MÉDIA)

- [ ] **4.1. Criar script de setup automatizado**
  - Criar `scripts/setup.sh`:
    ```bash
    #!/bin/bash
    set -e
    echo "🚀 ChatIA Setup"
    docker-compose up -d
    cd backend && npm ci && npm run build && npm run db:migrate && npm run db:seed
    cd ../frontend && npm ci --legacy-peer-deps
    echo "✅ Setup completo! Execute: npm run dev:server (backend) e npm start (frontend)"
    ```
  - Dar permissão de execução: `chmod +x scripts/setup.sh`
  - Testar em ambiente limpo

- [ ] **4.2. Criar README.md na raiz do projeto**
  - Seções:
    - Visão geral
    - Requisitos (Node 24, Docker, etc)
    - Setup rápido (`./scripts/setup.sh`)
    - Credenciais de acesso
    - Portas utilizadas
    - Como rodar (dev e prod)
    - Troubleshooting comum
  - Manter sincronizado com CLAUDE.md

- [ ] **4.3. Criar .env.example na raiz do projeto**
  - Consolidar variáveis de backend e frontend
  - Remover valores de produção
  - Adicionar comentários explicativos
  - Incluir valores padrão funcionais para dev

- [ ] **4.4. Adicionar logging de startup**
  - Logar quando servidor está pronto:
    ```typescript
    console.log(`✅ Backend rodando em http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`🗄️ Banco: ${DB_NAME} em ${DB_HOST}:${DB_PORT}`);
    console.log(`🔴 Redis: ${REDIS_HOST}:${REDIS_PORT}`);
    ```

- [ ] **4.5. Documentar migrations críticas**
  - Criar `backend/docs/migrations.md` listando:
    - Migrations que adicionaram campos obrigatórios
    - Migrations que removeram campos
    - Migrations que alteraram constraints
    - Migrations que podem falhar (e como resolver)

### Fase 5: Preparação para Internacionalização (Prioridade BAIXA)

- [ ] **5.1. Adicionar campos de internacionalização em Companies**
  - Criar migration para adicionar:
    - `timezone` VARCHAR(50) DEFAULT 'America/Sao_Paulo'
    - `currency` VARCHAR(3) DEFAULT 'BRL'
    - `currencySymbol` VARCHAR(5) DEFAULT 'R$'
    - `dateFormat` VARCHAR(20) DEFAULT 'DD/MM/YYYY'
    - `countryCode` VARCHAR(2) DEFAULT 'BR'
    - `paymentGateway` VARCHAR(50) DEFAULT 'mercadopago'
    - `paymentGatewayConfig` JSONB
  - Rodar migration
  - Atualizar seed para popular campos

- [ ] **5.2. Auditar estratégia de timezone atual**
  - **⚠️ NÃO ALTERAR AINDA** - Auditar primeiro
  - Verificar tipo das colunas de data no banco:
    - `timestamp with time zone` ou `timestamp without time zone`?
  - Verificar como datas estão sendo gravadas atualmente
  - Verificar como frontend interpreta datas (ISO? Local?)
  - Verificar se agendamento depende de horário local
  - Documentar comportamento atual antes de qualquer mudança
  - **Só depois:** Planejar migração para UTC (se necessário)

- [ ] **5.3. Atualizar DateHelper para usar timezone da empresa**
  - Receber `companyId` como parâmetro
  - Buscar `Company.timezone`
  - Converter datas de UTC para timezone da empresa

- [ ] **5.4. Auditoria de strings hardcoded no frontend**
  - Buscar por padrão: `'texto em português'` ou `"texto em português"`
  - Mover para arquivos de tradução (`pt.js`, `en.js`, `es.js`)
  - Usar `useTranslation()` hook

- [ ] **5.5. Atualizar normalizePhoneNumber.ts**
  - Instalar `libphonenumber-js`
  - Receber `countryCode` como parâmetro
  - Validar/formatar usando a lib

### Fase 6: Limpeza de Código (Prioridade BAIXA)

- [ ] **6.1. Remover arquivos backup do repositório**
  - Deletar `wbotMessageListener.ts.backup-20251015-132959`
  - Deletar `wbotMessageListener-dontwork.ts`
  - Usar Git para histórico, não arquivos duplicados

- [ ] **6.2. Mover scripts de teste para fora de migrations/**
  - Mover `scripts/test-document-unique.sql` para `backend/scripts/`
  - Migrations deve conter apenas migrations

- [ ] **6.3. Habilitar TypeScript strict mode (gradual)**
  - Não fazer agora (fora de escopo)
  - Backlog futuro

- [ ] **6.4. Consolidar logging (Winston ou Pino)**
  - Não fazer agora (fora de escopo)
  - Backlog futuro

---

## 📦 Backlog Futuro (Fora do Escopo Atual)

### Modernização de Stack (Não fazer agora)

- [ ] Migrar React 17 → 18
- [ ] Migrar Sequelize 5 → 6+ ou Prisma
- [ ] Migrar Bull → BullMQ
- [ ] Unificar Material-UI (remover v4, usar só v5)
- [ ] Migrar React Router 5 → 6
- [ ] Atualizar TypeScript 4.2 → 5.x
- [ ] Atualizar Express 4.17 → 4.21+
- [ ] Atualizar todas dependências desatualizadas
- [ ] Resolver todas vulnerabilidades (npm audit)

### Refatorações de Arquitetura (Não fazer agora)

- [ ] Quebrar `wbotMessageListener.ts` (184KB) em módulos menores
- [ ] Consolidar migrations antigas em schema base
- [ ] Padronizar logging (Winston ou Pino, não ambos)
- [ ] Implementar cache Redis para queries frequentes
- [ ] Adicionar retry logic para Baileys
- [ ] Implementar circuit breaker para integrações externas

### Performance (Não fazer agora)

- [ ] Otimizar queries N+1 (Sequelize eager loading)
- [ ] Virtualizar listas longas (react-window)
- [ ] Code splitting frontend
- [ ] Lazy loading de rotas
- [ ] Adicionar índices em queries lentas
- [ ] Implementar paginação server-side

### Testes (Não fazer agora)

- [ ] Adicionar testes unitários (Jest)
- [ ] Adicionar testes de integração (Supertest)
- [ ] Adicionar testes e2e (Cypress/Playwright)
- [ ] Configurar CI/CD com testes automatizados
- [ ] Meta: 80% coverage

### DevOps (Não fazer agora)

- [ ] Criar Dockerfile otimizado (multi-stage build)
- [ ] Configurar CI/CD (GitHub Actions)
- [ ] Configurar ambientes (dev, staging, prod)
- [ ] Implementar monitoring (Prometheus + Grafana)
- [ ] Implementar log aggregation (ELK/Loki)
- [ ] Configurar alertas (Sentry, PagerDuty)

### Documentação (Não fazer agora)

- [ ] Documentar API com Swagger/OpenAPI
- [ ] Criar guia de contribuição
- [ ] Documentar arquitetura (diagramas C4)
- [ ] Documentar fluxos de negócio
- [ ] Criar guia de deploy
- [ ] Criar guia de troubleshooting

### Features Futuras (Não fazer agora)

- [ ] Suporte a múltiplos idiomas completo (backend i18n)
- [ ] Suporte a múltiplas moedas
- [ ] Integração com mais gateways de pagamento (Stripe, PayPal)
- [ ] Suporte a timezones por empresa
- [ ] Suporte a números de telefone internacionais
- [ ] Webhooks para integrações
- [ ] API pública para parceiros

---

## 📝 Comandos Úteis

### Setup Inicial

```bash
# 1. Clonar e entrar no projeto
cd chatia-4.1.0-main

# 2. Subir Docker
docker-compose up -d

# 3. Aguardar containers iniciarem (5 segundos)
sleep 5

# 4. Backend: instalar, compilar, migrar, popular
cd backend
npm install
npm run build
npm run db:migrate
npm run db:seed

# 5. Frontend: instalar
cd ../frontend
npm install --legacy-peer-deps

# 6. Iniciar backend (terminal 1)
cd backend
npm run dev:server

# 7. Iniciar frontend (terminal 2)
cd frontend
npm start
```

### Desenvolvimento

```bash
# Ver logs em tempo real
tail -f /tmp/backend.log /tmp/frontend.log

# Resetar banco de dados
docker-compose down -v
docker-compose up -d
cd backend && npm run db:migrate && npm run db:seed

# Testar backend manualmente
curl http://localhost:3001/health
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@admin.com","password":"123456"}'

# Ver processos rodando
ps aux | grep 'node.*server\|craco'

# Parar tudo
pkill -f 'ts-node-dev|craco'
docker-compose stop

# Limpar tudo
pkill -9 -f node
docker-compose down -v
rm -rf backend/node_modules frontend/node_modules
rm -rf backend/dist
```

### Debug

```bash
# Ver queries SQL (Sequelize)
export DEBUG=sequelize:*
npm run dev:server

# Ver erros TypeScript
cd backend
npx tsc --noEmit

# Verificar status de migrations
npx sequelize-cli db:migrate:status

# Criar nova migration
npx sequelize-cli migration:generate --name nome-da-migration

# Criar novo seed
npx sequelize-cli seed:generate --name nome-do-seed
```

### Docker

```bash
# Entrar no container PostgreSQL
docker exec -it chatia_postgres_dev psql -U chatia -d chatia_dev

# Executar SQL manualmente
docker exec -i chatia_postgres_dev psql -U chatia -d chatia_dev < arquivo.sql

# Ver logs do container
docker logs -f chatia_postgres_dev

# Resetar volume do banco
docker-compose down -v
docker volume rm chatia_postgres_data
```

---

## 🚨 Avisos Importantes

1. **WSL Performance:** `npm install` no frontend demora 20-30min no WSL. É normal.
2. **Compilação Frontend:** Primeira compilação demora 5-10min no WSL.
3. **Login SuperAdmin:** Sempre usar `admin@admin.com` / `123456` (não `admin@chatia.local`)
4. **Logout Necessário:** Se alterar `user.super` no banco, fazer logout + login para atualizar JWT
5. **Portas:** NUNCA usar 5173, 8080, 5050 (conflito com outro sistema)
6. **Baileys:** Conexão WhatsApp pode cair (lib instável, versão nightly) - é esperado
7. **Migrations:** Sempre conferir logs após `npm run db:migrate`
8. **Seeders:** Não rodar `npm run db:seed` múltiplas vezes (duplica dados até serem tornados idempotentes)
9. **Build obrigatório:** Migrations rodam de `dist/`, sempre fazer `npm run build` antes de migrar
10. **Migration manual:** `MANUAL-add-createDemoUser.sql` não roda automaticamente

---

## 📊 Portas e Serviços

| Serviço | Porta Externa | Porta Interna | URL |
|---------|---------------|---------------|-----|
| Frontend | 3000 | 3000 | http://localhost:3000 |
| Backend | 3001 | 3001 | http://localhost:3001 |
| PostgreSQL | 5434 | 5432 | localhost:5434 |
| Redis | 6380 | 6379 | localhost:6380 |

**⚠️ Conflito:** Não usar portas 5173, 8080, 5050 (em uso por outro sistema)

---

**Gerado em:** 07/03/2026
**Por:** Claude Sonnet 4.5
**Contexto:** Reorganização para foco em estabilização e saneamento pré-comercialização
**Versão do Sistema:** 2.2.2v-26

**Mantenha este arquivo atualizado** conforme correções forem implementadas!
