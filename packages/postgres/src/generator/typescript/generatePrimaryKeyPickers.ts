import { GenerationContext } from "..";
import { ASTKind, NamespaceVisitor } from "@embracesql/shared";
import { camelCase } from "change-case";

/**
 * Primary key pickers extract properties from row objects
 * that are the primary key.
 *
 * Use these to has or identify objects.
 */
export async function generatePrimaryKeyPickers(context: GenerationContext) {
  const generationBuffer = [""];

  // primary key 'pickers' used to debounce and hash objects
  context.handlers = {
    [ASTKind.Database]: {
      before: async () => {
        return `// begin primary key pickers`;
      },
    },
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        const primaryKey = node.primaryKey;
        if (primaryKey) {
          const generationBuffer = [
            await NamespaceVisitor.before(context, node),
          ];
          // extract primary key
          generationBuffer.push(
            `export function primaryKeyFrom(value: ${node.type.typescriptNamespacedName}) : string {`,
          );
          generationBuffer.push(`return JSON.stringify({`);
          primaryKey.type.attributes.forEach((c) =>
            generationBuffer.push(
              `${camelCase(c.name)}: value.${camelCase(c.name)},`,
            ),
          );
          generationBuffer.push(`});`);
          generationBuffer.push(`}`);
          // boolean guard on primary key
          const primaryKeyNames =
            primaryKey.type.attributes.map(
              (a) => `value.${camelCase(a.typescriptName)} !== undefined`,
            ) || [];
          generationBuffer.push(`
      export function includesPrimaryKey(value: Partial<${
        node.type.typescriptNamespacedName
      }>){
        return ${primaryKeyNames.join(" && ")}
      }
      `);
          return generationBuffer.join("\n");
        } else {
          return [
            await NamespaceVisitor.before(context, node),
            `export function primaryKeyFrom(value: ${node.type.typescriptNamespacedName}) {`,
            `  return "";`,
            `}`,
            `export function includesPrimaryKey(value: ${node.type.typescriptNamespacedName}) {`,
            `  return false;`,
            `}`,
          ].join("\n");
        }
      },
      after: NamespaceVisitor.after,
    },
  };
  generationBuffer.push(await context.database.visit(context));
  return generationBuffer.join("\n");
}
