import { Database, PgCatalog } from "../src/usda";

describe("EmbraceSQL Can", () => {
  // each test runs in an isolated transaction that is rolled back
  // so the database has a consisten state
  let rootDatabase: Database;
  let database: Database;
  let rollback: (message?: string) => void;
  beforeEach(async () => {
    rootDatabase = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/usda",
    );
    // and in a transaction now
    ({ database, rollback } = await rootDatabase.beginTransaction());
  });
  afterEach(async () => {
    rollback();
    await rootDatabase.disconnect();
  });
  describe("use function index fulltext search", () => {
    it("with default tsvector parsing", async () => {
      const films =
        await database.Public.Tables.DataSrc.DataSrcTitleFulltext.read({
          title: "vegetables",
        });
      expect(films.length).toBeGreaterThan(0);
    });
    it("with web tsvector parsing", async () => {
      const films =
        await database.Public.Tables.DataSrc.DataSrcTitleFulltext.read(
          {
            title: "carbohydrate constituents",
          },
          {
            title: {
              queryParser: PgCatalog.Types.Tsvector.FulltextParser.Web,
            },
          },
        );
      expect(films.length).toBeGreaterThan(0);
    });
  });
});
