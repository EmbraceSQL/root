import { initializeContext } from "../context";
import { regenerateFromDatabase } from "../generator";

const main = async () => {
  const context = await initializeContext();
  await regenerateFromDatabase(context);
  await context.sql.end();
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
