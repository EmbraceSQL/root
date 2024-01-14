import { generateReactBindables } from "./generateReactBindables";
import { generateReactHooks } from "./generateReactHooks";
import { GenerationContext } from "@embracesql/shared";

/**
 * Generate the connection between React and EmbraceSQL HTTP/S services.
 */
export const generateReactComponents = async (context: GenerationContext) => {
  const generationBuffer = [
    `import React from "react";`,
    `export { EmbraceSQLProvider } from "@embracesql/react";`,
    `import { useEmbraceSQLClient, useEmbraceSQLRow, useEmbraceSQLRows, useEmbraceSQLImmutableRows, useEmbraceSQLImmutable, ChangeEvent, Row as IsRow, RowBase, RecordCallback, GeneratedRowProps } from "@embracesql/react";`,
  ];

  generationBuffer.push(await generateReactBindables(context));
  generationBuffer.push(await generateReactHooks(context));

  // close off Hooks namespace
  generationBuffer.push(`// End React generated section`);
  return generationBuffer.join("\n");
};
