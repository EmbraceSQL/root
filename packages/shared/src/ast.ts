import { GenerationContext } from ".";

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
  Table,
  Column,
  Index,
}

/**
 * Nameable items, which is going to be nearly everything
 * in the database.
 */
export interface IsNamed {
  name: string;
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
  [ASTKind.Column]?: Visitor<ColumnNode>;
  [ASTKind.Index]?: Visitor<IndexNode>;
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
    public parent?: ASTNode,
  ) {}

  async visit(context: GenerationContext): Promise<string> {
    const generationBuffer = [""];
    const visitor = context.handlers?.[this.kind] as Visitor<typeof this>;
    generationBuffer.push(
      visitor?.before ? await visitor?.before(context, this) : "",
    );

    generationBuffer.push(
      visitor?.after ? await visitor?.after(context, this) : "",
    );

    return generationBuffer.filter((line) => line).join("\n");
  }
}

/**
 * Represents a database as an AST for code generation.
 */
export abstract class ContainerNode
  extends ASTNode
  implements IsNamed, IsContainer
{
  children: ASTNode[] = [];
  constructor(
    public name: string,
    kind: ASTKind,
    parent?: ASTNode,
  ) {
    super(kind, parent);
  }

  async visit(context: GenerationContext): Promise<string> {
    const generationBuffer = [""];
    const beforeHandler = context.handlers?.[this.kind]?.before;
    generationBuffer.push(
      beforeHandler ? await beforeHandler(context, this) : "",
    );

    // and here is that recursion
    for (const child of this.children) {
      generationBuffer.push(await child.visit(context));
    }

    const afterHandler = context.handlers?.[this.kind]?.after;
    generationBuffer.push(
      afterHandler ? await afterHandler(context, this) : "",
    );

    return generationBuffer.filter((line) => line).join("\n");
  }
}

/**
 * Represents a database as an AST for code generation.
 */
export class DatabaseNode extends ContainerNode {
  constructor(public name: string) {
    super(name, ASTKind.Database);
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
}

/**
 * Represents a single table in a schema in a database.
 *
 * This is for 'real' tables, the normal old thing you would call
 * a table in SQL. Not a view, not a reltype, but a place were rows go to 🛌.
 */
export class TableNode extends ContainerNode {
  constructor(
    schema: SchemaNode,
    public name: string,
  ) {
    super(name, ASTKind.Table, schema);
  }
}

/**
 * A single column on a single table in a schema in a database.
 */
export class ColumnNode extends ContainerNode {
  constructor(
    table: TableNode,
    public name: string,
  ) {
    super(name, ASTKind.Column, table);
  }
}

/**
 * A single index on a single table in a schema in a database.
 */
export class IndexNode extends ContainerNode {
  constructor(
    table: TableNode,
    public name: string,
  ) {
    super(name, ASTKind.Index, table);
  }
}
