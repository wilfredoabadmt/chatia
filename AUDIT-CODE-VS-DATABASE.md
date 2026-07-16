# Auditoria: Consistência Código vs Banco de Dados

> **Data:** $(date +"%Y-%m-%d %H:%M")
> **Objetivo:** Verificar se todas as tabelas usadas no código têm migrations correspondentes

---

## Resumo Executivo


| Métrica | Quantidade | Status |
|---------|-----------|--------|
| Models encontrados | 55 | ℹ️ |
| Tabelas em Migrations | 55 | ℹ️ |
| Models SEM migration | 23 | ⚠️ |
| Migrations SEM model | 23 | ⚠️ |
| Arquivos com queries diretas | 45 | ℹ️ |
| Tabelas com baixa referência | 32 | ⚠️ |

---

## 1. Models vs Migrations

### Models SEM Migration Correspondente
- ⚠️ **Announcement** - Model existe mas migration não foi encontrada
- ⚠️ **Chatbot** - Model existe mas migration não foi encontrada
- ⚠️ **Company** - Model existe mas migration não foi encontrada
- ⚠️ **Contact** - Model existe mas migration não foi encontrada
- ⚠️ **ContactCustomField** - Model existe mas migration não foi encontrada
- ⚠️ **ContactWallet** - Model existe mas migration não foi encontrada
- ⚠️ **LogTicket** - Model existe mas migration não foi encontrada
- ⚠️ **Message** - Model existe mas migration não foi encontrada
- ⚠️ **Plan** - Model existe mas migration não foi encontrada
- ⚠️ **Prompt** - Model existe mas migration não foi encontrada
- ⚠️ **Queue** - Model existe mas migration não foi encontrada
- ⚠️ **QueueOption** - Model existe mas migration não foi encontrada
- ⚠️ **QuickMessage** - Model existe mas migration não foi encontrada
- ⚠️ **Schedule** - Model existe mas migration não foi encontrada
- ⚠️ **ScheduledMessagesEnvio** - Model existe mas migration não foi encontrada
- ⚠️ **Setting** - Model existe mas migration não foi encontrada
- ⚠️ **Tag** - Model existe mas migration não foi encontrada
- ⚠️ **Ticket** - Model existe mas migration não foi encontrada
- ⚠️ **TicketNote** - Model existe mas migration não foi encontrada
- ⚠️ **User** - Model existe mas migration não foi encontrada
- ⚠️ **UserQueue** - Model existe mas migration não foi encontrada
- ⚠️ **Whatsapp** - Model existe mas migration não foi encontrada
- ⚠️ **WhatsappQueue** - Model existe mas migration não foi encontrada

### Migrations SEM Model Correspondente
- ⚠️ **Users** - Criada por `20200717133438-create-users.ts` mas sem model
- ⚠️ **Contacts** - Criada por `20200717144403-create-contacts.ts` mas sem model
- ⚠️ **Tickets** - Criada por `20200717145643-create-tickets.ts` mas sem model
- ⚠️ **Messages** - Criada por `20200717151645-create-messages.ts` mas sem model
- ⚠️ **Whatsapps** - Criada por `20200717170223-create-whatsapps.ts` mas sem model
- ⚠️ **ContactCustomFields** - Criada por `20200723200315-create-contacts-custom-fields.ts` mas sem model
- ⚠️ **Settings** - Criada por `20200903215941-create-settings.ts` mas sem model
- ⚠️ **Queues** - Criada por `20210108164404-create-queues.ts` mas sem model
- ⚠️ **WhatsappQueues** - Criada por `20210108174594-associate-whatsapp-queue.ts` mas sem model
- ⚠️ **UserQueues** - Criada por `20210108204708-associate-users-queue.ts` mas sem model
- ⚠️ **Companies** - Criada por `20210109192514-create-companies-table.ts` mas sem model
- ⚠️ **Plans** - Criada por `20210109192522-create-plans-table.ts` mas sem model
- ⚠️ **TicketNotes** - Criada por `20210109192523-create-ticket-notes.ts` mas sem model
- ⚠️ **QuickMessages** - Criada por `20210109192524-create-quick-messages.ts` mas sem model
- ⚠️ **Chatbots** - Criada por `20211017014719-create-chatbots.ts` mas sem model
- ⚠️ **QueueOptions** - Criada por `20211205164404-create-queue-options.ts` mas sem model
- ⚠️ **Schedules** - Criada por `20211227010200-create-schedules.ts` mas sem model
- ⚠️ **Tags** - Criada por `20220117130000-create-tags.ts` mas sem model
- ⚠️ **Announcements** - Criada por `20220411000003-create-table-Announcements.ts` mas sem model
- ⚠️ **LogTickets** - Criada por `20230913210007-create-table-LogTickets.ts` mas sem model
- ⚠️ **ContactWallets** - Criada por `20231122193355-create-table-wallets-contact.ts` mas sem model
- ⚠️ **ScheduledMessagesEnvios** - Criada por `20240102230240-create-ScheduledMessagesEnvio.ts` mas sem model
- ⚠️ **ContactGroups** - Criada por `20240102230241-create-ContactGroup.ts` mas sem model

---

## 2. Queries SQL Diretas

Arquivos que usam queries SQL diretas (potencial uso de tabelas não mapeadas):

- `backend/src/database/migrations/20210818102606-add-uuid-to-tickets.ts` - 1 queries
- `backend/src/database/migrations/20220315110005-remove-constraint-to-Settings.ts` - 2 queries
- `backend/src/database/migrations/20230216173900-add-uuid-extension.ts` - 2 queries
- `backend/src/database/migrations/20230704124428-update-messages.ts` - 3 queries
- `backend/src/database/migrations/20230808120000-add-system-currency-setting.ts` - 3 queries
- `backend/src/database/migrations/20230809081012-change-name-unique-false-to-whatsapp.ts` - 1 queries
- `backend/src/database/migrations/20230911113900-add-unaccent-extension.ts` - 2 queries
- `backend/src/database/migrations/20230912112028-insert-CompanieSettings.ts` - 2 queries
- `backend/src/database/migrations/20230923124428-update-tickets.ts` - 2 queries
- `backend/src/database/migrations/20240516112028-insert-version.ts` - 2 queries
- `backend/src/database/migrations/20250926140000-add-timezone-fields.ts` - 3 queries
- `backend/src/database/migrations/20251013140000-add-search-indexes-companies.ts` - 9 queries
- `backend/src/database/migrations/20251013170000-normalize-companies-document.ts` - 7 queries
- `backend/src/database/migrations/20251013170001-add-unique-constraint-companies-document.ts` - 9 queries
- `backend/src/database/migrations/20251014100000-add-source-isInAgenda-to-contacts.ts` - 2 queries
- `backend/src/database/migrations/20251014110000-normalize-existing-contacts.ts` - 10 queries
- `backend/src/database/migrations/20251014120000-add-unique-constraint-contacts.ts` - 5 queries
- `backend/src/database/migrations/20251014220000-allow-null-contact-number.ts` - 6 queries
- `backend/src/database/seeds/20251013000000-create-kanban-demo-tags.ts` - 7 queries
- `backend/src/queues/userMonitor.ts` - 1 queries
- `backend/src/queues.ts` - 4 queries
- `backend/src/services/CompaniesSettings/FindCompanySettingOneService.ts` - 1 queries
- `backend/src/services/CompaniesSettings/UpdateCompanySettingService.ts` - 1 queries
- `backend/src/services/CompanyService/VerifyCurrentSchedule.ts` - 3 queries
- `backend/src/services/MessageServices/GetMessageRangeService.ts` - 1 queries
- `backend/src/services/MessageServices/ListMessagesServiceAll.ts` - 4 queries
- `backend/src/services/MessageServices/ShowMessageService.ts` - 1 queries
- `backend/src/services/ReportService/DashbardDataService.ts` - 1 queries
- `backend/src/services/ReportService/TicketsAttendance.ts` - 2 queries
- `backend/src/services/ReportService/TicketsDayService.ts` - 1 queries
- `backend/src/services/Statistics/DashTicketsAndTimes.ts` - 2 queries
- `backend/src/services/Statistics/DashTicketsChannels.ts` - 1 queries
- `backend/src/services/Statistics/DashTicketsEvolutionByPeriod.ts` - 1 queries
- `backend/src/services/Statistics/DashTicketsEvolutionChannels.ts` - 1 queries
- `backend/src/services/Statistics/DashTicketsPerUsersDetail.ts` - 1 queries
- `backend/src/services/Statistics/DashTicketsQueue.ts` - 1 queries
- `backend/src/services/Statistics/StatisticsPerUsers.ts` - 1 queries
- `backend/src/services/TicketServices/ListTicketsServiceReport.ts` - 2 queries
- `backend/src/userMonitor.ts` - 1 queries
- `backend/src/database/seeds/20200904070003-create-default-company.ts` - 4 raw operations
- `backend/src/database/seeds/20200904070004-create-default-settings.ts` - 2 raw operations
- `backend/src/database/seeds/20200904070006-create-default-user.ts` - 2 raw operations
- `backend/src/database/seeds/20230901093700-create-default-companiessettings.ts` - 2 raw operations
- `backend/src/database/seeds/20250101000000-ensure-super-admin.ts` - 6 raw operations
- `backend/src/database/seeds/20251013000000-create-kanban-demo-tags.ts` - 2 raw operations

---

## 3. Tabelas com Baixa Referência no Código

Tabelas que existem mas têm poucas/nenhuma referência no código:

- `TicketTags` - Pouquíssimas referências (possível tabela não utilizada)
- `QueueIntegrations` - Pouquíssimas referências (possível tabela não utilizada)
- `ContactCustomFields` - Pouquíssimas referências (possível tabela não utilizada)
- `Schedules` - Pouquíssimas referências (possível tabela não utilizada)
- `CampaignContacts` - Pouquíssimas referências (possível tabela não utilizada)
- `Announcements` - Pouquíssimas referências (possível tabela não utilizada)
- `ChatFlow` - Pouquíssimas referências (possível tabela não utilizada)
- `ChatMessages` - Pouquíssimas referências (possível tabela não utilizada)
- `Subscriptions` - Pouquíssimas referências (possível tabela não utilizada)
- `Integrations` - Pouquíssimas referências (possível tabela não utilizada)
- `ApiConfigs` - Pouquíssimas referências (possível tabela não utilizada)
- `ApiMessages` - Pouquíssimas referências (possível tabela não utilizada)
- `AutoReply` - Pouquíssimas referências (possível tabela não utilizada)
- `QuickMessages` - Pouquíssimas referências (possível tabela não utilizada)
- `TicketNotes` - Pouquíssimas referências (possível tabela não utilizada)
- `UserQueues` - Pouquíssimas referências (possível tabela não utilizada)
- `Baileys` - Pouquíssimas referências (possível tabela não utilizada)
- `BaileysKeys` - Pouquíssimas referências (possível tabela não utilizada)
- `DialogflowConfig` - Pouquíssimas referências (possível tabela não utilizada)
- `FacebookIntegrations` - Pouquíssimas referências (possível tabela não utilizada)
- `FilesOptions` - Pouquíssimas referências (possível tabela não utilizada)
- `Helps` - Pouquíssimas referências (possível tabela não utilizada)
- `PromptOpenAi` - Pouquíssimas referências (possível tabela não utilizada)
- `QuickAnswers` - Pouquíssimas referências (possível tabela não utilizada)
- `RatingsOptions` - Pouquíssimas referências (possível tabela não utilizada)
- `ScheduledMessages` - Pouquíssimas referências (possível tabela não utilizada)
- `StatusChatEnd` - Pouquíssimas referências (possível tabela não utilizada)
- `TagIntegrations` - Pouquíssimas referências (possível tabela não utilizada)
- `TicketsTraking` - Pouquíssimas referências (possível tabela não utilizada)
- `TicketEvaluations` - Pouquíssimas referências (possível tabela não utilizada)
- `UserRating` - Pouquíssimas referências (possível tabela não utilizada)
- `WebHooks` - Pouquíssimas referências (possível tabela não utilizada)

---

## Próximos Passos Recomendados

### Se houver Models sem Migration:
1. Verificar se model está realmente em uso
2. Criar migration retroativa se necessário
3. Ou remover model se não for usado

### Se houver Migrations sem Model:
1. Verificar se tabela é usada via queries diretas
2. Criar model se tabela for utilizada
3. Ou remover tabela se não for usada (como ContactGroups)

### Para Queries Diretas:
1. Revisar cada arquivo listado
2. Verificar se tabelas mencionadas têm models
3. Considerar criar models para facilitar manutenção

---

**Gerado em:** 2026-03-07 17:14:20
**Script:** scripts/audit-database-consistency.sh
