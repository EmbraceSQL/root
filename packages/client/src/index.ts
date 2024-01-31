import {
  EmbraceSQLRequest,
  EmbraceSQLResponse,
  InvokeQueryOptions,
  sleep,
} from "@embracesql/shared";

export * from "./typescript/generateClient";

export type EmbraceSQLClientProps = {
  /**
   * Connect to a server here.
   */
  url: string;
  /**
   * Generic options.
   */
  options?: InvokeQueryOptions;

  /**
   * CORS mode!
   */
  mode?: Request["mode"];
};

/**
 * EmbraceSQLClient is the main connection point to the server.
 *
 * `new` it up to get started!
 *
 * Pass in options, and you are connected.
 */
export class EmbraceSQLClient implements _HasClient {
  constructor(public props: EmbraceSQLClientProps) {}

  /**
   * Directly invoke EmbraceSQL.
   *
   * This is used inside code generated client libraries.
   *
   * You can call the server yourself this way, but it isn't particularly convenient
   * compared to using generated react hooks!
   */
  async invoke<
    Parameters,
    Values,
    Response,
    Options extends InvokeQueryOptions = InvokeQueryOptions,
  >(
    request: EmbraceSQLRequest<Parameters, Values, Options>,
  ): Promise<EmbraceSQLResponse<Response, Parameters, Values, Options>> {
    // assemble all the headers to make them available to HTTP
    const headers = {
      // start with client specified headers
      ...(this.props.options?.headers ?? {}),
      // and override with request specified headers
      ...(request.options?.headers ?? {}),
      "Content-Type": "application/json",
    };
    // it's always POST JSON in EmbraceSQL
    const props = {
      ...this.props,
      // headers will be sent along to HTTP
      headers,
    };

    let finalError: Error | undefined = undefined;

    for (let retry = 0; retry <= (request?.options?.retries ?? 0); retry += 1) {
      try {
        // actual trip to the network happens here
        const response = await fetch(this.props.url, {
          ...props,
          method: "POST",
          cache: "no-cache",
          redirect: "follow",
          body: JSON.stringify({
            ...request,
            options: {
              // combine client and request options
              ...(this.props.options ?? {}),
              // with request options taking preference
              ...(request.options ?? {}),
            },
          }),
        });

        // it'll be JSON back or an exception
        return (await response.json()) as unknown as EmbraceSQLResponse<
          Response,
          Parameters,
          Values,
          Options
        >;
      } catch (e) {
        finalError = e as Error;
        // this is the exponential backoff part
        if (retry > 0) {
          await sleep(100 * 2 ** retry);
        }
      }
    }

    // if we got here, we're past all the retries and it is time to throw
    throw finalError;
  }

  get client() {
    return this;
  }
}

interface _HasClient {
  client: EmbraceSQLClient;
}
/**
 * A class with a contained client. This is used for nested class creation
 * when generating type specific client libraries.
 */
export class HasClient implements _HasClient {
  constructor(private hasClient: _HasClient) {}

  get client() {
    return this.hasClient.client;
  }
}
