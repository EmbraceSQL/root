import { EmbraceSQLClient } from "../src/dvdrental-browser";
import { EmbraceSQLExpressApp, Database } from "../src/dvdrental-express";
import { Express } from "express";
import { Server } from "http";

describe("EmbraceSQLExpress can", () => {
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
      server = app.listen(4444, () => {
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
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const response = await client.invoke({
      operation: "Public.LastDay",
      parameters: {
        argument_0: new Date("12/1/2023"),
      },
    });
    expect(response).toMatchObject({
      operation: "Public.LastDay",
      results: "2023-12-31T00:00:00.000Z",
    });
  });

  it("answer a typed create", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const sample = {
      firstName: "Smurf",
      lastName: "Powers",
    };
    const response = await client.Public.Tables.Actor.create(sample);
    expect(response).toMatchObject(sample);
  });

  it("answer a typed read", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const response = await client.Public.Tables.Actor.ByActorId.read({
      actorId: 1,
    });
    expect(response).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });

  it("answer a typed update", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const response = await client.Public.Tables.Actor.ByActorId.update(
      { actorId: 2 },
      { firstName: "🐶" },
    );
    expect(response).toMatchObject({
      actorId: 2,
      firstName: "🐶",
    });
  });

  it("answer an upsert", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const initial = await client.Public.Tables.Actor.ByActorId.read({
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
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const response = await client.Public.Tables.Payment.ByPaymentId.delete({
      paymentId: 17503,
    });
    expect(response).toMatchObject({
      paymentId: 17503,
    });
  });
});
