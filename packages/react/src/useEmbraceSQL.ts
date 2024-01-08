import { InterceptedResults, InterceptorConstructor } from ".";
import { useEmbraceSQLRequest } from "./useEmbraceSQLRequest";
import { useEmbraceSQLUpdateCallback } from "./useEmbraceSQLUpdateCallback";
import { PartialRecursive, OneOrMany } from "@embracesql/shared";
import React from "react";

type Props<P, R> = {
  readOperation: string;
  parameters?: P;
  upsertOperation: (values: R) => Promise<R | undefined>;
  primaryKeyPicker: (row: R) => string;
  Interceptor: InterceptorConstructor<R>;
};

function manyResults<R>(results: OneOrMany<R>): results is R[] {
  return Array.isArray(results);
}

/**
 * Use row(s) from a table in the database by index.
 *
 * This hook is specialized (wrapped) by code generation
 * to provide types and callback.
 */
function useEmbraceSQL<P, V, R, RR extends OneOrMany<R>>(props: Props<P, R>) {
  // the row(s) stored in the hook are mutable, so we need
  // a way to trigger an update
  const [tick, setTick] = React.useState(0);

  const inMemoryUpdate = React.useCallback(() => {
    setTick(Date.now());
  }, [setTick]);

  // this request is the 'initial' data fetch to get rows
  // for display and update in memory

  const done = useEmbraceSQLRequest<P, V, RR>({
    operation: props.readOperation,
    parameters: props.parameters,
  });

  // in memory updates trigger database updates
  const updateCallback = useEmbraceSQLUpdateCallback<R>({
    upsertOperation: props.upsertOperation,
    inMemoryUpdate,
    primaryKeyPicker: props.primaryKeyPicker,
  });

  // and here is the mutable data
  const interceptedResults = React.useRef<InterceptedResults<RR>>();
  React.useEffect(() => {
    if (done?.response?.results) {
      if (manyResults<R>(done.response.results)) {
        interceptedResults.current = done.response.results.map(
          (r) => new props.Interceptor(r, updateCallback),
        ) as InterceptedResults<RR>;
      } else {
        interceptedResults.current = new props.Interceptor(
          done.response.results as R,
          updateCallback,
        ) as InterceptedResults<RR>;
      }
      // using a ref - need a tap to get the initial render
      inMemoryUpdate();
    }
  }, [done?.response]);

  return {
    loading: done?.loading,
    error: done?.error,
    results: interceptedResults.current,
    tick,
    updateCallback,
  };
}

/**
 * Use a single row.
 */
export function useEmbraceSQLRow<P, V, R>(props: Props<P, R>) {
  const { loading, error, results, tick } = useEmbraceSQL<P, V, R, R>(props);

  return {
    loading,
    error,
    results,
    tick,
  };
}

type RowsProps<P, R> = Props<P, R> & {
  emptyRow: () => PartialRecursive<R>;
};

/**
 * Use rows, this allows adding and removing rows.
 */
export function useEmbraceSQLRows<P, V, R>(props: RowsProps<P, R>) {
  const { loading, error, results, tick, updateCallback } = useEmbraceSQL<
    P,
    V,
    R,
    Array<R>
  >(props);

  // adding a row wraps an interceptor around an empty and adds it to the results
  // saving is 'automatic' once any edit is made to the row
  const addRow = React.useCallback(() => {
    const newRow = new props.Interceptor(props.emptyRow() as R, updateCallback);
    results?.push(newRow);
    return newRow;
  }, [props.Interceptor, props.emptyRow, results]);

  return {
    loading,
    error,
    results,
    tick,
    addRow,
  };
}
