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
      return await db.Public.Tables.Customer.ByCustomerId.update(
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
    await database.Public.Tables.Customer.ByCustomerId.update(
      { customerId: 1 },
      { activebool: true },
    );
    try {
      await database.withTransaction(async (db) => {
        await db.Public.Tables.Customer.ByCustomerId.update(
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
    const customer = await database.Public.Tables.Customer.ByCustomerId.read({
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
    const value = await database.Public.Tables.Actor.ByActorId.read({
      actorId: 1,
    });
    expect(value).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });
  it("a non unique index read", async () => {
    const values = await database.Public.Tables.Actor.ByLastName.read({
      lastName: "Akroyd",
    });
    expect(values.length).toBeGreaterThan(1);
  });
  it("a unique index delete", async () => {
    const before = await database.Public.Tables.Payment.ByPaymentId.read({
      paymentId: 17503,
    });
    expect(before).toBeTruthy();
    const deleted = await database.Public.Tables.Payment.ByPaymentId.delete({
      paymentId: 17503,
    });
    expect(deleted).toMatchObject(before);
    const after = await database.Public.Tables.Payment.ByPaymentId.read({
      paymentId: 17503,
    });
    expect(after).toBeUndefined();
  });
  it("a non-unique index delete", async () => {
    const before = await database.Public.Tables.Payment.ByCustomerId.read({
      customerId: 341,
    });
    expect(before.length).toBeGreaterThan(0);
    const deleted = await database.Public.Tables.Payment.ByCustomerId.delete({
      customerId: 341,
    });
    expect(deleted).toMatchObject(before);
    const after = await database.Public.Tables.Payment.ByCustomerId.read({
      customerId: 341,
    });
    expect(after.length).toBe(0);
  });
  it("a unique index update", async () => {
    const before = await database.Public.Tables.Customer.ByCustomerId.read({
      customerId: 1,
    });
    expect(before).toBeTruthy();
    const updated = await database.Public.Tables.Customer.ByCustomerId.update(
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
    const before = await database.Public.Tables.Customer.ByStoreId.read({
      storeId: 1,
    });
    expect(before.filter((c) => c.activebool).length).toBeGreaterThan(300);
    const updated = await database.Public.Tables.Customer.ByStoreId.update(
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
    const anAddress = await database.Public.Tables.Address.ByAddressId.read({
      addressId: 1,
    });
    expect(anAddress.address2).toBeNull();
    const nowNotNull = await database.Public.Tables.Address.ByAddressId.update(
      { addressId: 1 },
      { address2: "hi" },
    );
    expect(nowNotNull.address2).toBe("hi");
    const nullAgain = await database.Public.Tables.Address.ByAddressId.update(
      { addressId: 1 },
      { address2: null },
    );
    expect(nullAgain.address2).toBeNull();
  });
});
