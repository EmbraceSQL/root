import { ASTKind, GenerationContext } from "@embracesql/shared";

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
    [ASTKind.Schema]: {
      before: async (_, node) => {
        return `
          public ${node.typescriptName} = new class extends HasClient {
        `;
      },
      after: async () => {
        return `}({client: this})`;
      },
    },

    [ASTKind.Tables]: {
      before: async (_, node) => {
        return `
          public ${node.typescriptName} = new class extends HasClient {
        `;
      },
      after: async () => {
        return `}(this)`;
      },
    },

    [ASTKind.Table]: {
      before: async (_, node) => {
        return `
          public ${node.typescriptName} = new class extends HasClient {
        `;
      },
      after: async () => {
        return `}(this)`;
      },
    },

    [ASTKind.CreateOperation]: {
      before: async (_, node) => {
        // creating can be an upsert, so you can pass with and
        // without a primary key
        const valuesType = node.table.primaryKey
          ? `${node.table.typescriptNamespacedName}.Record | ${node.table.typescriptNamespacedName}.RecordNotPrimaryKey`
          : `${node.table.typescriptNamespacedName}.Record`;
        return `
          public async create(values: ${valuesType}) {
            const response = await this.client.invoke<never, ${valuesType}, ${valuesType}>({
              operation: "${node.typescriptNamespacedName}",
              values
            });
            return response.results;
          }
        `;
      },
    },
  };

  generationBuffer.push(await context.database.visit(context));

  // end wrapping class
  generationBuffer.push("}");
  return generationBuffer.join("\n");
}
