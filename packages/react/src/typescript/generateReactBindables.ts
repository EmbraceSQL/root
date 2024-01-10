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
          `export type Row = IsRow<${node.typescriptNamespacedName}.Record>;`,
          `export class RowImplementation`,
          `extends RowBase<${node.typescriptNamespacedName}.Record>`,
          `implements Row {`,
          `constructor(record: ${node.typescriptNamespacedName}.Record, `,
          ` changeCallback: RecordCallback<${node.typescriptNamespacedName}.Record>, `,
          ` rowNumberInResultset: number) {`,
          ` super(record, changeCallback, rowNumberInResultset);`,
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
          `get ${camelCase(node.name)}() { return this.record.${camelCase(
            node.name,
          )};}`,
          // react change event handlers -- needs a bound this
          // to be used as react event handler
          `get change${pascalCase(node.name)}() {`,
          `  return (event: ChangeEvent) => {`,
          `    const parsedValue = ${node.typescriptNamespacedName}.parse(event.target.value);`,
          `    void this.changeCallback({`,
          `      ...this.record,`,
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
