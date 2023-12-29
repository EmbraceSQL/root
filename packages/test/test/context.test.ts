import { Context, initializeContext } from "@embracesql/postgres/src/context";

/**
 * Test setting up the context and interrogating the schema.
 */
describe("The context can", () => {
  let context: Context;
  beforeEach(async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
    );
  });
  afterEach(async () => {
    await context.sql.end();
  });
  it("load up schemas as namespaces", () => {
    const schema = context.database.resolveSchema("public");
    expect(schema).toBeDefined();
  });
  it("look up a type by oid", () => {
    context.namespaces
      .flatMap((n) => n.types)
      .forEach((pgType) => {
        const type = context.resolveType(pgType.oid);
        expect(pgType).toStrictEqual(type);
      });
  });
  it("look up a table type by oid", () => {
    context.namespaces
      .flatMap((n) => n.tables)
      .forEach((pgTable) => {
        const tableType = context.resolveType(pgTable.tableType.oid);
        expect(pgTable.tableType).toBe(tableType);
      });
  });
});
