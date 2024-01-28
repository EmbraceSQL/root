import { MiddlewareContext, Next } from "./types";

/**
 * Database ROLE based access control.
 *
 * If a ROLE header is supplied, switch to that ROLE for the current
 * transaction.
 */
export default async function databaseRole(
  context: MiddlewareContext,
  next: Next,
) {
  // ROLE header is well known -- and generated -- header
  if (context.request?.options?.headers?.ROLE) {
    // call into the database in the current transaction setting the
    // role for the remainder of the transaction
    // the 'actual' query will run with this ROLE set, and this different
    // permissions that your initial database connection
    await context.sql.unsafe(
      `SET LOCAL SESSION AUTHORIZATION '${context.request.options.headers.ROLE}';`,
    );
  }
  return next();
}
