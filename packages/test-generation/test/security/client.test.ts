import { EmbraceSQLExpressApp, Database } from "../../src/marshalling";
import { EmbraceSQLClient } from "../../src/marshalling-browser";
import { Express } from "express";
import { Server } from "http";

describe("EmbraceSQLExpress can", () => {
  const PORT = "4445";
  let app: Express;
  let server: Server;
  let database: Database;
  let client: EmbraceSQLClient;
  beforeAll(async () => {
    const postgresUrl =
      "postgres://postgres:postgres@localhost:5432/marshalling";
    database = await Database.connect(postgresUrl);
    // running express in process
    app = await EmbraceSQLExpressApp(postgresUrl, database);
    // use this client
    client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });
    return new Promise<void>((resolve) => {
      server = app.listen(PORT, () => {
        resolve();
      });
    });
  });
  afterAll(async () => {
    await database.disconnect();
    return new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });
  it("call a proc with an allowed role", async () => {
    const ret = await client.Api.Procedures.Echo.call(
      {
        message: "Hello",
      },
      { headers: { ROLE: "postgres" } },
    );
    expect(ret).toBe("Hello");
  });
  it("call a proc with an disallowed role", async () => {
    await expect(async () => {
      const ret = await client.Api.Procedures.Echo.call(
        {
          message: "Hello",
        },
        { headers: { ROLE: "no_access" } },
      );
      console.assert(ret);
    }).rejects.toThrow();
  });
});
