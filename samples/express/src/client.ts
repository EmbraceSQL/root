import { EmbraceSQLClient } from "./dvdrental-browser";

const client = new EmbraceSQLClient({ url: "http://localhost:4444" });

const actor = await client.Public.Tables.Actor.ActorPkey.read({ actorId: 1 });

console.log(actor);
