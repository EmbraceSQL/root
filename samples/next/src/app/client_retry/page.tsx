"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "../../client/dvdrental-react";
import "../sample.css";

const Actor = () => {
  const { row: actor } = Public.Tables.Actor.useActorPkey({ actorId: 100 });
  if (actor) {
    return (
      <div className="card">
        <input value={actor.firstName} onChange={actor.changeFirstName} />
        <input value={actor.lastName} onChange={actor.changeLastName} />
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
    options: {
      // try three times if there is an error
      retries: 3,
    },
  });
  return (
    <EmbraceSQLProvider client={client}>
      <Actor />
    </EmbraceSQLProvider>
  );
}
