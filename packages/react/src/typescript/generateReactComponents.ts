import { GenerationContext, typescriptNamespaces } from "@embracesql/shared";

/**
 * Generate the connection between React and EmbraceSQL HTTP/S services.
 */
export const generateReactComponents = async (context: GenerationContext) => {
  console.assert(context);
  const generationBuffer = [
    `// Begin React generated section`,
    `import React from "react";`,
    `import {EmbraceSQLClient} from "@embracesql/client";`,
    `import { EmbraceSQLProvider, useEmbraceSQLClient } from "@embracesql/react";`,
  ];

  // laying out schemas and tables as namespaces
  generationBuffer.push(typescriptNamespaces(context.database));

  generationBuffer.push(`// End React generated section`);
  return generationBuffer.join("\n");
};
