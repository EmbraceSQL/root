# Express

EmbraceSQL generates an Express `Application` object suitable for mounting
at any location with `use` into an existing express setup, or run directly
with `listen`.

## Example

You can look in the [intro](./index.md) to see how to generate the dvdrental code
used in these example snippets.

Once you have a database, you can generate the express application:

```shell
embracesql generate express --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts
```

And a very simple express server `index.ts`:

```typescript
import {EmbraceSQLExpressApp} from "./src/devrental"

// this is an express application
const app = EmbraceSQLExpressApp();
app.listen(3000)
```

Start that server:

```shell
npx ts-node index.ts
```

And curl for some data:

```shell
curl -X POST http://localhost:3000 \
   -H 'Content-Type: application/json' \
   -d '{"operation":"Public.Actor.byActorId","arguments":{"actorId": 1}}'
```
