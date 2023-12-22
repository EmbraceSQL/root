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
export const RESULTS = "Results";

/**
 * Common name for passed arguments.
 */
export const ARGUMENTS = "Arguments";

/**
 * Enumeration tags for quick type discrimination via `switch`.
 *
 * These will use conventional ANSI SQL naming rather than database
 * specific catalog naming.
 */
export const enum ASTKind {
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
  AttributeType,
}

/**
 * A named type -- it's column like.
 */
export interface NamedType {
  name: string;
  type: TypeNode;
}

/**
 * Nameable items, which is going to be nearly everything
 * in the database.
 */
export interface IsNamed {
  name: string;
  typescriptName: string;
}

export function isNamed(node: ASTNode | IsNamed): node is IsNamed {
  return (node as IsNamed).name !== undefined;
}

/**
 * Some nodes are containers.
 */
export interface IsContainer extends IsNamed {
  children: ASTNode[];
}

export function isContainer(node: ASTNode | IsContainer): node is IsContainer {
  return (node as IsContainer).children !== undefined;
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
};

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
    public parent?: NamedASTNode,
  ) {}

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

  lookUpTo(kind: ASTKind): ASTNode | undefined {
    if (this.parent?.kind === kind) return this.parent;
    else return this.parent?.lookUpTo(kind);
  }
}

/**
 * Nodes often have names -- nodes that are important enough
 * to have a change to appear in the generated source as types.
 */
export abstract class NamedASTNode extends ASTNode implements IsNamed {
  constructor(
    public name: string,
    kind: ASTKind,
    parent?: NamedASTNode,
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
}

/**
 * Represents a database as an AST for code generation.
 */
export abstract class ContainerNode
  extends NamedASTNode
  implements IsContainer
{
  children: ASTNode[] = [];
  constructor(name: string, kind: ASTKind, parent?: ContainerNode) {
    super(name, kind, parent);
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
    // mapped and in the children
    this.types.set(`${id}`, type);
    (type.lookUpTo(ASTKind.Schema) as SchemaNode).types.children.push(type);
    return type;
  }

  resolveType(id: string | number) {
    return this.types.get(`${id}`);
  }

  registerTable(id: string | number, table: TableNode) {
    this.tables.set(`${id}`, table);
  }

  resolveTable(id: string | number) {
    return this.tables.get(`${id}`);
  }

  resolveSchema(name: string) {
    const exists = this.children.find(
      (c) => (c as unknown as IsNamed)?.name === name,
    ) as SchemaNode;
    if (exists) return exists;
    const schema = new SchemaNode(this, name);
    this.children.push(schema);
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
    this.children.push(new TypesNode(this));
    this.children.push(new ProceduresNode(this));
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
    public marshallName: string,
    parent: ContainerNode,
    public id: string | number,
    public parser: GeneratesTypeScript,
  ) {
    super(name, kind, parent);
  }
}

/**
 * Represents a single type from a database.
 */
export class TypeNode extends AbstractTypeNode {
  constructor(
    name: string,
    public marshallName: string,
    types: TypesNode,
    public id: string | number,
    public parser: GeneratesTypeScript,
  ) {
    super(name, ASTKind.Type, marshallName, types, id, parser);
  }
}

/**
 * Represents a single enum from a database.
 */
export class EnumNode extends AbstractTypeNode {
  constructor(
    name: string,
    public marshallName: string,
    public values: string[],
    types: TypesNode,
    public id: string | number,
    public parser: GeneratesTypeScript,
  ) {
    super(name, ASTKind.Enum, marshallName, types, id, parser);
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
export class TableNode extends ContainerNode {
  constructor(
    tables: TablesNode,
    public name: string,
    public type: TypeNode,
  ) {
    super(name, ASTKind.Table, tables);
    this.children.push(new CreateOperationNode(this));
  }

  get createOperation() {
    return this.children.find(
      (c) => c.kind === ASTKind.CreateOperation,
    ) as CreateOperationNode;
  }

  get primaryKey(): IndexNode | undefined {
    return this.children.find((n) => (n as IndexNode).primaryKey) as IndexNode;
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
    attributes.forEach((a) =>
      this.children.push(new IndexColumnNode(this, a.name, a.type)),
    );
    // important that the operations go after the attributes
    // so that we can have a well defined `typescriptName`
    this.children.push(new ReadOperationNode(this));
    this.children.push(new UpdateOperationNode(this));
    this.children.push(new DeleteOperationNode(this));
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
export class IndexColumnNode extends ContainerNode {
  constructor(
    public index: IndexNode,
    public name: string,
    public type: TypeNode,
  ) {
    super(name, ASTKind.IndexColumn, index);
  }
}

// operations

abstract class OperationNode extends ContainerNode {
  get typescriptName() {
    // method style naming for operation
    return camelCase(this.name);
  }
}

/**
 * Operation to create a new row in a table. Each table gets one creator.
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
  get typescriptName() {
    // method style naming for operation
    return camelCase(`${this.name}${this.index.typescriptName}`);
  }
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
    super("", ASTKind.ReadOperation, index);
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
      context.database.children.push(scriptsNode);
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
        addToNode.children.push(folder);
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
export class ScriptNode extends ContainerNode {
  /**
   * Asynchronous factory builds from a sql file on disk.
   */
  static async loadAST(
    context: GenerationContext,
    scriptPath: path.ParsedPath,
    addToNode: ContainerNode,
  ) {
    console.assert(context);
    const script = new ScriptNode(
      scriptPath,
      await fs.promises.readFile(path.join(scriptPath.dir, scriptPath.base), {
        encoding: "utf8",
      }),
      addToNode,
    );
    addToNode.children.push(script);
  }

  constructor(
    public path: path.ParsedPath,
    public script: string,
    parent: ContainerNode,
  ) {
    super(path.name, ASTKind.Script, parent);
  }

  get resultsType() {
    return this.children
      .filter<CompositeTypeNode>(
        (c): c is CompositeTypeNode => c.kind === ASTKind.CompositeType,
      )
      .find((c) => c.name === RESULTS);
  }

  get argumentsType() {
    return this.children
      .filter<CompositeTypeNode>(
        (c): c is CompositeTypeNode => c.kind === ASTKind.CompositeType,
      )
      .find((c) => c.name === ARGUMENTS);
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
export class ProcedureNode extends OperationNode {
  constructor(
    name: string,
    public procedures: ProceduresNode,
    public returnType: AbstractTypeNode,
  ) {
    super(name, ASTKind.Procedure, procedures);
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
  constructor(
    name: string,
    marshallName: string,
    parent: ContainerNode,
    id: string | number,
  ) {
    super(
      name,
      ASTKind.CompositeType,
      marshallName,
      parent,
      id,
      // inline code generation
      {
        typescriptTypeDefinition: () => {
          const recordAttributes = this.children
            .filter<AttributeTypeNode>(
              (c): c is AttributeTypeNode => c.kind === ASTKind.AttributeType,
            )
            .map(
              (a) =>
                `${a.typescriptPropertyName}: ${a.type.typescriptNamespacedName};`,
            );
          return ` { ${recordAttributes.join("\n")} } `;
        },
        typescriptTypeParser: () => {
          // no op type parser -- query results are expected to have
          // already been parsed by the databse driver
          return `return from`;
        },
      },
    );
  }

  get attributes() {
    return this.children.filter<AttributeTypeNode>(
      (c): c is AttributeTypeNode => c.kind === ASTKind.AttributeType,
    );
  }
}

/**
 * A single named type.
 */
export class AttributeTypeNode extends ContainerNode {
  constructor(
    public queryResultType: CompositeTypeNode,
    public name: string,
    public type: TypeNode,
  ) {
    super(name, ASTKind.AttributeType, queryResultType);
  }
}
