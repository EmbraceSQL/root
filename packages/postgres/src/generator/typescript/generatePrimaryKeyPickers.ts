import { GenerationContext } from "..";
import { ASTKind, IsNamed, NamespaceVisitor } from "@embracesql/shared";
import { camelCase, pascalCase } from "change-case";

/**
 * Primary key pickers extract properties from row objects
 * that are the primary key.
 *
 * Use these to has or identify objects.
 */
export async function generatePrimaryKeyPickers(context: GenerationContext) {
  const generationBuffer = [""];

  // primary key 'pickers' used to debounce and hash objects
  generationBuffer.push(`// begin primary key pickers`);
  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        const tableTypeName = `${pascalCase(
          (node as unknown as IsNamed)?.name,
        )}`;
        const generationBuffer = [
          await NamespaceVisitor.before!(context, node),
        ];
        const primaryKey = node.primaryKey;
        if (primaryKey) {
          generationBuffer.push(
            `export function primaryKeyFrom(value: ${tableTypeName}) : string {`,
          );
          generationBuffer.push(`return JSON.stringify({`);
          primaryKey.columns.forEach((c) =>
            generationBuffer.push(
              `${camelCase(c.name)}: value.${camelCase(c.name)},`,
            ),
          );
          generationBuffer.push(`});`);
          generationBuffer.push(`}`);
        }

        return generationBuffer.join("\n");
      },
      after: NamespaceVisitor.after,
    },
  };
  generationBuffer.push(await context.database.visit(context));
  generationBuffer.push(`// end primary key pickers`);
  return generationBuffer.join("\n");
}
