import { Context, PostgresProcTypecast } from "../../../context";
import { buildParameterName } from "../../../util";
import { PGCatalogType } from "../pgcatalogtype";
import { PGNamespace } from "../pgnamespace";
import { PGTypes } from "../pgtype";
import {
  GenerationContext,
  ProcedureArgumentNode,
  ProcedureNode,
  ProcedureResultTypeNode,
  compositeAttribute,
  parseObjectWithAttributes,
} from "@embracesql/shared";
import { camelCase, pascalCase } from "change-case";
import hash from "object-hash";
import parsimmon from "parsimmon";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type ProcRow = {
  oid: number;
  proname: string;
  nspname: string;
  proargtypes: number[];
  proallargtypes: number[];
  proargnames: string[];
  prorettype: number;
  proretset: boolean;
  pronargdefaults: number;
  overloads: number;
};

type PGProcsContext = { typeCatalog: PGTypes };

/**
 * All stored procedures and functions.
 * These create individual callables to the database and serve as a way
 * to define a database-as-API.
 *
 */
export class PGProcs {
  static async factory(context: PGProcsContext, sql: Sql) {
    return new PGProcs(
      context,
      (await sql.file(
        path.join(__dirname, "pgprocs.sql"),
      )) as unknown as ProcRow[],
    );
  }

  procs: PGProc[];
  private constructor(context: PGProcsContext, procRows: ProcRow[]) {
    this.procs = procRows.map((r) => new PGProc(context, r));
  }

  async loadAST(context: GenerationContext) {
    for (const proc of this.procs) {
      const schemaNode = context.database.resolveSchema(proc.nspname);
      const procsNode = schemaNode.procedures;
      const procReturnType = context.database.resolveType(
        proc.returnsPseudoTypeRecord ? proc.proc.oid : proc.proc.prorettype,
      )!;
      const procNode = new ProcedureNode(proc.name, procsNode, procReturnType);
      proc.proc.proargtypes
        .flatMap((t) => t)
        .forEach((oid, i) => {
          const type = context.database.resolveType(oid)!;
          procNode.children.push(
            new ProcedureArgumentNode(
              buildParameterName(proc, i),
              procNode,
              type,
              i > proc.proc.proargtypes.length - proc.proc.pronargdefaults,
            ),
          );
        });
      procsNode.children.push(procNode);
      proc.procNode = procNode;
    }
  }
}

/**
 * Procs -- which are different than types in the postgres catalog.
 *
 * Procs are still in namespaces along with types, so make sure to
 * group and fully qualify proc names.
 */
export class PGProc implements PostgresProcTypecast {
  // TODO: remove this shim
  public procNode?: ProcedureNode;

  constructor(
    context: PGProcsContext,
    public proc: ProcRow,
  ) {}

  get overloaded() {
    return Number.parseInt(`${this.proc.overloads}`) > 1;
  }

  get nspname() {
    return this.proc.nspname;
  }

  get name() {
    const seed = this.proc.proname;
    const stem = hash(this.proc.proargtypes.flatMap((x) => x)).substring(0, 4);
    return this.overloaded ? `${seed}_${stem}` : seed;
  }

  get typescriptName() {
    return pascalCase(this.name);
  }

  get typescriptNameForNamespace() {
    return PGNamespace.typescriptName(this.proc.nspname);
  }

  typescriptNameForResponse(withNamespace = false) {
    return (
      (withNamespace ? `${this.typescriptNameForNamespace}.` : "") +
      `${this.typescriptName}Response`
    );
  }

  typescriptNameForPostgresArguments(withNamespace = false) {
    return (
      (withNamespace ? `${this.typescriptNameForNamespace}.Procedures.` : "") +
      `${this.typescriptName}.Arguments`
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
    return `${this.proc.nspname}_${this.name}`;
  }

  get returnsPseudoTypeRecord() {
    return (
      this.proc.proallargtypes.flatMap((x) => x).length >
      this.proc.proargtypes.flatMap((x) => x).length
    );
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
    const attributes = new PGProcPseudoType(this)
      .pseudoTypeAttributes(context)
      .map((a) => {
        // need to postgres side type to get the postgres protocol parser
        const postgresAttribute = context.resolveType(a.type?.id as number);
        return [
          camelCase(a.name),
          compositeAttribute.map((parsedAttributeText) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            postgresAttribute.parseFromPostgres(context, parsedAttributeText),
          ),
        ] as [string, parsimmon.Parser<string | null>];
      });

    return parseObjectWithAttributes(attributes, x);
  }

  /**
   * Build up the string that is the call / argument pass to a database proc.
   */
  typescriptProcedureCallArguments(context: Context) {
    // won't be name value pairs in the call, but instead sql marshalling
    const args = this.proc.proargtypes
      .flatMap((t) => t)
      .map((oid, i) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const type = context.resolveType(oid)!;
        return {
          name: buildParameterName(this, i),
          namedParameter: this.proc.proargnames[i] !== undefined,
          type,
        };
      })
      .map(
        (a) =>
          (a.namedParameter ? `${a.name} =>` : ``) +
          ` \${ typed.${
            a.type.postgresMarshallName
          }(undefinedIsNull(parameters.${camelCase(a.name)})) }`,
      );
    return `(${args.join(",")})`;
  }
}

/**
 * This isn't a real catalog type, it's inferred from the parameters
 * by picking apart the 'input' and 'output' parameters.
 */
export class PGProcPseudoType extends PGCatalogType {
  constructor(public proc: PGProc) {
    super({
      oid: proc.proc.oid,
      nspname: proc.proc.nspname,
      typname: `${proc.proc.proname}_results`,
      typbasetype: 0,
      typelem: 0,
      rngsubtype: 0,
      typcategory: "",
      typoutput: "",
      typrelid: 0,
      typtype: "",
    });
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.catalog.nspname);

    const type = new ProcedureResultTypeNode(
      this.typescriptName,
      this.postgresMarshallName,
      schema.types,
      this.oid,
      this,
    );
    context.database.registerType(type.id, type);
  }

  pseudoTypeAttributes(context: GenerationContext) {
    const skipThisMany = this.proc.proc.proargtypes.flatMap((x) => x).length;
    return this.proc.proc.proallargtypes
      .flatMap((x) => x)
      .map((oid, i) => {
        const type = context.database.resolveType(oid)!;
        return {
          name: this.proc.proc.proargnames[i],
          type,
        };
      })
      .slice(skipThisMany);
  }

  typescriptTypeDefinition(context: GenerationContext): string {
    console.assert(context);
    const recordAttributes = this.pseudoTypeAttributes(context).map(
      (a) => `${camelCase(a.name)}: ${a.type.typescriptNamespacedName};`,
    );
    return ` { ${recordAttributes.join("\n")} } `;
  }
}
