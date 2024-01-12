import { OperationDispatcher, Database } from "../../server/dvdrental";
import { EmbraceSQLRequest, EmbraceSQLResponse } from "@embracesql/shared";

/**
 * Connect next app route to EmbraceSQL with a plain
 * PostgreSQL connection url.
 */
function embraceSQL(postgresUrl: string) {
  let database: Database;
  return async (req: Request) => {
    // do we already have a connection
    if (!database) {
      database = await Database.connect(postgresUrl);
    }
    // dispatcher finds the right method for a request
    const dispatcher = new OperationDispatcher(database);
    try {
      // do we have a valid request?
      const request: EmbraceSQLRequest<object, object> = await req.json();
      if (!request.operation && !(request.parameters || request.values)) {
        throw new Error("Invalid Request");
      }
      // now we are 🥘
      const results = await dispatcher.dispatch(request);
      const response: EmbraceSQLResponse<unknown> = {
        operation: request.operation,
        headers: request.headers ?? {},
        results,
      };
      return Response.json(response);
    } catch (e) {
      return new Response((e as Error)?.message, { status: 400 });
    }
  };
}

/**
 * NextJS POST route connection.
 */
export const POST = embraceSQL(
  "postgres://postgres:postgres@localhost/dvdrental",
);
