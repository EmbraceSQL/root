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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  public PgCatalog = new (class implements HasDatabase {
    constructor(public database: Database) {}

    public PgStatistic = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgType = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgForeignTable = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAuthid = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgStatisticExtData = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgUserMapping = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgSubscription = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAttribute = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgProc = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgClass = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAttrdef = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgConstraint = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgInherits = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgIndex = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgOperator = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgOpfamily = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgOpclass = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAm = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAmop = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAmproc = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgLanguage = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgLargeobjectMetadata = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAggregate = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgStatisticExt = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgRewrite = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTrigger = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgEventTrigger = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgDescription = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgCast = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgEnum = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgNamespace = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgConversion = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgDepend = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgDatabase = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgDbRoleSetting = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTablespace = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgAuthMembers = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgShdepend = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgShdescription = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTsConfig = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTsConfigMap = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTsDict = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTsParser = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTsTemplate = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgExtension = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgForeignDataWrapper = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgForeignServer = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgPolicy = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgReplicationOrigin = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgDefaultAcl = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgInitPrivs = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgSeclabel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgShseclabel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgCollation = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgParameterAcl = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgPartitionedTable = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgRange = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgTransform = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgSequence = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgPublication = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgPublicationNamespace = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgPublicationRel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgSubscriptionRel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public PgLargeobject = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);
  })(this);

  public Public = new (class implements HasDatabase {
    constructor(public database: Database) {}

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

    public FilmActor = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Address = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public City = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Customer = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Actor = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public FilmCategory = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Inventory = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Category = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Country = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Language = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Rental = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Staff = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Store = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Payment = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Film = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);
  })(this);

  public InformationSchema = new (class implements HasDatabase {
    constructor(public database: Database) {}

    public SqlFeatures = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public SqlImplementationInfo = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public SqlParts = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public SqlSizing = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);
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
