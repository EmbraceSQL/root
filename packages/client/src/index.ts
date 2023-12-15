import { EmbraceSQLRequest, EmbraceSQLResponse } from "@embracesql/shared";

type EmbraceSQLClientProps = {
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
export class EmbraceSQLClient {
  constructor(public props: EmbraceSQLClientProps) {}

  /**
   * Directly invoke EmbraceSQL.
   *
   * This is used inside code generated client libraries.
   *
   * You can call the server yourself this way, but it isn't particularly convenient
   * compared to using generated react hooks!
   */
  async invoke<Parameters, Values, Response>(
    request: EmbraceSQLRequest<Parameters, Values>,
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
}
