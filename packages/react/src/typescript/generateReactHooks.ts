import {
  ASTKind,
  BY_PRIMARY_KEY,
  FunctionOperationNode,
  GenerationContext,
  NamespaceVisitor,
  PRIMARY_KEY,
} from "@embracesql/shared";

/**
 * Procedures and Scripts have a common implementation.
 */
const FunctionOperation = {
  before: async (context: GenerationContext, node: FunctionOperationNode) => {
    const parametersCall = node.parametersType
      ? `parameters: ${node.parametersType?.typescriptName}`
      : "";
    const parametersType = node.parametersType
      ? `${node.parametersType?.typescriptName}`
      : "never";
    const parametersPass = node.parametersType
      ? "parameters"
      : "parameters: NEVER";

    if (node.returnsMany && node.returnsComposite) {
      return [
        await NamespaceVisitor.before(context, node),
        `export function use${node.typescriptName}(${parametersCall}) {`,
        `  const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
        `  return useEmbraceSQLImmutableRows<${parametersType}, ${node.resultsType?.typescriptNamespacedName}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.call.bind(client),
                 ${parametersPass},
                 RowImplementation: ${node.typescriptNamespacedName}.RowImplementation,
               }
             )`,
        `}`,
      ].join("\n");
    } else {
      // scalar results can be undefined, multiple results are just empty arrays
      const resultType = `${node.resultsType?.typescriptNamespacedName}${
        node.returnsMany ? "[]" : "|undefined"
      }`;
      return [
        await NamespaceVisitor.before(context, node),
        `export function use${node.typescriptName}(${parametersCall}) {`,
        `  const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
        `  return useEmbraceSQLImmutable<${parametersType}, ${resultType}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.call.bind(client),
                 ${parametersPass},
               }
             )`,
        `}`,
      ].join("\n");
    }
  },
  after: NamespaceVisitor.after,
};

/**
 * Generate hooks, these read data and return wrapped bindable objects.
 */
export const generateReactHooks = async (context: GenerationContext) => {
  const generationBuffer = [""];
  context.handlers = {
    [ASTKind.Scripts]: NamespaceVisitor,
    [ASTKind.ScriptFolder]: NamespaceVisitor,
    [ASTKind.Script]: FunctionOperation,
    [ASTKind.Procedures]: NamespaceVisitor,
    [ASTKind.Procedure]: FunctionOperation,
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        const optionType = `${node.typescriptNamespacedName}.Options`;
        return [
          await NamespaceVisitor.before(context, node),
          // the 'just one row' hook
          `export function useRow(props: GeneratedRowProps<${node.typescriptNamespacedName}.Values>) {`,
          `  const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `  return useEmbraceSQLRow<${PRIMARY_KEY},`,
          `  Partial<${node.type.typescriptNamespacedName}>, `,
          `  ${node.type.typescriptNamespacedName}> (`,
          `
               {
                 parameters: props.values as unknown as ${PRIMARY_KEY},
                 readOperation: client.${node.typescriptNamespacedName}.${BY_PRIMARY_KEY}.read.bind(client),
                 upsertOperation: client.${node.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.typescriptNamespacedName}.RowImplementation,
                 rowEquals: ${node.type.typescriptNamespacedName}.equals,
                 emptyRow: ${node.typescriptNamespacedName}.emptyRow,
                 createIfNotExists: props.createIfNotExists,
               }
             )`,
          `}`,
          // the 'all the rows' hook'
          `export function useRows(options?: ${optionType}) {`,
          `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `return useEmbraceSQLRows<never,`,
          `  Partial<${node.type.typescriptNamespacedName}>, `,
          `  ${node.type.typescriptNamespacedName},`,
          `  ${optionType}> (`,
          `
               {
                 parameters: NEVER,
                 options,
                 readOperation: client.${node.typescriptNamespacedName}.all.bind(client),
                 upsertOperation: client.${node.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.typescriptNamespacedName}.RowImplementation,
                 rowEquals: ${node.type.typescriptNamespacedName}.equals,
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
        const rowTypeName = `${node.table.type.typescriptNamespacedName}`;
        const hookName = node.unique ? `useEmbraceSQLRow` : `useEmbraceSQLRows`;
        const optionType = `${node.type.typescriptNamespacedName}.Options & ${node.table.typescriptNamespacedName}.Options`;
        const optionsGeneric = node.unique ? `` : `, ${optionType}`;
        const optionsParameter = node.unique ? `` : `, options?: ${optionType}`;
        const usesOptions = node.unique ? `` : `options,`;
        return [
          `export function use${node.typescriptName}(parameters: ${node.type.typescriptNamespacedName} ${optionsParameter}) {`,
          `const client = useEmbraceSQLClient<EmbraceSQLClient>();`,
          `return ${hookName}<${node.type.typescriptNamespacedName}, Partial<${node.table.type.typescriptNamespacedName}>,  ${rowTypeName} ${optionsGeneric}>(
               {
                 readOperation: client.${node.typescriptNamespacedName}.read.bind(client),
                 parameters,
                 ${usesOptions}
                 upsertOperation: client.${node.table.typescriptNamespacedName}.create.bind(client),
                 deleteOperation: client.${node.table.typescriptNamespacedName}.${BY_PRIMARY_KEY}.delete.bind(client),
                 primaryKeyPicker: ${node.table.typescriptNamespacedName}.primaryKeyFrom,
                 RowImplementation: ${node.table.typescriptNamespacedName}.RowImplementation,
                 rowEquals: ${node.table.type.typescriptNamespacedName}.equals,
                 emptyRow: ${node.table.typescriptNamespacedName}.emptyRow
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
