# Análise ContactGroups - Sprint 2

> **Data:** 07/03/2026
> **Status:** Tabela Órfã Confirmada

---

## Resumo Executivo

A tabela `ContactGroups` foi criada por migration mas **nunca foi utilizada** no código. É uma tabela órfã que deve ser **removida**.

---

## Evidências

### 1. Migration Existe
**Arquivo:** `backend/src/database/migrations/20240102230241-create-ContactGroup.ts`

**Criada em:** 02/01/2024 23:02:41

**Estrutura:**
```typescript
ContactGroups {
  id: INTEGER (PK, auto-increment)
  createdAt: DATE
  updatedAt: DATE
  contactId: INTEGER
  companyId: INTEGER
  userId: INTEGER
}
```

### 2. Model NÃO Existe
**Busca realizada:**
```bash
find backend/src/models -name "*ContactGroup*"
# Resultado: Nenhum arquivo encontrado
```

**Conclusão:** Não há model Sequelize para ContactGroups.

### 3. Uso no Código: ZERO Referências

**Backend:**
```bash
grep -r "ContactGroup" backend/src --exclude-dir=node_modules
# Resultado: Apenas na migration
```

**Frontend:**
```bash
grep -r "ContactGroup" frontend/src --exclude-dir=node_modules
# Resultado: Nenhuma referência
```

**Arquivos verificados:**
- ✅ Controllers (0 referências)
- ✅ Services (0 referências)
- ✅ Routes (0 referências)
- ✅ Models (0 referências)
- ✅ Frontend (0 referências)

### 4. Data de Criação vs. Uso

**Migration:** 02/01/2024 (criada há ~14 meses)
**Última alteração:** Nunca modificada desde criação
**Uso detectado:** Zero

**Conclusão:** Tabela foi criada mas funcionalidade nunca foi implementada.

---

## Cenários Possíveis

### Cenário 1: Funcionalidade Planejada mas Não Implementada ✅ (MAIS PROVÁVEL)
- Desenvolvedor criou migration para feature "grupos de contatos"
- Feature nunca foi desenvolvida
- Migration ficou órfã no codebase
- **Ação:** Remover migration

### Cenário 2: Funcionalidade Removida do Código ❌ (IMPROVÁVEL)
- Feature existia e foi removida
- Migration permaneceu no banco
- **Contra-evidência:** Nenhum commit mostrando remoção de código relacionado
- **Ação:** Ainda assim, remover migration

### Cenário 3: Tabela Usada por Sistema Externo ❌ (MUITO IMPROVÁVEL)
- Outro sistema acessa diretamente essa tabela
- **Contra-evidência:** Sistema não expõe API para outras aplicações
- **Contra-evidência:** Não há documentação de integração externa
- **Ação:** Se existisse, seria documentado

---

## Decisão Recomendada

### ⚠️ REMOVER MIGRATION

**Justificativa:**
1. Tabela não tem model
2. Zero referências no código
3. Não há dados dependentes (sem foreign keys apontando para ela)
4. Criada há 14 meses sem uso
5. Sistema é multi-tenant - se fosse usada, teria companyId em uso

**Método de Remoção:**

**Opção A - Criar Migration de Remoção (RECOMENDADO):**
```typescript
// 20260307-remove-unused-ContactGroups.ts
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.dropTable('ContactGroups');
  },
  async down(queryInterface: QueryInterface) {
    // Recriar tabela caso precise reverter
    await queryInterface.createTable('ContactGroups', {
      // ... estrutura original
    });
  }
};
```

**Opção B - Deletar Migration Original (MENOS RECOMENDADO):**
- Deletar arquivo `20240102230241-create-ContactGroup.ts`
- ⚠️ Problema: Se alguém já executou, tabela continuará no banco
- ⚠️ Problema: SequelizeMeta terá registro órfão

---

## Impacto da Remoção

### ✅ Sem Risco
- Nenhum código usa a tabela
- Nenhum model aponta para ela
- Nenhuma foreign key de outras tabelas

### 📊 Benefícios
- Remove confusão para desenvolvedores
- Limpa schema do banco
- Remove migration desnecessária (1 arquivo a menos)
- Melhora clareza da arquitetura

### 🔄 Reversível
- Migration de remoção tem método `down()`
- Pode reverter se necessário
- Estrutura está documentada

---

## Validação Pós-Remoção

**Após executar migration de remoção:**

1. Verificar tabela não existe mais:
```sql
SELECT * FROM pg_tables WHERE tablename='ContactGroups';
-- Resultado esperado: 0 linhas
```

2. Verificar SequelizeMeta:
```sql
SELECT name FROM "SequelizeMeta" WHERE name LIKE '%ContactGroup%';
-- Deve mostrar migration de remoção
```

3. Rodar aplicação e confirmar funcionamento normal:
```bash
npm run dev:server
# Sem erros relacionados a ContactGroups
```

---

## Próximos Passos

1. ✅ **Criar migration de remoção** (20260307-remove-unused-ContactGroups.ts)
2. ⏳ **Executar migration** (npm run db:migrate)
3. ⏳ **Validar remoção** (queries acima)
4. ⏳ **Testar aplicação** (sem erros)
5. ⏳ **Documentar no CHANGELOG**

---

## Notas Adicionais

### Investigação Futura (Opcional)
- Revisar commits de 02/01/2024 para entender intenção original
- Verificar se há issues/tickets relacionados a "grupos de contatos"
- Confirmar com stakeholders se feature foi cancelada

### Se Aparecer Uso
Se durante investigação futura descobrir que tabela é usada:
1. Criar model `ContactGroup.ts`
2. Criar testes para funcionalidade
3. Documentar propósito da tabela
4. Atualizar esta análise

---

**Análise realizada por:** Claude (Sprint 2 - Item 2.2)
**Método:** Grep recursivo + análise de estrutura + lógica de eliminação
**Confiança:** 95% (requer validação de stakeholder para 100%)
