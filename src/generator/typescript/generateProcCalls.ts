import { Context } from "../../context";
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

/**
 * Generate TypeScript SQL calls, marshalling from our arguments, into
 * a query, and out as records.
 *
 * These need to be generated as the postgres library uses a tagged
 * template literal and you can't actually use a template literal dynamically
 * to call variable parameters. So, the solution is to generate a tagged
 * template literal of the procedure call that ends up with only one
 * 'level' of template substituion.
 *
 * @param context
 */
export const generateProcCalls = async (context: Context) => {
  // keeping things tidy, folder per namespace, file per proc
  const generationRoot = path.join(context.generateInto, "procs");
  try {
    // smoke em so we get a clean generation
    await fs.promises.rm(generationRoot, { recursive: true });
  } catch {
    // does not exist -- carry on
  }

  // separate out namespaces by folders, this is just a little bit of
  // visual organization and doesn't affect the actual doing
  const namespacesInFolders = await Promise.all(
    context.namespaces.map(async (namespace) => {
      const namespaceFolder = path.join(generationRoot, namespace.namespace);
      await fs.promises.mkdir(namespaceFolder, { recursive: true });
      return {
        namespace,
        namespaceFolder,
      };
    }),
  );

  // wheel through every namespace, and every proc and generate
  await Promise.all(
    namespacesInFolders.map(async (n) => {
      await Promise.all(
        n.namespace.procs.map(async (p) => {
          // result types back from the database
          // even functions that do not return a set -- return an array
          // from the postgres driver
          const resultsetSource = (() => {
            return `
            type Result = {
              ${
                p.resultsetName
              }: ${p.typescriptNameForPostgresResultsetRecord()}
            };
            type Resultset = Result[];
            `;
          })();
          // result parser for pseudo types
          const parseResult = p.returnsPseudoTypeRecord
            ? `
            const parseResult = (context: ContextWithJwt,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              result: any) : ${p.typescriptNameForPostgresResultsetRecord()} => {
              return context.procTypes.${
                p.postgresMarshallName
              }.parseFromPostgresIfRecord(context, result) as unknown as ${p.typescriptNameForPostgresResultsetRecord()};
            } 
            `
            : "";

          // now the controller
          const source = `
        // generated - do not modify
        import {
          ${p.typescriptNameForPostgresArguments()},
          ${p.typescriptNameForPostgresResultsetRecord()}
        }  from "../../schemas/${n.namespace.namespace}";
        import type { PostgresTypecasts } from "../../schemas/typecasts";
        import { ContextWithJwt } from "../../../context";
        import { undefinedIsNull } from "../../../types";
        import Debug from "debug";
        const debug = Debug("tumbleweed:api:${p.typescriptNameForDispatcher}")

        ${resultsetSource}
        ${parseResult}

        export const ${
          p.typescriptNameForDispatcher
        } = async (context: ContextWithJwt, request: ${p.typescriptNameForPostgresArguments()}) => {
              const sql = context.sql;
              const typed = sql.typed as unknown as PostgresTypecasts;
              const response = (await sql.begin(async sql => {
                try {
                  if (context.fullTrace) {
                    debug("enable trace");
                    await sql\`SELECT api.full_trace_on ()\`;
                  }
                  debug("set identity");
                  await sql\`SELECT domain.set_identity_with_jwt (jwt => \${JSON.stringify(context.jwt)} )\`;
                  debug("invoke function");
                  return await sql\`
                  SELECT
                  ${p.postgresName}${p.typescriptProcedureCallArguments(
                    context,
                  )};
                  \`
                } catch (e) {
                  debug("failure", e);
                  throw e;
                } finally {
                  if (context.fullTrace) {
                    debug("disable trace");
                    await sql\`SELECT api.full_trace_off ()\`;
                  }
                }
              }));
              const results = response as unknown as Resultset;
              const responseBody = ( ${(() => {
                // pseudo record -- which is always a table type but needs more parsing
                if (p.returnsPseudoTypeRecord) {
                  return `results.map(x => parseResult(context, x.${p.resultsetName}))`;
                }
                // table cast of a defined type
                if (p.returnsSet) {
                  return `results.map(x => x.${p.resultsetName})`;
                }
                // pick out the scalar case
                return `results?.[0].${p.resultsetName}`;
              })()} ) as unknown as ${p.typescriptNameForPostgresResultsetRecord()};
              return responseBody;
        };
        `;
          await fs.promises.writeFile(
            path.join(n.namespaceFolder, `${p.typescriptNameForDispatcher}.ts`),
            await prettier.format([source].join("\n"), {
              parser: "typescript",
            }),
          );
        }),
      );
    }),
  );
};
