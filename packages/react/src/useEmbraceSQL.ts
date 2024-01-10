import { InterceptorConstructor } from ".";
import { useNetwork } from "./useNetwork";
import { PartialRecursive, DebounceMap } from "@embracesql/shared";
import React from "react";

type NoParameters<RR> = () => Promise<RR>;
type Parameters<P, RR> = (parameters: P) => Promise<RR>;
type ReadOperation<P, RR> = [P] extends [never]
  ? NoParameters<RR>
  : Parameters<P, RR>;

type Props<R> = {
  deleteOperation: (values: R) => Promise<R | undefined>;
  upsertOperation: (values: R) => Promise<R | undefined>;
  primaryKeyPicker: (row: R) => string;
  Interceptor: InterceptorConstructor<R>;
};

type UpdateCallbackProps<R> = Props<R>;

/**
 * Shared callback to update a single row in the database.
 *
 * This is a debounced asynchronous trip to the database combined with
 * a `responseCallback` which is intended to modify React state - so that when
 * you are typing you can get a nice quick in memory state update with an
 * eventual to the database state update.
 *
 * The update to the database returns and *also* updates the React state which
 * allows the database to share defaults and columns that were updated by
 * database rules and triggers.
 */
function useUpdateCallback<R>(props: UpdateCallbackProps<R>) {
  // debounce mapping - in a ref, this is state like but we do not update on it
  const debounceMap = React.useRef(new DebounceMap());
  // in memory updates trigger database updates
  return React.useCallback(
    (responseCallback: (record: R | undefined) => void) => {
      return async (updated: R) => {
        const debounceKey = props.primaryKeyPicker(updated);
        // always update with the user supplied values in state
        responseCallback(updated);

        const toExecute = async () => {
          // actual server trip - counting on a read back of a single row
          const response = await props.upsertOperation(updated);
          // response has the single read-back row -- this is what needs
          // to be merged into react state as the database plenty well might
          // have rules or triggers that altered the data
          // not to mention other users might have updated other fields
          responseCallback(response);
        };
        debounceMap.current.register(debounceKey, toExecute);
        return updated;
      };
    },
    [props.upsertOperation, props.primaryKeyPicker],
  );
}

type RowProps<P, R> = Props<R> & {
  parameters: P;
  readOperation: ReadOperation<P, R | undefined>;
};

/**
 * Use a single row.
 */
export function useEmbraceSQLRow<P, V, R>(props: RowProps<P, R>) {
  // store raw result records back from the REST API
  const [results, setResults] = React.useState<R>();
  const responseCallback = React.useCallback(
    (record: R | undefined) => {
      // TODO -- need to generate equals methods
      if (JSON.stringify(results) === JSON.stringify(record)) {
        return;
      } else {
        setResults(record);
      }
    },
    [results],
  );
  const updateCallback = useUpdateCallback(props);
  const readState = useNetwork(async () => {
    const read = await props.readOperation(props.parameters);
    setResults(read);
  }, [JSON.stringify(props.parameters)]);

  /**
   * Directly update the row. This will trigger a re-render.
   */
  const updateRow = React.useCallback(
    async (values: V) =>
      new props.Interceptor(
        await updateCallback(responseCallback)({
          ...results,
          ...values,
        } as unknown as R),
        updateCallback(responseCallback),
      ),
    [updateCallback, responseCallback],
  );

  return {
    loading: readState.loading,
    error: readState.error,
    results: results
      ? new props.Interceptor(results, updateCallback(responseCallback))
      : undefined,
    updateRow,
  };
}

type RowsProps<P, R> = Props<R> & {
  emptyRecord: () => PartialRecursive<R>;
  parameters: P;
  readOperation: ReadOperation<P, R[]>;
};

/**
 * Use rows, this allows adding and removing rows.
 */
export function useEmbraceSQLRows<P, V, R>(props: RowsProps<P, R>) {
  const [results, setResults] = React.useState<R[]>();

  // record is changed -- it goes into the results list at a particular index
  const responseCallback = React.useCallback(
    (index: number) => {
      return (record: R | undefined) => {
        // TODO -- need to generate equals methods
        if (JSON.stringify(results) === JSON.stringify(record)) {
          return;
        } else if (record) {
          setResults(results?.toSpliced(index, 1, record));
        }
      };
    },
    [results],
  );
  const updateCallback = useUpdateCallback({ ...props });

  // load up the data
  const readState = useNetwork(async () => {
    const read = await props.readOperation(props.parameters);
    setResults(read);
  }, [JSON.stringify(props.parameters)]);

  /**
   * Directly update the row. This will trigger a re-render.
   */
  const updateRow = React.useCallback(
    async (index: number, values: V) =>
      new props.Interceptor(
        await updateCallback(responseCallback(index))({
          ...results?.[index],
          ...values,
        } as unknown as R),
        updateCallback(responseCallback(index)),
      ),
    [updateCallback, responseCallback],
  );

  /**
   * Adding a row wraps an interceptor around an empty and adds it to the results
   * saving is 'automatic' once any edit is made to the row
   */
  const addRow = React.useCallback(async () => {
    // new empty base record 'as if' it was returned from the database
    // it *isn't* from the database, just to be clear -- it's an in memory buffer
    const newRecord = props.emptyRecord();
    const newResults = [...(results ?? []), newRecord as R];
    setResults(newResults);
    // and the index of this new row
    return newResults.length - 1;
  }, [props.Interceptor, props.emptyRecord, results, responseCallback]);

  /**
   * Deleting a row removes an interceptor from the local memory buffer
   * and instructs the database to delete that row by primary key.
   */
  const deleteRow = React.useCallback(
    async (index: number) => {
      if (results) {
        const row = results[index];
        // the database delete
        await props.deleteOperation(row);
        // and the in memory record needs to go as well
        setResults(results?.toSpliced(index, 1) ?? []);
      }
    },
    [props.deleteOperation, results],
  );

  return {
    loading: readState.loading,
    error: readState.error,
    results:
      results?.map(
        (r, i) =>
          new props.Interceptor(r, updateCallback(responseCallback(i)), i),
      ) ?? [],
    updateRow,
    addRow,
    deleteRow,
  };
}
