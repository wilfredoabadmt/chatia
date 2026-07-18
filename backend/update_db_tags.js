const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5434,
  database: 'chatia_dev',
  username: 'chatia',
  password: 'chatia123dev',
  logging: console.log
});

async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connected to database!');

    // Update Lanes names and greetings
    const updates = [
      {
        oldName: 'Novo',
        newName: 'Nuevo',
        newGreeting: '¡Hola! Su atención ha sido recibida y se iniciará pronto.'
      },
      {
        oldName: 'Em Andamento',
        newName: 'En Progreso',
        newGreeting: 'Su atención está en curso. Un agente ya se está encargando de su caso.'
      },
      {
        oldName: 'Aguardando Cliente',
        newName: 'Esperando Cliente',
        newGreeting: 'Estamos esperando su retorno para continuar con la atención.'
      },
      {
        oldName: 'Concluído',
        newName: 'Concluido',
        newGreeting: '¡Su atención ha concluido. Gracias por contactarnos!'
      }
    ];

    for (const update of updates) {
      const [results, metadata] = await sequelize.query(
        `UPDATE "Tags" 
         SET "name" = :newName, "greetingMessageLane" = :newGreeting
         WHERE "name" = :oldName AND "kanban" IS NOT NULL`,
        {
          replacements: {
            newName: update.newName,
            newGreeting: update.newGreeting,
            oldName: update.oldName
          }
        }
      );
      console.log(`Updated ${update.oldName} to ${update.newName}. Affected rows: ${metadata.rowCount}`);
    }

    console.log('Database tags/lanes updated successfully!');
  } catch (error) {
    console.error('Error updating database:', error);
  } finally {
    await sequelize.close();
  }
}

run();
