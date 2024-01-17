"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "../../client/dvdrental-react";

function Table() {
  const { rows } = Public.Tables.Actor.useRows(
    // using sort and pagination, generally how you would show tables
    {
      // showing the first page
      offsetNumberOfRows: 0,
      limitNumberOfRows: 10,
      // multi-sort
      sort: [
        Public.Tables.Actor.SortOptions.lastNameAscending,
        Public.Tables.Actor.SortOptions.firstNameAscending,
      ],
    },
  );

  if (rows) {
    // old school - let's make a table - EmbraceSQL generates column
    // name metadata based on the table schemas which makes it easy to iterate
    return (
      <table>
        <thead>
          <tr>
            {Public.Tables.Actor.ColumnNames.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.rowNumberInResultset}>
              {Public.Tables.Actor.ColumnNames.map((c) => (
                <td key={c}>{`${r[
                  Public.Tables.Actor.Columns[c].fieldName
                ].toLocaleString()}`}</td>
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
      <Table />
    </EmbraceSQLProvider>
  );
}
