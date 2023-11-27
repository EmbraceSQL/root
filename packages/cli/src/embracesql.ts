import { initializeContext } from "@embracesql/core/src/context";
import { regenerateFromDatabase } from "@embracesql/core/src/generator";
import chalk from "chalk";
import { Command } from "commander";
import figlet from "figlet";

const program = new Command()
  .version(process.env.npm_package_version ?? "")
  .option(
    "--database [url]",
    "Connect to this postgres for generation.",
    "postgres://postgres:postgres@localhost:5432/postgres",
  )
  .option(
    "--sqlScriptsFrom [path]",
    "Look in this directory for loose SQL scripts.",
    "",
  )
  .option("--skipSchemas [names...]", "Schemas to skip while generating.", [
    "pg_catalog",
    "information_schema",
  ])
  .parse(process.argv);

async function main() {
  process.stderr.write(chalk.blue(figlet.textSync("Embrace SQL")));
  process.stderr.write("\n");
  const options = program.opts();
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
}

void main();
