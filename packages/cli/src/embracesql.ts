import { Command } from "@commander-js/extra-typings";
import { initializeContext } from "@embracesql/postgres/src/context";
import { regenerateFromDatabase } from "@embracesql/postgres/src/generator";
import chalk from "chalk";
import figlet from "figlet";

const program = new Command();

const logo = () => chalk.blue(figlet.textSync("Embrace SQL"));

program.version(process.env.npm_package_version ?? "");

program.hook("preAction", () => {
  process.stderr.write(logo());
  process.stderr.write("\n");
});

const generate = program
  .command("generate")
  .description("Generate some code from the database.");

program.addHelpText("beforeAll", logo());

generate
  .command("typescript-node")
  .description("Typescript code for use in nodejs.")
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
  ])
  .action(async (options) => {
    const context = await initializeContext(options.database);
    const start = Date.now();
    const generatedSource = await regenerateFromDatabase({
      ...context,
      sqlScriptsFrom: options.sqlScriptsFrom,
      skipSchemas: options.skipSchemas,
    });
    process.stdout.write(generatedSource);
    process.stderr.write(chalk.green(`generated in ${Date.now() - start}ms\n`));
    await context.sql.end();
  });

void program.parseAsync(process.argv);
