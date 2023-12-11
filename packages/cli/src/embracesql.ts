#!/usr/bin/env tsx
import { Command } from "@commander-js/extra-typings";
import { generateExpressApp } from "@embracesql/express/src/typescript/generateExpressApp";
import { initializeContext } from "@embracesql/postgres/src/context";
import {
  generateDatabaseRoot,
  formatSource,
  generateOperationDispatcher,
  generateSchemaDefinitions,
} from "@embracesql/postgres/src/generator";
import { generateReactComponents } from "@embracesql/react/src/typescript/generateReactComponents";
import chalk from "chalk";
import figlet from "figlet";

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
  const context = await initializeContext(options.database);
  const generationBuffer: string[] = [];

  const combinedContext = {
    ...context,
    sqlScriptsFrom: options.sqlScriptsFrom,
    skipSchemas: options.skipSchemas,
  };
  generationBuffer.push(await generateSchemaDefinitions(combinedContext));
  generationBuffer.push(await generateDatabaseRoot(combinedContext));
  process.stdout.write(await formatSource(generationBuffer.join("\n")));
  await context.sql.end();
});

addOptions(
  generate
    .command("express")
    .description("TypeScript code for use with Express."),
).action(async (options) => {
  const context = await initializeContext(options.database);
  const generationBuffer: string[] = [];

  const combinedContext = {
    ...context,
    sqlScriptsFrom: options.sqlScriptsFrom,
    skipSchemas: options.skipSchemas,
  };

  generationBuffer.push(await generateSchemaDefinitions(combinedContext));
  generationBuffer.push(await generateDatabaseRoot(combinedContext));
  generationBuffer.push(await generateOperationDispatcher(combinedContext));
  generationBuffer.push(await generateExpressApp());
  process.stdout.write(await formatSource(generationBuffer.join("\n")));
  await context.sql.end();
});

addOptions(
  generate.command("react").description("TypeScript code for use with React."),
).action(async (options) => {
  const context = await initializeContext(options.database);
  const generationBuffer: string[] = [];

  const combinedContext = {
    ...context,
    sqlScriptsFrom: options.sqlScriptsFrom,
    skipSchemas: options.skipSchemas,
  };

  generationBuffer.push(await generateSchemaDefinitions(combinedContext));
  generationBuffer.push(await generateReactComponents(combinedContext));
  process.stdout.write(await formatSource(generationBuffer.join("\n")));
  await context.sql.end();
});

void program.parseAsync(process.argv);
