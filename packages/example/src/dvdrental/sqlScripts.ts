// ⚠️ generated - do not modify ⚠️
/* eslint-disable @typescript-eslint/no-namespace */
import * as schemas from "./schemas";
import { Context } from "@embracesql/core/src/context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { undefinedIsNull, Nullable } from "@embracesql/core/src/types";
import postgres from "postgres";

export namespace Sample {
  export namespace Film {
    type TallyRecord = {
      count: Nullable<schemas.PgCatalog.Int8>;
    };
    type TallyResultset = TallyRecord[];

    export const tally = async (context: Context): Promise<TallyResultset> => {
      const response = await context.sql.begin(async (sql: postgres.Sql) => {
        return await sql`
SELECT
    COUNT(*)
FROM
    public.film

                `;
      });
      return response.map((record) => ({
        count: undefinedIsNull(record.count),
      }));
    };
  }
}
type TallyRecord = {
  count: Nullable<schemas.PgCatalog.Int8>;
};
type TallyResultset = TallyRecord[];

export const tally = async (context: Context): Promise<TallyResultset> => {
  const response = await context.sql.begin(async (sql: postgres.Sql) => {
    return await sql`
SELECT
    COUNT(*)
FROM
    public.actor

                `;
  });
  return response.map((record) => ({ count: undefinedIsNull(record.count) }));
};
