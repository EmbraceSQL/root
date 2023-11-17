import { Database } from "../src/dvdrental";

/**
 * Works-at-all.
 */
describe("The database can", () => {
  it("connect", async () => {
    const db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
    expect(db).toBeTruthy();
  });
});
