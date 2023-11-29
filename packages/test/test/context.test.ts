import { Context, initializeContext } from "@embracesql/postgres/src/context";
import { PGTypeComposite } from "@embracesql/postgres/src/generator/pgtype/pgtypecomposite";

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
    const publicNamespace = context.namespaces.find(
      (n) => n.namespace === "public",
    );
    expect(publicNamespace?.procs.length).toBeGreaterThan(0);
  });
  it("load up table types and columns", () => {
    const actorTable = context.namespaces
      .find((n) => n.namespace === "public")
      ?.types.find((t) => t.postgresName === "public.actor") as PGTypeComposite;
    expect(actorTable).toBeTruthy();
    expect(actorTable.attributeByAttnum(1).name).toBe("actor_id");
  });
  it("look up a table type by oid", () => {
    const actorTable = context.namespaces
      .find((n) => n.namespace === "public")
      ?.types.find((t) => t.postgresName === "public.actor") as PGTypeComposite;

    const actorTableByOid = context.resolveType(actorTable.oid);
    expect(actorTable).toBe(actorTableByOid);
  });
  it("look up a table indexes", () => {
    const actorTable = context.namespaces
      .find((n) => n.namespace === "public")
      ?.types.find((t) => t.postgresName === "public.actor") as PGTypeComposite;

    expect(actorTable.indexes.length).toBe(2);
    expect(actorTable.indexes[0].attributes.length).toBe(1);
  });
});
