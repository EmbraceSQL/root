import {
  GeneratesTypeScript,
  GenerationContext,
  cleanIdentifierForTypescript,
} from ".";
import { DispatchOperation } from "./index";
import { camelCase, pascalCase } from "change-case";
import * as fs from "fs";
import * as path from "path";

/**
 * Common name for return results.
 *
 * When you are looking for results... look here 🤪.
 */
export const RESULTS = "results";

/**
 * Common name for passed in parameters used to filter and search.
 *
 * Think -- things that go in a WHERE clause.
 */
export const ARGUMENTS = "parameters";
// TODO rename to PARAMETERS

/**
 * Common name for passed in values to set or read.
 *
 * Think -- thinks that go in a SELECT <columns> clause
 * or in the SET <column>=<value> clause.
 */
export const VALUES = "values";

/**
 * Enumeration tags for quick type discrimination via `switch`.
 *
 * These will use conventional ANSI SQL naming rather than database
 * specific catalog naming.
 */
export enum ASTKind {
  Node,
  Database,
  Schema,
  Tables,
  Table,
  Column,
  Index,
  IndexColumn,
  Types,
  Type,
  Enum,
  CreateOperation,
  ReadOperation,
  UpdateOperation,
  DeleteOperation,
  Scripts,
  ScriptFolder,
  Script,
  Procedures,
  Procedure,
  ProcedureArgument,
  CompositeType,
  AliasType,
  AttributeType,
  DomainType,
}

interface DatabaseNamed {
  /**
   * Fully qualified name as expected to exist in the database.
   *
   * Given that we are connecting to a single database, the names
   * are of the form <schema>.<table>
   */
  databaseName: string;
}

/**
 * A named type -- it's column like.
 */
export interface NamedType {
  name: string;
  type: TypeNode;
}

/**
 * Use this to visit and generate code.
 */
interface VisitationHandler<T extends ASTNode> {
  (context: GenerationContext, node: T): Promise<string>;
}

/**
 * Visitation has a scoped:
 * - before
 * - recursive visitation
 * - after
 *
 * This lets you create blocked scope generation easily.
 */
export interface Visitor<T extends ASTNode> {
  before?: VisitationHandler<T>;
  during?: VisitationHandler<T>;
  after?: VisitationHandler<T>;
}

/**
 * And a big old map kinds to types.
 */
export type ASTKindMap = {
  [ASTKind.Node]: ASTNode;
  [ASTKind.Database]: DatabaseNode;
  [ASTKind.Schema]: SchemaNode;
  [ASTKind.Table]: TableNode;
  [ASTKind.Tables]: TableNode;
  [ASTKind.Column]: ColumnNode;
  [ASTKind.Index]: IndexNode;
  [ASTKind.IndexColumn]: IndexColumnNode;
  [ASTKind.Types]: TypesNode;
  [ASTKind.Type]: TypeNode;
  [ASTKind.Enum]: EnumNode;
  [ASTKind.CreateOperation]: CreateOperationNode;
  [ASTKind.ReadOperation]: ReadOperationNode;
  [ASTKind.UpdateOperation]: UpdateOperationNode;
  [ASTKind.DeleteOperation]: DeleteOperationNode;
  [ASTKind.Scripts]: ScriptsNode;
  [ASTKind.ScriptFolder]: ScriptFolderNode;
  [ASTKind.Script]: ScriptNode;
  [ASTKind.Procedures]: ProceduresNode;
  [ASTKind.Procedure]: ProcedureNode;
  [ASTKind.ProcedureArgument]: ProcedureArgumentNode;
  [ASTKind.CompositeType]: CompositeTypeNode;
  [ASTKind.AttributeType]: AttributeTypeNode;
  [ASTKind.AliasType]: AliasTypeNode;
  [ASTKind.DomainType]: DomainTypeNode;
};

/**
 * Node type predicate.
 */
export function isNodeType<T extends ASTKind>(
  node: ASTNode | undefined,
  kind: T,
): node is ASTKindMap[T] {
  return node?.kind === kind;
}

/**
 * Mapping to set up visitors.
 */
export type VisitorMap = {
  [Kind in keyof ASTKindMap]?: Visitor<ASTKindMap[Kind]>;
};

/**
 * Classic AST, everything is at least a node with a `kind`
 * and optional `parent`.
 *
 * The root of the tree will have `parent === undefined`.
 */
export abstract class ASTNode {
  constructor(
    public kind: ASTKind,
    public parent?: ContainerNode,
  ) {
    ASTNode._runningObjectTable.push(this);
    parent?.add(this);
  }

  // track all ast nodes created
  static _runningObjectTable: ASTNode[] = [];

  static verify() {
    // nodes with parents need parents to know this child
    for (const node of ASTNode._runningObjectTable) {
      if (node.parent) {
        console.assert(
          node.parent.includes(node),
          `${ASTKind[node.kind]} ${(node as NamedASTNode).name} not in ${
            node.parent.typescriptNamespacedName
          }`,
        );
      }
    }
  }

  async visit<T extends this>(context: GenerationContext): Promise<string> {
    const generationBuffer = [""];
    const visitor = context.handlers?.[this.kind] as Visitor<typeof this>;
    generationBuffer.push(
      visitor?.before ? await visitor?.before(context, this as T) : "",
    );

    generationBuffer.push(
      visitor?.after ? await visitor?.after(context, this as T) : "",
    );

    return generationBuffer.filter((line) => line).join("\n");
  }

  lookUpTo<T extends ASTKind>(kind: T): ASTKindMap[T] | undefined {
    if (isNodeType(this.parent, kind)) return this.parent;
    else return this.parent?.lookUpTo(kind);
  }
}

/**
 * Nodes often have names -- nodes that are important enough
 * to have a change to appear in the generated source as types.
 */
export abstract class NamedASTNode extends ASTNode {
  constructor(
    public name: string,
    kind: ASTKind,
    parent?: ContainerNode,
  ) {
    super(kind, parent);
  }

  get typescriptName() {
    return `${pascalCase(this.name)}`;
  }

  get typescriptNamespacedName(): string {
    if (this.parent) {
      return `${this.parent.typescriptNamespacedName}.${this.typescriptName}`;
    } else {
      return `${this.typescriptName}`;
    }
  }

  get typescriptPropertyName() {
    return camelCase(cleanIdentifierForTypescript(this.name));
  }

  get typescriptNamespacedPropertyName(): string {
    if (this.parent) {
      return `${this.parent.typescriptNamespacedName}.${this.typescriptPropertyName}`;
    } else {
      return `${this.typescriptPropertyName}`;
    }
  }
}

/**
 * Represents a database as an AST for code generation.
 */
export abstract class ContainerNode extends NamedASTNode {
  children: ASTNode[] = [];
  constructor(name: string, kind: ASTKind, parent?: ContainerNode) {
    super(name, kind, parent);
  }

  add(child: ASTNode) {
    this.children.push(child);
  }

  includes(child: ASTNode) {
    return this.children.includes(child);
  }

  async visit<T extends this>(context: GenerationContext): Promise<string> {
    const generationBuffer = [""];
    const visitor = context.handlers?.[this.kind] as Visitor<typeof this>;
    generationBuffer.push(
      visitor?.before ? await visitor?.before(context, this as T) : "",
    );
    generationBuffer.push(
      visitor?.during ? await visitor?.during(context, this as T) : "",
    );

    // and here is that recursion
    for (const child of this.children) {
      generationBuffer.push(await child.visit(context));
    }

    generationBuffer.push(
      visitor?.after ? await visitor?.after(context, this as T) : "",
    );

    return generationBuffer.filter((line) => line).join("\n");
  }
}

/**
 * Represents a database as an AST for code generation.
 */
export class DatabaseNode extends ContainerNode {
  // keep track of all types, these get used across schemas
  private types = new Map<string | number, TypeNode>();
  private tables = new Map<string | number, TableNode>();

  constructor(public name: string) {
    super(name, ASTKind.Database);
  }

  registerType(id: string | number, type: AbstractTypeNode) {
    const existing = this.types.get(`${id}`);
    if (existing) return existing;
    this.types.set(`${id}`, type);
    return type;
  }

  resolveType<T extends AbstractTypeNode>(id: string | number) {
    return this.types.get(`${id}`) as T;
  }

  registerTable(id: string | number, table: TableNode) {
    this.tables.set(`${id}`, table);
  }

  resolveTable(id: string | number) {
    return this.tables.get(`${id}`);
  }

  resolveSchema(name: string) {
    const exists = this.children.find(
      (c) => (c as unknown as NamedASTNode)?.name === name,
    ) as SchemaNode;
    if (exists) return exists;
    const schema = new SchemaNode(this, name);
    return schema;
  }
}

/**
 * Represents a single schema of a single database.
 *
 * This is the fundamental 'container' type that scopes a database
 * AST, particularly since there are not nested SCHEMA in ANSI SQL.
 */
export class SchemaNode extends ContainerNode {
  constructor(
    database: DatabaseNode,
    public name: string,
  ) {
    super(name, ASTKind.Schema, database);
    new TypesNode(this);
    new ProceduresNode(this);
  }

  get types() {
    return this.children.find((c) => c.kind === ASTKind.Types) as TypesNode;
  }

  get procedures() {
    return this.children.find(
      (c) => c.kind === ASTKind.Procedures,
    ) as ProceduresNode;
  }

  async visit(context: GenerationContext): Promise<string> {
    if (context?.skipSchemas?.includes(this.name)) {
      return "";
    } else {
      return super.visit(context);
    }
  }

  dispatchName(operation: DispatchOperation = "") {
    return `${pascalCase(this.name)}${operation}`;
  }

  get typescriptNamespacedName() {
    // not returning the database above, schema serves as a backstop
    return this.typescriptName;
  }
}

/**
 * Collects all types in a schema in a database.
 */
export class TypesNode extends ContainerNode {
  constructor(public schema: SchemaNode) {
    super("Types", ASTKind.Types, schema);
  }
}

/**
 * Shared base for type nodes.
 *
 * These differ on their enumerated type kind
 */
export class AbstractTypeNode extends ContainerNode {
  constructor(
    name: string,
    kind: ASTKind,
    parent: ContainerNode,
    public id: string | number,
    private parser?: GeneratesTypeScript,
  ) {
    super(name, kind, parent);
  }

  typescriptTypeParser(context: GenerationContext) {
    return this.parser?.typescriptTypeParser(context);
  }

  typescriptTypeDefinition(context: GenerationContext) {
    return this.parser?.typescriptTypeDefinition(context);
  }
}

/**
 * Represents a single type from a database.
 */
export class TypeNode extends AbstractTypeNode {
  constructor(
    name: string,
    types: TypesNode,
    public id: string | number,
    parser: GeneratesTypeScript,
  ) {
    super(name, ASTKind.Type, types, id, parser);
  }
}

/**
 * Represents a single enum from a database.
 */
export class EnumNode extends AbstractTypeNode {
  constructor(
    name: string,
    public values: string[],
    types: TypesNode,
    public id: string | number,
    parser: GeneratesTypeScript,
  ) {
    super(name, ASTKind.Enum, types, id, parser);
  }
}

/**
 * Collects all tables in a schema in a database.
 */
export class TablesNode extends ContainerNode {
  constructor(public schema: SchemaNode) {
    super("Tables", ASTKind.Tables, schema);
  }
}

/**
 * Represents a single table in a schema in a database.
 *
 * This is for 'real' tables, the normal old thing you would call
 * a table in SQL. Not a view, not a reltype, but a place were rows go to 🛌.
 */
export class TableNode extends ContainerNode implements DatabaseNamed {
  constructor(
    public tables: TablesNode,
    public name: string,
    public type: CompositeTypeNode,
  ) {
    super(name, ASTKind.Table, tables);
    new CreateOperationNode(this);
  }

  get databaseName() {
    return `${this.tables.schema.name}.${this.name}`;
  }

  get createOperation() {
    return this.children.find(
      (c) => c.kind === ASTKind.CreateOperation,
    ) as CreateOperationNode;
  }

  get primaryKey(): IndexNode | undefined {
    return this.children.find((n) => (n as IndexNode).primaryKey) as IndexNode;
  }

  get columnsInPrimaryKey(): ColumnNode[] {
    const primaryKeyNames = this.primaryKey
      ? this.primaryKey.columns.map((c) => c.name)
      : [];
    return this.allColumns.filter((a) => primaryKeyNames.includes(a.name));
  }

  get columnsNotInPrimaryKey(): ColumnNode[] {
    const primaryKeyNames = this.primaryKey
      ? this.primaryKey.columns.map((c) => c.name)
      : [];
    return this.allColumns.filter((a) => !primaryKeyNames.includes(a.name));
  }

  get optionalColumns(): ColumnNode[] {
    return this.children
      .filter<ColumnNode>((n): n is ColumnNode => isNodeType(n, ASTKind.Column))
      .filter((c) => c.hasDefault);
  }

  get allColumns(): ColumnNode[] {
    return this.children.filter<ColumnNode>((n): n is ColumnNode =>
      isNodeType(n, ASTKind.Column),
    );
  }
}

/**
 * A single column on a single table in a schema in a database.
 */
export class ColumnNode extends ContainerNode {
  constructor(
    table: TableNode,
    public name: string,
    public type: TypeNode,
    public hasDefault: boolean,
    public allowsNull: boolean,
  ) {
    super(name, ASTKind.Column, table);
  }

  get schema() {
    return this.parent?.parent?.parent as SchemaNode;
  }

  get tables() {
    return this.parent?.parent as TablesNode;
  }

  get table() {
    return this.parent as TableNode;
  }
}

/**
 * A single index on a single table in a schema in a database.
 */
export class IndexNode extends ContainerNode {
  constructor(
    public table: TableNode,
    public name: string,
    public unique: boolean,
    public primaryKey: boolean,
    attributes: NamedType[],
  ) {
    super(name, ASTKind.Index, table);
    attributes.forEach((a) => new IndexColumnNode(this, a.name, a.type));
    // important that the operations go after the attributes
    // so that we can have a well defined `typescriptName`
    new ReadOperationNode(this);
    new UpdateOperationNode(this);
    new DeleteOperationNode(this);
  }

  get typescriptName() {
    return `By${pascalCase(
      this.columns.map((c) => c.typescriptName).join("_"),
    )}`;
  }

  get columns(): IndexColumnNode[] {
    return this.children.filter(
      (n) => n.kind === ASTKind.IndexColumn,
    ) as IndexColumnNode[];
  }
}

/**
 * A single column on a single index in a schema in a database.
 */
export class IndexColumnNode extends ContainerNode implements NamedType {
  constructor(
    public index: IndexNode,
    public name: string,
    public type: TypeNode,
  ) {
    super(name, ASTKind.IndexColumn, index);
  }
}

// operations

export abstract class OperationNode extends ContainerNode {
  get argumentsType() {
    return this.children
      .filter<CompositeTypeNode>(
        (c): c is CompositeTypeNode => c.kind === ASTKind.CompositeType,
      )
      .find((c) => c.name === ARGUMENTS);
  }

  // TODO: remove
  get valuesType() {
    const typeNode = this.children
      .filter<AbstractTypeNode>((c): c is AbstractTypeNode =>
        [ASTKind.CompositeType, ASTKind.AliasType].includes(c.kind),
      )
      .find((c) => c.name === VALUES);
    // resolve type alias
    return typeNode?.kind === ASTKind.AliasType
      ? (typeNode as AliasTypeNode).type
      : typeNode;
  }
}

/**
 * Function like operations -- scripts and procedures.
 */
export abstract class FunctionOperationNode extends OperationNode {
  constructor(
    name: string,
    kind: ASTKind,
    parent: ContainerNode,
    public returnsMany: boolean,
  ) {
    // always returnsMany
    super(name, kind, parent);
  }

  /**
   * Operations have results, which are each of this type.
   *
   * An operation can return either a single value or arrary of this type.
   */
  get resultsType() {
    return this.children
      .filter<AbstractTypeNode>((c): c is AbstractTypeNode =>
        [ASTKind.CompositeType, ASTKind.AliasType].includes(c.kind),
      )
      .find((c) => c.name === RESULTS);
  }
  /**
   * The results type might be an alias -- resolve it to the target
   * final type.
   */
  get resultsResolvedType() {
    const typeNode = this.resultsType;
    // resolve type alias to a composite
    return typeNode?.kind === ASTKind.AliasType
      ? (typeNode as AliasTypeNode).type
      : typeNode;
  }
}

/**
 * Operation to create a new row in a table. Each table gets one.
 */
export class CreateOperationNode extends OperationNode {
  constructor(public table: TableNode) {
    super("create", ASTKind.CreateOperation, table);
  }
}

/**
 * Shared base class for index operations.
 *
 * This establishes a naming protocol per index.
 */
export abstract class IndexOperationNode extends OperationNode {
  constructor(
    name: string,
    kind: ASTKind,
    public index: IndexNode,
  ) {
    super(name, kind, index);
  }

  // TODO: remove
  get typescriptNamespacedName() {
    // bypass to the table to not get a doubling of the apparent
    // index name
    return `${this.index.table.typescriptNamespacedName}.${this.typescriptName}`;
  }
}

/**
 * Operation to read row(s) by index.
 */
export class ReadOperationNode extends IndexOperationNode {
  constructor(public index: IndexNode) {
    super("read", ASTKind.ReadOperation, index);
  }
}

/**
 * Operation to delete row(s) by index.
 */
export class DeleteOperationNode extends IndexOperationNode {
  constructor(public index: IndexNode) {
    super("delete", ASTKind.DeleteOperation, index);
  }
}

/**
 * Update row(s) by index.
 */
export class UpdateOperationNode extends IndexOperationNode {
  constructor(public index: IndexNode) {
    super("update", ASTKind.UpdateOperation, index);
  }
}

/**
 * Collects scripts into a hierarchy sourced from a
 * folder tree on disk.
 */
export class ScriptsNode extends ContainerNode {
  static SCRIPTS = "Scripts";
  /**
   * Loading up the scripts node by file system traversal.
   *
   * Once done, all scripts will be visited and loaded into the AST.
   */
  static async loadAST(context: GenerationContext) {
    if (context.sqlScriptsFrom) {
      const rootPath = path.parse(path.join(context.sqlScriptsFrom));
      const scriptsNode = new ScriptsNode(context.database, rootPath);
      await ScriptFolderNode.loadAST(context, rootPath, scriptsNode);
      return scriptsNode;
    } else {
      return undefined;
    }
  }
  constructor(
    public database: DatabaseNode,
    public path: path.ParsedPath,
  ) {
    super("Scripts", ASTKind.Scripts, database);
  }

  get typescriptNamespacedName() {
    // not returning the database above, scripts serves as a backstop
    return this.typescriptName;
  }
}

/**
 * A single folder of scripts on disk.
 */
export class ScriptFolderNode extends ContainerNode {
  /**
   * Asynchronous factory builds from a folder path on disk.
   */
  static async loadAST(
    context: GenerationContext,
    searchPath: path.ParsedPath,
    addToNode: ContainerNode,
  ) {
    // reading the whole directory
    const inPath = await fs.promises.readdir(
      path.join(searchPath.dir, searchPath.base),
      {
        withFileTypes: true,
      },
    );
    for (const entry of inPath) {
      if (entry.isDirectory()) {
        const folder = new ScriptFolderNode(
          path.parse(path.join(entry.path, entry.name)),
          addToNode,
        );
        await ScriptFolderNode.loadAST(context, folder.path, folder);
      } else if (entry.name.endsWith(".sql")) {
        await ScriptNode.loadAST(
          context,
          path.parse(path.join(entry.path, entry.name)),
          addToNode,
        );
      }
    }
  }

  constructor(
    public path: path.ParsedPath,
    parent: ContainerNode,
  ) {
    super(path.name, ASTKind.ScriptFolder, parent);
  }
}

/**
 * A single script that is source from a .sql file on disk.
 */
export class ScriptNode extends FunctionOperationNode {
  /**
   * Asynchronous factory builds from a sql file on disk.
   */
  static async loadAST(
    context: GenerationContext,
    scriptPath: path.ParsedPath,
    addToNode: ContainerNode,
  ) {
    console.assert(context);
    new ScriptNode(
      scriptPath,
      await fs.promises.readFile(path.join(scriptPath.dir, scriptPath.base), {
        encoding: "utf8",
      }),
      addToNode,
    );
  }

  constructor(
    public path: path.ParsedPath,
    public script: string,
    parent: ContainerNode,
  ) {
    // always returnsMany
    super(path.name, ASTKind.Script, parent, true);
  }
}

/**
 * Collects all procedures in a schema in a database.
 */
export class ProceduresNode extends ContainerNode {
  constructor(public schema: SchemaNode) {
    super("Procedures", ASTKind.Procedures, schema);
  }
}

/**
 * A single stored procedure or function.
 */
export class ProcedureNode
  extends FunctionOperationNode
  implements DatabaseNamed
{
  constructor(
    name: string,
    public procedures: ProceduresNode,
    public id: string | number,
    public nameInDatabase: string,
    returnsMany: boolean,
    public isPseudoType: boolean,
  ) {
    super(name, ASTKind.Procedure, procedures, returnsMany);
  }

  get databaseName() {
    return `${this.procedures.schema.name}.${this.nameInDatabase}`;
  }
}

/**
 * A single argument to a procedure. This is a 'named type'
 */
export class ProcedureArgumentNode extends NamedASTNode {
  constructor(
    name: string,
    public procedure: ProcedureNode,
    public type: TypeNode,
    public hasDefault: boolean,
  ) {
    super(name, ASTKind.ProcedureArgument, procedure);
  }
}

/**
 * A composite type is built of named attributes, each with their own type.
 */
export class CompositeTypeNode extends AbstractTypeNode {
  constructor(name: string, parent: ContainerNode, id: string | number) {
    super(name, ASTKind.CompositeType, parent, id);
  }

  get attributes() {
    return this.children.filter<AttributeTypeNode>(
      (c): c is AttributeTypeNode => c.kind === ASTKind.AttributeType,
    );
  }
  override typescriptTypeDefinition(
    context: GenerationContext,
  ): string | undefined {
    console.assert(context);
    const recordAttributes = this.children
      .filter<AttributeTypeNode>(
        (c): c is AttributeTypeNode => c.kind === ASTKind.AttributeType,
      )
      .map(
        (a) =>
          `${a.typescriptPropertyName}: ${a.type.typescriptNamespacedName};`,
      );
    return ` { ${recordAttributes.join("\n")} } `;
  }

  override typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    // parsing on the client side needs to turn 'loose' json types
    // into our database mapped types -- for example -- dates

    // parsing on the server side -- the database driver is expected to have
    // already done the parsing, so this is a no-op
    return [
      `if (${this.typescriptNamespacedName}.is(from)) {`,
      `  return from;`,
      `}`,
      `throw new Error(JSON.stringify(from))`,
    ].join("\n");
  }
}

/**
 * A single named type.
 */
export class AttributeTypeNode extends ContainerNode implements NamedType {
  constructor(
    public parent: CompositeTypeNode,
    public name: string,
    public index: number,
    public type: TypeNode,
    public required: boolean,
  ) {
    super(name, ASTKind.AttributeType, parent);
  }

  /**
   * Generate a synthetic name based on the index
   * when no name is provided.
   */
  get typescriptPropertyName(): string {
    if (this.name) return super.typescriptPropertyName;
    else return `argument_${this.index}`;
  }
}
// TODO: rename AttributeNode, this is not a 'type'

/**
 * Rename a type, useful in namespaces to allow consistent
 * code generation.
 */
export class AliasTypeNode extends AbstractTypeNode {
  constructor(
    public name: string,
    public type: TypeNode,
    parent: ContainerNode,
  ) {
    super(name, ASTKind.AliasType, parent, type.id);
  }

  override typescriptTypeDefinition(
    context: GenerationContext,
  ): string | undefined {
    console.assert(context);
    if (this.name === RESULTS) {
      return `Nullable<${this.type.typescriptNamespacedName}>`;
    }
    return `${this.type.typescriptNamespacedName}`;
  }

  override typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    // delegate to the actual type
    return `return ${this.type.typescriptNamespacedName}.parse(from)`;
  }
}

/**
 * A domain type is much like an alias, in that it gives a new name
 * to an existing type.
 *
 * The difference is that the database will narrow the range of acceptable
 * values for a domain.
 *
 * For example, imagine a ... useless admittedly ... year type:
 *
 * ```sql
 * CREATE DOMAIN year AS integer
 * 	CONSTRAINT year_check CHECK (((VALUE >= 1901) AND (VALUE <= 2155)));
 * ```
 *
 */
export class DomainTypeNode extends AbstractTypeNode {
  private _baseType?: AbstractTypeNode;
  constructor(name: string, parent: ContainerNode, id: string | number) {
    super(name, ASTKind.DomainType, parent, id);
  }

  set baseType(baseType: AbstractTypeNode | undefined) {
    this._baseType = baseType;
  }

  get baseType() {
    return this._baseType;
  }

  override typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    // just alias the base type
    return `${this.baseType?.typescriptNamespacedName}`;
  }
  override typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    // base type type parser
    return `return ${this.baseType?.typescriptNamespacedName}.parse(from);`;
  }
}
