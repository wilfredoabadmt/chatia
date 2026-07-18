const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5434,
  database: 'chatia_dev',
  username: 'chatia',
  password: 'chatia123dev',
  logging: false
});

async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connected to DB');
    const [users] = await sequelize.query('SELECT id, name, email, profile, "super", "companyId" FROM "Users"');
    console.log('Users in DB:');
    console.log(JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

run();
