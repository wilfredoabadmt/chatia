import { QueryInterface } from "sequelize";

/**
 * Seed: Create Kanban Demo Tags
 *
 * Cria tags de demonstração para funcionalidade Kanban.
 *
 * Features:
 * - Idempotente: verifica existência antes de criar
 * - Multi-tenant: cria apenas para companyId = 1 (empresa padrão)
 * - Lanes padrão: Novo, Em Andamento, Aguardando, Concluído
 * - Cores customizadas para cada status
 * - Configuração de fluxo automático (nextLaneId)
 *
 * Uso:
 * - Desenvolvimento: Facilita testes da interface Kanban
 * - Demonstração: Apresenta funcionalidade para clientes
 * - Produção: OPCIONAL - remover se empresas criarem lanes próprias
 *
 * Rollback:
 * - Remove APENAS tags criadas por este seed
 * - Não remove tags criadas manualmente por usuários
 */

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(async t => {
      // Verifica se empresa padrão (id=1) existe
      const companyExists = await queryInterface.rawSelect(
        "Companies",
        { where: { id: 1 }, transaction: t },
        ["id"]
      );

      if (!companyExists) {
        console.log("⚠️  Company id=1 não existe. Pulando criação de tags Kanban.");
        return;
      }

      // Verifica se já existem tags Kanban para esta empresa
      const existingKanbanTags = await queryInterface.sequelize.query(
        `SELECT COUNT(*) as count FROM "Tags" WHERE "companyId" = 1 AND "kanban" IS NOT NULL`,
        { transaction: t, type: (queryInterface.sequelize as any).QueryTypes.SELECT }
      );

      const count = (existingKanbanTags[0] as any).count;

      if (parseInt(count) > 0) {
        console.log(`✓ Já existem ${count} tags Kanban para companyId=1. Pulando criação.`);
        return;
      }

      // Cria tags Kanban de demonstração
      console.log("🚀 Criando tags Kanban de demonstração para companyId=1...");

      await queryInterface.bulkInsert(
        "Tags",
        [
          {
            name: "Nuevo",
            color: "#3B82F6", // Azul (novo/recebido)
            kanban: 0, // Primeira lane
            timeLane: 0, // Sem tempo automático
            nextLaneId: null, // Será atualizado após inserção
            greetingMessageLane: "¡Hola! Su atención ha sido recibida y se iniciará pronto.",
            rollbackLaneId: 0,
            companyId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "En Progreso",
            color: "#F59E0B", // Amarelo/Laranja (em progresso)
            kanban: 1, // Segunda lane
            timeLane: 30, // Avançar automaticamente após 30 minutos (se configurado)
            nextLaneId: null, // Será atualizado após inserção
            greetingMessageLane: "Su atención está en curso. Un agente ya se está encargando de su caso.",
            rollbackLaneId: null, // Voltar para "Novo" se necessário (será atualizado)
            companyId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Esperando Cliente",
            color: "#8B5CF6", // Roxo (aguardando resposta)
            kanban: 2, // Terceira lane
            timeLane: 60, // Avançar após 60 minutos sem resposta
            nextLaneId: null, // Será atualizado após inserção
            greetingMessageLane: "Estamos esperando su retorno para continuar con la atención.",
            rollbackLaneId: null, // Voltar para "Em Andamento" se cliente responder
            companyId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Concluido",
            color: "#10B981", // Verde (finalizado)
            kanban: 3, // Quarta lane (última)
            timeLane: 0, // Sem avanço automático (lane final)
            nextLaneId: null, // Null = lane final
            greetingMessageLane: "¡Su atención ha concluido. Gracias por contactarnos!",
            rollbackLaneId: null, // Pode voltar para "Em Andamento" se reabrir
            companyId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        { transaction: t }
      );

      console.log("✓ Tags Kanban criadas com sucesso!");

      // Busca IDs das tags criadas para configurar nextLaneId
      const tagsCreated = await queryInterface.sequelize.query(
        `SELECT id, name, kanban FROM "Tags"
         WHERE "companyId" = 1 AND "kanban" IS NOT NULL
         ORDER BY "kanban" ASC`,
        { transaction: t, type: (queryInterface.sequelize as any).QueryTypes.SELECT }
      );

      if (tagsCreated.length >= 4) {
        const [novo, emAndamento, aguardando, concluido] = tagsCreated as any[];

        // Atualiza nextLaneId para fluxo sequencial
        await queryInterface.sequelize.query(
          `UPDATE "Tags" SET "nextLaneId" = :nextId, "updatedAt" = NOW()
           WHERE id = :currentId`,
          {
            replacements: { currentId: novo.id, nextId: emAndamento.id },
            transaction: t,
          }
        );

        await queryInterface.sequelize.query(
          `UPDATE "Tags" SET "nextLaneId" = :nextId, "rollbackLaneId" = :prevId, "updatedAt" = NOW()
           WHERE id = :currentId`,
          {
            replacements: {
              currentId: emAndamento.id,
              nextId: aguardando.id,
              prevId: novo.id
            },
            transaction: t,
          }
        );

        await queryInterface.sequelize.query(
          `UPDATE "Tags" SET "nextLaneId" = :nextId, "rollbackLaneId" = :prevId, "updatedAt" = NOW()
           WHERE id = :currentId`,
          {
            replacements: {
              currentId: aguardando.id,
              nextId: concluido.id,
              prevId: emAndamento.id
            },
            transaction: t,
          }
        );

        await queryInterface.sequelize.query(
          `UPDATE "Tags" SET "rollbackLaneId" = :prevId, "updatedAt" = NOW()
           WHERE id = :currentId`,
          {
            replacements: {
              currentId: concluido.id,
              prevId: emAndamento.id
            },
            transaction: t,
          }
        );

        console.log("✓ Fluxo de lanes configurado (nextLaneId e rollbackLaneId)");
        console.log(`  Novo (${novo.id}) → Em Andamento (${emAndamento.id}) → Aguardando (${aguardando.id}) → Concluído (${concluido.id})`);
      }

      console.log(`
╔════════════════════════════════════════════════════════════╗
║              TAGS KANBAN CRIADAS COM SUCESSO!              ║
╠════════════════════════════════════════════════════════════╣
║  Empresa: companyId = 1                                    ║
║  Lanes:                                                    ║
║    1. Novo (Azul)                                          ║
║    2. Em Andamento (Amarelo)                               ║
║    3. Aguardando Cliente (Roxo)                            ║
║    4. Concluído (Verde)                                    ║
║                                                            ║
║  Acesse: /kanban para visualizar o quadro!                 ║
╚════════════════════════════════════════════════════════════╝
      `);
    });
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(async t => {
      console.log("🗑️  Removendo tags Kanban de demonstração...");

      // Remove APENAS as tags criadas por este seed
      // Critério: companyId=1, kanban IS NOT NULL, nomes específicos
      await queryInterface.sequelize.query(
        `DELETE FROM "Tags"
         WHERE "companyId" = 1
           AND "kanban" IS NOT NULL
           AND "name" IN ('Nuevo', 'En Progreso', 'Esperando Cliente', 'Concluido')`,
        { transaction: t }
      );

      console.log("✓ Tags Kanban removidas (rollback completo)");

      // Nota: TicketTags associados são removidos automaticamente via CASCADE
    });
  },
};
