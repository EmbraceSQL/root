/**
 * Generate a right hand side expression that converts a postgres
 * driver result record to a type checked record.
 */
import {
  ARGUMENTS,
  ASTKind,
  AbstractTypeNode,
  AttributeTypeNode,
  GenerationContext,
  VALUES,
  isNodeType,
} from "@embracesql/shared";
import { camelCase } from "change-case";

export async function postgresResultRecordToTypescript(
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
export async function postgresValueExpression(
  context: GenerationContext,
  node: AttributeTypeNode,
  holder: typeof ARGUMENTS | typeof VALUES,
) {
  const undefinedExpression = "sql`DEFAULT`";
  const valueExpression = `typed[${node.type.id}](${camelCase(holder)}.${
    node.typescriptPropertyName
  })`;
  const combinedExpression = `${camelCase(holder)}.${
    node.typescriptPropertyName
  } === undefined ? ${undefinedExpression} : ${valueExpression}`;
  return `\${ ${combinedExpression} }`;
}
