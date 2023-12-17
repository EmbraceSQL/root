import { EmbraceSQLExpressApp } from "./dvdrental";

// this is an express application
const app = await EmbraceSQLExpressApp(
  "postgres://postgres:postgres@localhost/dvdrental",
);
app.listen(4444);
