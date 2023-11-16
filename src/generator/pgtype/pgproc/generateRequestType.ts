import { PGProc } from ".";
import { Context } from "../../../context";
import { buildTypescriptParameterName } from "../../../util";

/**
 * Generate request type TS code from PG catalog definitions.
 *
 * This is a class -- not just a type in order to have a named constructor which
 * is used to dispatch to the correct server API method.
 */
export const generateRequestType = (proc: PGProc, context: Context) => {
  // build up the input arguments -- name/value pairs that are the
  const args = proc.proc.proargtypes
    .flatMap((t) => t)
    .map((oid, i) => {
      const type = context.resolveType(oid);
      return {
        name: buildTypescriptParameterName(proc, i),
        type,
        hasDefault:
          i > proc.proc.proargtypes.length - proc.proc.pronargdefaults,
      };
    });
  const argProps = args.map(
    (a) =>
      `${a.name}${a.hasDefault ? "?:" : ":"} Nullable<${
        a.type?.typescriptNameWithNamespace(context) ?? ""
      }>;`,
  );
  // there may be no parameters...
  const argumentTypeString = argProps.length
    ? `{ ${argProps.join("\n")} } `
    : `{}`;

  return `
    export interface ${proc.typescriptNameForPostgresArguments()} ${argumentTypeString};
  `;
};
