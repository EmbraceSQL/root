import { EmbraceSQLClient, EmbraceSQLProvider } from "./checklist-react";
import "./main.css";
import React from "react";
import * as ReactDOM from "react-dom/client";

// connect to where we mounted EmbraceSQL
const client = new EmbraceSQLClient({
  url: "http://localhost:3000/embracesql",
});

// Supported in React 18+
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EmbraceSQLProvider client={client}></EmbraceSQLProvider>
  </React.StrictMode>,
);
