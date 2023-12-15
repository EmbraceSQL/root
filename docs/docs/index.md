---
sidebar_position: 0
---

# Introduction

Love SQL? Love TypeScript? Hate ORMs. You're 🏡.

Learn about the [Problems](./problems.md) with data access. 

Then [Get Started](#getting-started).

## Getting Started

You will need:

This example assumes a sample DVD rental database, source at [dvdrental.sql](./dvdrental.sql).

You can use this database for testing with a local postgres, such as [Postgres.app](https://postgresapp.com).

Create a sample dvdrental database if you like with:

```shell
psql --file dvdrental.sql
```

Going with this dvdrental example, assuming you are in the root directory
of your typescript project.

```shell
mkdir -p ./src
npx embracesqlcli generate node --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts

```

Now you can use your fully typed database from TypeScript in Node.

```typescript
// import the generated database access object
import { Database } from "./src/dvdrental";

// connect with a good old fashioned Postgres connection string
const db = await Database.connect(
  "postgres://postgres:postgres@localhost:5432/dvdrental",
);
// calling a stored database function with positional, typed arguments.
const value = await db.Public.LastDay({ _0: new Date() });
// bye now 👋
await db.disconnect();
```

Learn about [AutoCRUD](./autocrud.mdx) to get at all the tables in your database
without writing data access or re-modeling your database with an ORM.

Lear about [SQL Scripts](./sql.mdx) to get any data you want -- all strongly typed
 -- with any SQL script you can imagine.
