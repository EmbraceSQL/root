import { EmbraceSQLClient, EmbraceSQLProvider } from "./checklist-react";
import React from "react";
import * as ReactDOM from "react-dom/client";

// connect to where we mounted EmbraceSQL
const client = new EmbraceSQLClient({
  url: "http://localhost:3000/embracesql",
});

// whole application is wrapped in a provider to allow data access in any component
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EmbraceSQLProvider client={client}></EmbraceSQLProvider>
  </React.StrictMode>,
);
