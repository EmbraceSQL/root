// ⚠️ generated - do not modify ⚠️
/* eslint-disable @typescript-eslint/no-namespace */
import * as schemas from "./schemas";
import { Context, initializeContext } from "@embracesql/core/src/context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { PostgresTypecasts } from "./schemas";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { undefinedIsNull, Nullable } from "@embracesql/core/src/types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import postgres from "postgres";

interface HasDatabase {
  database: Database;
}

export class Database {
  /**
   * Connect to your database server via URL, and return
   * a fully typed database you can use to access it.
   */
  static async connect(postgresUrl: string) {
    return new Database(await initializeContext(postgresUrl));
  }

  private constructor(public context: Context) {}

  /**
   * Clean up the connection.
   */
  public async disconnect() {
    await this.context.sql.end();
  }

  public PgCatalog = new (class {
    constructor(private database: Database) {}
  })(this);

  public Public = new (class {
    constructor(private database: Database) {}

    async FilmInStock(parameters: schemas.Public.FilmInStockArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      const results = response;
      const responseBody = results.map((x) =>
        this.parseFilmInStockResult(this.database.context, x.film_in_stock),
      ) as unknown as schemas.Public.FilmInStockResultset;
      return responseBody;
    }

    parseFilmInStockResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ): schemas.Public.FilmInStockSingleResultsetRecord => {
      return context.procTypes.public_film_in_stock.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as schemas.Public.FilmInStockSingleResultsetRecord;
    };

    async FilmNotInStock(parameters: schemas.Public.FilmNotInStockArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      const results = response;
      const responseBody = results.map((x) =>
        this.parseFilmNotInStockResult(
          this.database.context,
          x.film_not_in_stock,
        ),
      ) as unknown as schemas.Public.FilmNotInStockResultset;
      return responseBody;
    }

    parseFilmNotInStockResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ): schemas.Public.FilmNotInStockSingleResultsetRecord => {
      return context.procTypes.public_film_not_in_stock.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as schemas.Public.FilmNotInStockSingleResultsetRecord;
    };

    async GetCustomerBalance(
      parameters: schemas.Public.GetCustomerBalanceArguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      const results = response;
      const responseBody = results?.[0]
        .get_customer_balance as unknown as schemas.Public.GetCustomerBalanceSingleResultsetRecord;
      return responseBody;
    }
    async InventoryHeldByCustomer(
      parameters: schemas.Public.InventoryHeldByCustomerArguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      const results = response;
      const responseBody = results?.[0]
        .inventory_held_by_customer as unknown as schemas.Public.InventoryHeldByCustomerSingleResultsetRecord;
      return responseBody;
    }
    async InventoryInStock(
      parameters: schemas.Public.InventoryInStockArguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      const results = response;
      const responseBody = results?.[0]
        .inventory_in_stock as unknown as schemas.Public.InventoryInStockSingleResultsetRecord;
      return responseBody;
    }
    async LastDay(parameters: schemas.Public.LastDayArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      const results = response;
      const responseBody = results?.[0]
        .last_day as unknown as schemas.Public.LastDaySingleResultsetRecord;
      return responseBody;
    }
    async RewardsReport(parameters: schemas.Public.RewardsReportArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      const results = response;
      const responseBody = results.map(
        (x) => x.rewards_report,
      ) as unknown as schemas.Public.RewardsReportResultset;
      return responseBody;
    }
  })(this);

  public InformationSchema = new (class {
    constructor(private database: Database) {}
  })(this);

  public Scripts = new (class implements HasDatabase {
    constructor(public database: Database) {}

    public Sql = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      tally = async () => {
        const response = await this.database.context.sql.begin(
          async (sql: postgres.Sql) => {
            return await sql.unsafe(`
                SELECT
    COUNT(*)
FROM
    public.actor

                
                `);
          },
        );
        return response.map((record) => ({
          count: undefinedIsNull(record.count),
        }));
      };

      public Sample = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        pick = async (_1: schemas.PgCatalog.Text) => {
          const response = await this.database.context.sql.begin(
            async (sql: postgres.Sql) => {
              return await sql.unsafe(
                `
                SELECT
    *
FROM
    public.film
WHERE
    title = $1
                
                `,
                [_1],
              );
            },
          );
          return response.map((record) => ({
            filmId: undefinedIsNull(record.film_id),
            title: undefinedIsNull(record.title),
            description: undefinedIsNull(record.description),
            releaseYear: undefinedIsNull(record.release_year),
            languageId: undefinedIsNull(record.language_id),
            rentalDuration: undefinedIsNull(record.rental_duration),
            rentalRate: undefinedIsNull(record.rental_rate),
            length: undefinedIsNull(record.length),
            replacementCost: undefinedIsNull(record.replacement_cost),
            rating: undefinedIsNull(record.rating),
            lastUpdate: undefinedIsNull(record.last_update),
            specialFeatures: undefinedIsNull(record.special_features),
            fulltext: undefinedIsNull(record.fulltext),
          }));
        };

        public Film = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          tally = async () => {
            const response = await this.database.context.sql.begin(
              async (sql: postgres.Sql) => {
                return await sql.unsafe(`
                SELECT
    COUNT(*)
FROM
    public.film

                
                `);
              },
            );
            return response.map((record) => ({
              count: undefinedIsNull(record.count),
            }));
          };
        })(this);
      })(this);
    })(this);
  })(this);
}
