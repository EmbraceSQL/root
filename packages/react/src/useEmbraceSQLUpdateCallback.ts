import { useEmbraceSQLClient } from "./provider";
import { Branded } from "@embracesql/shared";
import React from "react";

export type Intercepted<T> = Branded<T, "__intercepted__">;

/**
 * Call back into an interception hook with this interface.
 */
export type InterceptorCallback<T> = (
  value: T,
  index?: number,
) => Promise<void>;

/**
 * An Interceptor is a function that wraps some raw data T
 */
export type Interceptor<T> = (
  uninterceptedValue: T,
  callback: InterceptorCallback<T>,
  index?: number,
) => Branded<T, "__intercepted__">;

type Props<T> = {
  /**
   * Operation name that will do an upsert.
   */
  operation: string;
  /**
   * Current results. Will be updated index wise when a list, other
   * wise replaced.
   */
  results: T | undefined;
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
export function useEmbraceSQLUpdateCallback<T, R extends T | T[]>({
  operation,
  results,
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
        if (Array.isArray(results) && index !== undefined && response.results) {
          // update state in a slot in an array -- which will be a fresh
          // record from the database -- difference instance which will
          // be enough to trigger a refresh
          results[index] = response.results;
          setResults(results);
        } else {
          // update state with the single record
          setResults(response.results as R);
        }
      }
    },
    [client, operation, setResults],
  );
}
