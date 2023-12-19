import { PGProc } from "./pgproc";
import { GenerationContext } from "@embracesql/shared";
import { camelCase } from "change-case";

/**
 * Generate return type TS code from PG catalog definitions.
 */
export const generateResponseType = (
  proc: PGProc,
  context: GenerationContext,
) => {
  const recordString = (() => {
    // build up the response type -- treating sets as arrays
    // -- there might be a pseudo-type record
    if (proc.returnsPseudoTypeRecord) {
      const recordAttributes = proc
        .pseudoTypeAttributes(context)
        .map(
          (a) =>
            `${camelCase(a.name)}: ${a.type?.typescriptNamespacedName ?? ""};`,
        );
      return `
        interface ${proc.typescriptNameForResponse()}Record {
           ${recordAttributes.join("\n")}
        }
        export type ${proc.typescriptNameForPostgresResultsetRecord()} =${proc.typescriptNameForResponse()}Record;
        `;
    } else {
      // just an alias for the return type -- procs always 'return arrays' from
      // the postgres library, but in the SQL in the DB -- the idea is it returns one record
      return `
        export type ${proc.typescriptNameForPostgresResultsetRecord()} = ${proc.typescriptReturnType(
          context,
        )};
        `;
    }
  })();

  return `
    ${recordString}
    export type ${proc.typescriptNameForPostgresResultset()} = ${proc.typescriptNameForPostgresResultsetRecord()}[];
  `;
};
