#!/usr/bin/env tsx
import { Command } from "@commander-js/extra-typings";
import { generateClient } from "@embracesql/client";
import { generateExpressApp } from "@embracesql/express/src/typescript/generateExpressApp";
import { generateHeader, initializeContext } from "@embracesql/postgres";
import {
  generateDatabaseRoot,
  generateOperationDispatcher,
  generateSchemaDefinitions,
} from "@embracesql/postgres";
import { generateReactComponents } from "@embracesql/react/src/typescript/generateReactComponents";
import chalk from "chalk";
import figlet from "figlet";

const formatSource = async (source: string) => {
  return source;
};

const program = new Command();

const logo = () => chalk.blue(figlet.textSync("Embrace SQL"));

program.version(process.env.npm_package_version ?? "");

// shared options
const addOptions = (command: Command) => {
  return command
    .option(
      "--database <url>",
      "Connect to this postgres for generation.",
      "postgres://postgres:postgres@localhost:5432/postgres",
    )
    .option(
      "--sqlScriptsFrom <path>",
      "Look in this directory for loose SQL scripts.",
      "",
    )
    .option("--skipSchemas <names...>", "Schemas to skip while generating.", [
      "pg_catalog",
      "information_schema",
    ]);
};

const start = Date.now();
// needless but fun banner -- stderr to not interfere with piping
program.hook("preAction", () => {
  process.stderr.write(logo());
  process.stderr.write("\n");
});
program.hook("postAction", () => {
  process.stderr.write(chalk.green(`generated in ${Date.now() - start}ms\n`));
});

const generate = program
  .command("generate")
  .description("Generate some code from the database.");

program.addHelpText("beforeAll", logo());

addOptions(
  generate.command("node").description("TypeScript code for use in nodejs."),
).action(async (options) => {
  const context = await initializeContext(options.database, options);
  const generationBuffer: string[] = [];

  const combinedContext = {
    ...context,
    sqlScriptsFrom: options.sqlScriptsFrom,
    skipSchemas: options.skipSchemas,
  };

  generationBuffer.push(await generateHeader(combinedContext));
  generationBuffer.push(await generateDatabaseRoot(combinedContext));
  generationBuffer.push(await generateOperationDispatcher(combinedContext));
  generationBuffer.push(await generateSchemaDefinitions(combinedContext));
  process.stdout.write(await formatSource(generationBuffer.join("\n")));
  await context.sql.end();
});

addOptions(
  generate
    .command("express")
    .description("TypeScript code for use with Express."),
).action(async (options) => {
  const context = await initializeContext(options.database, options);
  const generationBuffer: string[] = [];

  const combinedContext = {
    ...context,
    sqlScriptsFrom: options.sqlScriptsFrom,
    skipSchemas: options.skipSchemas,
  };

  generationBuffer.push(await generateHeader(combinedContext));
  generationBuffer.push(await generateDatabaseRoot(combinedContext));
  generationBuffer.push(await generateOperationDispatcher(combinedContext));
  generationBuffer.push(await generateExpressApp());
  generationBuffer.push(await generateSchemaDefinitions(combinedContext));
  process.stdout.write(await formatSource(generationBuffer.join("\n")));
  await context.sql.end();
});

addOptions(
  generate.command("client").description("TypeScript code for use via fetch."),
).action(async (options) => {
  const context = await initializeContext(options.database, options);
  const generationBuffer: string[] = [];

  const combinedContext = {
    ...context,
    sqlScriptsFrom: options.sqlScriptsFrom,
    skipSchemas: options.skipSchemas,
  };

  generationBuffer.push(await generateHeader(combinedContext));
  generationBuffer.push(await generateClient(combinedContext));
  generationBuffer.push(await generateSchemaDefinitions(combinedContext));
  process.stdout.write(await formatSource(generationBuffer.join("\n")));
  await context.sql.end();
});

addOptions(
  generate.command("react").description("TypeScript code for use with React."),
).action(async (options) => {
  const context = await initializeContext(options.database, options);
  const generationBuffer: string[] = [];

  const combinedContext = {
    ...context,
    sqlScriptsFrom: options.sqlScriptsFrom,
    skipSchemas: options.skipSchemas,
  };

  generationBuffer.push(await generateHeader(combinedContext));
  generationBuffer.push(await generateClient(combinedContext));
  generationBuffer.push(await generateReactComponents(combinedContext));
  generationBuffer.push(await generateSchemaDefinitions(combinedContext));
  process.stdout.write(await formatSource(generationBuffer.join("\n")));
  await context.sql.end();
});

void program.parseAsync(process.argv);
