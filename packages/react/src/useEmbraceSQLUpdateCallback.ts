import { useEmbraceSQLClient } from "./provider";
import React from "react";

type Props<T> = {
  /**
   * Operation name that will do an upsert.
   */
  operation: string;
  /**
   * Dispatch back the updated state when returned from the database.
   */
  setResults: React.Dispatch<React.SetStateAction<T | undefined>>;
};

/**
 * Hook and implement update interception on EmbraceSQL table record types.
 *
 * This hook creates a callback that actually performs the update to
 * the database over an HTTP/S EmbraceSQL server via context provided client.
 *
 * Debounced to avoid ⚒️ your poor database.
 */
export function useEmbraceSQLUpdateCallback<T, R>({
  operation,
  setResults,
}: Props<R>) {
  // context provided client
  const client = useEmbraceSQLClient();

  return React.useCallback(
    async (updated: T, index?: number) => {
      // TODO: debounce via primary key

      if (client) {
        // actual server trip - counting on a read back of a single record
        const response = await client.invoke<T, T, T>({
          operation,
          parameters: updated,
          values: updated,
        });
        // response has the single read-back record -- this is what needs
        // to be merged into react state
        console.assert(response.results);
        if (index !== undefined) {
          // update state in a slot in an array
        } else {
          // update state with the single record
          setResults(response.results as R);
        }
      }
    },
    [client, operation, setResults],
  );
}
