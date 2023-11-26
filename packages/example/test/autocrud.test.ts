import { Database } from "../src/dvdrental";

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
  it("in a nested transaction", async () => {
    const updatedCustomer = await database.withTransaction(async (db) => {
      return await db.Public.Customer.updateByCustomerId(
        {
          customerId: 1,
        },
        { activebool: false, email: null },
      );
    });

    expect(updatedCustomer).toMatchObject({
      activebool: false,
      email: null,
      firstName: "Mary",
      lastName: "Smith",
    });
  });
  it("in a nested transaction that rolls back", async () => {
    try {
      await database.withTransaction(async (db) => {
        await db.Public.Customer.updateByCustomerId(
          {
            customerId: 1,
          },
          { activebool: false, email: null },
        );
        throw new Error("aha");
      });
    } catch (e) {
      expect((e as Error).message).toBe("aha");
    }
    const customer = await database.Public.Customer.byCustomerId({
      customerId: 1,
    });

    expect(customer).toMatchObject({
      activebool: true,
      email: "mary.smith@sakilacustomer.org",
      firstName: "Mary",
      lastName: "Smith",
    });
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
    const deleted = await database.Public.Payment.deleteByPaymentId({
      paymentId: 17503,
    });
    expect(deleted).toMatchObject(before);
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
    const deleted = await database.Public.Payment.deleteByCustomerId({
      customerId: 341,
    });
    expect(deleted).toMatchObject(before);
    const after = await database.Public.Payment.byCustomerId({
      customerId: 341,
    });
    expect(after.length).toBe(0);
  });
  it("a unique index update", async () => {
    const before = await database.Public.Customer.byCustomerId({
      customerId: 1,
    });
    expect(before).toBeTruthy();
    const updated = await database.Public.Customer.updateByCustomerId(
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
    const before = await database.Public.Customer.byStoreId({
      storeId: 1,
    });
    expect(before.filter((c) => c.activebool)).toHaveLength(326);
    const updated = await database.Public.Customer.updateByStoreId(
      {
        storeId: 1,
      },
      { activebool: false, email: null },
    );
    expect(updated.filter((c) => c.activebool)).toHaveLength(0);
    expect(before).not.toMatchObject(updated);
  });
});
