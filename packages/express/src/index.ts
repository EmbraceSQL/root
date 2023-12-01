import {
  EmbraceSQLRequest,
  EmbraceSQLResponse,
  OperationDispatchMethod,
} from "@embracesql/shared";
import express, { response } from "express";

type EmbraceSQLProps = {
  /**
   * Pass in the operation handler. This dispatches requests to be processed
   * into results.
   *
   * The type is vauge -- need to be able to handle all the different
   * generated operations.
   */
  dispatch: OperationDispatchMethod;
};

/**
 * EmbraceSQLExpress constructs a configurable express Application that
 * you can mount with `use(path, app)` into an existing express application
 * or run directly with `listen`.
 *
 * EmbraceSQL responds to `POST` of individual EmbraceSQLRequests, and returns
 * EmbraceSQLResponse encoded as JSON.
 *
 */
export const EmbraceSQLExpress = (props?: EmbraceSQLProps) => {
  const app = express();
  app.use(express.json({ limit: "10mb" }));
  app.post("/", (req, res, next) => {
    // complete a request, sending along any result set
    // with attached headers
    const completeResponse = (
      operation: string,
      headers: Record<string, string>,
      results: unknown,
    ) => {
      const response: EmbraceSQLResponse<unknown> = {
        operation,
        headers,
        results,
      };
      res.status(200).json(response).end();
    };
    // do we have a valid request?
    const request: EmbraceSQLRequest<object, object> = req.body;
    if (!request.operation || !request.parameters) {
      res.status(400).end();
    }

    // if the requested operation is in the type map -- handle it
    // otherwise chain along to the middleware
    if (props?.dispatch) {
      props
        .dispatch(request)
        .then((results) => {
          completeResponse(request.operation, request.headers ?? {}, results);
        })
        .catch((reason) => response.status(500).end(reason));
    } else {
      // hand along, nothing to do...
      next();
    }
  });

  return app;
};
