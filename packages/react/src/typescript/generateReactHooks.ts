import {
  ASTKind,
  BY_PRIMARY_KEY,
  GenerationContext,
  NamespaceVisitor,
} from "@embracesql/shared";

/**
 * Generate hooks, these read data and return wrapped bindable objects.
 */
export const generateReactHooks = async (context: GenerationContext) => {
  const generationBuffer = [""];
  context.handlers = {
    [ASTKind.Scripts]: NamespaceVisitor,
    [ASTKind.ScriptFolder]: NamespaceVisitor,
    [ASTKind.Script]: {
      before: async (context, node) => {
        const parametersCall = node.parametersType
          ? `parameters: ${node.parametersType?.typescriptName}`
          : "";
        const parametersType = node.parametersType
          ? `${node.parametersType?.typescriptName}`
          : "never";
        const parametersPass = node.parametersType
          ? "parameters"
          : "parameters: NEVER";

        return [
          await NamespaceVisitor.before(context, node),
          `export function use${node.typescriptName}(${parametersCall}) {`,
          `  const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `  return useEmbraceSQLImmutableRows<${parametersType}, ${node.resultsType?.typescriptName}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.call.bind(client),
                 ${parametersPass},
                 RowImplementation: ${node.typescriptNamespacedName}.RowImplementation,
               }
             )`,
          `}`,
        ].join("\n");
      },
      after: NamespaceVisitor.after,
    },
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        return [
          await NamespaceVisitor.before(context, node),
          // the 'just one row' hook
          `export function useRow(props: GeneratedRowProps<${node.typescriptNamespacedName}.Values>) {`,
          `  const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `  return useEmbraceSQLRow<${BY_PRIMARY_KEY},`,
          `  Partial<${node.type.typescriptNamespacedName}>, `,
          `  ${node.type.typescriptNamespacedName}> (`,
          `
               {
                 parameters: props.values as unknown as ${BY_PRIMARY_KEY},
                 readOperation: client.${node.typescriptNamespacedName}.${BY_PRIMARY_KEY}.read.bind(client),
                 upsertOperation: client.${node.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.typescriptNamespacedName}.RowImplementation,
                 emptyRecord: ${node.typescriptNamespacedName}.emptyRecord,
                 createIfNotExists: props.createIfNotExists,
               }
             )`,
          `}`,
          // the 'all the rows' hook'
          `export function useRows() {`,
          `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `return useEmbraceSQLRows<never,`,
          `  Partial<${node.type.typescriptNamespacedName}>, `,
          `  ${node.type.typescriptNamespacedName}> (`,
          `
               {
                 parameters: NEVER,
                 readOperation: client.${node.typescriptNamespacedName}.all.bind(client),
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
        const rowTypeName = `${node.table.type.typescriptNamespacedName}`;
        const hookName = node.unique ? `useEmbraceSQLRow` : `useEmbraceSQLRows`;
        return [
          `export function use${node.typescriptName}(parameters: ${node.typescriptName}) {`,
          `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `return ${hookName}<${node.typescriptName}, Partial<${node.table.type.typescriptNamespacedName}>,  ${rowTypeName}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.read.bind(client),
                 parameters,
                 upsertOperation: client.${node.table.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.table.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.table.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.table.typescriptNamespacedName}.RowImplementation,
                 emptyRecord: ${node.table.typescriptNamespacedName}.emptyRecord
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
