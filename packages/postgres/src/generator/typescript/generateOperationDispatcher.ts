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
    // begin - operation dispatch map
    import { EmbraceSQLRequest, OperationDispatchMethod } from "@embracesql/shared";
    export class OperationDispatcher {
      private dispatchMap: Record<string, OperationDispatchMethod>;
      constructor(private database: Database){
        this.dispatchMap = {

    `,
  ];

  // all possible operations
  const operations = await DatabaseOperation.factory(context);
  operations.dispatchable.forEach((o) => {
    const callee: string[] = [];
    // parameters go first!
    if (o.typescriptParametersType(context)) {
      callee.push(
        `request.parameters as ${o.typescriptParametersType(context)}`,
      );
    }
    if (o.typescriptValuesType(context)) {
      callee.push(`request.values as ${o.typescriptValuesType(context)}`);
    }
    generationBuffer.push(
      `"${o.dispatchName(
        context,
      )}": async (request: EmbraceSQLRequest<object, object>) => database.${o.dispatchName(
        context,
      )}(${callee.join(",")}),`,
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

  generationBuffer.push(`
  async dispatch(request: EmbraceSQLRequest<object, object>) {
    return this.dispatchMap[request.operation](request);
  }`);
  // close class
  generationBuffer.push(`}`);
  return generationBuffer.join("\n");
};
