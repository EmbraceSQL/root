import { EmbraceSQLExpressApp } from "./dvdrental";
import { EmbraceViteApp } from "@embracesql/vite";
import express from "express";

const app = express();

// hook embracesql middleware first
const embracesql = await EmbraceSQLExpressApp(
  "postgres://postgres:postgres@localhost/dvdrental",
);
app.use("/embracesql", embracesql);
// and then hook in vite
const vite = await EmbraceViteApp();
app.use("/", vite);

app.listen(3000, () => console.log("Server is listening on port 3000..."));
