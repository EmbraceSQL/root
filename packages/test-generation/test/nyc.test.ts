import { Database } from "../src/nyc";

describe("EmbraceSQL Can", () => {
  // each test runs in an isolated transaction that is rolled back
  // so the database has a consisten state
  let rootDatabase: Database;
  let database: Database;
  let rollback: (message?: string) => void;
  beforeEach(async () => {
    rootDatabase = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/nyc",
    );
    // and in a transaction now
    ({ database, rollback } = await rootDatabase.beginTransaction());
  });
  afterEach(async () => {
    rollback();
    await rootDatabase.disconnect();
  });
  it.skip("read GIS point data", async () => {
    const ret = await database.Public.Tables.NycHomicides.ByPrimaryKey.read({
      gid: 1,
    });
    expect(ret.geom).toEqual("Hi");
  });
});
