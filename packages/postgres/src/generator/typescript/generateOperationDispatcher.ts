import { ASTKind, GenerationContext, OperationNode } from "@embracesql/shared";

const OperationVisitor = {
  before: async (_: GenerationContext, node: OperationNode) => {
    const callee: string[] = [];
    // parameters go first!
    if (node.argumentsType) {
      callee.push(
        `request.parameters as ${node.argumentsType.typescriptNamespacedName}`,
      );
    }
    // values go second -- but it is possible to have ONLY values
    if (node.valuesType) {
      callee.push(
        `request.values as ${node.valuesType?.typescriptNamespacedName}`,
      );
    }
    return `"${
      node.typescriptNamespacedName
    }": async (request: EmbraceSQLRequest<object, object>) => database.${
      node.typescriptNamespacedPropertyName
    }(${callee.join(",")}),`;
  },
  after: async (_: GenerationContext, node: OperationNode) => {
    console.assert(_);
    console.assert(node);
    return ``;
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
              return this.dispatchMap[request.operation](request);
            }
            `,
            `}`, // class
          ].join("\n");
        },
      },
      [ASTKind.Script]: OperationVisitor,
      // TODO: Autocrud
    },
  });
};
