import {
  ASTKind,
  GenerationContext,
  IsNamed,
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
    [ASTKind.Table]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Column]: NamespaceVisitor,
    [ASTKind.Index]: {
      before: async (_, node) => {
        const tableTypeName = `${pascalCase(
          (node.parent?.parent?.parent as unknown as IsNamed)?.name,
        )}.${pascalCase((node.parent as unknown as IsNamed)?.name)}`;
        const resultsTypeName = `${tableTypeName}${node.unique ? "" : "[]"}`;
        const generationBuffer = [""];
        generationBuffer.push(
          `export function use${pascalCase(node.name)}(parameters: ${pascalCase(
            node.name,
          )}) {`,
        );

        // request - this is the actual doing
        generationBuffer.push(`const request = {`);
        generationBuffer.push(`operation: "${node.typescriptNamespacedName}",`);
        generationBuffer.push(`parameters,`);
        generationBuffer.push(`}`);
        // dispatching the request
        generationBuffer.push(
          `const done = useEmbraceSQLRequest<${pascalCase(
            node.name,
          )}, never, ${resultsTypeName}>(request);`,
        );
        // capturing results from responses
        generationBuffer.push(
          `const [results, setResults] = React.useState<${resultsTypeName}>();`,
          `React.useEffect(() => {`,
          `setResults(done?.response?.results)`,
          `}, [done?.response]);`,
        );
        // callback on updates
        generationBuffer.push(
          `const updateCallback = useEmbraceSQLUpdateCallback<${tableTypeName}, ${resultsTypeName}>({operation: "${node.table.createOperation?.typescriptNamespacedName}", results, setResults});`,
        );
        // buffer up intercepted responses
        generationBuffer.push(
          `const [interceptedResults, setInterceptedResults] = React.useState<Intercepted<${tableTypeName}>${
            node.unique ? "" : "[]"
          }>();`,
        );

        generationBuffer.push(`React.useEffect(() => {`);
        generationBuffer.push(`if (done?.response?.results) {`);
        // result type, with setters attached
        if (node.unique) {
          generationBuffer.push(
            `setInterceptedResults(${tableTypeName}Interceptor(done.response.results, updateCallback));`,
          );
        } else {
          generationBuffer.push(
            `setInterceptedResults((results ?? []).map((r, i) => ${tableTypeName}Interceptor(r, updateCallback, i)));`,
          );
        }
        generationBuffer.push(`} else { setResults(undefined);}`);
        generationBuffer.push(`}, [results])`);

        // and the hook return all merged up -- note we're returning the
        // intercepted wrapper results
        generationBuffer.push(`
            return {
                loading: done?.loading,
                error: done?.error,
                results: interceptedResults,
            };
            `);

        return generationBuffer.join("\n");
      },
      after: async () => {
        return `}`;
      },
    },
  };

  generationBuffer.push(await context.database.visit(context));
  return generationBuffer.join("\n");
};
