import {
  ContainerNode,
  GenerationContext,
  ScriptFolderNode,
  ScriptNode,
  ScriptsNode,
} from "@embracesql/shared";
import * as fs from "fs";
import * as path from "path";

/**
 * Loading up the scripts node by file system traversal.
 *
 * Once done, all scripts will be visited and loaded into the AST.
 */
export async function loadScriptsAST(context: GenerationContext) {
  if (context.sqlScriptsFrom) {
    const rootPath = path.parse(path.join(context.sqlScriptsFrom));
    const scriptsNode = new ScriptsNode(context.database);
    await loadScriptFolderAST(context, rootPath, scriptsNode);
    return scriptsNode;
  } else {
    return undefined;
  }
}

/**
 * Asynchronous factory builds from a folder path on disk.
 */
async function loadScriptFolderAST(
  context: GenerationContext,
  searchPath: path.ParsedPath,
  addToNode: ContainerNode,
) {
  // reading the whole directory
  const inPath = await fs.promises.readdir(
    path.join(searchPath.dir, searchPath.base),
    {
      withFileTypes: true,
    },
  );
  for (const entry of inPath) {
    if (entry.isDirectory()) {
      const folder = new ScriptFolderNode(
        path.parse(entry.name).name,
        addToNode,
      );
      // recurse downr
      await loadScriptFolderAST(
        context,
        path.parse(path.join(entry.path, entry.name)),
        folder,
      );
    } else if (entry.name.endsWith(".sql")) {
      await loadScriptAST(
        context,
        path.parse(path.join(entry.path, entry.name)),
        addToNode,
      );
    }
  }
}

/**
 * Asynchronous factory builds from a sql file on disk.
 */
async function loadScriptAST(
  context: GenerationContext,
  scriptPath: path.ParsedPath,
  addToNode: ContainerNode,
) {
  console.assert(context);
  new ScriptNode(
    scriptPath.name,
    path.join(scriptPath.dir, scriptPath.base),
    await fs.promises.readFile(path.join(scriptPath.dir, scriptPath.base), {
      encoding: "utf8",
    }),
    addToNode,
  );
}
