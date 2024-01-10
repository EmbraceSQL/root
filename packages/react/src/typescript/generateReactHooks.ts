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
        return [
          await NamespaceVisitor.before(context, node),
          // the 'all the rows' hook'
          `export function useRows() {`,
          `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `return useEmbraceSQLRows<never,`,
          `  Partial<${node.typescriptNamespacedName}.Values>, `,
          `  ${node.typescriptNamespacedName}.Record> (`,
          `
               {
                 readOperation: client.${node.typescriptNamespacedName}.all.bind(client),
                 parameters: NEVER,
                 upsertOperation: client.${node.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.typescriptNamespacedName}.RowImplementation,
                 emptyRecord: ${node.typescriptNamespacedName}.emptyRecord
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
            `export function use${pascalCase(node.name)}(parameters: ${
              node.typescriptName
            }) {`,
            `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
            `return useEmbraceSQLRow<${node.typescriptName}, Partial<${node.table.typescriptNamespacedName}.Values>,  ${rowTypeName}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.read.bind(client),
                 parameters,
                 upsertOperation: client.${node.table.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.table.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.table.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.table.typescriptNamespacedName}.RowImplementation,
               }
             )`,
            `}`,
          ].join("\n");
        } else {
          return [
            `export function use${pascalCase(node.name)}(parameters: ${
              node.typescriptName
            }) {`,
            `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
            `return useEmbraceSQLRows<${node.typescriptName}, Partial<${node.table.typescriptNamespacedName}.Values>, ${rowTypeName}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.read.bind(client),
                 parameters,
                 upsertOperation: client.${node.table.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.table.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.table.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.table.typescriptNamespacedName}.RowImplementation,
                 emptyRecord: ${node.table.typescriptNamespacedName}.emptyRecord,
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
