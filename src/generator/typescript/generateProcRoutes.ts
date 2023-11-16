import { Context } from "../../context";
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

/**
 * Generate TypeScript REST routes for each schema and stored function.
 *
 * These routes are Express post handlers.
 *
 * @param context
 */
export const generateRoutes = async (context: Context) => {
  // keeping things tidy, folder per namespace, file per proc
  const generationRoot = path.join(context.generateInto, "routes");
  try {
    // smoke em so we get a clean generation
    await fs.promises.rm(generationRoot, { recursive: true });
  } catch {
    // does not exist -- carry on
  }

  // separate out namespaces by folders, this is just a little bit of
  // visual organization and doesn't affect the actual doing
  const namespacesInFolders = await Promise.all(
    context.namespaces.map(async (namespace) => {
      const namespaceFolder = path.join(generationRoot, namespace.namespace);
      await fs.promises.mkdir(namespaceFolder, { recursive: true });
      return {
        namespace,
        namespaceFolder,
      };
    }),
  );

  // wheel through every namespace, and every proc and generate a
  // route handler in the classic express style
  await Promise.all(
    namespacesInFolders.map(async (n) => {
      await Promise.all(
        n.namespace.procs.map(async (p) => {
          // now the controller
          const source = `
        // generated - do not modify
        import {
          ${p.typescriptNameForPostgresArguments()},
        }  from "../../schemas/${n.namespace.namespace}";
        import { Router } from "express";
        import { Request } from "express-jwt";
        import { Context } from "../../../context";
        import { ${p.typescriptNameForDispatcher} as proc} from "../../procs/${
          n.namespace.namespace
        }/${p.typescriptNameForDispatcher}";
        import Debug from "debug";
        const debug = Debug("tumbleweed:api:${p.typescriptNameForDispatcher}")


        export const ${
          p.typescriptNameForRoute
        } = (context: Context, router: Router) => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          router.post("${p.controllerPath}", 
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          async (req: Request, res, next) => {
            try {
              const request = req.body as unknown as ${p.typescriptNameForPostgresArguments()};
              debug("invoke", JSON.stringify(request));
              const response = await proc(
                {...context, jwt: req.auth},
                request
              )
              res
                .setHeader("Content-Type", "application/json")
                .end(JSON.stringify(response));
          } catch (e: any) {
            debug("error", JSON.stringify(e));
            res
              .status(400)
              .setHeader('Content-Type', 'application/json')
              .end(JSON.stringify(e));
          } finally {
            next();
          }
          });
        };
        `;
          await fs.promises.writeFile(
            path.join(n.namespaceFolder, `${p.typescriptNameForRoute}.ts`),
            await prettier.format([source].join("\n"), {
              parser: "typescript",
            }),
          );
        }),
      );
      const staticImports = `
      // generated - do not modify
      import { Router } from "express";
      import { Context } from "../../../context";
      `;
      const imports = n.namespace.procs.map(
        (p) =>
          `import {${p.typescriptNameForRoute}} from "./${p.typescriptNameForRoute}";`,
      );
      const source = `

      export const ${
        n.namespace.namespace
      }Routes = (context: Context, router: Router) => {
        // this may be empty if no database procs are exposed
        console.assert(context);
        console.assert(router);
        ${n.namespace.procs
          .map((p) => `${p.typescriptNameForRoute}(context, router);`)
          .join("\n")}
      }
      `;

      // every controller is now generated -- so collect them an express middleware
      await fs.promises.writeFile(
        path.join(n.namespaceFolder, `index.ts`),
        await prettier.format(
          [staticImports, imports.join("\n"), source].join("\n"),
          {
            parser: "typescript",
          },
        ),
      );
    }),
  );
  // and now an overall index file
  const staticImports = `
    // generated - do not modify
    import { Router } from "express";
    import { Context } from "../../context";
    `;
  const imports = context.namespaces.map(
    (n) => `import {${n.namespace}Routes} from "./${n.namespace}";`,
  );
  const source = `

    export const addRoutes = (context: Context, router: Router) => {
      ${context.namespaces
        .map((n) => `${n.namespace}Routes(context, router);`)
        .join("\n")}
    }
    `;

  // every controller is now generated -- so collect them an express middleware
  await fs.promises.writeFile(
    path.join(generationRoot, `index.ts`),
    await prettier.format(
      [staticImports, imports.join("\n"), source].join("\n"),
      {
        parser: "typescript",
      },
    ),
  );
};
