import { Database } from "../src/dvdrental";

/**
 * Works-at-all.
 */
describe("The database can", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  it("connect", () => {
    expect(db).toBeTruthy();
  });
  it("call a proc", async () => {
    const value = await db.Public.Procedures.lastDay({
      argument_0: new Date(),
    });
    expect(value).toBeTruthy();
  });
});
