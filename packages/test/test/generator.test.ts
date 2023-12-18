import { Context, initializeContext } from "@embracesql/postgres/src/context";
import {
  generateDatabaseRoot,
  generateOperationDispatcher,
  generateSchemaDefinitions,
} from "@embracesql/postgres/src/generator";
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
  it("create TypeScript definitions for dvdrental sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
    );
    const source = await generateDatabaseRoot({
      ...context,
      sqlScriptsFrom: path.join(__dirname, "../../../var/data/dvdrental/sql"),
    });
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
  it("create Express dispatcher TypeScript definitions for dvdrental sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
    );
    const source = await generateOperationDispatcher({
      ...context,
      sqlScriptsFrom: path.join(__dirname, "../../../var/data/dvdrental/sql"),
    });
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
  it("create React  TypeScript definitions for dvdrental sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/dvdrental",
    );
    const source = await generateReactComponents({
      ...context,
      sqlScriptsFrom: path.join(__dirname, "../../../var/data/dvdrental/sql"),
      skipSchemas: ["pg_catalog", "information_schema"],
    });
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
  it("create TypeScript Database for marshalling sample", async () => {
    context = await initializeContext(
      "postgres://postgres:postgres@localhost/marshalling",
    );
    const source = await generateDatabaseRoot(context);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    expect(compiled).toBeTruthy();
  });
});
