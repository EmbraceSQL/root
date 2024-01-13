import { Database, Public } from "../src/dvdrental";

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
    const value = await db.Scripts.Tally.call();
    value.forEach((v) => expect(v.count).toBeGreaterThan(0));
  });
  it("that have nested namespaces", async () => {
    const value = await db.Scripts.Sample.Film.Tally.call();
    value.forEach((v) => expect(v.count).toBeGreaterThan(0));
  });
  it("that have positional parameters", async () => {
    const value = await db.Scripts.Sample.Pick.call({
      argument_1: "Basic Easy",
    });
    expect(value.length).toEqual(1);
  });
  it("that has an enum parameter", async () => {
    const ratedG = await db.Scripts.Sample.Film.Rated.call({
      argument_1: Public.Types.MpaaRating.G,
    });
    expect(ratedG.length).toBeGreaterThan(1);
    expect(ratedG[0].rating).toBe(Public.Types.MpaaRating.G);
  });
});
