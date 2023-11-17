import { GenerationContext } from "..";
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

/**
 * Generate TypeScript SQL calls, marshalling from our parameters, into
 * a query, and out as records.
 *
 * These need to be generated as the postgres library uses a tagged
 * template literal and you can't actually use a template literal dynamically
 * to call variable parameters. So, the solution is to generate a tagged
 * template literal of the procedure call that ends up with only one
 * 'level' of template substituion.
 */
export const generateProcCalls = async (context: GenerationContext) => {
  // add everything we generate into this buffer
  const generationBuffer = [
    `
        // ⚠️ generated - do not modify ⚠️
        /* eslint-disable @typescript-eslint/no-namespace */
        import * as schemas from "./schemas";
        import type { PostgresTypecasts } from "./schemas";
        import { Context } from "@embracesql/core/src/context";
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        import { undefinedIsNull } from "@embracesql/core/src/types";
        import postgres from "postgres";
`,
  ];

  // wheel through every namespace, and every proc and generate
  context.namespaces.map((n) => {
    generationBuffer.push(`export namespace ${n.typescriptName} {`);
    n.procs.map((p) => {
      // result types back from the database
      // even functions that do not return a set -- return an array
      // from the postgres driver
      const resultsetSource = (() => {
        return `
            type ${p.typescriptName}Result = {
              ${
                p.resultsetName
              }: schemas.${p.typescriptNameForPostgresResultsetRecord(true)}
            };
            type ${p.typescriptName}Resultset = ${p.typescriptName}Result[];
            `;
      })();
      // result parser for pseudo types
      const parseResult = p.returnsPseudoTypeRecord
        ? `
            const parse${p.typescriptName}Result = (context: Context,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              result: any) : schemas.${p.typescriptNameForPostgresResultsetRecord(
                true,
              )} => {
              return context.procTypes.${
                p.postgresMarshallName
              }.parseFromPostgresIfRecord(context, result) as unknown as schemas.${p.typescriptNameForPostgresResultsetRecord(
                true,
              )};
            } 
            `
        : "";

      // now the controller
      const source = `

        ${resultsetSource}
        ${parseResult}

        export const ${
          p.typescriptName
        } = async (context: Context, parameters: schemas.${p.typescriptNameForPostgresArguments(
          true,
        )}) => {
              console.assert(parameters);
              const sql = context.sql;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const typed = sql.typed as unknown as PostgresTypecasts;
              const response = (await sql.begin(async (sql: postgres.Sql) => {
                  return await sql\`
                  SELECT
                  ${p.postgresName}${p.typescriptProcedureCallArguments(
                    context,
                  )};
                  \`
              }));
              const results = response as unknown as ${
                p.typescriptName
              }Resultset;
              const responseBody = ( ${(() => {
                // pseudo record -- which is always a table type but needs more parsing
                if (p.returnsPseudoTypeRecord) {
                  return `results.map(x => parse${p.typescriptName}Result(context, x.${p.resultsetName}))`;
                }
                // table cast of a defined type
                if (p.returnsSet) {
                  return `results.map(x => x.${p.resultsetName})`;
                }
                // pick out the scalar case
                return `results?.[0].${p.resultsetName}`;
              })()} ) as unknown as schemas.${p.typescriptNameForPostgresResultsetRecord(
                true,
              )};
              return responseBody;
        };
        `;
      generationBuffer.push(source);
    });
    generationBuffer.push(`}`);
  }),
    await fs.promises.writeFile(
      path.join(context.generateInto, `procs.ts`),
      await prettier.format(generationBuffer.join("\n"), {
        parser: "typescript",
      }),
    );
};
