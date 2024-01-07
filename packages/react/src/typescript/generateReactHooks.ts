import {
  ASTKind,
  GenerationContext,
  NamespaceVisitor,
} from "@embracesql/shared";
import { pascalCase } from "change-case";

/**
 * Generate hooks, these read data and return wrapped bindable objects.
 */
export const generateReactHooks = async (context: GenerationContext) => {
  const generationBuffer = [""];
  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        const tableTypeName = `${node.typescriptNamespacedName}.Record`;
        const resultsTypeName = `${node.typescriptNamespacedName}.Record[]`;
        return [
          await NamespaceVisitor.before(context, node),
          // the 'all the rows' hook'
          `export function useRows() {`,
          `return useEmbraceSQL<never, never, ${tableTypeName}, ${resultsTypeName}>(
               {
                 readOperation: "${node.typescriptNamespacedName}.all",
                 upsertOperation: "${node.typescriptNamespacedName}.create",
                 primaryKeyPicker: ${node.typescriptNamespacedName}.primaryKeyFrom,
                 Interceptor: ${node.typescriptNamespacedName}.Interceptor 
               }
             )`,
          `}`,
        ].join("\n");
      },
      after: NamespaceVisitor.after,
    },
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Column]: NamespaceVisitor,
    [ASTKind.Index]: {
      before: async (_, node) => {
        const tableTypeName = `${node.table.typescriptNamespacedName}.Record`;
        const resultsTypeName = `${node.table.typescriptNamespacedName}.Record${
          node.unique ? "" : "[]"
        }`;
        return [
          `export function use${pascalCase(node.name)}(parameters: ${pascalCase(
            node.name,
          )}) {`,
          `return useEmbraceSQL<${pascalCase(
            node.name,
          )}, never, ${tableTypeName}, ${resultsTypeName}>(
               {
                 readOperation: "${node.typescriptNamespacedName}.read",
                 parameters,
                 upsertOperation: "${
                   node.table.typescriptNamespacedName
                 }.create",
                 primaryKeyPicker: ${
                   node.table.typescriptNamespacedName
                 }.primaryKeyFrom,
                 Interceptor: ${
                   node.table.typescriptNamespacedName
                 }.Interceptor 
               }
             )`,
          `}`,
        ].join("\n");
      },
    },
  };

  generationBuffer.push(await context.database.visit(context));
  return generationBuffer.join("\n");
};
