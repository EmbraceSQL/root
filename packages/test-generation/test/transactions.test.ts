import { Database } from "../src/dvdrental";

describe("The database can use transactions", () => {
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
  it("that are nested", async () => {
    const updatedCustomer = await database.withTransaction(async (db) => {
      return await db.Public.Tables.Customer.CustomerPkey.update(
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
  it("that are nested and rolls back", async () => {
    await database.Public.Tables.Customer.CustomerPkey.update(
      { customerId: 1 },
      { activebool: true },
    );
    try {
      await database.withTransaction(async (db) => {
        await db.Public.Tables.Customer.CustomerPkey.update(
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
    const customer = await database.Public.Tables.Customer.CustomerPkey.read({
      customerId: 1,
    });

    expect(customer).toMatchObject({
      activebool: true,
      email: "mary.smith@sakilacustomer.org",
      firstName: "Mary",
      lastName: "Smith",
    });
  });
});
