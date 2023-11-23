import { Database } from "../src/dvdrental/index";

/**
 * Works-at-all.
 */
describe("The database can AutoCRUD", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  it("a unique index read", async () => {
    const value = await db.Public.Actor.byActorId({ actorId: 1 });
    expect(value).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });
  it("a non unique index read", async () => {
    const values = await db.Public.Actor.byLastName({ lastName: "Akroyd" });
    expect(values.length).toBeGreaterThan(1);
  });
});
