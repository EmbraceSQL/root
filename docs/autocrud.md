---
title: AutoCRUD
---

# AutoCRUD

AutoCRUD looks at tables, and their indexes and creates a functional interface
allowing you to work with tables in a similar fashion to KV-stores:

* Without you writing any SQL or wrapper functions
* Without you specifiying any 'model' or 'pojo' data holders
* Against your existing database, without making any schema changes

All you need are tables with indexes. Yes, primary keys count!


## Example

You can look in the [intro](./index.md) to see how to generate the dvdrental code.

```typescript
import { Database } from "./src/dvdrental";

// connect
const database = await Database.connect("postgres://postgres:postgres@localhost:5432/dvdrental");
// read by primary key
const actor = await database.Public.Actor.byActorId({ actorId: 1 });
// delete by primary key -- yep, the object read back has a the same property name!
await database.Public.Actor.deleteByActorId(actor); // or {actorId: 1}
```

## Details

AutoCRUD generates per schema, per table, per index function calls to:

* CREATE
* SELECT
* UPDATE
* DELETE

You call these functions with TypeScript, with strong types for inputs and outputs -- and of course intellisense.

This isn't like an ORM where you 'make sql with functions', it's like more like
the database is expose in a key-value store by unique index, along with result set
list of objects for non-unique indexes. You aren't generating SQL at runtime, instead
the sql is pregenerated.

### Reads

### Deletes

### Updates

### Creates

Creating records has one trick - automatic primary keys like:

* `SMALLSERIAL`
* `SERIAL`
* `BIGSERIAL`
aren't passed in, but created by the database and returned.

### Upserts