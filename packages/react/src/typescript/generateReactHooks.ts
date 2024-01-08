import {
  ASTKind,
  BY_PRIMARY_KEY,
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
        const rowTypeName = `${node.typescriptNamespacedName}.Record`;
        return [
          await NamespaceVisitor.before(context, node),
          // the 'all the rows' hook'
          `export function useRows() {`,
          `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `return useEmbraceSQLRows<never, ${rowTypeName}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.all.bind(client),
                 parameters: NEVER,
                 upsertOperation: client.${node.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.typescriptNamespacedName}.primaryKeyFrom,
                 Interceptor: ${node.typescriptNamespacedName}.Interceptor,
                 emptyRow: ${node.typescriptNamespacedName}.emptyRow
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
        const rowTypeName = `${node.table.typescriptNamespacedName}.Record`;
        if (node.unique) {
          return [
            `export function use${pascalCase(
              node.name,
            )}(parameters: ${pascalCase(node.name)}) {`,
            `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
            `return useEmbraceSQLRow<${pascalCase(node.name)},  ${rowTypeName}>(
               {
                 readOperation: client.${
                   node.typescriptNamespacedName
                 }.read.bind(client),
                 parameters,
                 upsertOperation: client.${
                   node.table.typescriptNamespacedName
                 }.create.bind(client),
                 deleteOperation: client.${
                   node.table.typescriptNamespacedName
                 }.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${
                   node.table.typescriptNamespacedName
                 }.primaryKeyFrom,
                 Interceptor: ${
                   node.table.typescriptNamespacedName
                 }.Interceptor,
               }
             )`,
            `}`,
          ].join("\n");
        } else {
          return [
            `export function use${pascalCase(
              node.name,
            )}(parameters: ${pascalCase(node.name)}) {`,
            `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
            `return useEmbraceSQLRows<${pascalCase(node.name)}, ${rowTypeName}>(
               {
                 readOperation: client.${
                   node.typescriptNamespacedName
                 }.read.bind(client),
                 parameters,
                 upsertOperation: client.${
                   node.table.typescriptNamespacedName
                 }.create.bind(client),
                 deleteOperation: client.${
                   node.table.typescriptNamespacedName
                 }.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${
                   node.table.typescriptNamespacedName
                 }.primaryKeyFrom,
                 Interceptor: ${
                   node.table.typescriptNamespacedName
                 }.Interceptor,
                 emptyRow: ${node.table.typescriptNamespacedName}.emptyRow,
               }
             )`,
            `}`,
          ].join("\n");
        }
      },
    },
  };

  generationBuffer.push(await context.database.visit(context));
  return generationBuffer.join("\n");
};
