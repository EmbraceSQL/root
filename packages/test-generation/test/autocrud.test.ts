import { Database, PgCatalog, Public } from "../src/dvdrental";

describe("The database can AutoCRUD", () => {
  // each test runs in an isolated transaction that is rolled back
  // so the database has a consisten state
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
    const value = await database.Public.Tables.Actor.ActorPkey.read({
      actorId: 1,
    });
    expect(value).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });
  describe("a non unique index read", () => {
    it("at all", async () => {
      const values = await database.Public.Tables.Actor.IdxActorLastName.read({
        lastName: "Akroyd",
      });
      expect(values.length).toBeGreaterThan(1);
    });
    it("with pagination", async () => {
      const values = await database.Public.Tables.Actor.IdxActorLastName.read(
        {
          lastName: "Akroyd",
        },
        {
          limitNumberOfRows: 1,
          offsetNumberOfRows: 0,
        },
      );
      expect(values.length).toBe(1);
    });
    it("with pagination offset", async () => {
      const values = await database.Public.Tables.Actor.IdxActorLastName.read(
        {
          lastName: "Akroyd",
        },
        {
          limitNumberOfRows: 2,
          offsetNumberOfRows: 0,
        },
      );
      // staggered overlapping pages to test equality
      const nextValues =
        await database.Public.Tables.Actor.IdxActorLastName.read(
          {
            lastName: "Akroyd",
          },
          {
            limitNumberOfRows: 2,
            offsetNumberOfRows: 1,
          },
        );
      expect(values[0]).not.toMatchObject(nextValues[0]);
      expect(values[1]).not.toMatchObject(nextValues[1]);
      // overlap in the middle
      expect(values[1]).toMatchObject(nextValues[0]);
    });
    it("with sorting", async () => {
      const values = await database.Public.Tables.Actor.IdxActorLastName.read(
        {
          lastName: "Akroyd",
        },
        {
          sort: [Public.Tables.Actor.SortOptions.firstNameAscending],
        },
      );
      expect(values.map((v) => v.firstName).toSorted()).toMatchObject(
        values.map((v) => v.firstName),
      );
    });
  });
  describe("read all rows", () => {
    it("at all", async () => {
      const values = await database.Public.Tables.Actor.all();
      expect(values.length).toBeGreaterThan(1);
    });
    it("with pagination", async () => {
      const values = await database.Public.Tables.Actor.all({
        limitNumberOfRows: 1,
        offsetNumberOfRows: 0,
      });
      expect(values.length).toBe(1);
    });
    it("with pagination offset", async () => {
      const values = await database.Public.Tables.Actor.all({
        limitNumberOfRows: 2,
        offsetNumberOfRows: 0,
      });
      // staggered overlapping pages to test equality
      const nextValues = await database.Public.Tables.Actor.all({
        limitNumberOfRows: 2,
        offsetNumberOfRows: 1,
      });
      expect(values[0]).not.toMatchObject(nextValues[0]);
      expect(values[1]).not.toMatchObject(nextValues[1]);
      // overlap in the middle
      expect(values[1]).toMatchObject(nextValues[0]);
    });
    it("with sorting", async () => {
      const values = await database.Public.Tables.Actor.all({
        sort: [
          Public.Tables.Actor.SortOptions.lastNameAscending,
          Public.Tables.Actor.SortOptions.firstNameAscending,
        ],
      });
      expect(
        values.map((v) => `${v.lastName} ${v.firstName}`).toSorted(),
      ).toMatchObject(values.map((v) => `${v.lastName} ${v.firstName}`));
    });
  });
  it("a unique index delete", async () => {
    const before = await database.Public.Tables.Payment.PaymentPkey.read({
      paymentId: 17503,
    });
    expect(before).toBeTruthy();
    const deleted = await database.Public.Tables.Payment.PaymentPkey.delete({
      paymentId: 17503,
    });
    expect(deleted).toMatchObject(before);
    const after = await database.Public.Tables.Payment.PaymentPkey.read({
      paymentId: 17503,
    });
    expect(after).toBeUndefined();
  });
  it("a non-unique index delete", async () => {
    const before = await database.Public.Tables.Payment.IdxFkCustomerId.read({
      customerId: 341,
    });
    expect(before.length).toBeGreaterThan(0);
    const deleted = await database.Public.Tables.Payment.IdxFkCustomerId.delete(
      {
        customerId: 341,
      },
    );
    expect(deleted).toMatchObject(before);
    const after = await database.Public.Tables.Payment.IdxFkCustomerId.read({
      customerId: 341,
    });
    expect(after.length).toBe(0);
  });
  it("a unique index update", async () => {
    const before = await database.Public.Tables.Customer.CustomerPkey.read({
      customerId: 1,
    });
    expect(before).toBeTruthy();
    const updated = await database.Public.Tables.Customer.CustomerPkey.update(
      {
        customerId: 1,
      },
      { activebool: false, email: null },
    );
    expect(updated).toMatchObject({
      activebool: false,
      email: null,
      firstName: "Mary",
      lastName: "Smith",
    });
    expect(before).not.toMatchObject(updated);
  });
  it("a non-unique index update", async () => {
    const before = await database.Public.Tables.Customer.IdxFkStoreId.read({
      storeId: 1,
    });
    expect(before.filter((c) => c.activebool).length).toBeGreaterThan(300);
    const updated = await database.Public.Tables.Customer.IdxFkStoreId.update(
      {
        storeId: 1,
      },
      { activebool: false, email: null },
    );
    expect(updated.filter((c) => c.activebool)).toHaveLength(0);
    expect(before).not.toMatchObject(updated);
  });
  it("a create with no passed key", async () => {
    const created = await database.Public.Tables.Actor.create({
      firstName: "Bob",
      lastName: "Hope",
    });
    expect(created.actorId).toBeGreaterThan(0);
    expect(created).toMatchObject({
      firstName: "Bob",
      lastName: "Hope",
    });
  });
  it("a create with a passed key will upsert", async () => {
    const created = await database.Public.Tables.Actor.create({
      actorId: 1,
      firstName: "Bob",
      lastName: "Hope",
    });
    expect(created.actorId).toBeGreaterThan(0);
    expect(created).toMatchObject({
      firstName: "Bob",
      lastName: "Hope",
    });
  });
  it("a create on a create will upsert", async () => {
    const theBob = await database.Public.Tables.Actor.create({
      firstName: "Bob",
      lastName: "Hope",
    });
    expect(theBob.actorId).toBeGreaterThan(0);
    expect(theBob).toMatchObject({
      firstName: "Bob",
      lastName: "Hope",
    });
    theBob.firstName = "Robert";
    const theRobert = await database.Public.Tables.Actor.create(theBob);
    expect(theRobert).toMatchObject({
      actorId: theBob.actorId,
      firstName: "Robert",
      lastName: "Hope",
    });
  });
  it("null values", async () => {
    const anAddress = await database.Public.Tables.Address.AddressPkey.read({
      addressId: 1,
    });
    expect(anAddress.address2).toBeNull();
    const nowNotNull = await database.Public.Tables.Address.AddressPkey.update(
      { addressId: 1 },
      { address2: "hi" },
    );
    expect(nowNotNull.address2).toBe("hi");
    const nullAgain = await database.Public.Tables.Address.AddressPkey.update(
      { addressId: 1 },
      { address2: null },
    );
    expect(nullAgain.address2).toBeNull();
  });
  describe("fulltext search", () => {
    it("with default tsvector parsing", async () => {
      const films = await database.Public.Tables.Film.FilmFulltextIdx.read({
        fulltext: "lumberjack & car",
      });
      expect(films.length).toBeGreaterThan(0);
    });
    it("with simple tsvector parsing", async () => {
      const films = await database.Public.Tables.Film.FilmFulltextIdx.read(
        {
          fulltext: "lumberjack car",
        },
        {
          fulltext: {
            queryParser: PgCatalog.Types.Tsvector.FulltextParser.Plain,
          },
        },
      );
      expect(films.length).toBeGreaterThan(0);
    });
    it("with phrase tsvector parsing", async () => {
      const films = await database.Public.Tables.Film.FilmFulltextIdx.read(
        {
          fulltext: "a lumberjack and a",
        },
        {
          fulltext: {
            queryParser: PgCatalog.Types.Tsvector.FulltextParser.Plain,
          },
        },
      );
      expect(films.length).toBeGreaterThan(0);
    });
    it("with web tsvector parsing", async () => {
      const films = await database.Public.Tables.Film.FilmFulltextIdx.read(
        {
          fulltext: "lumberjack -car",
        },
        {
          fulltext: {
            queryParser: PgCatalog.Types.Tsvector.FulltextParser.Plain,
          },
        },
      );
      expect(films.length).toBeGreaterThan(0);
    });
  });
});
