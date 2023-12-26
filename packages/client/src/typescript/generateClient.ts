import {
  ASTKind,
  GenerationContext,
  IndexOperationNode,
  NamedASTNode,
} from "@embracesql/shared";

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

// TODO: generate client for sql scripts
// TODO: test client with sql scripts

const IndexOperation = {
  before: async (_: GenerationContext, node: IndexOperationNode) => {
    // will return a single record on a unique index
    const parametersType = node.index.typescriptNamespacedName;
    const resultType = node.index.unique
      ? `${node.index.table.typescriptNamespacedName}.Record | undefined`
      : `${node.index.table.typescriptNamespacedName}.Record[] | undefined`;
    const generationBuffer = [
      `
          public async ${node.typescriptPropertyName}(parameters: ${parametersType}) {
            const response = await this.client.invoke<${parametersType}, never, ${resultType}>({
              operation: "${node.typescriptNamespacedPropertyName}",
              parameters
            });
        `,
    ];
    generationBuffer.push(
      node.index.unique
        ? `return response.results ? response.results : undefined`
        : `return response.results ? response.results : []`,
    );
    return generationBuffer.join("\n");
  },
  after: async () => {
    return `}`;
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
    [ASTKind.Index]: NestedNamedClassVisitor,

    // C R U D
    [ASTKind.CreateOperation]: {
      before: async (_, node) => {
        // creating can be an upsert, so you can pass with and
        // without a primary key
        const valuesType = `${node.table.typescriptNamespacedName}.Values`;
        const returnType = `${node.table.typescriptNamespacedName}.Record`;
        return `
          public async create(values: ${valuesType}) : Promise<${returnType}|undefined> {
            const response = await this.client.invoke<never, ${valuesType}, ${returnType}>({
              operation: "${node.typescriptNamespacedPropertyName}",
              values
            });
            return response.results;
          }
        `;
      },
    },

    // with the `returns` deletes and reads have the same structure
    [ASTKind.ReadOperation]: IndexOperation,
    [ASTKind.DeleteOperation]: IndexOperation,
    [ASTKind.UpdateOperation]: {
      before: async (_: GenerationContext, node) => {
        // will return a single record on a unique index
        const parametersType = node.index.typescriptNamespacedName;
        const valuesType = `Partial<${node.index.table.type.typescriptNamespacedName}>`;
        const resultType = node.index.unique
          ? `${node.index.table.typescriptNamespacedName}.Record | undefined`
          : `${node.index.table.typescriptNamespacedName}.Record[] | undefined`;
        const generationBuffer = [
          `
          public async ${node.typescriptPropertyName}(parameters: ${parametersType}, values: ${valuesType}) {
            const response = await this.client.invoke<${parametersType}, ${valuesType}, ${resultType}>({
              operation: "${node.typescriptNamespacedPropertyName}",
              parameters,
              values
            });
        `,
        ];
        generationBuffer.push(
          node.index.unique
            ? `return response.results ? response.results : undefined`
            : `return response.results ? response.results : []`,
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
