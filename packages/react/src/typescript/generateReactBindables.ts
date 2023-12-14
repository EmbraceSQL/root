import {
  ASTKind,
  GenerationContext,
  IsNamed,
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
    [ASTKind.Table]: {
      before: async (_, node) => {
        const tableTypeName = `${pascalCase(
          (node as unknown as IsNamed)?.name,
        )}`;
        const generationBuffer = [""];
        generationBuffer.push(
          `export function ${tableTypeName}Interceptor(uninterceptedValue: ${tableTypeName}, callback: InterceptorCallback<${tableTypeName}>, index?: number) : Intercepted<${tableTypeName}>{`,
        );
        generationBuffer.push(`const ret = {`);

        return generationBuffer.join("\n");
      },
      after: async () => {
        return `
          };
          return ret;
        }
          `;
      },
    },
    [ASTKind.Column]: {
      before: async (_, node) => {
        const tableTypeName = `${pascalCase(
          (node.parent as unknown as IsNamed)?.name,
        )}`;
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
        // TODO: this needs generated type casts from string -> actual no shit value
        generationBuffer.push(
          `ret.${camelCase(
            node.name,
          )} = event.target.value as unknown as ${tableTypeName}["${camelCase(
            node.name,
          )}"] ;`,
        );
        generationBuffer.push(`},`);
        return generationBuffer.join("\n");
      },
    },
  };
  generationBuffer.push(await context.database.visit(context));
  return generationBuffer.join("\n");
};
