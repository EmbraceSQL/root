/**
 * Generate a right hand side expression that converts a postgres
 * driver result record to a type checked record.
 */
import {
  PARAMETERS,
  ASTKind,
  AbstractTypeNode,
  GenerationContext,
  IndexNode,
  NamedASTNode,
  NamedType,
  TableNode,
  VALUES,
  isNodeType,
} from "@embracesql/shared";
import { camelCase } from "change-case";

export function postgresResultRecordToTypescript(
  context: GenerationContext,
  node: AbstractTypeNode,
) {
  console.assert(context);
  console.assert(node);

  if (isNodeType(node, ASTKind.CompositeType)) {
    // snippet will pick resultset fields to type map
    const recordPieceBuilders = node.attributes.map(
      (c) => `${c.typescriptPropertyName}: undefinedIsNull(record.${c.name})`,
    );
    // all the fields in the resultset mapped out to an inferred type array
    return `response.map(record => ({ ${recordPieceBuilders.join(",")} }))`;
  }

  throw new Error(`unexpected result type ${node.id}:${ASTKind[node.kind]}`);
}
/**
 * Render a code generation string that will create a postgres 'right hand side'
 * of an equals value expression for this attribute.
 *
 * This will create an expression that will self equal for undefined on the
 * parameterHolder in calling typescript -- allows partial updates.
 *
 */
export function postgresValueExpression(
  context: GenerationContext,
  node: NamedType & NamedASTNode,
  holder: typeof PARAMETERS | typeof VALUES,
  defaultToSelfAssign = false,
) {
  console.assert(context);
  const undefinedExpression = defaultToSelfAssign
    ? `sql\`${node.name}\``
    : "sql`DEFAULT`";
  const valueExpression = `typed[${node.type.id}](${camelCase(holder)}.${
    node.typescriptPropertyName
  })`;
  const combinedExpression = `${camelCase(holder)}.${
    node.typescriptPropertyName
  } === undefined ? ${undefinedExpression} : ${valueExpression}`;
  return `\${ ${combinedExpression} }`;
}

/**
 * Code generation builder for an exact index match.
 */
export function sqlPredicate(
  context: GenerationContext,
  node: IndexNode,
  holder: typeof PARAMETERS | typeof VALUES,
) {
  return node.columns
    .map((a) => `${a.name} = ${postgresValueExpression(context, a, holder)}`)
    .join(" AND ");
}

/**
 * Code generation builder for all fields updating.
 *
 * This will do self assignment for undefined properties, allowing
 * partial updates in typescript by omitting properties corresponding to
 * columns.
 *
 * Nulls in the passed typescript turn into SQL NULL.
 */
export function sqlSetExpressions(
  context: GenerationContext,
  node: TableNode,
  holder: typeof PARAMETERS | typeof VALUES,
  defaultToSelfAssign = false,
) {
  return node.allColumns
    .map(
      (a) =>
        `${a.name} = ${postgresValueExpression(
          context,
          a,
          holder,
          defaultToSelfAssign,
        )}`,
    )
    .join(" , ");
}
