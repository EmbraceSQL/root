"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Scripts,
} from "../../client/dvdrental-react";

const Report = () => {
  // this is hooking the SQL Script
  const { rows } = Scripts.MovieListing.useMovieListing();

  if (rows) {
    // fully typed data from the report -- autocomplete away
    return (
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "40em" }}
      >
        {rows.map((row) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1em",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 3, textAlign: "start" }}>
                {row.title}{" "}
                <span style={{ fontSize: "0.5em", fontStyle: "italic" }}>
                  {row.rating}
                </span>
              </div>
              <div style={{ flex: 1, textAlign: "end" }}>{row.releaseYear}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {row.actors.map((actor) => (
                <div style={{ marginRight: "1em", fontSize: "0.75em" }}>
                  {actor}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default function Page() {
  // connect to where we mounted EmbraceSQL in our server
  const client = new EmbraceSQLClient({
    url: `/embracesql`,
  });
  // set up the EmbraceSQL context
  return (
    <EmbraceSQLProvider client={client}>
      <Report />
    </EmbraceSQLProvider>
  );
}
