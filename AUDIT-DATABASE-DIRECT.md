# Auditoria Direta: PostgreSQL vs Models

> **Data:** 2026-03-07 17:32:19
> **Banco:** chatia_dev
> **Método:** Consulta direta ao PostgreSQL

---

## Resumo Executivo

| Métrica | Quantidade | Status |
|---------|-----------|--------|
| Tabelas no banco (PostgreSQL) | 56 | ℹ️ |
| Models no código (Sequelize) | 55 | ℹ️ |
| **Tabelas SEM model** | **24** | ⚠️ |
| **Models SEM tabela** | **23** | ⚠️ |
| Tabelas órfãs com dados | 5 | ⚠️ |
| Tabelas órfãs vazias | 19 | ℹ️ |

---

## 🔴 Problema 1: Tabelas SEM Model

Tabelas que existem no banco de dados mas NÃO têm model Sequelize:

- 🟢 `Announcements` - Vazia (0 registros, seguro remover)
- 🟢 `Chatbots` - Vazia (0 registros, seguro remover)
- ⚠️ **`Companies`** - 📊 **1 registros** (ATENÇÃO: tem dados!)
- 🟢 `ContactCustomFields` - Vazia (0 registros, seguro remover)
- 🟢 `ContactWallets` - Vazia (0 registros, seguro remover)
- 🟢 `Contacts` - Vazia (0 registros, seguro remover)
- 🟢 `LogTickets` - Vazia (0 registros, seguro remover)
- 🟢 `Messages` - Vazia (0 registros, seguro remover)
- ⚠️ **`Plans`** - 📊 **1 registros** (ATENÇÃO: tem dados!)
- 🟢 `Prompts` - Vazia (0 registros, seguro remover)
- 🟢 `QueueOptions` - Vazia (0 registros, seguro remover)
- 🟢 `Queues` - Vazia (0 registros, seguro remover)
- 🟢 `QuickMessages` - Vazia (0 registros, seguro remover)
- 🟢 `ScheduledMessagesEnvios` - Vazia (0 registros, seguro remover)
- 🟢 `Schedules` - Vazia (0 registros, seguro remover)
- ⚠️ **`Settings`** - 📊 **21 registros** (ATENÇÃO: tem dados!)
- ⚠️ **`Tags`** - 📊 **4 registros** (ATENÇÃO: tem dados!)
- 🟢 `TicketNotes` - Vazia (0 registros, seguro remover)
- 🟢 `Tickets` - Vazia (0 registros, seguro remover)
- 🟢 `UserQueues` - Vazia (0 registros, seguro remover)
- ⚠️ **`Users`** - 📊 **1 registros** (ATENÇÃO: tem dados!)
- 🟢 `WhatsappQueues` - Vazia (0 registros, seguro remover)
- 🟢 `Whatsapps` - Vazia (0 registros, seguro remover)
- 🟢 `contacts_backup_20251014` - Vazia (0 registros, seguro remover)

---

## 🔴 Problema 2: Models SEM Tabela

Models que existem no código mas NÃO têm tabela no banco:

- ⚠️ **`Announcement`** (`Announcement.ts`) - Migration não executada ou model não usado
- ⚠️ **`Chatbot`** (`Chatbot.ts`) - Migration não executada ou model não usado
- ⚠️ **`Company`** (`Company.ts`) - Migration não executada ou model não usado
- ⚠️ **`Contact`** (`Contact.ts`) - Migration não executada ou model não usado
- ⚠️ **`ContactCustomField`** (`ContactCustomField.ts`) - Migration não executada ou model não usado
- ⚠️ **`ContactWallet`** (`ContactWallet.ts`) - Migration não executada ou model não usado
- ⚠️ **`LogTicket`** (`LogTicket.ts`) - Migration não executada ou model não usado
- ⚠️ **`Message`** (`Message.ts`) - Migration não executada ou model não usado
- ⚠️ **`Plan`** (`Plan.ts`) - Migration não executada ou model não usado
- ⚠️ **`Prompt`** (`Prompt.ts`) - Migration não executada ou model não usado
- ⚠️ **`Queue`** (`Queue.ts`) - Migration não executada ou model não usado
- ⚠️ **`QueueOption`** (`QueueOption.ts`) - Migration não executada ou model não usado
- ⚠️ **`QuickMessage`** (`QuickMessage.ts`) - Migration não executada ou model não usado
- ⚠️ **`Schedule`** (`Schedule.ts`) - Migration não executada ou model não usado
- ⚠️ **`ScheduledMessagesEnvio`** (`ScheduledMessagesEnvio.ts`) - Migration não executada ou model não usado
- ⚠️ **`Setting`** (`Setting.ts`) - Migration não executada ou model não usado
- ⚠️ **`Tag`** (`Tag.ts`) - Migration não executada ou model não usado
- ⚠️ **`Ticket`** (`Ticket.ts`) - Migration não executada ou model não usado
- ⚠️ **`TicketNote`** (`TicketNote.ts`) - Migration não executada ou model não usado
- ⚠️ **`User`** (`User.ts`) - Migration não executada ou model não usado
- ⚠️ **`UserQueue`** (`UserQueue.ts`) - Migration não executada ou model não usado
- ⚠️ **`Whatsapp`** (`Whatsapp.ts`) - Migration não executada ou model não usado
- ⚠️ **`WhatsappQueue`** (`WhatsappQueue.ts`) - Migration não executada ou model não usado

---

## 📊 Detalhes: Tabelas Órfãs com Dados

**ATENÇÃO:** Estas tabelas NÃO têm model mas contêm dados!

- **`Companies`**: 1 registros
- **`Plans`**: 1 registros
- **`Settings`**: 21 registros
- **`Tags`**: 4 registros
- **`Users`**: 1 registros

**Recomendações:**
1. Criar model para estas tabelas se forem utilizadas
2. Investigar se dados são importantes antes de remover
3. Verificar se são usadas via queries SQL diretas


---

## 📋 Lista Completa: Tabelas no Banco

- ⚠️ `Announcements` (SEM model)
- ✅ `ApiUsages` (tem model)
- ✅ `Baileys` (tem model)
- ✅ `CampaignSettings` (tem model)
- ✅ `CampaignShipping` (tem model)
- ✅ `Campaigns` (tem model)
- ✅ `ChatMessages` (tem model)
- ✅ `ChatUsers` (tem model)
- ⚠️ `Chatbots` (SEM model)
- ✅ `Chats` (tem model)
- ⚠️ `Companies` (SEM model)
- ✅ `CompaniesSettings` (tem model)
- ⚠️ `ContactCustomFields` (SEM model)
- ✅ `ContactListItems` (tem model)
- ✅ `ContactLists` (tem model)
- ✅ `ContactTags` (tem model)
- ⚠️ `ContactWallets` (SEM model)
- ⚠️ `Contacts` (SEM model)
- ✅ `DialogChatBots` (tem model)
- ✅ `Files` (tem model)
- ✅ `FilesOptions` (tem model)
- ✅ `FlowAudios` (tem model)
- ✅ `FlowBuilders` (tem model)
- ✅ `FlowCampaigns` (tem model)
- ✅ `FlowDefaults` (tem model)
- ✅ `FlowImgs` (tem model)
- ✅ `Helps` (tem model)
- ✅ `Integrations` (tem model)
- ✅ `Invoices` (tem model)
- ⚠️ `LogTickets` (SEM model)
- ⚠️ `Messages` (SEM model)
- ✅ `Partners` (tem model)
- ⚠️ `Plans` (SEM model)
- ⚠️ `Prompts` (SEM model)
- ✅ `QueueIntegrations` (tem model)
- ⚠️ `QueueOptions` (SEM model)
- ⚠️ `Queues` (SEM model)
- ⚠️ `QuickMessages` (SEM model)
- ✅ `ScheduledMessages` (tem model)
- ⚠️ `ScheduledMessagesEnvios` (SEM model)
- ⚠️ `Schedules` (SEM model)
- ⚠️ `Settings` (SEM model)
- ✅ `Subscriptions` (tem model)
- ⚠️ `Tags` (SEM model)
- ⚠️ `TicketNotes` (SEM model)
- ✅ `TicketTags` (tem model)
- ✅ `TicketTraking` (tem model)
- ⚠️ `Tickets` (SEM model)
- ⚠️ `UserQueues` (SEM model)
- ✅ `UserRatings` (tem model)
- ⚠️ `Users` (SEM model)
- ✅ `Versions` (tem model)
- ✅ `Webhooks` (tem model)
- ⚠️ `WhatsappQueues` (SEM model)
- ⚠️ `Whatsapps` (SEM model)
- ⚠️ `contacts_backup_20251014` (SEM model)

---

## 📋 Lista Completa: Models no Código

- ⚠️ `Announcement` (`Announcement.ts`) - SEM tabela
- ✅ `ApiUsages` (`ApiUsages.ts`) - tem tabela
- ✅ `Baileys` (`Baileys.ts`) - tem tabela
- ✅ `Campaigns` (`Campaign.ts`) - tem tabela
- ✅ `CampaignSettings` (`CampaignSetting.ts`) - tem tabela
- ✅ `CampaignShipping` (`CampaignShipping.ts`) - tem tabela
- ✅ `Chats` (`Chat.ts`) - tem tabela
- ⚠️ `Chatbot` (`Chatbot.ts`) - SEM tabela
- ✅ `ChatMessages` (`ChatMessage.ts`) - tem tabela
- ✅ `ChatUsers` (`ChatUser.ts`) - tem tabela
- ✅ `CompaniesSettings` (`CompaniesSettings.ts`) - tem tabela
- ⚠️ `Company` (`Company.ts`) - SEM tabela
- ⚠️ `Contact` (`Contact.ts`) - SEM tabela
- ⚠️ `ContactCustomField` (`ContactCustomField.ts`) - SEM tabela
- ✅ `ContactLists` (`ContactList.ts`) - tem tabela
- ✅ `ContactListItems` (`ContactListItem.ts`) - tem tabela
- ✅ `ContactTags` (`ContactTag.ts`) - tem tabela
- ⚠️ `ContactWallet` (`ContactWallet.ts`) - SEM tabela
- ✅ `DialogChatBots` (`DialogChatBots.ts`) - tem tabela
- ✅ `Files` (`Files.ts`) - tem tabela
- ✅ `FilesOptions` (`FilesOptions.ts`) - tem tabela
- ✅ `FlowAudios` (`FlowAudio.ts`) - tem tabela
- ✅ `FlowBuilders` (`FlowBuilder.ts`) - tem tabela
- ✅ `FlowCampaigns` (`FlowCampaign.ts`) - tem tabela
- ✅ `FlowDefaults` (`FlowDefault.ts`) - tem tabela
- ✅ `FlowImgs` (`FlowImg.ts`) - tem tabela
- ✅ `Helps` (`Help.ts`) - tem tabela
- ✅ `Integrations` (`Integrations.ts`) - tem tabela
- ✅ `Invoices` (`Invoices.ts`) - tem tabela
- ⚠️ `LogTicket` (`LogTicket.ts`) - SEM tabela
- ⚠️ `Message` (`Message.ts`) - SEM tabela
- ✅ `Partners` (`Partner.ts`) - tem tabela
- ⚠️ `Plan` (`Plan.ts`) - SEM tabela
- ⚠️ `Prompt` (`Prompt.ts`) - SEM tabela
- ⚠️ `Queue` (`Queue.ts`) - SEM tabela
- ✅ `QueueIntegrations` (`QueueIntegrations.ts`) - tem tabela
- ⚠️ `QueueOption` (`QueueOption.ts`) - SEM tabela
- ⚠️ `QuickMessage` (`QuickMessage.ts`) - SEM tabela
- ⚠️ `Schedule` (`Schedule.ts`) - SEM tabela
- ✅ `ScheduledMessages` (`ScheduledMessages.ts`) - tem tabela
- ⚠️ `ScheduledMessagesEnvio` (`ScheduledMessagesEnvio.ts`) - SEM tabela
- ⚠️ `Setting` (`Setting.ts`) - SEM tabela
- ✅ `Subscriptions` (`Subscriptions.ts`) - tem tabela
- ⚠️ `Tag` (`Tag.ts`) - SEM tabela
- ⚠️ `Ticket` (`Ticket.ts`) - SEM tabela
- ⚠️ `TicketNote` (`TicketNote.ts`) - SEM tabela
- ✅ `TicketTags` (`TicketTag.ts`) - tem tabela
- ✅ `TicketTraking` (`TicketTraking.ts`) - tem tabela
- ⚠️ `User` (`User.ts`) - SEM tabela
- ⚠️ `UserQueue` (`UserQueue.ts`) - SEM tabela
- ✅ `UserRatings` (`UserRating.ts`) - tem tabela
- ✅ `Versions` (`Versions.ts`) - tem tabela
- ✅ `Webhooks` (`Webhook.ts`) - tem tabela
- ⚠️ `Whatsapp` (`Whatsapp.ts`) - SEM tabela
- ⚠️ `WhatsappQueue` (`WhatsappQueue.ts`) - SEM tabela

---

## Próximos Passos

### Para Tabelas SEM Model:

**Se tabela tem dados:**
1. Criar model Sequelize correspondente
2. Verificar se é usada via queries SQL diretas
3. Documentar propósito da tabela

**Se tabela está vazia:**
1. Verificar se é realmente necessária
2. Considerar criar migration de remoção (como ContactGroups)
3. Ou criar model se for necessária

### Para Models SEM Tabela:

1. Verificar se migration correspondente existe
2. Executar migrations pendentes: `npm run db:migrate`
3. Se migration não existe, criar uma
4. Ou remover model se não for usado

---

**Gerado em:** 2026-03-07 17:32:24
**Script:** scripts/audit-database-direct.sh
**PostgreSQL:** chatia_postgres_dev
**Database:** chatia_dev
