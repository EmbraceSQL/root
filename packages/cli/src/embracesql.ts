import { initializeContext } from "@embracesql/core/src/context";
import { regenerateFromDatabase } from "@embracesql/core/src/generator";
import { Command } from "commander";
import figlet from "figlet";

console.log(figlet.textSync("Embrace SQL"));

const program = new Command()
  .version(process.env.npm_package_version ?? "")
  .option(
    "--generateInto [value]",
    "Code will generate into this directory.",
    "./src/postgres",
  )
  .option(
    "--database [value]",
    "Connect to this postgres for generation.",
    "postgres://postgres:postgres@localhost:5432/postgres",
  )
  .parse(process.argv);

async function main() {
  const options = program.opts();
  const context = await initializeContext(options.database);
  console.log(`generating to: ${options.generateInto}`);
  await regenerateFromDatabase({
    ...context,
    generateInto: options.generateInto,
  });
}

void main();
