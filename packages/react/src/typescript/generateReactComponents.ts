import {
  ASTKind,
  GenerationContext,
  IsNamed,
  NamespaceVisitor,
} from "@embracesql/shared";
import { camelCase, pascalCase } from "change-case";

/**
 * Generate the connection between React and EmbraceSQL HTTP/S services.
 */
export const generateReactComponents = async (context: GenerationContext) => {
  const generationBuffer = [
    `// Begin React generated section`,
    `import React from "react";`,
    `export { EmbraceSQLClient, EmbraceSQLProvider } from "@embracesql/react";`,
    `import { useEmbraceSQLRequest, useEmbraceSQLUpdateCallback } from "@embracesql/react";`,
    `type InterceptorCallback<T> = (value: T, index?: number) => Promise<void>;`,
  ];

  // generate per table return type interceptors - these are used to have
  // self updating hooked values
  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (_, node) => {
        const tableTypeName = `${pascalCase(
          (node as unknown as IsNamed)?.name,
        )}`;
        const generationBuffer = [""];
        generationBuffer.push(
          `export function ${tableTypeName}Interceptor(value: ${tableTypeName}, callback: InterceptorCallback<${tableTypeName}>, index?: number) : ${tableTypeName}{`,
        );
        generationBuffer.push(`return {`);

        return generationBuffer.join("\n");
      },
      after: async () => {
        return `}}`;
      },
    },
    [ASTKind.Column]: {
      before: async (_, node) => {
        const generationBuffer = [""];
        generationBuffer.push(
          `get ${camelCase(node.name)}() { return value.${camelCase(
            node.name,
          )};},`,
        );
        generationBuffer.push(`set ${camelCase(node.name)}(newValue) {`);
        generationBuffer.push(`value.${camelCase(node.name)} = newValue;`);
        generationBuffer.push(`void callback(value, index);`);
        generationBuffer.push(`},`);
        return generationBuffer.join("\n");
      },
    },
  };
  generationBuffer.push(await context.database.visit(context));

  // the read hooks
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
        generationBuffer.push(`operation: "${node.dispatchName}",`);
        generationBuffer.push(`parameters,`);
        generationBuffer.push(`}`);
        // capturing results from responses
        generationBuffer.push(
          `const [results, setResults] = React.useState<${resultsTypeName}>();`,
        );
        // callback on updates
        generationBuffer.push(
          `const updateCallback = useEmbraceSQLUpdateCallback<${tableTypeName}, ${resultsTypeName}>({operation: "${node.parent?.dispatchName}", setResults});`,
        );
        // dispatching the request
        generationBuffer.push(
          `const done = useEmbraceSQLRequest<${pascalCase(
            node.name,
          )}, never, ${resultsTypeName}>(request);`,
        );
        // hook the response -- attach property set reactions here
        generationBuffer.push(`React.useEffect(() => {`);
        generationBuffer.push(`if (done?.response?.results) {`);
        // result type, with setters attached
        if (node.unique) {
          generationBuffer.push(
            `setResults(${tableTypeName}Interceptor(done.response.results, updateCallback));`,
          );
        } else {
          generationBuffer.push(
            `setResults(done.response.results.map((r, i) => ${tableTypeName}Interceptor(r, updateCallback, i)));`,
          );
        }
        generationBuffer.push(`} else { setResults(undefined);}`);
        generationBuffer.push(`}, [done?.response])`);

        // and the hook return all merged up
        generationBuffer.push(`
            return {
                loading: done?.loading,
                error: done?.error,
                results: results,
            };
            `);

        return generationBuffer.join("\n");
      },
      after: async () => {
        return `}`;
      },
    },
  };

  // laying out schemas and tables as namespaces
  generationBuffer.push(await context.database.visit(context));
  // close off Hooks namespace
  generationBuffer.push(`// End React generated section`);
  return generationBuffer.join("\n");
};
