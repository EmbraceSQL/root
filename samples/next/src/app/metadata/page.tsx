"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Metadata,
} from "../../client/dvdrental-react";
import "../sample.css";

const MetadataDisplay = () => {
  // yep -  you can autocomplete on this

  return (
    <div className="card">
      {Metadata.Schemas.map((s) => (
        <div>
          <div style={{ textAlign: "left" }}>{s.name}</div>
          {s.Tables.map((t) => (
            <div style={{ paddingLeft: "1em", textAlign: "left" }}>
              {t.name}
              {t.Columns.map((c) => (
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  {c.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  // connect to where we mounted EmbraceSQL in our server
  const client = new EmbraceSQLClient({
    url: `/embracesql`,
  });
  return (
    <EmbraceSQLProvider client={client}>
      <MetadataDisplay />
    </EmbraceSQLProvider>
  );
}
