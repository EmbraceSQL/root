import { generateReactBindables } from "./generateReactBindables";
import { generateReactHooks } from "./generateReactHooks";
import { GenerationContext } from "@embracesql/shared";

/**
 * Generate the connection between React and EmbraceSQL HTTP/S services.
 */
export const generateReactComponents = async (context: GenerationContext) => {
  const generationBuffer = [
    `// Begin React generated section`,
    `import React from "react";`,
    `export { EmbraceSQLClient, EmbraceSQLProvider } from "@embracesql/react";`,
    `import { useEmbraceSQLRequest, useEmbraceSQLUpdateCallback, useEmbraceSQLRow, useEmbraceSQLRows, InterceptorCallback, Intercepted, InterceptorBase, ChangeEvent } from "@embracesql/react";`,
  ];

  generationBuffer.push(await generateReactBindables(context));
  generationBuffer.push(await generateReactHooks(context));

  // close off Hooks namespace
  generationBuffer.push(`// End React generated section`);
  return generationBuffer.join("\n");
};
