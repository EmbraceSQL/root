import { RowConstructor } from ".";
import { useNetwork } from "./useNetwork";
import { PartialRecursive, DebounceMap } from "@embracesql/shared";
import React from "react";

type NoParameters<RR> = () => Promise<RR>;
type Parameters<P, RR> = (parameters: P) => Promise<RR>;
type ReadOperation<P, RR> = [P] extends [never]
  ? NoParameters<RR>
  : Parameters<P, RR>;

type UpdateCallbackProps<R> = {
  deleteOperation: (values: R) => Promise<R | undefined>;
  upsertOperation: (values: R) => Promise<R | undefined>;
  primaryKeyPicker: (row: R) => string;
  RowImplementation: RowConstructor<R>;
};

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
    (responseCallback: (row: R | undefined) => void) => {
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

type RowProps<P, R> = UpdateCallbackProps<R> & {
  parameters: P;
  readOperation: ReadOperation<P, R | undefined>;
  emptyRow: () => PartialRecursive<R>;
  createIfNotExists?: boolean;
};

export type GeneratedRowProps<V> = {
  values?: Partial<V>;
  createIfNotExists?: boolean;
};

/**
 * Use a single row.
 */
export function useEmbraceSQLRow<P, V, R>(props: RowProps<P, R>) {
  // store raw results back from the REST API
  const [results, setResults] = React.useState<R>();
  const responseCallback = React.useCallback(
    (row: R | undefined) => {
      // TODO -- need to generate equals methods
      if (JSON.stringify(results) === JSON.stringify(row)) {
        return;
      } else {
        setResults(row);
      }
    },
    [results],
  );
  const updateCallback = useUpdateCallback(props);
  const readState = useNetwork(async () => {
    // yeah this looks odd, but in the `useRow({createIfUndefined})` case
    // folks can pass no parameters
    const read = props.parameters
      ? await props.readOperation(props.parameters)
      : undefined;
    const row =
      read ?? (props.createIfNotExists ? props.emptyRow() : undefined);
    setResults(row as R);
  }, [JSON.stringify(props.parameters)]);

  /**
   * Directly update the row. This will trigger a re-render.
   */
  const updateRow = React.useCallback(
    async (values: V) =>
      new props.RowImplementation(
        await updateCallback(responseCallback)({
          ...results,
          ...values,
        } as unknown as R),
        updateCallback(responseCallback),
        0,
      ),
    [updateCallback, responseCallback],
  );

  return {
    loading: readState.loading,
    error: readState.error,
    row: results
      ? new props.RowImplementation(
          results,
          updateCallback(responseCallback),
          0,
        )
      : undefined,
    updateRow,
  };
}

type RowsProps<P, R> = UpdateCallbackProps<R> & {
  emptyRow: () => PartialRecursive<R>;
  parameters: P;
  readOperation: ReadOperation<P, R[]>;
};

/**
 * Use rows, this allows adding and removing rows.
 */
export function useEmbraceSQLRows<P, V, R>(props: RowsProps<P, R>) {
  const [results, setResults] = React.useState<R[]>();

  // row is changed -- it goes into the results list at a particular index
  const responseCallback = React.useCallback(
    (index: number) => {
      return (row: R | undefined) => {
        // TODO -- need to generate equals methods
        if (JSON.stringify(results) === JSON.stringify(row)) {
          return;
        } else if (row) {
          setResults(results?.toSpliced(index, 1, row));
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
      new props.RowImplementation(
        await updateCallback(responseCallback(index))({
          ...results?.[index],
          ...values,
        } as unknown as R),
        updateCallback(responseCallback(index)),
        0,
      ),
    [updateCallback, responseCallback, results],
  );

  /**
   * Adding a row wraps an interceptor around an empty and adds it to the results
   * saving is 'automatic' once any edit is made to the row
   */
  const addRow = React.useCallback(async () => {
    // new empty base row 'as if' it was returned from the database
    // it *isn't* from the database, just to be clear -- it's an in memory buffer
    // to support automatic parent-child the parameters used to read the rows
    // need to be on the new rows so when put to the database -- they tie up
    const newRow = { ...props.emptyRow(), ...props.parameters };
    const newResults = [...(results ?? []), newRow as R];
    setResults(newResults);
    // and the index of this new row
    return newResults.length - 1;
  }, [
    props.RowImplementation,
    props.emptyRow,
    props.parameters,
    results,
    responseCallback,
  ]);

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
        // and the in memory row needs to go as well
        setResults(results?.toSpliced(index, 1) ?? []);
      }
    },
    [props.deleteOperation, results],
  );

  return {
    loading: readState.loading,
    error: readState.error,
    rows:
      results?.map(
        (r, i) =>
          new props.RowImplementation(
            r,
            updateCallback(responseCallback(i)),
            i,
          ),
      ) ?? [],
    updateRow,
    addRow,
    deleteRow,
  };
}

type ImmutableRowsProps<P, R> = {
  parameters: P;
  readOperation: ReadOperation<P, R[]>;
  RowImplementation: RowConstructor<R>;
};

/**
 * Use rows immutably. This is useful for SQL script hook generation.
 */
export function useEmbraceSQLImmutableRows<P, R>(
  props: ImmutableRowsProps<P, R>,
) {
  const [results, setResults] = React.useState<R[]>();

  // load up the data
  const readState = useNetwork(async () => {
    const read = await props.readOperation(props.parameters);
    setResults(read);
  }, [JSON.stringify(props.parameters)]);

  return {
    loading: readState.loading,
    error: readState.error,
    rows:
      results?.map(
        (r, i) =>
          new props.RowImplementation(
            r,
            // ummutable -- no change
            async () => r,
            i,
          ),
      ) ?? [],
  };
}

type ImmutableProps<P, R> = {
  parameters: P;
  readOperation: ReadOperation<P, R>;
};

/**
 * Use a result immutably. This hooks stored functions that return a single
 * value of a type, not a resultset.
 */
export function useEmbraceSQLImmutable<P, R>(props: ImmutableProps<P, R>) {
  const [results, setResults] = React.useState<R>();

  // load up the data
  const readState = useNetwork(async () => {
    const read = await props.readOperation(props.parameters);
    setResults(read);
  }, [JSON.stringify(props.parameters)]);

  return {
    loading: readState.loading,
    error: readState.error,
    results,
  };
}
