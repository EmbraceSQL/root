import { Context, initializeContext } from "../context";
import { regenerateFromDatabase } from ".";

/**
 * This is a pretty coarse test which exists to provide a place
 * to attach the debugger.
 */
describe("The generator can", () => {
  let context: Context;
  beforeEach(async () => {
    context = await initializeContext({
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
