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
      .map(nullIsUndefined<${table.typescriptNamespacedName}.Record>)
      .filter((x): x is ${table.typescriptNamespacedName}.Record => x !== undefined) ?? []
  )
  `;
}

function returnParsedRow(table: TableNode): string {
  return `(
    nullIsUndefined<${table.typescriptNamespacedName}.Record>(${table.type.typescriptNamespacedName}.parse(response.results))
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
    // will return a single record on a unique index
    const parametersType = node.index.typescriptNamespacedName;
    const resultType = node.index.unique
      ? `${node.index.table.typescriptNamespacedName}.Record | undefined`
      : `${node.index.table.typescriptNamespacedName}.Record[] | undefined`;
    const parametersPick = node.index.columns
      .map(
        (c) =>
          `${c.typescriptPropertyName}: parameters.${c.typescriptPropertyName}`,
      )
      .join(",");
    const generationBuffer = [
      `
          public async ${node.typescriptPropertyName}(parameters: ${parametersType}) {
            const response = await this.client.invoke<${parametersType}, never, ${resultType}>({
              operation: "${node.typescriptNamespacedPropertyName}",
              parameters: {${parametersPick}}
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
    const returnType = `${node.resultsType?.typescriptNamespacedName}${
      node.returnsMany ? "[]" : ""
    }`;

    if (node.parametersType) {
      const parametersType = `${node.parametersType.typescriptNamespacedName}`;
      return `
          public async ${node.typescriptPropertyName}(parameters: ${parametersType}) : Promise<${returnType}|undefined> {
            const response = await this.client.invoke<${parametersType}, never, ${returnType}>({
              operation: "${node.typescriptNamespacedPropertyName}",
              parameters
            });
        `;
    } else {
      return `
          public async ${node.typescriptPropertyName}() : Promise<${returnType}|undefined> {
            const response = await this.client.invoke<never, never, ${returnType}>({
              operation: "${node.typescriptNamespacedPropertyName}",
            });
        `;
    }
  },
  after: async (context: GenerationContext, node: FunctionOperationNode) => {
    console.assert(context);
    console.assert(node);
    return [
      node.returnsMany
        ? `return response.results?.map(r => ${node.resultsType?.typescriptNamespacedName}.parse(r)) as ${node.resultsType?.typescriptNamespacedName}[] ?? [];`
        : `return response.results ? nullIsUndefined(${node.resultsType?.typescriptNamespacedName}.parse(response.results)) : undefined;`,
      `}`,
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
        const valuesType = `${node.table.typescriptNamespacedName}.Values`;
        const returnType = `${node.table.typescriptNamespacedName}.Record`;
        const valuesPick = node.table.allColumns
          .map(
            (c) =>
              `${c.typescriptPropertyName}: values.${c.typescriptPropertyName}`,
          )
          .join(",");
        return `
          public async create(values: ${valuesType}) : Promise<${returnType}|undefined> {
            const response = await this.client.invoke<never, ${valuesType}, ${returnType}>({
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
          public async all() : Promise<${
            node.table.typescriptNamespacedName
          }.Record[]> {
            const response = await this.client.invoke<never, never, ${
              node.table.typescriptNamespacedName
            }.Record[]>({
              operation: "${node.typescriptNamespacedPropertyName}"
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
        // will return a single record on a unique index
        const parametersType = node.index.typescriptNamespacedName;
        const valuesType = `Partial<${node.index.table.type.typescriptNamespacedName}>`;
        const resultType = node.index.unique
          ? `${node.index.table.typescriptNamespacedName}.Record | undefined`
          : `${node.index.table.typescriptNamespacedName}.Record[] | undefined`;
        const parametersPick = node.index.columns
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
            const response = await this.client.invoke<${parametersType}, ${valuesType}, ${resultType}>({
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
