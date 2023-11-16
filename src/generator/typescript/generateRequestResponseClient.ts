import { Context } from "../../context";
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

/**
 * Generate a TS dispatch map for a client. This allows a single generic
 * function signature to send a request message, talk to the server, and get
 * a response message automatically. No fussing with URLs on the client side.
 *
 * @param context
 */
export const generateRequestResponseDispatcher = async (context: Context) => {
  // a place to store all the types
  const clientFolder = path.join(context.generateInto, "client");
  try {
    await fs.promises.stat(clientFolder);
    // smoke em so we get a clean generation
    await fs.promises.rm(clientFolder, { recursive: true });
  } catch {
    // does not exist -- carry on
  }
  await fs.promises.mkdir(clientFolder, { recursive: true });
  // each namespace gets a module
  await Promise.all(
    context.namespaces.map(async (n) => {
      const writeTo = path.join(clientFolder, `${n.namespace}.ts`);
      // import everything we need
      const staticImports = `
      // This is generated - do not modify
      `;
      const requestResponseImports = `import * as ${n.namespace} from "../schemas/${n.namespace}"`;
      const requestResponsePairs = n.procs.map(
        (proc) =>
          `
          type ${proc.typescriptNameForDispatcher} = {
            request: ${proc.typescriptNameForRequest(true)};
            response: ${proc.typescriptNameForResponse(true)};
          };
          `,
      );
      // union all request types -- this is the allow input to dispatch a request
      const requestResponseUnion = n.procs.length
        ? `export type RequestResponse = ${n.procs
            .map((proc) => proc.typescriptNameForDispatcher)
            .join(" | ")};`
        : "export type RequestResponse = never;";

      await fs.promises.writeFile(
        writeTo,
        await prettier.format(
          [
            staticImports,
            requestResponseImports,
            requestResponsePairs.join("\n"),
            requestResponseUnion,
          ].join("\n"),
          {
            parser: "typescript",
          },
        ),
      );
    }),
  );
  // dispatchers are generated -- now make an index that is an overall client
  const writeTo = path.join(clientFolder, `index.ts`);
  const staticImports = `
      // This is generated - do not modify
      /* eslint-disable @typescript-eslint/no-unsafe-return */
      /* eslint-disable @typescript-eslint/no-unsafe-assignment */
      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      import {
        JSONTypecastMap,
        RequestMessage
      } from "../../client";
      import {
        JSONValue,
        UUID
      } from "../../types";
      `;
  const crossImports = context.namespaces
    .map(
      (n) => `
    import * as ${n.namespace} from "../schemas/${n.namespace}";
    export * as ${n.namespace} from "../schemas/${n.namespace}";
    import {RequestResponse as ${n.namespace}RequestResponse} from "./${n.namespace}";
    `,
    )
    .join("\n");
  const crossExports = [
    `
    export type RequestResponse = ${context.namespaces
      .map((n) => `${n.namespace}RequestResponse`)
      .join("|")};
    `,
    `
    export type PickResponse<T> = Extract<RequestResponse,{ request: T; response:  RequestResponse["response"] }>["response"];
    `,
    `export * from "../../types";`,
  ].join("\n");
  const casts = context.namespaces
    .flatMap((n) => n.types)
    .map((t) => {
      return `
      "${t.postgresName}": (casts, o) => {
        if (o !== null) {
          ${t.typescriptCastFromJSON(context)}
        } else {
          return null;
        }
      }
    `;
    });
  const pseudoTypeCasts = context.namespaces
    .flatMap((n) => n.procs)
    .filter((p) => p.returnsPseudoTypeRecord)
    .map((p) => {
      return `
      "${p.postgresName}": (casts, o) => {
        if (o !== null) {
          ${p.typescriptCastFromJSON(context)}
        } else {
          return null;
        }
      }
    `;
    });
  const castMap = `
  const castMap : JSONTypecastMap = {
    ${[...casts, ...pseudoTypeCasts].join(",\n")}
  };
  `;
  const dispatchers = context.namespaces
    .filter((n) => n.procs.length)
    .map((n) => n.namespace)
    .map(
      (n) => `
      async ${n}<
      R extends ${n}RequestResponse["request"],
      RE extends PickResponse<R>
      >(request: R, abortWith ?: AbortController) : Promise<RE> {
        const response = await this.invoke(request as unknown as RequestMessage, abortWith);
        return response as RE;
      }
    `,
    );
  const invokers = context.namespaces
    .filter((n) => n.procs.length)
    .flatMap((n) => n.procs)
    .map(
      (p) => `
      async ${
        p.typescriptInvokeName
      }(args: ${p.typescriptNameForPostgresArguments(true)}) {
        const response = await this.invoke(new ${p.typescriptNameForRequest(
          true,
        )}(args));
        return response as ${p.typescriptNameForResponse(true)};
      }
    `,
    );
  const client = `
  import { BaseClient, BaseClientProps } from "../../client";
  export { ClientError } from "../../client";

  ${castMap}

  /**
   * Generated client class will communicate with the database exposed
   * functions via request/response messages.
   * 
   * Simply new this up, pick the .<schema> and send in a request message
   * matching a specific named database function. A reply will pop back out!
   */
  export class Client extends BaseClient {
    constructor(props?: BaseClientProps) {
      super({...props, casts: {...castMap, ...props?.casts}});
    }
    ${dispatchers.join("\n")}
    ${invokers.join("\n")}
  }
  `;
  await fs.promises.writeFile(
    writeTo,
    await prettier.format(
      [staticImports, crossImports, crossExports, client].join("\n"),
      {
        parser: "typescript",
      },
    ),
  );
};
