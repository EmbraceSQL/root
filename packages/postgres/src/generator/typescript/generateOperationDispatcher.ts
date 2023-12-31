import {
  ASTKind,
  GenerationContext,
  FunctionOperationNode,
  CreateOperationNode,
  ReadOperationNode,
  UpdateOperationNode,
  DeleteOperationNode,
  AllOperationNode,
} from "@embracesql/shared";

const FunctionOperationNodeVisitor = {
  before: async (_: GenerationContext, node: FunctionOperationNode) => {
    const callee: string[] = [];
    // parameters go first!
    if (node.parametersType) {
      callee.push(
        `request.parameters as ${node.parametersType.typescriptNamespacedName}`,
      );
    }
    return `"${
      node.typescriptNamespacedPropertyName
    }": async (request: EmbraceSQLRequest<object, object>) => database.${
      node.typescriptNamespacedPropertyName
    }(${callee.join(",")}),`;
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
            async dispatch(request: EmbraceSQLRequest<object, object>) {
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
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
      [ASTKind.AllOperation]: {
        before: async (_: GenerationContext, node: AllOperationNode) => {
          return [
            `
             "${node.typescriptNamespacedPropertyName}": async (request: EmbraceSQLRequest<object, object>) =>
              database.${node.typescriptNamespacedPropertyName}(),
            `,
          ].join("\n");
        },
      },
      [ASTKind.ReadOperation]: {
        before: async (_: GenerationContext, node: ReadOperationNode) => {
          const callee: string[] = [];
          callee.push(
            `request.parameters as ${node.index.typescriptNamespacedName}`,
          );
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
      [ASTKind.UpdateOperation]: {
        before: async (_: GenerationContext, node: UpdateOperationNode) => {
          const callee: string[] = [];
          callee.push(
            `request.parameters as ${node.index.typescriptNamespacedName}`,
          );
          callee.push(
            `request.values as Partial<${node.index.table.typescriptNamespacedName}.Values>`,
          );
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
      [ASTKind.DeleteOperation]: {
        before: async (_: GenerationContext, node: DeleteOperationNode) => {
          const callee: string[] = [];
          callee.push(
            `request.parameters as ${node.index.typescriptNamespacedName}`,
          );
          return `"${
            node.typescriptNamespacedPropertyName
          }": async (request: EmbraceSQLRequest<object, object>) => database.${
            node.typescriptNamespacedPropertyName
          }(${callee.join(",")}),`;
        },
      },
    },
  });
};
