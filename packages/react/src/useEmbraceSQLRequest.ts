import { useEmbraceSQLClient } from "./provider";
import { EmbraceSQLRequest, EmbraceSQLResponse } from "@embracesql/shared";
import React from "react";

/**
 * Hook into EmbraceSQL and issue a request to an HTTP/S server via
 * an `EmbraceSQLClient` via context.
 *
 * This hook intends to lightly adapt request/response pairing in a fashion
 * similiar to a `useFetch` type hook.
 */
export function useEmbraceSQLRequest<P, V, R>(
  request: EmbraceSQLRequest<P, V>,
) {
  const [response, setResponse] = React.useState<EmbraceSQLResponse<R>>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error>();
  const client = useEmbraceSQLClient();

  // fetching if the parameters or client chagned
  // this is using JSON to deep compare the parameters
  React.useEffect(() => {
    const fetchData = async () => {
      if (client) {
        try {
          const response = await client.invoke(request);
          setResponse(response as EmbraceSQLResponse<R>);
          setError(undefined);
        } catch (e) {
          setResponse(undefined);
          setError(e as Error);
        } finally {
          setLoading(false);
        }
      }
    };
    setLoading(true);
    void fetchData();
  }, [JSON.stringify(request), client]);

  return {
    loading,
    response,
    error,
  };
}
