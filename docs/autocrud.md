---
title: AutoCRUD
---

# AutoCRUD

AutoCRUD looks at tables, and their indexes and creates a functional interface
allowing you to work with tables in a similar fashion to KV-stores.

This is easier than writing your own CRUD methods, and easier that an ORM, as it
creates flexible database access:

* Without you writing any SQL or wrapper functions
* Without you specifiying any 'model' or 'pojo' data holders
* Against your existing database, without making any schema changes
* Without learning yet another 'schema language'

All you need are tables with indexes. Yes, primary keys count!

## Example

You can look in the [intro](./index.md) to see how to generate the dvdrental code
used in these example snippets.

We're assuming a top level await here.

```typescript
import { Database } from "./src/dvdrental";

// connect
const database = await Database.connect("postgres://postgres:postgres@localhost:5432/dvdrental");
// read by primary key
const actor = await database.Public.Actor.byActorId({ actorId: 1 });
// delete by primary key -- yep, the object read back has a the same property name!
await database.Public.Actor.deleteByActorId(actor); // or {actorId: 1}
// update along an index
const deactivatedCustomer = await database.Public.Customer.updateByCustomerId(
    {
    customerId: 1,
    },
    { activebool: false },
);
const convenientReadBack = deactivatedCustomer.activebool; // this is now false, no additional read needed
```

## Details

AutoCRUD generates per schema, per table, per index function calls to:

* Create via `INSERT`, with `ON CONFLICT` support
* Read via `SELECT`
* Update via `UPDATE`
* Delete via `DELETE`

You call these functions with TypeScript, with strong types for inputs and outputs -- and of course intellisense.

This isn't like an ORM where you 'make sql with functions', it's like more like
the database is exposed as a key-value store by unique index, along with result sets
of objects for non-unique indexes.

You aren't generating SQL at runtime, instead the sql is pregenerated. This helps
on performance, and debuggability - the generated database access code is just
a single TypeScript file. Go ahead and set breakpoints in it!

All methods utilize Postgres `RETURNING` so you get the records modified back
in a single trip to the database. You'll appreciate this if you have an active
database with triggers and functions that modifiy columns separate from your
TypeScript code. Simply cache/stash/return the modified records!

Unique indexes, like primary keys, return a single record `{Schema}.{Table}`
-- saving you the `[0]` game.

Non unique indexes return a `List<{Schema}.{Table}>`.

### Reads

Reads work along indexes with methods generated of the format `{Schema}.{Table}.by{IndexColumns}`.

If you need another way to read records, just add an index.

### Deletes

Deletes work along indexes with methods generated of the format `{Schema}.{Table}.deleteBy{IndexColumns}`.

Deletes get rid of records. Nothing surprising here, unless you have foreign
keys without `ON DELETE CASCADE`, in which case you won't actually be deleting
and records after all 😉.

### Updates

Deletes work along indexes with methods generated of the format `{Schema}.{Table}.updateBy{IndexColumns}`.

Updates allow partial of full updates, passing in `values` that can be
any subset of columns that you like. The update statement is smart in that 
it will take your new passed in values, or leave the existing database value
without generating a dynamic sql string.

This does rely on TypeScript properties you do NOT want to change to be `undefined`
on the passed in `values`. The easiest way to get this is to have an inline `{column: value}`
set of arguments to `values` for what you want to change.

To null a column, pass `null` for the value like `{email: null}`.

If you have an active database with constraints and triggers, updates can fail, raising
an exception back.

### Creates

Creates have one method per table generated of the format `{Schema}.{Table}.create`.

Pass in values, get a whole new row from the database. If the row exists, it will
upsert automatically.

Creating records has one trick - automatic primary keys like:

* `SMALLSERIAL`
* `SERIAL`
* `BIGSERIAL`
* `DEFAULT nextval()` from a sequence.

These keys are created from defaults in the database.
This means primary key attributes are optional in TypeScript, and you probably
want to leave them undefined in order to have the database create you a primary key.

The good news is the `RETURNING` record will show you the primary key as
created by the database. 

You can pass in `values` with the primary key - particularly when you
intend to get an upsert. Or if you are on purpose 'setting' the primary key
and bypassing the default. 

### Upserts

Creates automatically upsert, turning the `INSERT` into an `UPDATE`, `RETURNING`
the modified record.


## Transactions

What would a database library be without transactions?

Just pass a callback function, throw to abort, return clean to commit.

```typescript
import { Database } from "./src/dvdrental";

// connect
const database = await Database.connect("postgres://postgres:postgres@localhost:5432/dvdrental");

// update -- commits when the block exists
const updatedCustomer = await database.withTransaction(async (db) => {
    return await db.Public.Customer.updateByCustomerId(
    {
        customerId: 1,
    },
    { activebool: false, email: null },
    );
});
const yepNull = updatedCustomer.email;

// or to not update
await database.withTransaction(async (db) => {
    await db.Public.Customer.updateByCustomerId(
        {
        customerId: 1,
        },
        { activebool: false, email: null },
    );
    throw new Error("aha");
});
```
