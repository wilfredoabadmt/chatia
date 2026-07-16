// ChatIA - Seed do administrador (idempotente)
// Colocar em: backend/scripts/seed_admin.js
// Extraído do instalador VPS v4.5.1 (etapa 9) sem alterar a lógica.
// Agora roda no entrypoint do container, controlado por env vars:
//   ADMIN_EMAIL, ADMIN_PASSWORD, COMPANY_NAME, DB_*
const bcrypt = require('bcryptjs');
const { Client } = require('pg');

const adminEmail = process.env.ADMIN_EMAIL || 'admin@admin.com';
const adminPassword = process.env.ADMIN_PASSWORD || '123456';
const companyName = process.env.COMPANY_NAME || 'ChatIA';
const passwordHash = bcrypt.hashSync(adminPassword, 10);

async function tableExists(client, tableName) {
  const result = await client.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = $1)", [tableName]);
  return result.rows[0].exists;
}

async function seedAdmin() {
  const client = new Client({
    host: process.env.DB_HOST || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME || 'chatia',
    user: process.env.DB_USER || 'chatia',
    password: process.env.DB_PASS
  });
  try {
    await client.connect();
    const hasCompanies = await tableExists(client, 'Companies');
    const hasPlans = await tableExists(client, 'Plans');
    let companyId = null;

    if (hasPlans && hasCompanies) {
      const planCheck = await client.query('SELECT id FROM "Plans" WHERE id = 1');
      if (planCheck.rows.length === 0) {
        await client.query(`INSERT INTO "Plans" (id, name, users, connections, queues, amount, "useWhatsapp", "useFacebook", "useInstagram", "useCampaigns", "useSchedules", "useInternalChat", "useExternalApi", "useKanban", "createdAt", "updatedAt") VALUES (1, 'Plano Padrão', 10, 10, 10, 100, true, true, true, true, true, true, true, true, NOW(), NOW())`);
      }
      const companyResult = await client.query('SELECT id FROM "Companies" ORDER BY id LIMIT 1');
      if (companyResult.rows.length === 0) {
        const ins = await client.query('INSERT INTO "Companies" (name, "planId", "createdAt", "updatedAt") VALUES ($1, 1, NOW(), NOW()) RETURNING id', [companyName]);
        companyId = ins.rows[0].id;
      } else {
        companyId = companyResult.rows[0].id;
      }
    }

    const checkAdmin = await client.query('SELECT id, email FROM "Users" WHERE id = 1');
    const checkByEmail = await client.query('SELECT id, email FROM "Users" WHERE email = $1', [adminEmail]);
    const existing = checkAdmin.rows[0] || checkByEmail.rows[0];

    if (existing) {
      await client.query('UPDATE "Users" SET email = $1, "passwordHash" = $2, name = $3, profile = $4, super = true WHERE id = $5', [adminEmail, passwordHash, 'Admin', 'admin', existing.id]);
      console.log('[OK] Admin atualizado: ' + adminEmail);
    } else {
      const colsResult = await client.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'Users'");
      const columns = colsResult.rows.map(r => r.column_name);
      let insertCols = ['name', 'email', '"passwordHash"', 'profile', '"tokenVersion"', '"createdAt"', '"updatedAt"'];
      let insertVals = ['$1', '$2', '$3', '$4', '0', 'NOW()', 'NOW()'];
      let insertParams = ['Admin', adminEmail, passwordHash, 'admin'];
      if (columns.includes('companyId') && companyId) { insertCols.push('"companyId"'); insertVals.push('$' + (insertParams.length + 1)); insertParams.push(companyId); }
      if (columns.includes('super')) { insertCols.push('super'); insertVals.push('true'); }
      await client.query(`INSERT INTO "Users" (${insertCols.join(', ')}) VALUES (${insertVals.join(', ')})`, insertParams);
      console.log('[OK] Admin criado: ' + adminEmail);
    }

    // CompaniesSettings
    if (hasCompanies) {
      const settingsCount = await client.query('SELECT COUNT(*) FROM "CompaniesSettings"');
      if (parseInt(settingsCount.rows[0].count) === 0) {
        await client.query(`INSERT INTO "CompaniesSettings" ("companyId", "hoursCloseTicketsAuto", "chatBotType", "acceptCallWhatsapp", "userRandom", "sendGreetingMessageOneQueues", "sendSignMessage", "sendFarewellWaitingTicket", "userRating", "sendGreetingAccepted", "CheckMsgIsGroup", "sendQueuePosition", "scheduleType", "acceptAudioMessageContact", "enableLGPD", "sendMsgTransfTicket", "requiredTag", "lgpdDeleteMessage", "lgpdHideNumber", "lgpdConsent", "showNotificationPending", "overrideDefaultTimezone", "createDemoUser", "createdAt", "updatedAt") SELECT id, '9999', 'text', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'enabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', true, false, 'disabled', NOW(), NOW() FROM "Companies" WHERE NOT EXISTS (SELECT 1 FROM "CompaniesSettings" WHERE "companyId" = "Companies".id)`);
        console.log('[OK] CompaniesSettings criado');
      }
    }

    await client.end();
    process.exit(0);
  } catch (error) {
    console.error('[ERRO]', error.message);
    process.exit(1);
  }
}
seedAdmin();
