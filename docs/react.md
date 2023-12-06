# React

EmbraceSQL generates support for React using hooks. The hooks:

* Connect to any HTTP/S EmbraceSQL server endpoint
* Create, Read, Update, Delete, and Refresh data (CRUD-R)

## Example

You can look in the [intro](./index.md) to see how to generate the dvdrental code
used in these example snippets. Make sure you have a dvdrental database created.

We'll use [vite-express](https://github.com/szymmis/vite-express#-documentation)
which combines the Vite build system with an express server.

```shell
npx create-vite-express
```

Pick 'react' and 'typescript'.

Take a quick run and make sure everythign is up:

```
cd vite-express-project
npm install
npm run dev
curl http://localhost:3000/
```

You should see an HTML page. Assuming this is all working -- time to hook
up EmbraceSQL.

```shell
npm install embracesql @embracesql/react @embracesql/express
```

Now it is time to generate the EmbraceSQL express server application.

```shell
npx embracesql generate express --database postgres://postgres:postgres@localhost/dvdrental > ./src/server/dvdrental.ts
```

And update the express server entry point:

`./src/server/main./ts`

```typescript


```


```shell
embracesql generate react --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental-react.ts
```


Here is a super minimal React application to get you a single Actor
from the database, and allow saving to the database without you writing
a line of SQL, or additional schema, or even a server.

`./src/app.tsx`

```typescript
import React from "react";
import * as ReactDOM from "react-dom/client";
import { EmbraceSQLClient, EmbraceSQLProvider, Public } from "./dvdrental-react";

const client = new EmbraceSQLClient({
  url: "http://localhost:3000/",
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
