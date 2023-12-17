import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "./dvdrental-react";
import "./main.css";
import React from "react";
import * as ReactDOM from "react-dom/client";

// connect to where we mounted EmbraceSQL
const client = new EmbraceSQLClient({
  url: "http://localhost:3000/embracesql",
});

const App = () => {
  // this is hooking to an AutoCRUD method to read an actor
  const {
    loading,
    results: actor,
    error,
  } = Public.Tables.Actor.useByActorId({ actorId: 100 });
  // 🪄 - automatic onChange saving though the hook, with debounce to not smoke your DB!
  // notice there is no <form> to post back or additional hooks
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>{`{error}`}</p>
      </div>
    );
  }
  if (actor) {
    return (
      <div className="card">
        <input value={actor.firstName} onChange={actor.changeFirstName} />
        <input value={actor.lastName} onChange={actor.changeLastName} />
      </div>
    );
  }
};

// Supported in React 18+
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EmbraceSQLProvider client={client}>
      <App />
    </EmbraceSQLProvider>
  </React.StrictMode>,
);
