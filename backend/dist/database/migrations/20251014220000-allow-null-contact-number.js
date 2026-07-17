"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        console.log('[Migration] Allowing NULL values for contact number field...');
        // 1. Remover a constraint UNIQUE existente (number, companyId)
        try {
            await queryInterface.sequelize.query(`
        ALTER TABLE "Contacts" DROP CONSTRAINT IF EXISTS "number_companyid_unique";
      `);
            console.log('[Migration] ✅ Removed old UNIQUE constraint (number, companyId)');
        }
        catch (error) {
            console.warn('[Migration] No constraint to remove or error:', error);
        }
        // 2. Alterar coluna number para permitir NULL
        await queryInterface.sequelize.query(`
      ALTER TABLE "Contacts" ALTER COLUMN number DROP NOT NULL;
    `);
        console.log('[Migration] ✅ Column "number" now allows NULL values');
        // 3. Criar nova constraint UNIQUE que ignora valores NULL
        // Isso permite múltiplos contatos com number=NULL mas mantém unicidade quando há valor
        await queryInterface.sequelize.query(`
      CREATE UNIQUE INDEX idx_contacts_number_company_unique
      ON "Contacts" (number, "companyId")
      WHERE number IS NOT NULL;
    `);
        console.log('[Migration] ✅ Created new UNIQUE index that allows NULL values');
        console.log('[Migration] 🎉 Migration completed successfully!');
    },
    down: async (queryInterface) => {
        console.log('[Migration Rollback] Reverting changes to contact number field...');
        // 1. Remover o índice único criado
        await queryInterface.sequelize.query(`
      DROP INDEX IF EXISTS idx_contacts_number_company_unique;
    `);
        console.log('[Migration Rollback] Removed UNIQUE index');
        // 2. Restaurar NOT NULL (isso falhará se houver valores NULL existentes)
        try {
            await queryInterface.sequelize.query(`
        ALTER TABLE "Contacts" ALTER COLUMN number SET NOT NULL;
      `);
            console.log('[Migration Rollback] ✅ Restored NOT NULL constraint on "number"');
        }
        catch (error) {
            console.error('[Migration Rollback] ❌ Could not restore NOT NULL - there may be NULL values in database');
            throw error;
        }
        // 3. Recriar constraint UNIQUE original
        try {
            await queryInterface.sequelize.query(`
        ALTER TABLE "Contacts" ADD CONSTRAINT "number_companyid_unique" UNIQUE (number, "companyId");
      `);
            console.log('[Migration Rollback] ✅ Restored original UNIQUE constraint');
        }
        catch (error) {
            console.warn('[Migration Rollback] Could not restore original constraint:', error);
        }
    }
};
