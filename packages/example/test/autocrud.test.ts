import { Database } from "../src/dvdrental/index";

describe("The database can AutoCRUD", () => {
  // each test runs in an isolated transaction that is rolled back
  // so the database has a consisten state
  let rootDatabase: Database;
  let database: Database;
  let rollback: (message?: string) => void;
  beforeEach(async () => {
    rootDatabase = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
    // and in a transaction now
    ({ database, rollback } = await rootDatabase.beginTransaction());
  });
  afterEach(async () => {
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
  it("a unique index delete", async () => {
    const before = await database.Public.Payment.byPaymentId({
      paymentId: 17503,
    });
    expect(before).toBeTruthy();
    await database.Public.Payment.deleteByPaymentId({ paymentId: 17503 });
    const after = await database.Public.Payment.byPaymentId({
      paymentId: 17503,
    });
    expect(after).toBeUndefined();
  });
  it("a non-unique index delete", async () => {
    const before = await database.Public.Payment.byCustomerId({
      customerId: 341,
    });
    expect(before.length).toBeGreaterThan(0);
    await database.Public.Payment.deleteByCustomerId({ customerId: 341 });
    const after = await database.Public.Payment.byCustomerId({
      customerId: 341,
    });
    expect(after.length).toBe(0);
  });
});
