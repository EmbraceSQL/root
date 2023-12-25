// import the generated database access object
import { Database } from "./dvdrental";

// connect with a good old fashioned Postgres connection string
const db = await Database.connect(
  "postgres://postgres:postgres@localhost:5432/dvdrental",
);
// calling a stored database function with positional, typed arguments.
const value = await db.Public.lastDay({ argument_0: new Date() });
console.log(value);
// bye now 👋
await db.disconnect();
