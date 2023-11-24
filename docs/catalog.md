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

Tables with primary keys qualify for [AutoCRUD](./autocrud.md).
