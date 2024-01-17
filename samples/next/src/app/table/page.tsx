"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "../../client/dvdrental-react";

function Table() {
  const { rows } = Public.Tables.Actor.useRows();

  if (rows) {
    // old school - let's make a table
    return (
      <table>
        <tr></tr>
        {rows.map((r) => (
          <tr>
            <td>{r.firstName}</td>
            <td>{r.lastName}</td>
          </tr>
        ))}
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
