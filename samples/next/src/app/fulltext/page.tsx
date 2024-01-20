"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  PgCatalog,
  Public,
} from "../../client/dvdrental-react";
import { useDebouncedValue, useOnChange } from "@embracesql/react";
import React from "react";

function Fulltext() {
  // embrace sql convenience hook to get an event handler
  // we'll use this on an input
  const { onChange, value } = useOnChange();
  // and let's debounce that to not go crazy
  const searchString = useDebouncedValue(value);

  // read along the full text index
  const { rows } = Public.Tables.Film.useFilmFulltextIdx(
    // and just pass the query through from the input text box
    {
      fulltext: searchString ?? "",
    },
    {
      // showing the first page
      offsetNumberOfRows: 0,
      limitNumberOfRows: 10,
      fulltext: {
        // postgres has multiple parsing options
        // https://www.postgresql.org/docs/current/textsearch-controls.html#TEXTSEARCH-PARSING-QUERIES
        // we'll use the really simple 'web' style parser
        queryParser: PgCatalog.Types.Tsvector.FulltextParser.Web,
      },
    },
  );

  if (rows) {
    // old school - let's make a table - EmbraceSQL generates column
    // name metadata based on the table schemas which makes it easy to iterate
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          onChange={onChange}
          style={{ flex: 1 }}
          placeholder="Enter your search..."
        />
        <table>
          <thead>
            <tr>
              {Public.Tables.Film.ColumnNames.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.rowNumberInResultset}>
                {Public.Tables.Film.ColumnNames.map((c) => (
                  <td key={c}>{`${r[
                    Public.Tables.Film.Columns[c].fieldName
                  ]?.toLocaleString()}`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
}

export default function Page() {
  // connect to where we mounted EmbraceSQL in our server
  const client = new EmbraceSQLClient({
    url: `/embracesql`,
  });
  // set up the EmbraceSQL context
  return (
    <EmbraceSQLProvider client={client}>
      <Fulltext />
    </EmbraceSQLProvider>
  );
}
