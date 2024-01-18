"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Scripts,
} from "../../client/dvdrental-react";

function Script() {
  // you can read from an SQL script that is just a SQL file in your source tree
  const { rows } = Scripts.MovieListing.useMovieListing();

  if (rows) {
    // old school - let's make a table - EmbraceSQL generates column
    // name metadata based on the table schemas which makes it easy to iterate
    return (
      <table>
        <thead>
          <tr>
            {Scripts.MovieListing.ColumnNames.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.rowNumberInResultset}>
              {Scripts.MovieListing.ColumnNames.map((c) => (
                <td key={c}>{`${r[
                  Scripts.MovieListing.Columns[c].fieldName
                ]?.toLocaleString()}`}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
      <Script />
    </EmbraceSQLProvider>
  );
}
