import { EmbraceSQLRequest, EmbraceSQLResponse } from "@embracesql/shared";

export * from "./typescript/generateClient";

export type EmbraceSQLClientProps = {
  /**
   * Connect to a server here.
   */
  url: string;
  /**
   * Any headers you like are passed along to your EmbraceSQL
   * server.
   *
   * These are useful for security, particularly `authorization`
   * and cors: `origin` and `credentials`.
   */
  headers?: Record<string, string>;
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
  async invoke<Parameters, Values, Response, Options>(
    request: EmbraceSQLRequest<Parameters, Values, Options>,
  ): Promise<EmbraceSQLResponse<Response>> {
    // it's always POST JSON in EmbraceSQL
    const props = {
      ...this.props,
      headers: {
        ...this.props.headers,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(this.props.url, {
      ...props,
      method: "POST",
      cache: "no-cache",
      redirect: "follow",
      body: JSON.stringify(request),
    });

    // it'll be JSON back or an exception
    return (await response.json()) as unknown as EmbraceSQLResponse<Response>;
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
