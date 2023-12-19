import {
  ASTKind,
  GenerationContext,
  NamespaceVisitor,
} from "@embracesql/shared";
import { pascalCase, camelCase } from "change-case";

/**
 * Generate bindable objects designed to be used in state.
 */
export const generateReactBindables = async (context: GenerationContext) => {
  const generationBuffer = [""];
  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        const generationBuffer = [await NamespaceVisitor.before(context, node)];
        generationBuffer.push(
          `export function interceptor(uninterceptedValue: ${node.typescriptNamespacedName}.Record, callback: InterceptorCallback<${node.typescriptNamespacedName}.Record>, index?: number) : Intercepted<${node.typescriptNamespacedName}.Record>{`,
        );
        generationBuffer.push(`const ret = {`);

        return generationBuffer.join("\n");
      },
      after: async (context, node) => {
        return (
          `
          };
          return ret;
        }
          ` + (await NamespaceVisitor.after(context, node))
        );
      },
    },
    [ASTKind.Column]: {
      before: async (_, node) => {
        const generationBuffer = [""];
        generationBuffer.push(
          `get ${camelCase(
            node.name,
          )}() { return uninterceptedValue.${camelCase(node.name)};},`,
        );
        // the setter -- this sets a local memory value and triggers the callback
        // that intercepts sets
        generationBuffer.push(`set ${camelCase(node.name)}(newValue) {`);
        generationBuffer.push(
          `uninterceptedValue.${camelCase(node.name)} = newValue;`,
        );
        generationBuffer.push(`void callback(uninterceptedValue, index);`);
        generationBuffer.push(`},`);
        // react change event handlers
        generationBuffer.push(
          `change${pascalCase(node.name)}(event: ChangeEvent) {`,
        );
        generationBuffer.push(
          `const parsedValue = ${node.typescriptNamespacedName}.parse(event.target.value);`,
        );
        generationBuffer.push(
          `ret.${camelCase(node.name)} = parsedValue as ${
            node.table.typescriptNamespacedName
          }.Record["${camelCase(node.name)}"] ;`,
        );
        generationBuffer.push(`},`);
        return generationBuffer.join("\n");
      },
    },
  };
  generationBuffer.push(await context.database.visit(context));
  return generationBuffer.join("\n");
};
