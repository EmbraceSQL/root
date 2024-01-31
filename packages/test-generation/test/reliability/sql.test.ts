import { Database } from "../../src/marshalling";

describe("The database can", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/marshalling",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  beforeEach(() => {
    // no middleware, we'll be adding middleware
    db.clear();
  });
  it("recover from a killed connection", async () => {
    db.use(async (context, next) => {
      // simulate a really bad disconnect, some DBA type smote you 🗡️
      // we won't do this on any subsequent retries
      if (context.retry === 0) {
        await context.sql`SELECT pg_terminate_backend(pid) FROM (SELECT pg_backend_pid() pid)`;
      }
      return next();
    });
    const ret = await db.Api.Procedures.Echo.call(
      {
        message: "Hello",
      },
      {
        retries: 1,
      },
    );
    expect(ret).toBe("Hello");
  });
});
