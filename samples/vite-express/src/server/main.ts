import { EmbraceSQLExpressApp } from "./dvdrental";
import { EmbraceViteApp } from "@embracesql/vite";
import express from "express";

const app = express();

export const PORT = Number.parseInt(process.env["PORT"] ?? "4000");

// hook EmbraceSQL middleware first to connect to the database
const embracesql = await EmbraceSQLExpressApp(
  "postgres://postgres:postgres@localhost/dvdrental",
);
// mounting the database middleware
app.use("/embracesql", embracesql);
// and then hook in vite middleware to build and run your React
const vite = await EmbraceViteApp();
// server react at the root
app.use("/", vite);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
