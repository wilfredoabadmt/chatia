"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const TimezoneService_1 = __importDefault(require("../TimezoneServices/TimezoneService"));
const createQuery = (timezone) => `
  select
    --dt_referencia,
    sum(qtd_total_atendimentos) qtd_total_atendimentos,
    sum(qtd_demanda_ativa) qtd_demanda_ativa,
    sum(qtd_demanda_receptiva) qtd_demanda_receptiva,
    coalesce(concat(ROUND(AVG(tma)::decimal,0), 0), 'minutes')::interval TMA,
    coalesce(concat(ROUND(AVG(tme)::decimal,0), 0), 'minutes')::interval TME,
    (select count(distinct(c."id"))
      from "Contacts" c
      INNER JOIN "Tickets" tc ON tc."contactId" = c."id"
      INNER JOIN "LogTickets" ltc ON ltc."ticketId" = tc."id"
      where
        c."tenantId" = :tenantId
        and ltc."userId" = :userId
        and date_trunc('day', c."createdAt" AT TIME ZONE '${timezone}') between
          date_trunc('day', :startDate::timestamp AT TIME ZONE '${timezone}') and
          date_trunc('day', :endDate::timestamp AT TIME ZONE '${timezone}')
    ) new_contacts
    --ROUND(AVG(tma)::decimal,0) TMA,
    --ROUND(AVG(tme)::decimal,0) TME
  from (
    select
      date_trunc('month', t."createdAt" AT TIME ZONE '${timezone}') dt_referencia,
      1 qtd_total_atendimentos,
      case when t."isActiveDemand" is true then 1 else 0 end qtd_demanda_ativa,
      case when t."isActiveDemand" is not true then 1 else 0 end qtd_demanda_receptiva,
      t."createdAt",
      to_timestamp(t."closedAt"/1000) closedAt,
      to_timestamp(t."startedAttendanceAt"/1000) startedAttendanceAt,
      extract(epoch from AGE(to_timestamp(t."closedAt"/1000), t."createdAt")::interval)/60 tma,
      extract(epoch from AGE(to_timestamp(t."startedAttendanceAt"/1000), t."createdAt"::timestamp)::interval)/60 tme,
      t."tenantId"
    from "Tickets" t
    INNER JOIN "LogTickets" lt ON lt."ticketId" = t."id"
    where
      t."tenantId" = :tenantId
      and date_trunc('day', t."createdAt" AT TIME ZONE '${timezone}') between
        date_trunc('day', :startDate::timestamp AT TIME ZONE '${timezone}') and
        date_trunc('day', :endDate::timestamp AT TIME ZONE '${timezone}')
      and lt."userId" = :userId
      and (lt."type" LIKE 'open' OR lt."type" LIKE 'receivedTransfer')
  ) a
    --group by dt_referencia
      order by 1 Desc
`;
const createQueryAdmin = (timezone) => `
  select
    --dt_referencia,
    sum(qtd_total_atendimentos) qtd_total_atendimentos,
    sum(qtd_demanda_ativa) qtd_demanda_ativa,
    sum(qtd_demanda_receptiva) qtd_demanda_receptiva,
    coalesce(concat(ROUND(AVG(tma)::decimal,0), 0), 'minutes')::interval TMA,
    coalesce(concat(ROUND(AVG(tme)::decimal,0), 0), 'minutes')::interval TME,
    (select count(1)
      from "Contacts" c
      where
        c."tenantId" = :tenantId
        and date_trunc('day', c."createdAt" AT TIME ZONE '${timezone}') between
          date_trunc('day', :startDate::timestamp AT TIME ZONE '${timezone}') and
          date_trunc('day', :endDate::timestamp AT TIME ZONE '${timezone}')
    ) new_contacts
    --ROUND(AVG(tma)::decimal,0) TMA,
    --ROUND(AVG(tme)::decimal,0) TME
  from (
    select
      date_trunc('month', t."createdAt" AT TIME ZONE '${timezone}') dt_referencia,
      1 qtd_total_atendimentos,
      case when t."isActiveDemand" is true then 1 else 0 end qtd_demanda_ativa,
      case when t."isActiveDemand" is not true then 1 else 0 end qtd_demanda_receptiva,
      t."createdAt",
      to_timestamp(t."closedAt"/1000) closedAt,
      to_timestamp(t."startedAttendanceAt"/1000) startedAttendanceAt,
      extract(epoch from AGE(to_timestamp(t."closedAt"/1000), t."createdAt")::interval)/60 tma,
      extract(epoch from AGE(to_timestamp(t."startedAttendanceAt"/1000), t."createdAt"::timestamp)::interval)/60 tme,
      t."tenantId"
    from "Tickets" t
    INNER JOIN "LogTickets" lt ON lt."ticketId" = t."id"
    where
      t."tenantId" = :tenantId
      and date_trunc('day', t."createdAt" AT TIME ZONE '${timezone}') between
        date_trunc('day', :startDate::timestamp AT TIME ZONE '${timezone}') and
        date_trunc('day', :endDate::timestamp AT TIME ZONE '${timezone}')
      and (lt."type" LIKE 'open' OR lt."type" LIKE 'receivedTransfer')
  ) a
    --group by dt_referencia
      order by 1 Desc
`;
const DashTicketsAndTimes = async ({ startDate, endDate, tenantId, userId, userProfile, companyId }) => {
    try {
        // Get the effective timezone for the company
        const timezone = await TimezoneService_1.default.getEffectiveTimezone(companyId);
        // Select the appropriate query based on user profile
        const queryToUse = userProfile === "admin" ? createQueryAdmin(timezone) : createQuery(timezone);
        const data = await database_1.default.query(queryToUse, {
            replacements: {
                tenantId,
                startDate,
                endDate,
                userId
            },
            type: sequelize_1.QueryTypes.SELECT
        });
        return data;
    }
    catch (error) {
        console.error("Error in DashTicketsAndTimes with timezone:", error);
        // Fallback to default timezone if there's an error
        const fallbackTimezone = "America/Sao_Paulo";
        const queryToUse = userProfile === "admin" ? createQueryAdmin(fallbackTimezone) : createQuery(fallbackTimezone);
        const data = await database_1.default.query(queryToUse, {
            replacements: {
                tenantId,
                startDate,
                endDate,
                userId
            },
            type: sequelize_1.QueryTypes.SELECT
        });
        return data;
    }
};
exports.default = DashTicketsAndTimes;
