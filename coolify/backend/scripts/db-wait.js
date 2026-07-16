// ChatIA - Espera o PostgreSQL aceitar conexões
// Colocar em: backend/scripts/db-wait.js
// Sai com 0 se conectou, 1 se não. Usado em loop pelo entrypoint.
const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST || 'postgres',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'chatia',
  user: process.env.DB_USER || 'chatia',
  password: process.env.DB_PASS,
  connectionTimeoutMillis: 3000
});

client.connect()
  .then(() => client.query('SELECT 1'))
  .then(() => client.end())
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
