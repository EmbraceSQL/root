import { AcceptsDatabaseUpdate } from "./interceptor";
import { DebounceMap, WithChangeHandlers } from "@embracesql/shared";
import React from "react";

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

/**
 * When a type is wrapped up with an interceptor, brand it
 * in order to get some additional type checking.
 *
 * Easier to avoid passing the wrong thing...
 */
export type Intercepted<T> = WithChangeHandlers<T, ChangeEvent> &
  AcceptsDatabaseUpdate<T>;

/**
 * Call back into an interception hook with this interface.
 */
export type InterceptorCallback<T> = (value: Intercepted<T>) => Promise<void>;

/**
 * An Interceptor is a function that wraps some raw data T and 'intercepts'
 * writes via `set`.
 *
 * This is explicitly a code generated solution rather than using proxies becuase
 * it is easier to debug!
 */
export type Interceptor<T> = (
  uninterceptedValue: T,
  callback: InterceptorCallback<T>,
) => Intercepted<T>;

type Props<R> = {
  /**
   * Operation that will do an upsert.
   */
  upsertOperation: (values: R) => Promise<R | undefined>;
  /**
   * Dispatch when in memory objects are updated and it is time to render.
   */
  inMemoryUpdate: () => void;
  /**
   * Primary key picker, used for debouncing.
   */
  primaryKeyPicker: (updated: R) => string;
};

/**
 * Hook and implement update interception on EmbraceSQL table row types.
 *
 * This hook creates a callback that actually performs the update to
 * the database over an HTTP/S EmbraceSQL server via context provided client.
 *
 * Debounced to avoid ⚒️ your poor database.
 */
export function useEmbraceSQLUpdateCallback<R>({
  upsertOperation,
  primaryKeyPicker,
  inMemoryUpdate,
}: Props<R>) {
  // debounce mapping - in a ref, this is state like but we do not update on it
  const debounceMap = React.useRef(new DebounceMap());

  return React.useCallback(
    async (updated: Intercepted<R>) => {
      const debounceKey = primaryKeyPicker(updated.value);
      inMemoryUpdate();

      const toExecute = async () => {
        // actual server trip - counting on a read back of a single row
        const response = await upsertOperation(updated.value);
        // response has the single read-back row -- this is what needs
        // to be merged into react state as the database plenty well might
        // have rules or triggers that altered the data
        // not to mention other users might have updated other fields
        if (response) {
          updated.wholeUpdateFromDatabase(response);
        }
      };
      debounceMap.current.register(debounceKey, toExecute);
    },
    [upsertOperation],
  );
}
