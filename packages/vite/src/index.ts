import react from "@vitejs/plugin-react";
import express from "express";
import { defineConfig, mergeConfig, createServer, UserConfig } from "vite";

/**
 * If the user doesn't pass a vite config, well, we're going with
 * really simple react only.
 */
function getDefaultViteConfig(): UserConfig {
  return defineConfig({
    appType: "mpa",
    root: process.cwd(),
    build: { outDir: "dist" },
    plugins: [react()],
  });
}

/**
 * Create an Express application that will serve pages built
 * with the `ViteDevServer`.
 *
 * You might run this app as-is, but most likely you will
 * `use` it along with a `EmbraceSQLExpressApp` to handle
 * data.
 */
export async function EmbraceViteApp(props = getDefaultViteConfig()) {
  const app = express();

  // vite has a node http server made with connect middleware
  const vite = await createServer(
    mergeConfig(props, {
      clearScreen: false,
      server: { middlewareMode: true },
    }),
  );
  app.on("close", () => void vite.close());

  // vite has middleware -- use it
  // I find the word 'middlewares' humerous, like folks who sway 'tupperwares'
  app.use(vite.middlewares);

  return app;
}
