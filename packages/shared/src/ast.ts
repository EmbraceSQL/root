import { GeneratesTypeScriptParser, GenerationContext } from ".";
import { DispatchOperation } from "./index";
import { camelCase, pascalCase } from "change-case";

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
  CreateOperation,
  ReadOperation,
  UpdateOperation,
  DeleteOperation,
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
  after?: VisitationHandler<T>;
}

/**
 * And a big old map of visitors for each node type.
 */
export type VisitorMap = {
  [ASTKind.Node]?: Visitor<ASTNode>;
  [ASTKind.Database]?: Visitor<DatabaseNode>;
  [ASTKind.Schema]?: Visitor<SchemaNode>;
  [ASTKind.Table]?: Visitor<TableNode>;
  [ASTKind.Tables]?: Visitor<TableNode>;
  [ASTKind.Column]?: Visitor<ColumnNode>;
  [ASTKind.Index]?: Visitor<IndexNode>;
  [ASTKind.IndexColumn]?: Visitor<IndexColumnNode>;
  [ASTKind.Type]?: Visitor<TypeNode>;
  [ASTKind.Types]?: Visitor<TypesNode>;
  [ASTKind.CreateOperation]?: Visitor<CreateOperationNode>;
  [ASTKind.ReadOperation]?: Visitor<ReadOperationNode>;
  [ASTKind.UpdateOperation]?: Visitor<UpdateOperationNode>;
  [ASTKind.DeleteOperation]?: Visitor<DeleteOperationNode>;
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

  constructor(public name: string) {
    super(name, ASTKind.Database);
  }

  registerType(id: string | number, type: TypeNode) {
    this.types.set(`${id}`, type);
  }

  resolveType(id: string | number) {
    return this.types.get(`${id}`);
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
  constructor(schema: SchemaNode) {
    super("Types", ASTKind.Types, schema);
  }
}

/**
 * Represents a single type inside of postgres.
 *
 * These are grouped by schema.
 */
export class TypeNode extends NamedASTNode {
  constructor(
    name: string,
    public types: TypesNode,
    public id: string | number,
    public parser: GeneratesTypeScriptParser,
  ) {
    super(name, ASTKind.Type, types);
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

abstract class OperationNode extends NamedASTNode {
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
