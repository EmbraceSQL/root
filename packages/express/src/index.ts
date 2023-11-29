import { EmbraceSQLRequest, EmbraceSQLResponse } from "@embracesql/shared";
import express, { response } from "express";

/**
 * Operation handling methods connect express middleware plumbing to
 * EmbraceSQL.
 */
export type EmbraceSQLOperationHandler<P, V, R> = (
  request: EmbraceSQLRequest<P, V>,
) => Promise<R>;

type EmbraceSQLProps = {
  /**
   * Any headers you like will be attached to `EmbraceSQLResponse` messages.
   */
  defaultResponseHeaders?: Record<string, string>;
  /**
   * Pass in the operation handler. This dispatches requests to be processed
   * into results.
   *
   * The type is vauge -- need to be able to handle all the different
   * generated operations.
   */
  operationHandler: EmbraceSQLOperationHandler<object, object, object>;
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
    const completeResponse = (operation: string, results: object) => {
      const response: EmbraceSQLResponse<object> = {
        operation,
        headers: props?.defaultResponseHeaders ?? {},
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
    if (props?.operationHandler) {
      props
        .operationHandler(request)
        .then((results) => {
          completeResponse(request.operation, results);
        })
        .catch((reason) => response.status(500).end(reason));
    } else {
      // hand along, nothing to do...
      next();
    }
  });

  return app;
};
