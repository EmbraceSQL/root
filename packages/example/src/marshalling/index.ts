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

  public Api = new (class implements HasDatabase {
    constructor(public database: Database) {}

    async Echo(parameters: schemas.Api.EchoArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo as unknown as schemas.Api.EchoSingleResultsetRecord;
      return responseBody;
    }
    async EchoSet(parameters: schemas.Api.EchoSetArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results.map(
        (x) => x.echo_set,
      ) as unknown as schemas.Api.EchoSetResultset;
      return responseBody;
    }
    async EchoTable(parameters: schemas.Api.EchoTableArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_table(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results.map((x) =>
        this.parseEchoTableResult(this.database.context, x.echo_table),
      ) as unknown as schemas.Api.EchoTableResultset;
      return responseBody;
    }

    parseEchoTableResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ): schemas.Api.EchoTableSingleResultsetRecord => {
      return context.procTypes.api_echo_table.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as schemas.Api.EchoTableSingleResultsetRecord;
    };

    async EchoType(parameters: schemas.Api.EchoTypeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo_type as unknown as schemas.Api.EchoTypeSingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeArray(parameters: schemas.Api.EchoTypeArrayArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type_array(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo_type_array as unknown as schemas.Api.EchoTypeArraySingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeNested(parameters: schemas.Api.EchoTypeNestedArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type_nested(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo_type_nested as unknown as schemas.Api.EchoTypeNestedSingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeSet(parameters: schemas.Api.EchoTypeSetArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results.map(
        (x) => x.echo_type_set,
      ) as unknown as schemas.Api.EchoTypeSetResultset;
      return responseBody;
    }
  })(this);
}
