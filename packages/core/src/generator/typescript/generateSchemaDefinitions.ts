import { GenerationContext } from "..";

/**
 * Generate TypeScript type definitions for all types available
 * in the database schema catalog along with request/response message
 * types for each available stored function.
 *
 *
 *
 * @param context
 * @param namespaces
 */
export const generateSchemaDefinitions = async (context: GenerationContext) => {
  // a place to store all the types
  // buffer up generated code here
  const generationBuffer = [];
  // each postgres namespace gets a typescript namespace -- generates itself
  // this includes all namespaces in order to get all types which can
  // be used by user defined schemas
  await Promise.all(
    context.namespaces.map((n) => {
      generationBuffer.push(
        n.typescriptTypeDefinition({
          ...context,
          currentNamespace: n.namespace,
        }),
      );
    }),
  );
  // all typecasts collected into a single interface
  generationBuffer.push(
    `
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type ArgumentToPostgres = any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type ArgumentFromPostgres = any;
    type Typecast = (x: ArgumentToPostgres) => ArgumentFromPostgres;
    export interface PostgresTypecasts {
      ${context.namespaces
        .flatMap((n) => n.types)
        .map((t) => `${t.postgresMarshallName}: Typecast`)
        .join(";\n")}
    }
  `,
  );
  return generationBuffer.join("\n");
};
