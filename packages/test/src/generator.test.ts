import { Context, initializeContext } from "@embracesql/core/src/context";
import { regenerateFromDatabase } from "@embracesql/core/src/generator";
import * as path from "path";

/**
 * This is a pretty coarse test which exists to provide a place
 * to attach the debugger.
 */
describe("The generator can", () => {
  let context: Context;
  beforeEach(async () => {
    context = await initializeContext({
      generateInto: path.join(__dirname, "tmp", "generated"),
      connection: {
        database: "dvdrental",
      },
    });
  });
  afterEach(async () => {
    await context.sql.end();
  });
  it("create TypeScript definitions for database types", async () => {
    await regenerateFromDatabase(context);
  });
});
