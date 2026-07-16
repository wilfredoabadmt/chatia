// ChatIA - Valida que as tabelas essenciais existem após as migrations
// Colocar em: backend/scripts/db-check-tables.js
// Sai com 0 se todas existem, 1 se falta alguma (entrypoint aborta).
const { Client } = require('pg');

const REQUIRED_TABLES = ['Users', 'Companies', 'Whatsapps', 'Tickets', 'Contacts', 'Messages', 'Queues'];

async function main() {
  const client = new Client({
    host: process.env.DB_HOST || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME || 'chatia',
    user: process.env.DB_USER || 'chatia',
    password: process.env.DB_PASS
  });
  await client.connect();
  let ok = true;
  for (const table of REQUIRED_TABLES) {
    const result = await client.query(
      'SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = $1)',
      [table]
    );
    if (!result.rows[0].exists) {
      console.error(`[db-check] Tabela ${table} NAO existe!`);
      ok = false;
    }
  }
  await client.end();
  process.exit(ok ? 0 : 1);
}

main().catch(err => {
  console.error('[db-check] Erro: ' + err.message);
  process.exit(1);
});
