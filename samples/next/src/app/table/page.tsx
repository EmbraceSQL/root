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
    // old school - let's make a table
    return (
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.rowNumberInResultset}>
              <td>{r.firstName}</td>
              <td>{r.lastName}</td>
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
