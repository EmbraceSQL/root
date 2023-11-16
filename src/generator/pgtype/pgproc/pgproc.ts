import { Context, PostgresProcTypecast, ProcRow } from "../../../context";
import { buildTypescriptParameterName } from "../../../util";
import { PGNamespace } from "../pgnamespace";
import {
  attributeSeperator,
  compositeAttribute,
  endComposite,
  interleave,
  ObjectParser,
  startComposite,
} from "../pgtypecomposite";
import { generateRequestType } from "./generateRequestType";
import { generateResponseType } from "./generateResponseType";
import { camelCase, pascalCase } from "change-case";
import { Parser, seqObj } from "parsimmon";

/**
 * Procs -- which are different than types in the postgres catalog.
 *
 * Procs are still in namespaces along with types, so make sure to
 * group and fully qualify proc names.
 */
export class PGProc implements PostgresProcTypecast {
  proc: ProcRow;
  namespace: PGNamespace;
  /**
   * Base constructions picks out the name.
   *
   * @param catalog
   */
  constructor(namespace: PGNamespace, proc: ProcRow) {
    this.namespace = namespace;
    this.proc = proc;
  }

  /**
   * The all powerful oid.
   */
  get oid() {
    return this.proc.oid;
  }

  get typescriptName() {
    return pascalCase(this.proc.proname);
  }

  get typescriptNameForDispatcher() {
    return `${this.proc.nspname}${pascalCase(this.proc.proname)}`;
  }

  typescriptNameForResponse(withNamespace = false) {
    return (
      (withNamespace ? `${this.namespace.typescriptName}.` : "") +
      `${this.typescriptName}Response`
    );
  }

  typescriptNameForPostgresArguments(withNamespace = false) {
    return (
      (withNamespace ? `${this.namespace.typescriptName}.` : "") +
      `${this.typescriptName}Arguments`
    );
  }

  typescriptNameForPostgresResultsetRecord(withNamespace = false) {
    return (
      (withNamespace ? `${this.namespace.typescriptName}.` : "") +
      `${this.typescriptName}SingleResultsetRecord`
    );
  }

  typescriptNameForPostgresResultset(withNamespace = false) {
    return (
      (withNamespace ? `${this.namespace.typescriptName}.` : "") +
      `${this.typescriptName}Resultset`
    );
  }

  get postgresName() {
    return `${this.proc.nspname}.${this.proc.proname}`;
  }

  get resultsetName() {
    return `${this.proc.proname}`;
  }

  get returnsSet() {
    return this.proc.proretset;
  }

  /**
   * Marshalling name mashes the namespace and the type into one snake string.
   *
   * This doesn't look very TypeScript-y on purpose so it stands out.
   */
  get postgresMarshallName() {
    return `${this.proc.nspname}_${this.proc.proname}`;
  }

  get returnsPseudoTypeRecord() {
    return (
      this.proc.proallargtypes.flatMap((x) => x).length >
      this.proc.proargtypes.flatMap((x) => x).length
    );
  }

  pseudoTypeAttributes(context: Context) {
    const skipThisMany = this.proc.proargtypes.flatMap((x) => x).length;
    return this.proc.proallargtypes
      .flatMap((x) => x)
      .map((oid, i) => {
        const type = context.resolveType(oid);
        return {
          name: this.proc.proargnames[i],
          type,
        };
      })
      .slice(skipThisMany);
  }

  /**
   * Pseudo types coming back from a proc are all 'record'. So -- they don't
   * have their own oid.
   *
   * So we can't hook into the postgres driver type resolution system -- but
   * we plenty well can and should parse and return a full structured type.
   *
   */
  parseFromPostgresIfRecord(context: Context, x: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    // have parsimmon pick out an object right from our metadata
    const attributes = this.pseudoTypeAttributes(context).map(
      (a) =>
        [
          camelCase(a.name),
          compositeAttribute.map((parsedAttributeText) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            a.type.parseFromPostgres(context, parsedAttributeText),
          ),
        ] as [string, Parser<string | null>],
    );

    const args = [
      startComposite,
      ...interleave(attributes, attributeSeperator),
      endComposite,
    ];

    return seqObj<ObjectParser>(...args).tryParse(x);
  }

  typescriptCastFromJSON(context: Context) {
    // each attribute needs to had along to more more casts
    const attributes = this.pseudoTypeAttributes(context).map((a) => {
      return `${camelCase(a.name)}: casts["${
        a.type.postgresName
      }"](casts, t.${camelCase(a.name)} as unknown as JSONValue) `;
    });
    return `
    const t = o as unknown as ${this.typescriptNameForPostgresResultsetRecord(
      true,
    )};
    return {
      ${attributes.join(",\n")}
    };
    `;
  }

  /**
   * TypeScript source code for:
   * - request messages that encapsulates a proc's parameters
   * - response messages from a proc's return
   *
   */
  typescriptTypeDefinition(context: Context) {
    return `
    ${generateRequestType(this, context)}
    ${generateResponseType(this, context)}
    `;
  }

  /**
   * Build up the string that is the call / argument pass to a database proc.
   *
   * @param context
   */
  typescriptProcedureCallArguments(context: Context) {
    // won't be name value pairs in the call, but instead sql marshalling
    const args = this.proc.proargtypes
      .flatMap((t) => t)
      .map((oid, i) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const type = context.resolveType(oid)!;
        return {
          name: buildTypescriptParameterName(this, i),
          type,
        };
      })
      .map(
        (a) =>
          `${a.name} => \${ typed.${a.type.postgresMarshallName}(undefinedIsNull(request.${a.name})) }`,
      );
    return `(${args.join(",")})`;
  }

  /**
   * Build up a string that is the return type from a database proc.
   *
   * Functions can return types or pseudo record types defined by the
   * pg_proc catalog.
   *
   * These can be scalars or arrays.
   *
   * @param context
   * @returns
   */
  typescriptReturnType(context: Context) {
    const resultType = context.resolveType(this.proc.prorettype);
    const typeString = this.returnsPseudoTypeRecord
      ? `${this.typescriptNameForResponse()}Record`
      : `${resultType.typescriptNameWithNamespace(context)}`;
    return typeString;
  }
}
