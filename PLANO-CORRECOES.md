# Plano de Correções no Código-Fonte

**Objetivo:** Mover todas as 17 correções que o instalador faz via patch para o código-fonte do repositório.

**Commit de segurança:** `8e24a07` - se der problema, reverter com:
```bash
git reset --hard 8e24a07
docker compose up -d --build
```

**Regra:** Cada correção é aplicada, testada e só depois passamos para a próxima.

---

## Correção 1 - Import do mime (backend)
**Arquivos:** `backend/src/services/WbotServices/SendWhatsAppMedia.ts`, `SendWhatsAppMediaFlow.ts`
**Problema:** `import { getType } from "mime"` não funciona com versão atual do mime
**Fix:** Trocar para `const mime = require("mime")` e usar `mime.getType()`
**Como testar:** `docker compose up -d --build backend` e enviar uma mídia pelo WhatsApp
**Status:** [ ] Pendente

## Correção 2 - Rota POST /auth/me (backend)
**Arquivo:** `backend/src/routes/authRoutes.ts`
**Problema:** Falta rota POST para `/auth/me` (necessária para refresh token via body)
**Fix:** Adicionar `authRoutes.post("/me", SessionController.me)`
**Como testar:** Backend sobe sem erro. Testar login no frontend.
**Status:** [ ] Pendente

## Correção 3 - Campos source/isInAgenda no Contact (backend)
**Arquivo:** `backend/src/models/Contact.ts`
**Problema:** Campos `source` e `isInAgenda` estão comentados no model
**Fix:** Descomentar os campos e suas decorators
**Como testar:** Backend compila sem erro. Criar/editar contato no frontend.
**Status:** [ ] Pendente

## Correção 4 - Migration unique constraint com sintaxe quebrada (backend)
**Arquivo:** `backend/src/database/migrations/20251013170001-add-unique-constraint-companies-document.ts`
**Problema:** Bloco de safe check do query plan tem sintaxe errada
**Fix:** Corrigir o bloco com safe check e else corretos
**Como testar:** `docker exec chatia-backend npx sequelize-cli db:migrate` roda sem erro
**Status:** [ ] Pendente

## Correção 5 - Memory leak ChatPopover (frontend)
**Arquivo:** `frontend/src/pages/Chat/ChatPopover.js`
**Problema:** Falta `isMounted` check nos useEffects, causa memory leak
**Fix:** Adicionar `isMounted` flag e `fetchChatsRef`
**Como testar:** Abrir chat, navegar entre páginas, verificar console sem warnings de memory leak
**Status:** [ ] Pendente

## Correção 6 - Memory leak UserModal (frontend)
**Arquivo:** `frontend/src/components/UserModal/index.js`
**Problema:** Falta `isMounted` check no useEffect que busca dados do usuário
**Fix:** Adicionar `isMounted` flag e cleanup
**Como testar:** Abrir modal de usuário, fechar rapidamente, sem warnings no console
**Status:** [ ] Pendente

## Correção 7 - Bug #undefined no color picker (frontend)
**Arquivos:** `frontend/src/components/Settings/Whitelabel.js`, `frontend/src/components/QueueModal/index.js`
**Problema:** `color.hex` assume objeto mas recebe string, resulta em `#undefined`
**Fix:** Tratar `color` como string e verificar se já tem `#`
**Como testar:** Abrir Whitelabel settings, mudar cor, verificar que salva corretamente (sem #undefined)
**Status:** [ ] Pendente

## Correção 8 - Timezone no agendamento (backend + frontend)
**Arquivos:**
- `backend/src/services/ScheduleServices/CreateService.ts`
- `backend/src/services/ScheduleServices/UpdateService.ts`
- `backend/src/queues.ts`
- `frontend/src/components/ScheduleModal/index.js`
**Problema:** sendAt não converte entre timezone da empresa e UTC
**Fix:** Usar moment-timezone para converter sendAt para UTC antes de salvar e de UTC para timezone ao exibir
**Como testar:** Agendar mensagem, verificar se dispara no horário correto
**Status:** [ ] Pendente

## Correção 9 - Material-UI deprecated props (frontend)
**Arquivos:** Vários em `frontend/src/`
**Problema:** `overlap="rectangle"` (deprecated, deve ser `"rectangular"`), `rows=` (deve ser `minRows=`)
**Fix:** Substituir em todos os arquivos
**Como testar:** Frontend compila sem warnings de deprecated props
**Status:** [ ] Pendente

## Correção 10 - Auth antes de autenticação (frontend)
**Arquivos:** `frontend/src/context/Currency/CurrencyContext.js`, `frontend/src/hooks/useWhatsApps/index.js`
**Problema:** Chamam API sem verificar se user está autenticado, causa erro 401 no carregamento
**Fix:** Adicionar check `if (!user) return` antes das chamadas
**Como testar:** Abrir página de login, console sem erros 401
**Status:** [ ] Pendente

## Correção 11 - Fluxo de login (frontend)
**Arquivos:**
- `frontend/src/hooks/useAuth.js/index.js`
- `frontend/src/context/WhatsApp/WhatsAppsContext.js`
- `frontend/src/routes/Route.js`
**Problema:** Loading infinito quando não tem token, redirect antes de verificar auth
**Fix:** Verificar se token existe antes de tentar refresh, proteger redirect
**Como testar:** Limpar localStorage, acessar /, deve ir para /login sem loading infinito
**Status:** [ ] Pendente

## Correção 12 - OnlyForSuperUser null safety (frontend)
**Arquivo:** `frontend/src/components/OnlyForSuperUser/index.js`
**Problema:** `user.super` sem optional chaining crasheia quando user é null
**Fix:** Trocar `user.super` por `user?.super`
**Como testar:** Login normal, navegar sem crash
**Status:** [ ] Pendente

## Correção 13 - Whitelabel null user (frontend)
**Arquivo:** `frontend/src/components/Settings/Whitelabel.js`
**Problema:** `setCurrentUser(u)` sem fallback quando u é null
**Fix:** Trocar por `setCurrentUser(u || {})`
**Como testar:** Abrir settings de Whitelabel sem crash
**Status:** [ ] Pendente

## Correção 14 - Socket.IO namespace errado (backend)
**Arquivos:** Vários em `backend/src/` que usam `io.of(String(companyId))`
**Problema:** Namespace incorreto, deve ser `/workspace-${companyId}`
**Fix:** Substituir `io.of(String(companyId))` por `` io.of(`/workspace-${companyId}`) ``
**Como testar:** Login, verificar que tickets e mensagens atualizam em tempo real
**Status:** [ ] Pendente

## Correção 15 - SocketWorker sem transports (frontend)
**Arquivo:** `frontend/src/services/SocketWorker.js`
**Problema:** Falta configurar `transports: ['websocket', 'polling']` e timeouts
**Fix:** Adicionar transports e sincronizar pingTimeout/pingInterval
**Como testar:** Login, WebSocket conecta sem fallback desnecessário para polling
**Status:** [ ] Pendente

## Correção 16 - Kanban/Contatos não atualizam (frontend)
**Arquivos:**
- `frontend/src/pages/TagsKanban/index.js`
- `frontend/src/components/TagModal/index.js`
- `frontend/src/pages/Contacts/index.js`
- `frontend/src/components/ContactModal/index.js`
**Problema:** Após salvar tag ou contato, lista não atualiza automaticamente
**Fix:** Adicionar callback `onSaveSuccess` que força refresh da lista
**Como testar:** Criar tag no Kanban, verificar que aparece sem refresh. Criar contato, idem.
**Status:** [ ] Pendente

## Correção 17 - Ticket perde fila ao ser aceito (frontend)
**Arquivos:**
- `frontend/src/components/TicketActionButtonsCustom/index.js`
- `frontend/src/components/TicketOptionsMenu/index.js`
- `frontend/src/components/TicketListItem/index.js`
- `frontend/src/components/TicketListItemCustom/index.js`
**Problema:** Ao aceitar/transferir ticket, `queueId` não é enviado no PUT, ticket perde a fila
**Fix:** Adicionar `queueId: ticket?.queueId || ticket?.queue?.id || null` nas chamadas
**Como testar:** Aceitar ticket que está em uma fila, verificar que mantém a fila após aceitar
**Status:** [ ] Pendente

---

## Após todas as correções

1. Fazer build completo: `docker compose up -d --build`
2. Testar login, envio de mensagem, agendamento, kanban
3. Se tudo OK, simplificar o instalador removendo os patches
4. Simplificar o script de update
