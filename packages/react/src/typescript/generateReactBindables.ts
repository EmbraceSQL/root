import {
  ASTKind,
  CompositeTypeNode,
  GenerationContext,
  NamespaceVisitor,
  isNodeType,
} from "@embracesql/shared";

/**
 * Generate Row for CompositeType.
 */
async function generateRow(
  context: GenerationContext,
  type: CompositeTypeNode,
) {
  return await type.visit({
    ...context,
    handlers: {
      // every composite type will get a `Row` binder generated
      // resultests of rows are always composite types with 'named columns'
      // i.e. plain old what you are used to sql results
      [ASTKind.CompositeType]: {
        before: async (context, node) => {
          return [
            // we are not generating 'new' namespace for the composite type
            // otherwise you get double-ups -- Table.Type for a table named Foo
            // is gonna make namespace Foo { namespace Foo}
            `export type Row = IsRow<${node.typescriptNamespacedName}>;`,
            `export class RowImplementation`,
            ` extends RowBase<${node.typescriptNamespacedName}>`,
            ` implements Row {`,
            `   constructor(record: ${node.typescriptNamespacedName}, `,
            `     changeCallback: RowCallback<${node.typescriptNamespacedName}>, `,
            `     rowNumberInResultset: number) {`,
            `     super(record, changeCallback, rowNumberInResultset);`,
            `   }`,
          ].join("\n");
        },
        after: async () => {
          // close the class
          return `}`;
        },
      },
      // attributes on the Composite types help build the `Row` binder
      [ASTKind.Attribute]: {
        before: async (_, node) => {
          return [
            // the getter -- read only view of the values
            `get ${node.typescriptPropertyName}() { return this._value.${node.typescriptPropertyName};}`,
            // react change event handlers -- needs a bound this
            // to be used as react event handler
            `get change${node.typescriptName}() {`,
            `  return (event: ChangeEvent) => {`,
            `    const parsedValue = ${node.type.typescriptNamespacedName}.parse(event.target.value);`,
            `    void this.changeCallback({`,
            `      ...this.value,`,
            `    ${node.typescriptPropertyName}: parsedValue as ${node.parent.typescriptNamespacedName}["${node.typescriptPropertyName}"],`,
            `    });`,
            `  };`,
            `}`,
          ].join("\n");
        },
      },
    },
  });
}

/**
 * Generate bindable objects designed to be used in state.
 */
export async function generateReactBindables(context: GenerationContext) {
  return await context.database.visit({
    ...context,
    handlers: {
      [ASTKind.Scripts]: NamespaceVisitor,
      [ASTKind.ScriptFolder]: NamespaceVisitor,
      [ASTKind.Script]: NamespaceVisitor,
      [ASTKind.Schema]: NamespaceVisitor,
      [ASTKind.Tables]: NamespaceVisitor,
      [ASTKind.Table]: NamespaceVisitor,
      [ASTKind.Procedures]: NamespaceVisitor,
      [ASTKind.Procedure]: NamespaceVisitor,
      // results will have composite types to visit
      [ASTKind.Results]: {
        before: async (context, node) => {
          if (isNodeType(node.type, ASTKind.CompositeType)) {
            return await generateRow(context, node.type);
          } else {
            return "";
          }
        },
      },
    },
  });
}
