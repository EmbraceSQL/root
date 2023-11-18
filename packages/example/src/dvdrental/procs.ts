// ⚠️ generated - do not modify ⚠️
/* eslint-disable @typescript-eslint/no-namespace */
import * as schemas from "./schemas";
import type { PostgresTypecasts } from "./schemas";
import { Context } from "@embracesql/core/src/context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { undefinedIsNull } from "@embracesql/core/src/types";
import postgres from "postgres";

export namespace PgCatalog {}
export namespace Public {
  type FilmInStockResult = {
    film_in_stock: schemas.Public.FilmInStockSingleResultsetRecord;
  };
  type FilmInStockResultset = FilmInStockResult[];

  const parseFilmInStockResult = (
    context: Context,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any,
  ): schemas.Public.FilmInStockSingleResultsetRecord => {
    return context.procTypes.public_film_in_stock.parseFromPostgresIfRecord(
      context,
      result,
    ) as unknown as schemas.Public.FilmInStockSingleResultsetRecord;
  };

  export const FilmInStock = async (
    context: Context,
    parameters: schemas.Public.FilmInStockArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  public.film_in_stock(pFilmId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pFilmId),
                  )},pStoreId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pStoreId),
                  )});
                  `;
    });
    const results = response as unknown as FilmInStockResultset;
    const responseBody = results.map((x) =>
      parseFilmInStockResult(context, x.film_in_stock),
    ) as unknown as schemas.Public.FilmInStockResultset;
    return responseBody;
  };

  type FilmNotInStockResult = {
    film_not_in_stock: schemas.Public.FilmNotInStockSingleResultsetRecord;
  };
  type FilmNotInStockResultset = FilmNotInStockResult[];

  const parseFilmNotInStockResult = (
    context: Context,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any,
  ): schemas.Public.FilmNotInStockSingleResultsetRecord => {
    return context.procTypes.public_film_not_in_stock.parseFromPostgresIfRecord(
      context,
      result,
    ) as unknown as schemas.Public.FilmNotInStockSingleResultsetRecord;
  };

  export const FilmNotInStock = async (
    context: Context,
    parameters: schemas.Public.FilmNotInStockArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  public.film_not_in_stock(pFilmId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pFilmId),
                  )},pStoreId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pStoreId),
                  )});
                  `;
    });
    const results = response as unknown as FilmNotInStockResultset;
    const responseBody = results.map((x) =>
      parseFilmNotInStockResult(context, x.film_not_in_stock),
    ) as unknown as schemas.Public.FilmNotInStockResultset;
    return responseBody;
  };

  type GetCustomerBalanceResult = {
    get_customer_balance: schemas.Public.GetCustomerBalanceSingleResultsetRecord;
  };
  type GetCustomerBalanceResultset = GetCustomerBalanceResult[];

  export const GetCustomerBalance = async (
    context: Context,
    parameters: schemas.Public.GetCustomerBalanceArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  public.get_customer_balance(pCustomerId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pCustomerId),
                  )},pEffectiveDate => ${typed.pg_catalog_timestamp(
                    undefinedIsNull(parameters.pEffectiveDate),
                  )});
                  `;
    });
    const results = response as unknown as GetCustomerBalanceResultset;
    const responseBody = results?.[0]
      .get_customer_balance as unknown as schemas.Public.GetCustomerBalanceSingleResultsetRecord;
    return responseBody;
  };

  type InventoryHeldByCustomerResult = {
    inventory_held_by_customer: schemas.Public.InventoryHeldByCustomerSingleResultsetRecord;
  };
  type InventoryHeldByCustomerResultset = InventoryHeldByCustomerResult[];

  export const InventoryHeldByCustomer = async (
    context: Context,
    parameters: schemas.Public.InventoryHeldByCustomerArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  public.inventory_held_by_customer(pInventoryId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pInventoryId),
                  )});
                  `;
    });
    const results = response as unknown as InventoryHeldByCustomerResultset;
    const responseBody = results?.[0]
      .inventory_held_by_customer as unknown as schemas.Public.InventoryHeldByCustomerSingleResultsetRecord;
    return responseBody;
  };

  type InventoryInStockResult = {
    inventory_in_stock: schemas.Public.InventoryInStockSingleResultsetRecord;
  };
  type InventoryInStockResultset = InventoryInStockResult[];

  export const InventoryInStock = async (
    context: Context,
    parameters: schemas.Public.InventoryInStockArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  public.inventory_in_stock(pInventoryId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pInventoryId),
                  )});
                  `;
    });
    const results = response as unknown as InventoryInStockResultset;
    const responseBody = results?.[0]
      .inventory_in_stock as unknown as schemas.Public.InventoryInStockSingleResultsetRecord;
    return responseBody;
  };

  type LastDayResult = {
    last_day: schemas.Public.LastDaySingleResultsetRecord;
  };
  type LastDayResultset = LastDayResult[];

  export const LastDay = async (
    context: Context,
    parameters: schemas.Public.LastDayArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  public.last_day( ${typed.pg_catalog_timestamp(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
    });
    const results = response as unknown as LastDayResultset;
    const responseBody = results?.[0]
      .last_day as unknown as schemas.Public.LastDaySingleResultsetRecord;
    return responseBody;
  };

  type RewardsReportResult = {
    rewards_report: schemas.Public.RewardsReportSingleResultsetRecord;
  };
  type RewardsReportResultset = RewardsReportResult[];

  export const RewardsReport = async (
    context: Context,
    parameters: schemas.Public.RewardsReportArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  public.rewards_report(minMonthlyPurchases => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.minMonthlyPurchases),
                  )},minDollarAmountPurchased => ${typed.pg_catalog_numeric(
                    undefinedIsNull(parameters.minDollarAmountPurchased),
                  )});
                  `;
    });
    const results = response as unknown as RewardsReportResultset;
    const responseBody = results.map(
      (x) => x.rewards_report,
    ) as unknown as schemas.Public.RewardsReportResultset;
    return responseBody;
  };
}
export namespace InformationSchema {}
