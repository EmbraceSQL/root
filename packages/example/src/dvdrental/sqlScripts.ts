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
        return await sql.unsafe(`
                SELECT
    COUNT(*)
FROM
    public.film

                
                `);
      });
      return response.map((record) => ({
        count: undefinedIsNull(record.count),
      }));
    };
  }
  type PickRecord = {
    filmId: Nullable<schemas.PgCatalog.Int4>;
    title: Nullable<schemas.PgCatalog.Varchar>;
    description: Nullable<schemas.PgCatalog.Text>;
    releaseYear: Nullable<schemas.PgCatalog.Int4>;
    languageId: Nullable<schemas.PgCatalog.Int2>;
    rentalDuration: Nullable<schemas.PgCatalog.Int2>;
    rentalRate: Nullable<schemas.PgCatalog.Numeric>;
    length: Nullable<schemas.PgCatalog.Int2>;
    replacementCost: Nullable<schemas.PgCatalog.Numeric>;
    rating: Nullable<schemas.Public.MpaaRating>;
    lastUpdate: Nullable<schemas.PgCatalog.Timestamp>;
    specialFeatures: Nullable<schemas.PgCatalog.TextArray>;
    fulltext: Nullable<schemas.PgCatalog.Tsvector>;
  };
  type PickResultset = PickRecord[];

  export const pick = async (
    context: Context,
    _1: schemas.PgCatalog.Text,
  ): Promise<PickResultset> => {
    const response = await context.sql.begin(async (sql: postgres.Sql) => {
      return await sql.unsafe(
        `
                SELECT
    *
FROM
    public.film
WHERE
    title = $1
                
                `,
        [_1],
      );
    });
    return response.map((record) => ({
      filmId: undefinedIsNull(record.film_id),
      title: undefinedIsNull(record.title),
      description: undefinedIsNull(record.description),
      releaseYear: undefinedIsNull(record.release_year),
      languageId: undefinedIsNull(record.language_id),
      rentalDuration: undefinedIsNull(record.rental_duration),
      rentalRate: undefinedIsNull(record.rental_rate),
      length: undefinedIsNull(record.length),
      replacementCost: undefinedIsNull(record.replacement_cost),
      rating: undefinedIsNull(record.rating),
      lastUpdate: undefinedIsNull(record.last_update),
      specialFeatures: undefinedIsNull(record.special_features),
      fulltext: undefinedIsNull(record.fulltext),
    }));
  };
}
type TallyRecord = {
  count: Nullable<schemas.PgCatalog.Int8>;
};
type TallyResultset = TallyRecord[];

export const tally = async (context: Context): Promise<TallyResultset> => {
  const response = await context.sql.begin(async (sql: postgres.Sql) => {
    return await sql.unsafe(`
                SELECT
    COUNT(*)
FROM
    public.actor

                
                `);
  });
  return response.map((record) => ({ count: undefinedIsNull(record.count) }));
};
