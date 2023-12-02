import { GenerationContext } from "@embracesql/shared";

/**
 * Generate the connection between React and EmbraceSQL HTTP/S services.
 */
export const generateReactComponents = async (context: GenerationContext) => {
  console.assert(context);
  const generationBuffer = [
    `// Begin React generated section`,
    `import React from "react";`,
  ];

  generationBuffer.push(`// End React generated section`);
  return generationBuffer.join("\n");
};
