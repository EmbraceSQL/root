import { Context, initializeContext } from "@embracesql/core/src/context";
import { regenerateFromDatabase } from "@embracesql/core/src/generator";
import * as path from "path";
import * as ts from "typescript";

/**
 * This is a pretty coarse test which exists to provide a place
 * to attach the debugger.
 */
describe("The generator can", () => {
  let context: Context;
  beforeEach(async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
    );
  });
  afterEach(async () => {
    await context.sql.end();
  });
  it("create TypeScript definitions for database types", async () => {
    const source = await regenerateFromDatabase({
      ...context,
      sqlScriptsFrom: path.join(__dirname, "../../../var/data/dvdrental/sql"),
    });
    const compiled = ts.transpile(source);
    expect(compiled).toBeTruthy();
  });
});
