# React

EmbraceSQL generates support for React using hooks. The hooks:

* Connect to any HTTP/S EmbraceSQL server endpoint
* Create, Read, Update, Delete, and Refresh data (CRUD-R)

## Example

You can look in the [intro](./index.md) to see how to generate the dvdrental code
used in these example snippets.

This example also assumes you have generated and are running [Express](./express.md)

Once you have a database, and a server up and going, time to generate some
React hooks.

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
import { EmbraceSQLClient, EmbraceSQLProvider, Hooks } from "./dvdrental-react";

const client = new EmbraceSQLClient({
  url: "http://localhost:3000/",
});


const App = () => {
    // this is hooking to an AutoCRUD method to read an actor
    const {loading, results: actor, setResults: setActor, error, refresh} = Hooks.Public.Actor.useByActorId({ actorId: 1 });
    // 🪄 an automatic onChange saving hook, with debounce to not smoke your DB!
    const onChange = Hooks.Public.Actor.useOnChange(results, {debounce: 200});

    return <div>
        <input value={actor.firstName} onChange={setActor.firstName}/>
        <input value={actor.lastName} onChange={setActor.lastName}/>
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
