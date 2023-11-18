// ⚠️ generated - do not modify ⚠️
import * as schemas from "./schemas";
import * as procs from "./procs";
import { Context, initializeContext } from "@embracesql/core/src/context";

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

  public InformationSchema = new (class {
    constructor(public superThis: Database) {}
  })(this);

  public Api = new (class {
    constructor(public superThis: Database) {}

    async Echo(parameters: schemas.Api.EchoArguments) {
      return procs.Api.Echo(this.superThis.context, parameters);
    }

    async EchoSet(parameters: schemas.Api.EchoSetArguments) {
      return procs.Api.EchoSet(this.superThis.context, parameters);
    }

    async EchoTable(parameters: schemas.Api.EchoTableArguments) {
      return procs.Api.EchoTable(this.superThis.context, parameters);
    }

    async EchoType(parameters: schemas.Api.EchoTypeArguments) {
      return procs.Api.EchoType(this.superThis.context, parameters);
    }

    async EchoTypeArray(parameters: schemas.Api.EchoTypeArrayArguments) {
      return procs.Api.EchoTypeArray(this.superThis.context, parameters);
    }

    async EchoTypeNested(parameters: schemas.Api.EchoTypeNestedArguments) {
      return procs.Api.EchoTypeNested(this.superThis.context, parameters);
    }

    async EchoTypeSet(parameters: schemas.Api.EchoTypeSetArguments) {
      return procs.Api.EchoTypeSet(this.superThis.context, parameters);
    }
  })(this);

  public Scripts = new (class {
    constructor(private superThis: Database) {}
  })(this);
}
