// ⚠️ generated - do not modify ⚠️
import * as schemas from "./schemas";
import * as procs from "./procs";
import { Context, initializeContext } from "@embracesql/core/src/context";

import * as sqlScripts from "./sqlScripts";
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
    constructor(private superThis: Database) {}

    public Sample = new (class {
      constructor(private superThis: Database) {}

      public Film = new (class {
        constructor(private superThis: Database) {}

        async tally() {
          return sqlScripts.Sample.Film.tally(this.superThis.context);
        }
      })(this.superThis);

      async pick(_1: schemas.PgCatalog.Text) {
        return sqlScripts.Sample.pick(this.superThis.context, _1);
      }
    })(this.superThis);

    async tally() {
      return sqlScripts.tally(this.superThis.context);
    }
  })(this);
}
