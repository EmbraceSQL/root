import { Context, initializeContext } from "@embracesql/postgres/src/context";
import {
  generateDatabaseRoot,
  generateOperationDispatcher,
  generateSchemaDefinitions,
} from "@embracesql/postgres/src/generator";
import { generateMetadata } from "@embracesql/postgres/src/generator/typescript/generateMetadata";
import { generateReactComponents } from "@embracesql/react/src/typescript/generateReactComponents";
import path from "path";
import ts from "typescript";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * This is a pretty coarse test which exists to provide a place
 * to attach the debugger.
 */
describe("The generator can", () => {
  let context: Context;
  beforeEach(async () => {});
  afterEach(async () => {
    await context.sql.end();
  });
  it("create TypeScript database for dvdrental sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
      {
        sqlScriptsFrom: path.join(__dirname, "../../../var/data/dvdrental/sql"),
      },
    );
    const source = await generateDatabaseRoot(context);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
  it("create Express dispatcher TypeScript definitions for dvdrental sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
      {
        sqlScriptsFrom: path.join(__dirname, "../../../var/data/dvdrental/sql"),
      },
    );
    const source = await generateOperationDispatcher(context);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
  it("create React  TypeScript definitions for dvdrental sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
      {
        sqlScriptsFrom: path.join(__dirname, "../../../var/data/dvdrental/sql"),
        skipSchemas: ["pg_catalog", "information_schema"],
      },
    );
    const source = await generateReactComponents(context);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
  it("create TypeScript definitions for marshalling sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/marshalling",
    );
    const source = await generateSchemaDefinitions(context);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
  it("create TypeScript Database for usda sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/usda",
    );
    const source = await generateDatabaseRoot(context);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
  it("create TypeScript Database metadata for usda sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/usda",
    );
    const source = await generateMetadata(context);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
});
