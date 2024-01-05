import {
  ASTKind,
  GenerationContext,
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
        const tableTypeName = `${node.table.typescriptNamespacedName}.Record`;
        const resultsTypeName = `${node.table.typescriptNamespacedName}.Record${
          node.unique ? "" : "[]"
        }`;
        const generationBuffer = [""];
        generationBuffer.push(
          `export function use${pascalCase(node.name)}(parameters: ${pascalCase(
            node.name,
          )}) {`,
        );

        // request - this is the actual doing
        generationBuffer.push(`const request = {`);
        generationBuffer.push(
          `operation: "${node.typescriptNamespacedName}.read",`,
        );
        generationBuffer.push(`parameters,`);
        generationBuffer.push(`}`);
        // dispatching the request
        generationBuffer.push(
          `const done = useEmbraceSQLRequest<${pascalCase(
            node.name,
          )}, never, ${resultsTypeName}>(request);`,
        );
        // re render callback tick
        generationBuffer.push(`const [tick, setTick] = React.useState(0);`);
        generationBuffer.push(`
          const inMemoryUpdate = React.useCallback(() => {
              setTick(Date.now());
          }, [setTick]);
        `);
        // capturing results from responses
        generationBuffer.push(
          `const [results, setResults] = React.useState<${resultsTypeName}>();`,
          `React.useEffect(() => {`,
          `setResults(done?.response?.results)`,
          `}, [done?.response]);`,
        );
        // callback on updates
        generationBuffer.push(
          `const updateCallback = useEmbraceSQLUpdateCallback(
           {operation: "${node.table.createOperation?.typescriptNamespacedPropertyName}",
              inMemoryUpdate,
              primaryKeyPicker: ${node.table.typescriptNamespacedName}.primaryKeyFrom
           });`,
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
            `setInterceptedResults(new ${node.table.typescriptNamespacedName}.Interceptor(done.response.results, updateCallback));`,
          );
        } else {
          generationBuffer.push(
            `setInterceptedResults((results ?? []).map((r, i) => new ${node.table.typescriptNamespacedName}.Interceptor(r, updateCallback, i)));`,
          );
        }
        generationBuffer.push(`} else { setResults(undefined);}`);
        generationBuffer.push(`}, [done?.response])`);

        // and the hook return all merged up -- note we're returning the
        // intercepted wrapper results
        generationBuffer.push(`
            return {
                loading: done?.loading,
                error: done?.error,
                results: interceptedResults,
                tick
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
