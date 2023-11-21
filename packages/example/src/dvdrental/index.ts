// ⚠️ generated - do not modify ⚠️
/* eslint-disable @typescript-eslint/no-namespace */
import * as schemas from "./schemas";
import * as procs from "./procs";
import { Context, initializeContext } from "@embracesql/core/src/context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { undefinedIsNull, Nullable } from "@embracesql/core/src/types";
import postgres from "postgres";

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
    constructor(public superThis: Database) {}
  })(this);

  public Public = new (class {
    constructor(public superThis: Database) {}

    async FilmInStock(parameters: schemas.Public.FilmInStockArguments) {
      return procs.Public.FilmInStock(this.superThis.context, parameters);
    }

    async FilmNotInStock(parameters: schemas.Public.FilmNotInStockArguments) {
      return procs.Public.FilmNotInStock(this.superThis.context, parameters);
    }

    async GetCustomerBalance(
      parameters: schemas.Public.GetCustomerBalanceArguments,
    ) {
      return procs.Public.GetCustomerBalance(
        this.superThis.context,
        parameters,
      );
    }

    async InventoryHeldByCustomer(
      parameters: schemas.Public.InventoryHeldByCustomerArguments,
    ) {
      return procs.Public.InventoryHeldByCustomer(
        this.superThis.context,
        parameters,
      );
    }

    async InventoryInStock(
      parameters: schemas.Public.InventoryInStockArguments,
    ) {
      return procs.Public.InventoryInStock(this.superThis.context, parameters);
    }

    async LastDay(parameters: schemas.Public.LastDayArguments) {
      return procs.Public.LastDay(this.superThis.context, parameters);
    }

    async RewardsReport(parameters: schemas.Public.RewardsReportArguments) {
      return procs.Public.RewardsReport(this.superThis.context, parameters);
    }
  })(this);

  public InformationSchema = new (class {
    constructor(public superThis: Database) {}
  })(this);

  public Scripts = new (class {
    constructor(private context: Context) {}

    public Sql = new (class {
      constructor(private context: Context) {}

      tally = async () => {
        const response = await this.context.sql.begin(
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

      public Sample = new (class {
        constructor(private context: Context) {}

        pick = async (_1: schemas.PgCatalog.Text) => {
          const response = await this.context.sql.begin(
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

        public Film = new (class {
          constructor(private context: Context) {}

          tally = async () => {
            const response = await this.context.sql.begin(
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
        })(this.context);
      })(this.context);
    })(this.context);
  })(this.context);
}
