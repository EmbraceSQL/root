"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
  PgCatalog,
} from "../../client/dvdrental-react";
import { useDebouncedValue, useOnChange } from "@embracesql/react";

function Procedure() {
  // event hook
  const { value, onChange } = useOnChange(PgCatalog.Types.Date.parse);
  // debounce, this is a good way to not clobber the database as a user types
  const debouncedValue = useDebouncedValue(value);
  // database talks in 'NULL' not 'undefined'
  const { results } = Public.Procedures.LastDay.useLastDay({
    argument_0: debouncedValue ?? null,
  });
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "32em" }}>
      <input type="date" style={{ flex: 1 }} onChange={onChange}></input>
      <div style={{ flex: 3 }}>
        {results ? `Last Day ${results.toISOString()}` : ``}
      </div>
    </div>
  );
}

export default function Page() {
  // connect to where we mounted EmbraceSQL in our server
  const client = new EmbraceSQLClient({
    url: `/embracesql`,
  });
  // set up the EmbraceSQL context
  return (
    <EmbraceSQLProvider client={client}>
      <Procedure />
    </EmbraceSQLProvider>
  );
}
