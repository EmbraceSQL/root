"use client";

import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "../../client/dvdrental-react";
import "../sample.css";

// connect to where we mounted EmbraceSQL in our server
const client = new EmbraceSQLClient({
  url: `${window.location.href}embracesql`,
});

const Actor = () => {
  // this is hooking to an AutoCRUD method to read an actor
  const { row: actor } = Public.Tables.Actor.useByActorId({ actorId: 100 });
  // 🪄 - automatic onChange saving though the hook, with debounce to not smoke your DB!
  // notice there is no <form> to post back or additional hooks

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
  return (
    <EmbraceSQLProvider client={client}>
      <Actor />
    </EmbraceSQLProvider>
  );
}
