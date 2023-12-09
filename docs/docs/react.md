# React

EmbraceSQL generates support for React using hooks. The hooks:

* Connect to any HTTP/S EmbraceSQL server endpoint
* Create, Read, Update, Delete, and Refresh data (CRUD-R)

## Example

You can look in the [intro](./index.md) to see how to generate the dvdrental code
used in these example snippets. Make sure you have a dvdrental database created.



```shell
npm install @embracesql/vite
```

Yeah -- that's it, hard to believe I know... just a little more to make
your sample a module so we can use top level await:

`package.json`

```json
{
  "type": "module", 
  "dependencies": {
    "@embracesql/vite": "*"
  }
}
```

And we provide a typescript preset.

`tsconfig.json`

```json
{
  "extends": "@embracesql/shared/tsconfig/react.tsconfig.json"
}

```



Now it is time to generate the EmbraceSQL express server application.

```shell
mkdir -p src/server
npx embracesql generate express --database postgres://postgres:postgres@localhost/dvdrental > ./src/server/dvdrental.ts
```

And update the express server entry point:

`./src/server/main.ts`

```typescript

import { EmbraceSQLExpressApp } from "./dvdrental";
import { EmbraceViteApp } from "@embracesql/vite";
import express from "express";

const app = express();

// hook embracesql middleware first
const embracesql = await EmbraceSQLExpressApp(
  "postgres://postgres:postgres@localhost/dvdrental",
);
app.use("/embracesql", embracesql);
// and then hook in vite
const vite = await EmbraceViteApp();
app.use("/", vite);

app.listen(3000, () => console.log("Server is listening on port 3000..."));

```

Make sure the server starts -- this will even hot reload the server -- and
web page we're about to build.

```shell
npx tsx watch ./src/server/main.ts
```

And check for some data:

```shell
curl -X POST http://localhost:3000/embracesql \
   -H 'Content-Type: application/json' \
   -d '{"operation":"Public.Actor.byActorId","parameters":{"actorId": 1}}'
```

At this point, if you are getting data -- it's time to make a react app!

Generate the client side, react hook code:

```shell
mkdir -p src/client
npx embracesql generate react --database postgres://postgres:postgres@localhost/dvdrental > ./src/client/dvdrental-react.ts
```


Here is a super minimal React application to get you a single Actor
from the database, and allow saving to the database without you writing
a line of SQL, or additional schema, or even a server.

Gonna need an html page entry point

`index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello EmbraceSQL</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/client/main.tsx"></script>
  </body>
</html>
```

`./src/client/main.tsx`

```typescript
import React from "react";
import * as ReactDOM from "react-dom/client";
import { EmbraceSQLClient, EmbraceSQLProvider, Public } from "./dvdrental-react";

const client = new EmbraceSQLClient({
  url: "http://localhost:3000/embracesql",
});


const App = () => {
    // this is hooking to an AutoCRUD method to read an actor
    const {loading, results: actor, error, refresh} = Public.Tables.Actor.useByActorId({ actorId: 1 });
    // 🪄 - automatic onChange saving though the hook, with debounce to not smoke your DB!
    return <div>
        <input value={actor.firstName} onChange={actor.firstName}/>
        <input value={actor.lastName} onChange={actor.lastName}/>
    </div>
}

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <EmbraceSQLProvider client={client}>
    <App />
  </EmbraceSQLProvider>,
);

```

TODO - react app root html

TODO - run with vite npx
