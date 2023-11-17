import { GenerationContext } from "..";
import { GeneratedFromSqlScript } from "../../context";
import { camelCase, pascalCase } from "change-case";
import * as fs from "fs";
import { glob } from "glob";
import * as path from "path";
import * as prettier from "prettier";

/**
 * Generate Typescript SQL calls for text SQL scripts.
 *
 * This turns loose file queries into strongly typed goodness.
 */
export const generateSqlScriptCalls = async (context: GenerationContext) => {
  // bounce early if nobody asked for scripts -- sometimes folks just want
  // their functions
  if (!context.sqlScriptsFrom) {
    return;
  }
  // we aren't in a namespace with loose sql query scripts
  context.currentNamespace = "";
  const generationBuffer = [
    `
        // ⚠️ generated - do not modify ⚠️
        /* eslint-disable @typescript-eslint/no-namespace */
        import * as schemas from "./schemas";
        import { Context } from "@embracesql/core/src/context";
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        import { undefinedIsNull, Nullable } from "@embracesql/core/src/types";
        import postgres from "postgres";
`,
  ];
  const allScriptDiscovery = (
    await glob(path.join(context.sqlScriptsFrom, "**/*.sql"))
  ).map(async (scriptName) => {
    const metadata = await context.sql.file(scriptName).describe();
    const script = await fs.promises.readFile(scriptName, { encoding: "utf8" });
    return {
      scriptName,
      script,
      metadata,
    };
  });
  const scripts = await Promise.all(allScriptDiscovery);
  scripts.forEach((script) => {
    // collect up metadata about the script and share it via context as a bloackboard
    const tail = path.relative(context.sqlScriptsFrom, script.scriptName);
    const generated: GeneratedFromSqlScript = {
      namespaceSegments: path
        .dirname(tail)
        .split(path.delimiter)
        .filter((p) => p !== ".")
        .map((s) => pascalCase(s)),
      name: camelCase(path.basename(tail, ".sql")),
    };
    context.generatedFromSqlScripts.push(generated);

    // all the result pieces to create a return type
    generationBuffer.push(`type ${pascalCase(generated.name)}Record = {`);
    script.metadata.columns.forEach((column) => {
      const type = context.resolveType(column.type);
      generationBuffer.push(
        `${camelCase(
          column.name,
        )}: Nullable<schemas.${type.typescriptNameWithNamespace(context)}>,`,
      );
    });
    // close off that type
    generationBuffer.push(`
        };
        type ${pascalCase(generated.name)}Resultset = ${pascalCase(
          generated.name,
        )}Record[];
      `);

    // snippet will pick resultset fields to type map
    const recordPieceBuilders = script.metadata.columns.map(
      (c) => `${camelCase(c.name)}: undefinedIsNull(record.${c.name})`,
    );

    // main call body
    generationBuffer.push(`
        export const ${
          generated.name
        } = async (context: Context) : Promise<${pascalCase(
          generated.name,
        )}Resultset> => {
            const response = (await context.sql.begin(async (sql: postgres.Sql) =>{
                return await sql\`
${script.script}
                \`;
            }))
            return response.map(record => ({ ${recordPieceBuilders.join(
              ",",
            )} }));
        }
    `);
  });

  await fs.promises.writeFile(
    path.join(context.generateInto, `sqlScripts.ts`),
    await prettier.format(generationBuffer.join("\n"), {
      parser: "typescript",
    }),
  );
};
