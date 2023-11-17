import { GenerationContext } from "..";
import { GeneratedFromSqlScript, SqlScript, isSqlScript } from "../../context";
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
    const tail = path.relative(context.sqlScriptsFrom, scriptName);
    return {
      scriptName,
      script,
      metadata,
      namespaceSegments: path
        .dirname(tail)
        .split(path.sep)
        .filter((p) => p !== ".")
        .map((s) => pascalCase(s)),
      name: camelCase(path.basename(tail, ".sql")),
    };
  });
  const scripts = await Promise.all(allScriptDiscovery);

  // ok -- group these things into trees
  scripts
    .sort((l, r) => l.scriptName.localeCompare(r.scriptName))
    .forEach((script) => {
      // @ts-expect-error trcking reduce to be a tree accumulator
      const tail = script.namespaceSegments.reduce((previous, current) => {
        if (previous[current] === undefined) {
          previous[current] = {};
        }
        return previous[current];
      }, context.generatedFromSqlScripts) as GeneratedFromSqlScript;
      tail[script.name] = script;
    });

  const depthFirst = (v: GeneratedFromSqlScript) => {
    Object.keys(v).forEach((key) => {
      const value = v[key];
      // this is the no fooling generation case -- pop into
      // the generation buffer
      if (isSqlScript(value)) {
        generationBuffer.push(generateScript(context, value));
      } else {
        // and here is the depth first part, make a namespace and fill it
        generationBuffer.push(`export namespace ${key} {`);
        depthFirst(value);
        generationBuffer.push(`}`);
      }
    });
  };
  // visit our entire script tree with some depth first search
  depthFirst(context.generatedFromSqlScripts);

  await fs.promises.writeFile(
    path.join(context.generateInto, `sqlScripts.ts`),
    await prettier.format(generationBuffer.join("\n"), {
      parser: "typescript",
    }),
  );
};

const generateScript = (context: GenerationContext, script: SqlScript) => {
  const generationBuffer = [];
  // all the result pieces to create a return type
  generationBuffer.push(`type ${pascalCase(script.name)}Record = {`);
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
        type ${pascalCase(script.name)}Resultset = ${pascalCase(
          script.name,
        )}Record[];
      `);

  // snippet will pick resultset fields to type map
  const recordPieceBuilders = script.metadata.columns.map(
    (c) => `${camelCase(c.name)}: undefinedIsNull(record.${c.name})`,
  );

  // main call body
  generationBuffer.push(`
        export const ${
          script.name
        } = async (context: Context) : Promise<${pascalCase(
          script.name,
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
  return generationBuffer.join("\n");
};
