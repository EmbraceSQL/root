# Catalog Based Generation

EmbraceSQL generates types for everything in the postgres catalog including:

- tables
- procedures
- functions
- enums
- domains
- composite types

Generated types also have marshalling between the postgres wire protocol
and typescript. Default types like strings and numbers are easy and handled
by the `postgres` driver. Composite types, arrays, and nested types are not handled
by the `postgres` driver, so the catalog metadata is used to generate marshalling.

The idea is you can use _any_ type you can defined in postgres, not just the
basic / primitive types, making EmbraceSQL the most full featured way to use
postgres from typescript.

## Callable Functions & Procedures

## Typescript Object / Postgres Table Synchronization

**Greg's cool feature**

## AutoCRUD

Tables with primary keys qualify for AutoCRUD. What is AutoCRUD you might ask?

```typescript
import { database } from "./generated";

// TODO
```

Generation of per schema, per table function calls to:

- CREATE
- SELECT
- UPDATE
- DELETE

by primary key.

You call these functions with typescript, with strong types for inputs and outputs.
This isn't like an ORM where you 'make sql with functions', it's like each table
is a dictionary keyed by primary key that happens to be stored in your
database.

Partial creates are allowed, with nullability constraints
in the database mirrored in typescript.

Partial updates are allow down to the single column.

Selects pull a whole row by primary key.

Deletes remove a whole row by primary key.
