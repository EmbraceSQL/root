/**
 * Generate the connection between Express and EmbraceSQL Database
 * which can be used as an express Application or Middleware.
 */
export const generateExpressApp = async () => {
  const generationBuffer = [
    `// Begin Express generated section`,
    `import {EmbraceSQLExpress} from "@embracesql/express"`,
  ];
  generationBuffer.push(`
  export const EmbraceSQLExpressApp = async (postgresUrl: string, database?: Database) => {
    const dispatchToDatabase = database ?? await Database.connect(postgresUrl);
    const dispatcher = new OperationDispatcher(dispatchToDatabase);
    return EmbraceSQLExpress(dispatcher);
  }
  `);

  generationBuffer.push(`// End Express generated section`);
  return generationBuffer.join("\n");
};
