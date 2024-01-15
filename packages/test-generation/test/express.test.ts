import { EmbraceSQLClient } from "../src/dvdrental-browser";
import { EmbraceSQLExpressApp, Database } from "../src/dvdrental-express";
import { Express } from "express";
import { Server } from "http";

describe("EmbraceSQLExpress can", () => {
  const PORT = "4444";
  let app: Express;
  let server: Server;
  let database: Database;
  let databaseInTransaction: Awaited<ReturnType<Database["beginTransaction"]>>;
  beforeAll(async () => {
    const postgresUrl = "postgres://postgres:postgres@localhost:5432/dvdrental";
    database = await Database.connect(postgresUrl, {
      max: 1,
    });
    databaseInTransaction = await database.beginTransaction();
    // going to set up a transacted database
    app = await EmbraceSQLExpressApp(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
      databaseInTransaction.database,
    );
    return new Promise<void>((resolve) => {
      server = app.listen(PORT, () => {
        resolve();
      });
    });
  });
  afterAll(async () => {
    // transactional testing, database will restore to initial state
    databaseInTransaction.rollback();
    await database.disconnect();
    return new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  it("answer a raw invoke", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.invoke({
      operation: "Public.Procedures.LastDay.call",
      parameters: {
        argument_0: new Date("12/1/2023"),
      },
    });
    expect(response).toMatchObject({
      operation: "Public.Procedures.LastDay.call",
      results: "2023-12-31T00:00:00.000Z",
    });
  });

  it("answer a typed create", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const sample = {
      firstName: "Smurf",
      lastName: "Powers",
    };
    const response = await client.Public.Tables.Actor.create(sample);
    expect(response).toMatchObject(sample);
  });

  it("answer a typed read", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.Public.Tables.Actor.ActorPkey.read({
      actorId: 1,
    });
    expect(response).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });

  it("answer a typed read all", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.Public.Tables.Actor.all();
    expect(response.length).toBeGreaterThan(1);
    expect(
      response.map((x) => ({
        actorId: x.actorId,
        firstName: x.firstName,
        lastName: x.lastName,
      })),
    ).toContainEqual({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });

  it("answer a typed update", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.Public.Tables.Actor.ActorPkey.update(
      { actorId: 2 },
      { firstName: "🐶" },
    );
    expect(response).toMatchObject({
      actorId: 2,
      firstName: "🐶",
    });
  });

  it("answer an upsert", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const initial = await client.Public.Tables.Actor.ActorPkey.read({
      actorId: 1,
    });
    expect(initial).toBeTruthy();
    const response = await client.Public.Tables.Actor.create(initial!);
    expect(response).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
    // db has an update trigger so
    expect(response?.lastUpdate).not.toEqual(initial?.lastUpdate);
  });

  it("answer a typed delete", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.Public.Tables.Payment.PaymentPkey.delete({
      paymentId: 17503,
    });
    expect(response).toMatchObject({
      paymentId: 17503,
    });
  });

  it("answer a script with no parameters", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.Scripts.Tally.call();
    expect(response[0].count).toBeGreaterThan(100);
  });

  it("answer a script with parameters", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.Scripts.Sample.Pick.call({
      argument_1: "Basic Easy",
    });
    expect(response[0].title).toBe("Basic Easy");
  });

  it("answer a procedure with a single result", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    const response = await client.Public.Procedures.LastDay.call({
      argument_0: new Date("1/1/2000"),
    });
    expect(response?.getDate()).toBe(30);
  });

  it("answer a procedure with a multiple results of a single attribute", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    // when we invoke the procedure returning SETOF into
    const response = await client.Public.Procedures.FilmInStock.call({
      pFilmId: 1,
      pStoreId: 1,
    });
    // then we get multiple results
    expect(response?.length).toBeGreaterThan(1);
    // and it is going to be a single number -- not a structure
    expect(response[0]).toBeGreaterThan(0);
  });

  it("answer a procedure with a multiple results a composite row type", async () => {
    const client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    // when we invoke the procedure returning SETOF into
    const response = await client.Public.Procedures.RewardsReport.call({
      minDollarAmountPurchased: 10,
      minMonthlyPurchases: 1,
    });
    // then we get multiple results
    expect(response?.length).toBeGreaterThan(1);
    // and it is going to be a single number -- not a structure
    expect(response[0]?.customerId).toBeGreaterThan(0);
    expect(response[0]?.lastUpdate).toBeInstanceOf(Date);
  });
});
