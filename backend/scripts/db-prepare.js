// ChatIA - Pré-criação de colunas problemáticas antes das migrations
// Colocar em: backend/scripts/db-prepare.js
// Equivalente ao bloco SQLPREP do instalador VPS (etapa 9) e do updater (passo 5).
// Idempotente: usa IF NOT EXISTS / ON CONFLICT DO NOTHING.
const { Client } = require('pg');

const SQL = `
ALTER TABLE "CompaniesSettings" ADD COLUMN IF NOT EXISTS "DirectTicketsToWallets" VARCHAR(255) DEFAULT 'enabled';
ALTER TABLE "CompaniesSettings" ADD COLUMN IF NOT EXISTS "closeTicketOnTransfer" VARCHAR(255) DEFAULT 'disabled';
INSERT INTO "SequelizeMeta" (name) VALUES
  ('20231122223411-add-DirectTicketsToWallets-to-CompaniesSettings.js'),
  ('20231201123411-add-closeTicketOnTransfer-to-CompaniesSettings.js'),
  ('20251013170001-add-unique-constraint-companies-document.js')
ON CONFLICT DO NOTHING;
`;

async function main() {
  const client = new Client({
    host: process.env.DB_HOST || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME || 'chatia',
    user: process.env.DB_USER || 'chatia',
    password: process.env.DB_PASS
  });
  await client.connect();
  try {
    await client.query(SQL);
    console.log('[db-prepare] OK');
  } catch (err) {
    // Em instalação limpa as tabelas ainda não existem — é esperado.
    console.log('[db-prepare] Ignorado: ' + err.message);
  } finally {
    await client.end();
  }
}

main().then(() => process.exit(0)).catch(() => process.exit(0));
