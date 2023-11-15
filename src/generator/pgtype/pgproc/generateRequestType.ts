import { camelCase } from "change-case";
import { PGProc } from ".";
import { Context } from "../../../context";

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
        name: proc.proc.proargnames[i],
        type,
        hasDefault:
          i > proc.proc.proargtypes.length - proc.proc.pronargdefaults,
      };
    });
  const argProps = args.map(
    (a) =>
      `${camelCase(a.name)}${a.hasDefault ? "?:" : ":"} Nullable<${
        a.type?.typescriptNameWithNamespace(context) ?? ""
      }>;`
  );
  // there may be no parameters...
  const argumentTypeString = argProps.length
    ? `{ ${argProps.join("\n")} } `
    : `{}`;

  // build up the input getters
  const argGetters = args.map((a) => {
    const argName = camelCase(a.name);
    return `get ${argName}() { return this._args.${argName}}`;
  });

  return `
    export interface ${proc.typescriptNameForPostgresArguments()} ${argumentTypeString};

    export class ${proc.typescriptNameForRequest()}
    extends RequestMessage 
    implements ${proc.typescriptNameForPostgresArguments()} {
      _args: ${proc.typescriptNameForPostgresArguments()};
      constructor(args: ${proc.typescriptNameForPostgresArguments()}) {
        super("${proc.controllerPath}");
        this._args = args;
      }
      ${argGetters.join("\n")}
      // this exists to force disambiguate TS name resolution
      get ${proc.brandName}() { return "${proc.brandName}";}

      toJSON () {
        return this._args as unknown as JSONObject;
      }

      castResponseJSON (casts: JSONTypecastMap, o: JSONObject) {
        return new ${proc.typescriptNameForResponse()}(
          ${proc.typescriptNameForResponse()}.castResponseJSON(casts, o)
          );
      }
    }
  `;
};
