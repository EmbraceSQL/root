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
  if (context.request?.options?.headers?.ROLE) {
    await context.sql.unsafe(
      `SET LOCAL SESSION AUTHORIZATION '${context.request.options.headers.ROLE}';`,
    );
  }
  return next();
}
