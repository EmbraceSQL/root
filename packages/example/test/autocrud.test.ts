import { Database } from "../src/dvdrental/index";

describe("The database can AutoCRUD", () => {
  let rootDatabase: Database;
  let database: Database;
  let rollback: (message?: string) => void;
  beforeAll(async () => {
    rootDatabase = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
    // and in a transaction now
    ({ database, rollback } = await rootDatabase.beginTransaction());
  });
  afterAll(async () => {
    rollback();
    await rootDatabase.disconnect();
  });
  it("a unique index read", async () => {
    const value = await database.Public.Actor.byActorId({ actorId: 1 });
    expect(value).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });
  it("a non unique index read", async () => {
    const values = await database.Public.Actor.byLastName({
      lastName: "Akroyd",
    });
    expect(values.length).toBeGreaterThan(1);
  });
});
