import { Database, PgCatalog, PostgresTypecasts } from "../src/marshalling";

/**
 * Works-at-all.
 */
describe("The database can marshall complex types", () => {
  let db: Database;
  beforeAll(async () => {
    db = await Database.connect(
      "postgres://postgres:postgres@localhost:5432/marshalling",
    );
  });
  afterAll(async () => {
    await db.disconnect();
  });
  it("that are structured objects", () => {
    const sample = String.raw`{"(\"howdy y'all\",\"2022-07-02 09:35:31.966868+00\")"}`;
    expect(db.context.types.api__echo_type.parse(sample)).toEqual([
      {
        echomessage: "howdy y'all",
        at: new Date("2022-07-02 09:35:31.966868+00"),
      },
    ]);
  });
  it("that are nested array records", () => {
    const sample = String.raw`("{""(\\""howdy y'all\\"",\\""2022-07-02 10:13:05.840209+00\\"")""}")`;
    interface HasEchoes {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      echoes: any[];
    }
    expect(
      (db.context.types.api_echo_type_nested.parse(sample) as HasEchoes).echoes,
    ).toEqual([
      {
        echomessage: "howdy y'all",
        at: new Date("2022-07-02 10:13:05.840209+00"),
      },
    ]);
  });
  it("that are from an echo function", async () => {
    const ret = await db.Api.Echo({ message: "Hi" });
    expect(ret).toEqual("Hi");
  });
  it("that are from an echoset function", async () => {
    const ret = await db.Api.EchoSet({ message: "Hi" });
    expect(ret).toMatchObject(["Hi"]);
  });
  it("that are from an echotable function", async () => {
    const ret = await db.Api.EchoTable({ message: "Hi" });
    expect(ret).toMatchObject([{ echomessage: "Hi" }]);
  });
  it("that are from an echotype function", async () => {
    const ret = await db.Api.EchoType({ message: "Hi" });
    expect(ret.echomessage).toEqual("Hi");
    expect(ret.at).toBeTruthy();
  });
  it("that are from an echotype function", async () => {
    const ret = await db.Api.EchoTypeArray({ message: "Hi" });
    expect(ret.length).toEqual(1);
    expect(ret[0].echomessage).toEqual("Hi");
    expect(ret[0].at).toBeTruthy();
  });
  it("that are from an echotypenested function", async () => {
    const ret = await db.Api.EchoTypeNested({ message: "Hi" });
    expect(ret.echoes?.length).toEqual(1);
    expect(ret.echoes![0].echomessage).toEqual("Hi");
    expect(ret.echoes![0].at).toBeTruthy();
  });
  it("that are from an echotypeset function", async () => {
    const ret = await db.Api.EchoTypeSet({ message: "Hi" });
    expect(ret.length).toEqual(1);
    expect(ret[0].echomessage).toEqual("Hi");
    expect(ret[0].at).toBeTruthy();
  });
});

describe("The database can marshall base types", () => {
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
    parser: (v: string) => unknown,
    value: string,
  ) => {
    const fromTs = parser(value);
    const toPostgres = db.context.types[type].serialize(fromTs);
    const fromPostgres = db.context.types[type].parse(toPostgres);
    if (typeof fromTs === "object") {
      expect(fromTs).toMatchObject(fromPostgres);
    } else {
      expect(fromTs).toEqual(fromPostgres);
    }
  };
  it("that are UUIDs", () => {
    roundTrip(
      "pg_catalog_uuid",
      PgCatalog.parseUuid,
      "24562c58-c8d1-4c39-9073-6f956e08eb8b",
    );
  });
  it("that are bools", () => {
    for (const val of ["t", "true", 1, "1"]) {
      roundTrip("pg_catalog_bool", PgCatalog.parseBool, val as string);
    }
    for (const val of ["f", "false", 0, "0"]) {
      roundTrip("pg_catalog_bool", PgCatalog.parseBool, val as string);
    }
  });
});
