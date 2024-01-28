import { Database, Api } from "../src/marshalling";

describe("Database middleware can", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/marshalling",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  it("change a parameter", async () => {
    // set up middleware that will change the message parameter
    db.clear();
    db.use(async (context, next) => {
      // gonna change that parameter -- but middleware is pretty open type
      // so cast/ check -- you can figure this type by 'hovering' over
      // `.call` in VSCode -- and they follow a generated pattern
      const parameters = context.request
        ?.parameters as Api.Procedures.Echo.Parameters;
      if (parameters.message) {
        // this clearly makes it more exciting
        parameters.message = `${parameters.message}‼️`;
      }
      return next();
    });
    const ret = await db.Api.Procedures.Echo.call(
      {
        message: "Hello",
      },
      { headers: { ROLE: "postgres" } },
    );
    expect(ret).toBe("Hello‼️");
  });
  it("change a value", async () => {
    // set up value changing middleware -- this will be on an
    // AutoCRUD table that contains a single geometric point
    db.clear();
    db.use(async (context, next) => {
      // pick out the values and cast them to a values type
      // use this to check that we are actually working on Points
      const values = context.request?.values as Api.Types.Points;
      if (values.point) {
        values.point.x += 1;
        values.point.y += 2;
      }
      return next();
    });
    // creating a row reads back what is inserted
    const ret = await db.Api.Tables.Points.create({
      point: {
        x: 0,
        y: 0,
      },
    });
    expect(ret).toMatchObject({ point: { x: 1, y: 2 } });
  });
});
