# Express

EmbraceSQL generates an Express `Application` object suitable for mounting
at any location with `use` into an existing express setup, or run directly
with `listen`.

## Example

You can look in the [intro](./index.md) to see how to generate the dvdrental code
used in these example snippets.

Once you have a database, you can generate the express application:

```shell
npm install embracesql @embracesql/express
mkdir -p ./src
npx embracesql generate express --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts
```

And a very simple express server `index.ts`, assumes top level `await` -- put `"type": "module"`
in your package json. And, provided handy tsconfig settings that work great with
`tsx` and `typescript` 5+.

`tsconfig.json`

```json
{
  "extends": "@embracesql/shared/tsconfig/tsconfig.json"
}

```

`./src/express.ts`

```typescript
import { EmbraceSQLExpressApp } from "./dvdrental";

// this is an express application
const app = await EmbraceSQLExpressApp(
  "postgres://postgres:postgres@localhost/dvdrental",
);
app.listen(3000);

```

Start that server:

```shell
npx tsx ./src/express.ts
```

And curl for some data:

```shell
curl -X POST http://localhost:3000 \
   -H 'Content-Type: application/json' \
   -d '{"operation":"Public.Actor.byActorId","parameters":{"actorId": 1}}'
```
