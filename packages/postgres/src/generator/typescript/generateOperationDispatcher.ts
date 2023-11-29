import { GenerationContext } from "..";
import { DatabaseOperation } from "../operations/database";
import { SqlScriptOperations } from "../operations/sqlscript";

/**
 * Wrap up the database class in a hash style dispatch map for operation processing
 * via `EmbraceSQLRequest`
 */
export const generateOperationDispatcher = async (
  context: GenerationContext,
) => {
  // start off a new class foor the dispatcher
  const generationBuffer = [
    `
    export class OperationDispatcher {

      constructor(private database: Database){}
    `,
  ];

  generationBuffer.push(`async dispatch() {`);
  // all possible operations
  const operations = await DatabaseOperation.factory(context);
  console.assert(operations);
  // all possible scripts
  if (context.sqlScriptsFrom?.length) {
    const scripts = await SqlScriptOperations.factory(
      context,
      context.sqlScriptsFrom,
    );
    console.assert(scripts);
  }
  // close dispatch
  generationBuffer.push(`}`);
  // close class
  generationBuffer.push(`}`);
  return generationBuffer.join("\n");
};
