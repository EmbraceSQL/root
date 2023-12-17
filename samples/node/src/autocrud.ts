import { Database } from "./dvdrental";

// connect
const database = await Database.connect(
  "postgres://postgres:postgres@localhost:5432/dvdrental",
);
// (C) creating a new record
const theBob = await database.Public.Actor.create({
  firstName: "Bob",
  lastName: "Hope",
});
console.log(theBob);
// (R) read by primary key
const theBobAgain = await database.Public.Actor.byActorId({
  actorId: theBob.actorId,
});
console.log(theBobAgain);

// (U) or upserting -- no new record, turns into an update
theBob.firstName = "Robert";
const theRobert = await database.Public.Actor.create(theBob);
console.log(theRobert);

// (U) or good old fashioned update by key
const theRoberto = await database.Public.Actor.updateByActorId(
  { actorId: theRobert.actorId },
  { firstName: "Roberto" },
);
console.log(theRoberto);

// (D) finally delete
const deleted = await database.Public.Actor.deleteByActorId({
  actorId: theRoberto.actorId,
});
// the modified record is always returned -- which is very convenient
// to use in client application state
console.log(deleted);

await database.disconnect();
