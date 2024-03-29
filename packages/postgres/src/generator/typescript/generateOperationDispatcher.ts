import {
  ASTKind,
  GenerationContext,
  FunctionOperationNode,
  CreateOperationNode,
  ReadOperationNode,
  UpdateOperationNode,
  DeleteOperationNode,
  AllOperationNode,
  REQUEST_OPTIONS,
  REQUEST_PARAMETERS,
} from "@embracesql/shared";

const FunctionOperationNodeVisitor = {
  before: async (_: GenerationContext, node: FunctionOperationNode) => {
    const callee: string[] = [];
    // parameters go first!
    if (node.parametersType) {
      callee.push(
        `${REQUEST_PARAMETERS} as ${node.parametersType.typescriptNamespacedName}`,
      );
    }
    callee.push(`${REQUEST_OPTIONS}`);
    return `"${
      node.typescriptNamespacedName
    }.call": async (request: EmbraceSQLRequest<object, object, EmbraceSQLOptions>) => database.${
      node.typescriptNamespacedName
    }.call(${callee.join(",")}),`;
  },
};

/**
 * Wrap up the database class in a hash style dispatch map for operation processing
 * via `EmbraceSQLRequest`
 */
export const generateOperationDispatcher = async (
  context: GenerationContext,
) => {
  return await context.database.visit({
    ...context,
    handlers: {
      [ASTKind.Database]: {
        before: async () => {
          return `
          // begin - operation dispatch map
          import { EmbraceSQLRequest, OperationDispatchMethod } from "@embracesql/shared";
          export class OperationDispatcher {
            private dispatchMap: Record<string, OperationDispatchMethod>;
            constructor(private database: Database){
              this.dispatchMap = {

          `;
        },
        after: async () => {
          return [
            `}`, // dispatch map
            `}`, // constructor
            `
            async dispatch(request: EmbraceSQLRequest<object, object, EmbraceSQLOptions>) {
              if (!this.dispatchMap[request.operation]) {
                throw new Error(\`\${request.operation} not available\`);
              }
              return this.dispatchMap[request.operation](request);
            }
            `,
            `}`, // class
          ].join("\n");
        },
      },
      [ASTKind.Script]: FunctionOperationNodeVisitor,
      [ASTKind.Procedure]: FunctionOperationNodeVisitor,
      [ASTKind.CreateOperation]: {
        before: async (_: GenerationContext, node: CreateOperationNode) => {
          const callee: string[] = [];
          callee.push(
            `request.values as ${node.table.typescriptNamespacedName}.Values`,
          );
          callee.push(`${REQUEST_OPTIONS}`);
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object, EmbraceSQLOptions>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
      [ASTKind.AllOperation]: {
        before: async (_: GenerationContext, node: AllOperationNode) => {
          const callee: string[] = [];
          callee.push(`${REQUEST_OPTIONS}`);
          return [
            `
             "${
               node.typescriptNamespacedPropertyName
             }": async (request: EmbraceSQLRequest<object, object, EmbraceSQLOptions>) =>
              database.${node.typescriptNamespacedPropertyName}(${callee.join(
                ",",
              )}),
            `,
          ].join("\n");
        },
      },
      [ASTKind.ReadOperation]: {
        before: async (_: GenerationContext, node: ReadOperationNode) => {
          const callee: string[] = [];
          callee.push(
            `${REQUEST_PARAMETERS} as ${node.index.type.typescriptNamespacedName}`,
            `${REQUEST_OPTIONS}`,
          );
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object, EmbraceSQLOptions>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
      [ASTKind.UpdateOperation]: {
        before: async (_: GenerationContext, node: UpdateOperationNode) => {
          const callee: string[] = [];
          callee.push(
            `${REQUEST_PARAMETERS} as ${node.index.type.typescriptNamespacedName}`,
          );
          callee.push(
            `request.values as Partial<${node.index.table.typescriptNamespacedName}.Values>`,
          );
          callee.push(`${REQUEST_OPTIONS}`);
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object, EmbraceSQLOptions>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
      [ASTKind.DeleteOperation]: {
        before: async (_: GenerationContext, node: DeleteOperationNode) => {
          const callee: string[] = [];
          callee.push(
            `${REQUEST_PARAMETERS} as ${node.index.type.typescriptNamespacedName}`,
          );
          callee.push(`${REQUEST_OPTIONS}`);
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object, EmbraceSQLOptions>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
    },
  });
};
