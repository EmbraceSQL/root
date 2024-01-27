import { Database } from "../src/dvdrental";

/**
 * Works-at-all.
 */
describe("The database can", () => {
  let db: Database;
  beforeAll(async () => {
    // no spanning transaction to roll back in this test
    // this is read only and testing the 'live' path
    // that would be used in an actual application
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
    const value = await db.Public.Procedures.LastDay.call({
      argument_0: new Date(),
    });
    expect(value).toBeTruthy();
  });
});
