import {
  ASTKind,
  BY_PRIMARY_KEY,
  FunctionOperationNode,
  GenerationContext,
  IndexOperationNode,
  NamedASTNode,
  TableNode,
} from "@embracesql/shared";

function returnParsedRows(table: TableNode): string {
  return `(
    response.results
      ?.map(${table.type.typescriptNamespacedName}.parse)
      .map(nullIsUndefined<${table.type.typescriptNamespacedName}>)
      .filter((x): x is ${table.type.typescriptNamespacedName} => x !== undefined) ?? []
  )
  `;
}

function returnParsedRow(table: TableNode): string {
  return `(
    nullIsUndefined<${table.type.typescriptNamespacedName}>(${table.type.typescriptNamespacedName}.parse(response.results))
  )
  `;
}

export const NestedNamedClassVisitor = {
  before: async (context: GenerationContext, node: NamedASTNode) => {
    console.assert(context);
    return `
          public ${node.typescriptName} = new class extends HasClient {
        `;
  },
  after: async (context: GenerationContext, node: NamedASTNode) => {
    console.assert(context);
    console.assert(node);
    return `}(this)`;
  },
};

const IndexOperation = {
  before: async (_: GenerationContext, node: IndexOperationNode) => {
    // will return a single row on a unique index
    const parametersType = node.index.type.typescriptNamespacedName;
    const resultType = node.index.unique
      ? `${node.index.table.type.typescriptNamespacedName} | undefined`
      : `${node.index.table.type.typescriptNamespacedName}[] | undefined`;
    const optionType = `${node.index.table.typescriptNamespacedName}.Options`;
    const parametersPick = node.index.type.attributes
      .map(
        (c) =>
          `${c.typescriptPropertyName}: parameters.${c.typescriptPropertyName}`,
      )
      .join(",");
    const generationBuffer = [
      `
          public async ${node.typescriptPropertyName}(parameters: ${parametersType}, options?: ${optionType}) {
            const response = await this.client.invoke<${parametersType}, never, ${resultType}, ${optionType}>({
              operation: "${node.typescriptNamespacedPropertyName}",
              parameters: {${parametersPick}},
              options
            });
        `,
    ];
    generationBuffer.push(
      node.index.unique
        ? `return ${returnParsedRow(node.index.table)};`
        : `return ${returnParsedRows(node.index.table)};`,
    );
    return generationBuffer.join("\n");
  },
  after: async () => {
    return `}`;
  },
};

const FunctionalOperation = {
  before: async (context: GenerationContext, node: FunctionOperationNode) => {
    const returnType = node.returnsMany
      ? `${node.resultsType?.typescriptNamespacedName}[]`
      : `${node.resultsType?.typescriptNamespacedName} | undefined`;

    const callBody = () => {
      if (node.parametersType) {
        const parametersType = `${node.parametersType.typescriptNamespacedName}`;
        return `
          public async call(parameters: ${parametersType}) : Promise<${returnType}> {
            const response = await this.client.invoke<${parametersType}, never, ${returnType}, never>({
              operation: "${node.typescriptNamespacedName}.call",
              parameters,
            });
        `;
      } else {
        return `
          public async call() : Promise<${returnType}> {
            const response = await this.client.invoke<never, never, ${returnType}, never>({
              operation: "${node.typescriptNamespacedName}.call",
            });
        `;
      }
    };
    return [
      await NestedNamedClassVisitor.before(context, node),
      callBody(),
    ].join("\n");
  },
  after: async (context: GenerationContext, node: FunctionOperationNode) => {
    return [
      node.returnsMany
        ? `return response.results?.map(r => ${node.resultsType?.typescriptNamespacedName}.parse(r)) as ${node.resultsType?.typescriptNamespacedName}[] ?? [];`
        : `return response.results ? nullIsUndefined(${node.resultsType?.typescriptNamespacedName}.parse(response.results)) : undefined;`,
      `}`,
      await NestedNamedClassVisitor.after(context, node),
    ].join("\n");
  },
};

/**
 * Generates a strongly typed client to invoke server operations over
 * HTTP/S.
 *
 * This allows access from any platform that supports `fetch`.
 *
 * Use this for direct browser access without React.
 */
export async function generateClient(context: GenerationContext) {
  console.assert(context);
  const generationBuffer = [
    "// begin fetch client",
    `import { EmbraceSQLClient as BaseClient, EmbraceSQLClientProps, HasClient } from "@embracesql/client";`,
  ];

  // wrap all this up in a class
  generationBuffer.push(`
  export class EmbraceSQLClient extends BaseClient {
    constructor(props: EmbraceSQLClientProps) {
      super(props);
    }

  `);

  context.handlers = {
    [ASTKind.Schema]: NestedNamedClassVisitor,

    [ASTKind.Tables]: NestedNamedClassVisitor,

    [ASTKind.Table]: NestedNamedClassVisitor,
    [ASTKind.Index]: {
      before: NestedNamedClassVisitor.before,
      after: async (context, node) => {
        return [
          await NestedNamedClassVisitor.after(context, node),
          node.primaryKey
            ? `public get ${BY_PRIMARY_KEY}(){ return this.${node.typescriptName} };`
            : ``,
        ].join("\n");
      },
    },
    [ASTKind.Scripts]: NestedNamedClassVisitor,
    [ASTKind.ScriptFolder]: NestedNamedClassVisitor,
    [ASTKind.Script]: FunctionalOperation,
    [ASTKind.Procedures]: NestedNamedClassVisitor,
    [ASTKind.Procedure]: FunctionalOperation,

    // C R U D
    [ASTKind.CreateOperation]: {
      before: async (_, node) => {
        // creating can be an upsert, so you can pass with and
        // without a primary key
        const valuesType = `Partial<${node.table.type.typescriptNamespacedName}>`;
        const returnType = `${node.table.type.typescriptNamespacedName}`;
        const valuesPick = node.table.allColumns
          .map(
            (c) =>
              `${c.typescriptPropertyName}: values.${c.typescriptPropertyName}`,
          )
          .join(",");
        return `
          public async create(values: ${valuesType}) : Promise<${returnType}|undefined> {
            const response = await this.client.invoke<never, ${valuesType}, ${returnType}, never>({
              operation: "${node.typescriptNamespacedPropertyName}",
              values: {${valuesPick}}
            });
            return ${returnParsedRow(node.table)};
          }
        `;
      },
    },
    [ASTKind.AllOperation]: {
      before: async (_, node) => {
        // all those rows
        return `
          public async all(options?: ${
            node.table.typescriptNamespacedName
          }.Options) : Promise<${node.table.type.typescriptNamespacedName}[]> {
            const response = await this.client.invoke<never, never, ${
              node.table.type.typescriptNamespacedName
            }[], ${node.table.typescriptNamespacedName}.Options>({
              operation: "${node.typescriptNamespacedPropertyName}",
              options
            });
            return ${returnParsedRows(node.table)};
          }
        `;
      },
    },

    // with the `returns` deletes and reads have the same structure
    [ASTKind.ReadOperation]: IndexOperation,
    [ASTKind.DeleteOperation]: IndexOperation,
    [ASTKind.UpdateOperation]: {
      before: async (_: GenerationContext, node) => {
        // will return a single row on a unique index
        const parametersType = node.index.type.typescriptNamespacedName;
        const valuesType = `Partial<${node.index.table.type.typescriptNamespacedName}>`;
        const resultType = node.index.unique
          ? `${node.index.table.type.typescriptNamespacedName} | undefined`
          : `${node.index.table.type.typescriptNamespacedName}[] | undefined`;
        const parametersPick = node.index.type.attributes
          .map(
            (c) =>
              `${c.typescriptPropertyName}: parameters.${c.typescriptPropertyName}`,
          )
          .join(",");
        const valuesPick = node.index.table.allColumns
          .map(
            (c) =>
              `${c.typescriptPropertyName}: values.${c.typescriptPropertyName}`,
          )
          .join(",");
        const generationBuffer = [
          `
          public async ${node.typescriptPropertyName}(parameters: ${parametersType}, values: ${valuesType}) {
            const response = await this.client.invoke<${parametersType}, ${valuesType}, ${resultType}, never>({
              operation: "${node.typescriptNamespacedPropertyName}",
              parameters: {${parametersPick}},
              values: {${valuesPick}}
            });
        `,
        ];
        generationBuffer.push(
          node.index.unique
            ? `return ${returnParsedRow(node.index.table)};`
            : `return ${returnParsedRows(node.index.table)};`,
        );
        return generationBuffer.join("\n");
      },
      after: async () => {
        return `}`;
      },
    },
  };

  generationBuffer.push(await context.database.visit(context));

  // end wrapping class
  generationBuffer.push("}");
  return generationBuffer.join("\n");
}
