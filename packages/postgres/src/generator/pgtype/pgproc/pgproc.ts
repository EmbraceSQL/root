import { Context, PostgresProcTypecast } from "../../../context";
import { groupBy } from "../../../util";
import { PGCatalogType } from "../pgcatalogtype";
import { PGTypes } from "../pgtype";
import {
  PARAMETERS,
  AttributeNode,
  CompositeTypeNode,
  GenerationContext,
  ProcedureNode,
  compositeAttribute,
  parseObjectWithAttributes,
  ResultsNode,
  ASTKind,
  ParametersNode,
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
  procsByNamespace: Record<string, PGProc[]>;
  pseudoTypesByOid: Record<number, PGProcPseudoType>;
  private constructor(context: PGProcsContext, procRows: ProcRow[]) {
    this.procs = procRows.map((r) => new PGProc(context, r, ""));
    this.pseudoTypesByOid = Object.fromEntries(
      this.procs.map((t) => [t.proc.oid, new PGProcPseudoType(t)]),
    );
    this.procsByNamespace = groupBy(this.procs, (p) => p.nspname);
  }

  async loadAST(context: GenerationContext) {
    for (const proc of this.procs) {
      const schemaNode = context.database.resolveSchema(proc.nspname);
      const procsNode = schemaNode.procedures;
      const procPseudoType = this.pseudoTypesByOid[proc.proc.oid];
      const returnsAttributes = procPseudoType.pseudoTypeAttributes(context);
      // by the time we are generating procedures, we have already made
      // a first pass over types, so the result type should be available
      // hence the !
      const resultsType = (() => {
        if (returnsAttributes.length === 0) {
          // this has a plain single type return type
          return context.database.resolveType(proc.proc.prorettype);
        } else if (returnsAttributes.length === 1) {
          // just need the single type as is
          // single attribute, table of one column which is
          // array like results
          return returnsAttributes[0].type;
        } else {
          // really using this pseudo type, so register it with the AST
          return procPseudoType.loadAST(context);
        }
      })();
      const node = new ProcedureNode(
        proc.name,
        procsNode,
        proc.proc.oid,
        proc.proc.proname,
        proc.returnsPseudoType || proc.returnsSet,
        resultsType.kind === ASTKind.CompositeType,
        proc.returnsPseudoType,
      );
      // outputs
      new ResultsNode(node, resultsType);

      // inputs -- which may have no attributes
      // this type won't exist in the database catalog - we're treating
      // all the parameters which are in a flat argument list style
      // as a structured object single 'parameter'
      const parametersType = new CompositeTypeNode(
        PARAMETERS,
        node,
        "", // no identifier, this is not a type in the database
      );

      proc.proc.proargtypes
        .flatMap((t) => t)
        .forEach((oid, i) => {
          const type = context.database.resolveType(oid)!;
          new AttributeNode(
            parametersType,
            proc.proc.proargnames[i]
              ? proc.proc.proargnames[i]
              : `argument_${i}`,
            i,
            type,
            i > proc.proc.proargtypes.length - proc.proc.pronargdefaults,
            true,
            proc.proc.proargnames[i] !== undefined,
          );
        });
      // inputs
      new ParametersNode(node, parametersType);
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
    public comment: string,
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

  get returnsPseudoType() {
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
  parseFromPostgresIfPseudoType(context: Context, x: unknown) {
    const attributes = new PGProcPseudoType(this).pseudoTypeAttributes(context);
    // only one attribute, then there is no composite type - just a setof a single type
    // this is a peculiarity in the postgres type system in my opinion -- why have
    // a composite of one attribute instead of just the attribute as the type?
    if (attributes.length === 1) {
      return x;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    // have parsimmon pick out an object right from our metadata
    const parseAttributes = attributes.map((a) => {
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

    return parseObjectWithAttributes(parseAttributes, x as string);
  }
}

/**
 * This isn't a real catalog type, it's inferred from the parameters
 * by picking apart the 'input' and 'output' parameters.
 */
export class PGProcPseudoType extends PGCatalogType {
  constructor(public proc: PGProc) {
    super(proc.proc.oid, proc.proc.nspname, `${proc.proc.proname}_results`);
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.nspname);
    const returnsAttributes = this.pseudoTypeAttributes(context);
    // multiple attributes creates a composite
    const type = new CompositeTypeNode(
      this.proc.name,
      schema.types,
      this.oid,
      this.comment,
    );
    returnsAttributes.forEach(
      (a, i) => new AttributeNode(type, a.name, i, a.type, true, true),
    );
    context.database.registerType(type.id, type);
    return type;
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
