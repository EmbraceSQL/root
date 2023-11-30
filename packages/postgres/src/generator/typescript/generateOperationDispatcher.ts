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
      private dispatchMap: Record<string, OperationDispatchMethod>;
      constructor(private database: Database){
        this.dispatchMap = {

    `,
  ];

  // all possible operations
  const operations = await DatabaseOperation.factory(context);
  operations.dispatchable.forEach((o) => {
    const caller: string[] = [];
    const callee: string[] = [];
    // parameters go first!
    if (o.typescriptParametersType(context)) {
      caller.push(`parameters: object`);
      callee.push(`parameters as ${o.typescriptParametersType(context)}`);
    }
    if (o.typescriptValuesType(context)) {
      caller.push(`values: object`);
      callee.push(`values as ${o.typescriptValuesType(context)}`);
    }
    generationBuffer.push(
      `"${o.dispatchName(context)}": async (${caller.join(
        ",",
      )}) => database.${o.dispatchName(context)}(${callee.join(",")}),`,
    );
  });
  // all possible scripts
  if (context.sqlScriptsFrom?.length) {
    const scripts = await SqlScriptOperations.factory(
      context,
      context.sqlScriptsFrom,
    );
    console.assert(scripts);
  }
  // close constructor
  generationBuffer.push(`}}`);

  generationBuffer.push(`async dispatch() {`);
  // close dispatch
  generationBuffer.push(`}`);
  // close class
  generationBuffer.push(`}`);
  return generationBuffer.join("\n");
};
