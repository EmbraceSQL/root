import {
  ASTKind,
  GenerationContext,
  IsNamed,
  NamespaceVisitor,
} from "@embracesql/shared";
import { pascalCase } from "change-case";

/**
 * Generate the connection between React and EmbraceSQL HTTP/S services.
 */
export const generateReactComponents = async (context: GenerationContext) => {
  const generationBuffer = [
    `// Begin React generated section`,
    `import React from "react";`,
    `export { EmbraceSQLClient, EmbraceSQLProvider } from "@embracesql/react";`,
    `import { EmbraceSQLProvider, useEmbraceSQLRequest } from "@embracesql/react";`,
  ];

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
        // dispatching the request
        generationBuffer.push(
          `const done = useEmbraceSQLRequest<${pascalCase(
            node.name,
          )}, never, ${tableTypeName}>(request);`,
        );
        generationBuffer.push(`
            return {
                loading: done?.loading,
                error: done?.error,
                results: done?.response?.results,
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
