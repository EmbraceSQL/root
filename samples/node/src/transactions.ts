import { Database } from "./dvdrental";

// connect
const database = await Database.connect(
  "postgres://postgres:postgres@localhost:5432/dvdrental",
);

// update -- auto commits when the block exists
// this is a no-news-is-good-news transaction approach
const updatedCustomer = await database.withTransaction(async (db) => {
  return await db.Public.Tables.Customer.ByCustomerId.update(
    {
      customerId: 1,
    },
    { activebool: false },
  );
});
console.log(updatedCustomer);

// or to not update in a 'failed' transaction
try {
  await database.withTransaction(async (db) => {
    await db.Public.Tables.Customer.ByCustomerId.update(
      {
        customerId: 1,
      },
      { activebool: true },
    );
    throw new Error("aha");
  });
} catch {
  console.log("no noes... 😱");
}

// and let's verify that
const notUpdatedCustomer =
  await database.Public.Tables.Customer.ByCustomerId.read({
    customerId: 1,
  });
console.log(notUpdatedCustomer);

await database.disconnect();
