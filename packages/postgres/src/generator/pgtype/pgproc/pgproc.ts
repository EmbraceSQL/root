import { Context, PostgresProcTypecast } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { PGTypes } from "../pgtype";
import {
  ARGUMENTS,
  AliasTypeNode,
  AttributeTypeNode,
  CompositeTypeNode,
  GenerationContext,
  ProcedureNode,
  RESULTS,
  compositeAttribute,
  parseObjectWithAttributes,
} from "@embracesql/shared";
import { camelCase } from "change-case";
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
      const procNode = new ProcedureNode(
        proc.name,
        procsNode,
        proc.proc.oid,
        proc.proc.proname,
        proc.returnsPseudoTypeRecord || proc.returnsSet,
        proc.returnsPseudoTypeRecord,
      );
      procsNode.children.push(procNode);

      // inputs
      const argumentsNode = new CompositeTypeNode(ARGUMENTS, procNode, "");
      procNode.children.push(argumentsNode);

      proc.proc.proargtypes
        .flatMap((t) => t)
        .forEach((oid, i) => {
          const type = context.database.resolveType(oid)!;
          argumentsNode.children.push(
            new AttributeTypeNode(
              argumentsNode,
              proc.proc.proargnames[i] ?? "",
              i,
              type,
              i > proc.proc.proargtypes.length - proc.proc.pronargdefaults,
            ),
          );
        });
      // outputs
      procNode.children.push(
        new AliasTypeNode(RESULTS, procReturnType, procNode),
      );
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

  get returnsSet() {
    return this.proc.proretset;
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

    const type = new CompositeTypeNode(
      this.typescriptName,
      schema.types,
      this.oid,
    );
    this.pseudoTypeAttributes(context).forEach((a, i) =>
      type.children.push(new AttributeTypeNode(type, a.name, i, a.type, true)),
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
}
