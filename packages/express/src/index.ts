import {
  EmbraceSQLRequest,
  EmbraceSQLResponse,
  OperationDispatchMethod,
} from "@embracesql/shared";
import express from "express";

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
    // do we have a valid request?
    const request: EmbraceSQLRequest<object, object> = req.body;
    if (!request.operation && !(request.parameters || request.values)) {
      res.status(400).end();
      return;
    }

    // if the requested operation is in the type map -- handle it
    // otherwise chain along to the middleware
    if (props?.dispatch) {
      props
        .dispatch(request)
        .then((results) => {
          const response: EmbraceSQLResponse<unknown, object, object> = {
            ...request,
            results,
          };
          res.status(200).json(response).end();
        })
        .catch((reason) => {
          res.status(500);
          res.end((reason as Error).message);
        });
      return;
    } else {
      // hand along, nothing to do...
      next();
    }
  });

  return app;
};
