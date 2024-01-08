import { InterceptedResults, InterceptorConstructor } from ".";
import {
  Intercepted,
  useEmbraceSQLUpdateCallback,
} from "./useEmbraceSQLUpdateCallback";
import { PartialRecursive, OneOrMany } from "@embracesql/shared";
import React from "react";

type ReadReturn<RR> = Promise<RR | (RR extends unknown[] ? [] : undefined)>;
type NoParameters<RR> = () => ReadReturn<RR>;
type Parameters<P, RR> = (parameters: P) => ReadReturn<RR>;
type ReadOperation<P, RR> = [P] extends [never]
  ? NoParameters<RR>
  : Parameters<P, RR>;

type Props<P, R, RR> = {
  readOperation: ReadOperation<P, RR>;
  parameters: P;
  upsertOperation: (values: R) => Promise<R | undefined>;
  deleteOperation: (values: R) => Promise<R | undefined>;
  primaryKeyPicker: (row: R) => string;
  Interceptor: InterceptorConstructor<R>;
};

function manyResults<R>(results: OneOrMany<R> | undefined): results is R[] {
  return Array.isArray(results);
}

/**
 * Use row(s) from a table in the database by index.
 *
 * This hook is specialized (wrapped) by code generation
 * to provide types and callback.
 */
function useEmbraceSQL<P, R, RR extends OneOrMany<R>>(props: Props<P, R, RR>) {
  // the row(s) stored in the hook are mutable, so we need
  // a way to trigger an update
  const [tick, setTick] = React.useState(0);

  const inMemoryUpdate = React.useCallback(() => {
    setTick(Date.now());
  }, [setTick]);

  // network access
  const [error, setError] = React.useState<Error>();

  // in memory updates trigger database updates
  const updateCallback = useEmbraceSQLUpdateCallback<R>({
    upsertOperation: props.upsertOperation,
    inMemoryUpdate,
    primaryKeyPicker: props.primaryKeyPicker,
  });

  // and here is the mutable data
  const interceptedResults = React.useRef<InterceptedResults<RR>>();
  // this request is the 'initial' data fetch to get rows
  // for display and update in memory
  React.useEffect(() => {
    void (async () => {
      try {
        const results = await props.readOperation(props.parameters);
        if (manyResults<RR>(results)) {
          interceptedResults.current = results.map(
            (r) => new props.Interceptor(r, updateCallback),
          ) as InterceptedResults<RR>;
        } else {
          interceptedResults.current = new props.Interceptor(
            results as R,
            updateCallback,
          ) as InterceptedResults<RR>;
        }
        // using a ref - need a tap to get the initial render
        inMemoryUpdate();
      } catch (e) {
        setError(e as Error);
      }
    })();
  }, [props.parameters]);

  return {
    loading: interceptedResults.current ? false : true,
    error,
    results: interceptedResults.current,
    tick,
    updateCallback,
  };
}

/**
 * Use a single row.
 */
export function useEmbraceSQLRow<P, R>(props: Props<P, R, R>) {
  const { loading, error, results, tick } = useEmbraceSQL<P, R, R>(props);

  return {
    loading,
    error,
    results,
    tick,
  };
}

type RowsProps<P, R> = Props<P, R, R[]> & {
  emptyRow: () => PartialRecursive<R>;
};

/**
 * Use rows, this allows adding and removing rows.
 */
export function useEmbraceSQLRows<P, R>(props: RowsProps<P, R>) {
  const { loading, error, results, tick, updateCallback } = useEmbraceSQL<
    P,
    R,
    Array<R>
  >(props);

  /**
   * Adding a row wraps an interceptor around an empty and adds it to the results
   * saving is 'automatic' once any edit is made to the row
   */
  const addRow = React.useCallback(async () => {
    const newRow = new props.Interceptor(props.emptyRow() as R, updateCallback);
    results?.push(newRow);
    return newRow;
  }, [props.Interceptor, props.emptyRow, results]);

  /**
   * Deleting a row removes an interceptor from the local memory buffer
   * and instructs the database to delete that row by primary key.
   */
  const deleteRow = React.useCallback(
    async (row: Intercepted<R>) => {
      if (results) {
        await props.deleteOperation(row);
        const primaryKeyToDelete = props.primaryKeyPicker(row);
        const found = results.findIndex(
          (r) => props.primaryKeyPicker(r) === primaryKeyToDelete,
        );
        results?.splice(found, 1);
      }
    },
    [props.Interceptor, props.emptyRow, results],
  );

  return {
    loading,
    error,
    results,
    tick,
    addRow,
    deleteRow,
  };
}
