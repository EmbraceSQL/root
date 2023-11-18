// ⚠️ generated - do not modify ⚠️
/* eslint-disable @typescript-eslint/no-namespace */
import * as schemas from "./schemas";
import type { PostgresTypecasts } from "./schemas";
import { Context } from "@embracesql/core/src/context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { undefinedIsNull } from "@embracesql/core/src/types";
import postgres from "postgres";

export namespace PgCatalog {}
export namespace InformationSchema {}
export namespace Api {
  type EchoResult = {
    echo: schemas.Api.EchoSingleResultsetRecord;
  };
  type EchoResultset = EchoResult[];

  export const Echo = async (
    context: Context,
    parameters: schemas.Api.EchoArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  api.echo(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
    });
    const results = response as unknown as EchoResultset;
    const responseBody = results?.[0]
      .echo as unknown as schemas.Api.EchoSingleResultsetRecord;
    return responseBody;
  };

  type EchoSetResult = {
    echo_set: schemas.Api.EchoSetSingleResultsetRecord;
  };
  type EchoSetResultset = EchoSetResult[];

  export const EchoSet = async (
    context: Context,
    parameters: schemas.Api.EchoSetArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  api.echo_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
    });
    const results = response as unknown as EchoSetResultset;
    const responseBody = results.map(
      (x) => x.echo_set,
    ) as unknown as schemas.Api.EchoSetResultset;
    return responseBody;
  };

  type EchoTableResult = {
    echo_table: schemas.Api.EchoTableSingleResultsetRecord;
  };
  type EchoTableResultset = EchoTableResult[];

  const parseEchoTableResult = (
    context: Context,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any,
  ): schemas.Api.EchoTableSingleResultsetRecord => {
    return context.procTypes.api_echo_table.parseFromPostgresIfRecord(
      context,
      result,
    ) as unknown as schemas.Api.EchoTableSingleResultsetRecord;
  };

  export const EchoTable = async (
    context: Context,
    parameters: schemas.Api.EchoTableArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  api.echo_table(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
    });
    const results = response as unknown as EchoTableResultset;
    const responseBody = results.map((x) =>
      parseEchoTableResult(context, x.echo_table),
    ) as unknown as schemas.Api.EchoTableResultset;
    return responseBody;
  };

  type EchoTypeResult = {
    echo_type: schemas.Api.EchoTypeSingleResultsetRecord;
  };
  type EchoTypeResultset = EchoTypeResult[];

  export const EchoType = async (
    context: Context,
    parameters: schemas.Api.EchoTypeArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  api.echo_type(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
    });
    const results = response as unknown as EchoTypeResultset;
    const responseBody = results?.[0]
      .echo_type as unknown as schemas.Api.EchoTypeSingleResultsetRecord;
    return responseBody;
  };

  type EchoTypeArrayResult = {
    echo_type_array: schemas.Api.EchoTypeArraySingleResultsetRecord;
  };
  type EchoTypeArrayResultset = EchoTypeArrayResult[];

  export const EchoTypeArray = async (
    context: Context,
    parameters: schemas.Api.EchoTypeArrayArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  api.echo_type_array(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
    });
    const results = response as unknown as EchoTypeArrayResultset;
    const responseBody = results?.[0]
      .echo_type_array as unknown as schemas.Api.EchoTypeArraySingleResultsetRecord;
    return responseBody;
  };

  type EchoTypeNestedResult = {
    echo_type_nested: schemas.Api.EchoTypeNestedSingleResultsetRecord;
  };
  type EchoTypeNestedResultset = EchoTypeNestedResult[];

  export const EchoTypeNested = async (
    context: Context,
    parameters: schemas.Api.EchoTypeNestedArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  api.echo_type_nested(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
    });
    const results = response as unknown as EchoTypeNestedResultset;
    const responseBody = results?.[0]
      .echo_type_nested as unknown as schemas.Api.EchoTypeNestedSingleResultsetRecord;
    return responseBody;
  };

  type EchoTypeSetResult = {
    echo_type_set: schemas.Api.EchoTypeSetSingleResultsetRecord;
  };
  type EchoTypeSetResultset = EchoTypeSetResult[];

  export const EchoTypeSet = async (
    context: Context,
    parameters: schemas.Api.EchoTypeSetArguments,
  ) => {
    console.assert(parameters);
    const sql = context.sql;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const typed = sql.typed as unknown as PostgresTypecasts;
    const response = await sql.begin(async (sql: postgres.Sql) => {
      return await sql`
                  SELECT
                  api.echo_type_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
    });
    const results = response as unknown as EchoTypeSetResultset;
    const responseBody = results.map(
      (x) => x.echo_type_set,
    ) as unknown as schemas.Api.EchoTypeSetResultset;
    return responseBody;
  };
}
