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
  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        return [
          await NamespaceVisitor.before(context, node),
          `export class Interceptor`,
          `extends InterceptorBase<${node.typescriptNamespacedName}.Record>`,
          `implements Intercepted<${node.typescriptNamespacedName}.Record> {`,
          `constructor(uninterceptedValue: ${node.typescriptNamespacedName}.Record, callback: InterceptorCallback<${node.typescriptNamespacedName}.Record>) {`,
          ` super(uninterceptedValue, callback);`,
          `}`,
        ].join("\n");
      },
      after: async (context, node) => {
        return [
          // close off the class
          `}`,
          await NamespaceVisitor.after(context, node),
        ].join("\n");
      },
    },
    [ASTKind.Column]: {
      before: async (_, node) => {
        return [
          // the getter -- read only view of the values
          `get ${camelCase(
            node.name,
          )}() { return this.uninterceptedValue.${camelCase(node.name)};}`,
          // react change event handlers -- needs a bound this
          // to be used as react event handler
          `get change${pascalCase(node.name)}() {`,
          `  return (event: ChangeEvent) => {`,
          `    const parsedValue = ${node.typescriptNamespacedName}.parse(event.target.value);`,
          `    void this.callback({`,
          `      ...this.uninterceptedValue,`,
          `    ${node.typescriptPropertyName} :parsedValue as ${node.table.typescriptNamespacedName}.Record["${node.typescriptPropertyName}"],`,
          `    });`,
          `  };`,
          `}`,
        ].join("\n");
      },
    },
  };
  return await context.database.visit(context);
};
