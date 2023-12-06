import { EmbraceSQLExpressApp } from "./dvdrental";

// this is an express application
const app = await EmbraceSQLExpressApp(
  "postgres://postgres:postgres@localhost/dvdrental",
);
app.listen(3000);
console.log("listening");
