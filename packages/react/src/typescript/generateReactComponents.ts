import {
  ASTKind,
  GenerationContext,
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
    `import {EmbraceSQLClient} from "@embracesql/client";`,
    `import { EmbraceSQLProvider, useEmbraceSQLClient } from "@embracesql/react";`,
  ];

  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Table]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Column]: NamespaceVisitor,
    [ASTKind.Index]: {
      before: async (_, node) => {
        const generationBuffer = [""];
        generationBuffer.push(
          `export function use${pascalCase(node.name)}(parameters: ${pascalCase(
            node.name,
          )}) {`,
        );
        generationBuffer.push(`const client = useEmbraceSQLClient()`);

        // request - this is the actual doing
        generationBuffer.push(`const request = {`);
        generationBuffer.push(`operation: "${node.dispatchName}",`);
        generationBuffer.push(`parameters,`);
        generationBuffer.push(`values: {},`);
        generationBuffer.push(`}`);

        return generationBuffer.join("\n");
      },
      after: async () => {
        return `}`;
      },
    },
  };

  // laying out schemas and tables as namespaces
  generationBuffer.push(await context.database.visit(context));

  generationBuffer.push(`// End React generated section`);
  return generationBuffer.join("\n");
};
