import { camelCase } from "change-case";
import { PGProc } from ".";
import { Context } from "../../../context";

/**
 * Generate return type TS code from PG catalog definitions.
 */
export const generateResponseType = (proc: PGProc, context: Context) => {
  const recordString = (() => {
    // build up the response type -- treating sets as arrays
    // -- there might be a pseudo-type record
    if (proc.returnsPseudoTypeRecord) {
      const recordAttributes = proc
        .pseudoTypeAttributes(context)
        .map(
          (a) =>
            `${camelCase(a.name)}: ${
              a.type?.typescriptNameWithNamespace(context) ?? ""
            };`
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
        context
      )};
        `;
    }
  })();
  const resultsCastToTypescript = `${proc.typescriptNameForPostgresResultsetRecord()}${
    proc.returnsSet ? "[]" : ""
  }`;
  const resultType = context.resolveType(proc.proc.prorettype);

  return `
    ${recordString}
    export type ${proc.typescriptNameForPostgresResultset()} = ${proc.typescriptNameForPostgresResultsetRecord()}[];


    export class ${proc.typescriptNameForResponse()} extends ResponseMessage {
      private _value: ${resultsCastToTypescript};
      constructor(value: ${resultsCastToTypescript}) {
        super();
        this._value = value;
      }
      // this exists to force disambiguate TS name resolution
      get ${proc.brandName}() { return "${proc.brandName}";}
      // get the value -- with type wrappings
      get value() {
        return this._value;
      }

      static castResponseJSON(casts: JSONTypecastMap, o: JSONValue) : ${resultsCastToTypescript}  {
        const cast = casts["${
          proc.returnsPseudoTypeRecord
            ? proc.postgresName
            : resultType.postgresName
        }"];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
        const postCast = ${
          proc.returnsSet
            ? "(o as JSONValue[]).map(oo => cast(casts, oo))"
            : "cast(casts, o)"
        };

        return postCast as unknown as ${resultsCastToTypescript};
      }
    }
  `;
};
