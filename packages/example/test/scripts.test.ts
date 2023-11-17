import { Database } from "../src/dvdrental";

/**
 * Works-at-all.
 */
describe("The database can run scripts", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  it("that just query", async () => {
    const value = await db.Scripts.tally();
    value.forEach((v) => expect(v.count).toBeGreaterThan(0));
  });
});
