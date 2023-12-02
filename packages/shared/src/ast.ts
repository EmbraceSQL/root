/**
 * Enumeration tags for quick type discrimination via `switch`.
 *
 * These will use conventional ANSI SQL naming rather than database
 * specific catalog naming.
 */
export const enum ASTKind {
  Database,
  Schema,
  Table,
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
 * Classic AST, everything is at least a node with a `kind`
 * and optional `parent`.
 *
 * The root of the tree will have `parent === undefined`.
 */
export class ASTNode {
  constructor(
    public kind: ASTKind,
    public parent?: ASTNode,
  ) {}
}

/**
 * Represents a database as an AST for code generation.
 */
export class DatabaseNode extends ASTNode implements IsNamed, IsContainer {
  children: ASTNode[] = [];
  constructor(public name: string) {
    super(ASTKind.Database);
  }
}

/**
 * Represents a single schema of a single database.
 *
 * This is the fundamental 'container' type that scopes a database
 * AST, particularly since there are not nested SCHEMA in ANSI SQL.
 */
export class SchemaNode extends ASTNode implements IsNamed, IsContainer {
  children: ASTNode[] = [];
  constructor(
    database: DatabaseNode,
    public name: string,
  ) {
    super(ASTKind.Schema, database);
  }
}

/**
 * Represents a single table in a database.
 *
 * This is for 'real' tables, the normal old thing you would call
 * a table in SQL. Not a view, not a reltype, but a place were rows go to 🛌.
 */
export class TableNode extends ASTNode implements IsNamed, IsContainer {
  children: ASTNode[] = [];
  constructor(
    schema: SchemaNode,
    public name: string,
  ) {
    super(ASTKind.Table, schema);
  }
}
