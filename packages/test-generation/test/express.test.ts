import { EmbraceSQLClient } from "../src/dvdrental-browser";
import { EmbraceSQLExpressApp } from "../src/dvdrental-express";
import { Express } from "express";
import { Server } from "http";

describe("EmbraceSQLExpress can", () => {
  let app: Express;
  let server: Server;
  beforeAll(async () => {
    app = await EmbraceSQLExpressApp(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
    return new Promise<void>((resolve) => {
      server = app.listen(4444, () => {
        resolve();
      });
    });
  });
  afterAll(async () => {
    return new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  it("answer a raw invoke", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const response = await client.invoke({
      operation: "Public.LastDay",
      parameters: {
        _0: new Date("12/1/2023"),
      },
    });
    expect(response).toMatchObject({
      operation: "Public.LastDay",
      results: "2023-12-31T00:00:00.000Z",
    });
  });

  it("answer a typed read", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const response = await client.Public.Tables.Actor.byActorId({ actorId: 1 });
    expect(response).toMatchObject({
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    });
  });

  it("answer an upsert", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
    const initial = await client.Public.Tables.Actor.byActorId({ actorId: 1 });
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
});
