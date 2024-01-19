import {
  Database,
  PgCatalog,
  Public,
  PostgresTypecasts,
  Api,
} from "../src/marshalling";
import { Geometry } from "@embracesql/shared";

/**
 * Works-at-all.
 */
describe("Can marshall complex types", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/marshalling",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  it("that are from an echo function", async () => {
    const ret = await db.Api.Procedures.Echo.call({ message: "Hi" });
    expect(ret).toEqual("Hi");
  });
  it("that are from an set function", async () => {
    const ret = await db.Api.Procedures.EchoSet.call({ message: "Hi" });
    expect(ret).toMatchObject(["Hi"]);
  });
  it("that are from an table function", async () => {
    const ret = await db.Api.Procedures.EchoTable.call({ message: "Hi" });
    expect(ret).toMatchObject([{ echomessage: "Hi" }]);
  });
  it("that are from an typed function", async () => {
    const ret = await db.Api.Procedures.EchoType.call({ message: "Hi" });
    expect(ret!.echomessage).toEqual("Hi");
    expect(ret!.at).toBeTruthy();
  });
  it("that are from an array function", async () => {
    const ret = await db.Api.Procedures.EchoTypeArray.call({ message: "Hi" });
    expect(ret.length).toEqual(1);
    expect(ret[0]!.echomessage).toEqual("Hi");
    expect(ret[0]!.at).toBeTruthy();
  });
  it("that are from an nested type function", async () => {
    const ret = await db.Api.Procedures.EchoTypeNested.call({ message: "Hi" });
    expect(ret!.echoes?.length).toEqual(1);
    expect(ret!.echoes[0]!.echomessage).toEqual("Hi");
    expect(ret!.echoes[0]!.at).toBeTruthy();
  });
  it("that are from an type set function", async () => {
    const ret = await db.Api.Procedures.EchoTypeSet.call({ message: "Hi" });
    expect(ret.length).toEqual(1);
    expect(ret[0].echomessage).toEqual("Hi");
    expect(ret[0].at).toBeTruthy();
  });
  it("that are from an enum function", async () => {
    const ret = await db.Api.Procedures.EchoAnswer.call({
      message: Api.Types.Answer.Maybe,
    });
    expect(ret).toEqual(Api.Types.Answer.Maybe);
  });
  it("that are from an enum null function", async () => {
    const ret = await db.Api.Procedures.EchoAnswer.call({
      message: null,
    });
    expect(ret).toBeNull();
  });
  it("that are from an enum AutoCRUD", async () => {
    const ret = await db.Api.Tables.QAndA.QAndAAnswer.read({
      answer: Api.Types.Answer.Yes,
    });
    expect(ret[0].question).toBe("Is this a test?");
  });
  it("that are enum equality", async () => {
    const ret = await db.Api.Tables.QAndA.QAndAAnswer.read({
      answer: Api.Types.Answer.Yes,
    });
    expect(ret[0].question).toBe("Is this a test?");
  });
});

describe("Can marshall base types", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/marshalling",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  const roundTrip = (
    type: keyof PostgresTypecasts,
    parser: (v: string | null) => unknown,
    value: string | null,
  ) => {
    const fromTs = parser(value);
    const toPostgres = db.context.types[type].serialize(fromTs);
    const fromPostgres = db.context.types[type].parse(toPostgres);
    if (fromTs === null) {
      expect(fromPostgres).toBeNull();
    } else if (typeof fromTs === "object") {
      expect(fromTs).toMatchObject(fromPostgres);
    } else {
      expect(fromTs).toEqual(fromPostgres);
    }
  };
  it("that are UUIDs", () => {
    for (const val of [null, "24562c58-c8d1-4c39-9073-6f956e08eb8b"]) {
      roundTrip("PgCatalog.Types.Uuid", PgCatalog.Types.Uuid.parse, val);
    }
  });
  it("that are bools", () => {
    for (const val of ["t", "true", 1, "1"]) {
      roundTrip(
        "PgCatalog.Types.Bool",
        PgCatalog.Types.Bool.parse,
        val as string,
      );
    }
    for (const val of ["f", "false", 0, "0"]) {
      roundTrip(
        "PgCatalog.Types.Bool",
        PgCatalog.Types.Bool.parse,
        val as string,
      );
    }
  });
  it("that are numbers", () => {
    for (const val of ["0", 0, "1.5", 1.5, "-1", -1]) {
      roundTrip(
        "PgCatalog.Types.Numeric",
        PgCatalog.Types.Numeric.parse,
        val as string,
      );
    }
  });
  it("that are text", () => {
    for (const val of ["0", "1.5", "hello 🌎"]) {
      roundTrip("PgCatalog.Types.Text", PgCatalog.Types.Text.parse, val);
    }
  });
  it("that are points", () => {
    for (const val of [null, "(0, 0)", "(1.5, 100)", "1.5, 100"]) {
      roundTrip("PgCatalog.Types.Point", PgCatalog.Types.Point.parse, val);
    }
  });
  it("that are line segments", () => {
    for (const val of [
      null,
      `((0,0), (1.5, 100))`,
      `[(0,0), (1.5, 100)]`,
      `(0,0), (1.5, 100)`,
      `0, 0, 1.5, 100`,
    ]) {
      roundTrip("PgCatalog.Types.Lseg", PgCatalog.Types.Lseg.parse, val);
    }
  });
  it("that are lines", () => {
    for (const val of [null, "{0, 0, 0}", "{1, 2, 3}"]) {
      roundTrip("PgCatalog.Types.Line", PgCatalog.Types.Line.parse, val);
    }
  });
  it("that are boxes", () => {
    for (const val of [
      null,
      `((0,0), (1.5, 100))`,
      `(0,0), (1.5, 100)`,
      `0, 0, 1.5, 100`,
    ]) {
      roundTrip("PgCatalog.Types.Box", PgCatalog.Types.Box.parse, val);
    }
  });
  it("that are paths", () => {
    for (const val of [
      null,
      `((0,0), (1.5, 100))`,
      `[(0,0), (1.5, 100)]`,
      `0,0, 1.5, 100`,
    ]) {
      roundTrip("PgCatalog.Types.Path", PgCatalog.Types.Path.parse, val);
    }
  });
  it("that are polygons", () => {
    for (const val of [null, `((0,0), (1.5, 100))`, `0,0, 1.5, 100`]) {
      roundTrip("PgCatalog.Types.Polygon", PgCatalog.Types.Polygon.parse, val);
    }
  });
  it("that are circles", () => {
    for (const val of [
      null,
      "< (0, 0), 0 >",
      "( (1, 2), 4.0 )",
      "(1, 2), 4.0",
      "1, 2, 4.0",
    ]) {
      roundTrip("PgCatalog.Types.Circle", PgCatalog.Types.Circle.parse, val);
    }
  });
  it("that are oids", () => {
    for (const val of ["0", 0, "1", 2]) {
      roundTrip(
        "PgCatalog.Types.Oid",
        PgCatalog.Types.Oid.parse,
        val as string,
      );
    }
  });
  it("that are oidvectors", () => {
    for (const val of [
      JSON.stringify([1, 2, 3]),
      JSON.stringify([]),
      JSON.stringify([null]),
    ]) {
      roundTrip(
        "PgCatalog.Types.Oidvector",
        PgCatalog.Types.Oidvector.parse,
        val,
      );
    }
  });
  it("that are names", () => {
    for (const val of [null, "", "0", "hello 🌎 "]) {
      roundTrip("PgCatalog.Types.Name", PgCatalog.Types.Name.parse, val);
    }
  });
  it("that are big numbers", () => {
    for (const val of [null, "", "0", "123456789", 123456789]) {
      roundTrip(
        "PgCatalog.Types.PgLsn",
        PgCatalog.Types.PgLsn.parse,
        val as string,
      );
    }
  });
  it("that are vectors", () => {
    for (const val of [null, "[1, 1, 2]", [1, 2, 3]]) {
      roundTrip(
        "PgCatalog.Types.Int2vector",
        PgCatalog.Types.Int2vector.parse,
        val as string,
      );
    }
  });
  it("that are cubes", () => {
    for (const val of [null, "[1, 1, 2]", [1, 2, 3]]) {
      roundTrip("Public.Types.Cube", Public.Types.Cube.parse, val as string);
    }
  });
  it("that are dates", () => {
    for (const val of [new Date(), "2000-01-01"]) {
      roundTrip(
        "PgCatalog.Types.Date",
        PgCatalog.Types.Date.parse,
        val as string,
      );
    }
  });
});

describe("Can marshall pg_trgm types", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/marshalling",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });

  it("that gin trigram match", async () => {
    const ret = await db.Api.Tables.Timezones.TrgmIdxGin.read({
      timeZone: "Afri",
    });
    expect(ret.length).toBeGreaterThan(0);
  });
  it("that gist trigram match", async () => {
    const ret = await db.Api.Tables.Timezones.TrgmIdxGist.read({
      timeZone: "Afri",
    });
    expect(ret.length).toBeGreaterThan(0);
  });
});

describe("Can marshall geometric", () => {
  // each test runs in an isolated transaction that is rolled back
  // so the database has a consisten state
  let rootDatabase: Database;
  let database: Database;
  let rollback: (message?: string) => void;
  beforeEach(async () => {
    rootDatabase = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/marshalling",
    );
    // and in a transaction now
    ({ database, rollback } = await rootDatabase.beginTransaction());
  });
  afterEach(async () => {
    rollback();
    await rootDatabase.disconnect();
  });
  it("points", async () => {
    const ret = await database.Api.Tables.Points.create({
      point: {
        x: 1,
        y: 1,
      },
    });
    expect(ret.id).toBeTruthy();
    expect(ret.point).toMatchObject({ x: 1, y: 1 });
  });
  it("lines", async () => {
    const ret = await database.Api.Tables.Lines.create({
      line: {
        a: 1,
        b: 2,
        c: 3,
      },
    });
    expect(ret.id).toBeTruthy();
    expect(ret.line).toMatchObject({ a: 1, b: 2, c: 3 });
  });
  it("line segments", async () => {
    const ret = await database.Api.Tables.LineSegments.create({
      lineSegment: {
        from: { x: 0, y: 0 },
        to: {
          x: 100,
          y: 100,
        },
      },
    });
    expect(ret.id).toBeTruthy();
    expect(ret.lineSegment).toMatchObject({
      from: { x: 0, y: 0 },
      to: {
        x: 100,
        y: 100,
      },
    });
  });
  it("boxes", async () => {
    const ret = await database.Api.Tables.Boxes.create({
      box: {
        upperRight: { x: 100, y: 100 },
        lowerLeft: {
          x: 0,
          y: 0,
        },
      },
    });
    expect(ret.id).toBeTruthy();
    expect(ret.box).toMatchObject({
      upperRight: { x: 100, y: 100 },
      lowerLeft: {
        x: 0,
        y: 0,
      },
    });
  });
  describe("paths", () => {
    it("closed", async () => {
      const ret = await database.Api.Tables.Paths.create({
        path: {
          kind: Geometry.PathKind.Closed,
          points: [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
          ],
        },
      });
      expect(ret.id).toBeTruthy();
      expect(ret.path).toMatchObject({
        kind: Geometry.PathKind.Closed,
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
        ],
      });
    });
    it("open", async () => {
      const ret = await database.Api.Tables.Paths.create({
        path: {
          kind: Geometry.PathKind.Open,
          points: [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
          ],
        },
      });
      expect(ret.id).toBeTruthy();
      expect(ret.path).toMatchObject({
        kind: Geometry.PathKind.Open,
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
        ],
      });
    });
  });
  it("polygons", async () => {
    const ret = await database.Api.Tables.Polygons.create({
      polygon: {
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
        ],
      },
    });
    expect(ret.id).toBeTruthy();
    expect(ret.polygon).toMatchObject({
      points: [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
      ],
    });
  });
  it("circles", async () => {
    const ret = await database.Api.Tables.Circles.create({
      circle: {
        center: { x: 1, y: 2 },
        radius: 4.5,
      },
    });
    expect(ret.id).toBeTruthy();
    expect(ret.circle).toMatchObject({
      center: { x: 1, y: 2 },
      radius: 4.5,
    });
  });
});
