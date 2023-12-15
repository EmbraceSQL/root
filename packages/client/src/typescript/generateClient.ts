import { GenerationContext } from "@embracesql/shared";

/**
 * Generates a strongly typed client to invoke server operations over
 * HTTP/S.
 *
 * This allows access from any platform that supports `fetch`.
 *
 * Use this for direct browser access without React, or in client/server
 * node.
 */
export async function generateClient(context: GenerationContext) {
  console.assert(context);
  const generationBuffer = [""];
  return generationBuffer.join("\n");
}
