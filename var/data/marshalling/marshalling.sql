DROP DATABASE IF EXISTS marshalling;
CREATE DATABASE marshalling WITH TEMPLATE = template0 ENCODING = 'UTF8';

ALTER DATABASE marshalling OWNER TO postgres;

\connect marshalling


DROP TABLE IF EXISTS slug;

CREATE TABLE slug (
  slug_id SERIAL PRIMARY KEY NOT NULL
);

CREATE SCHEMA api;


CREATE OR REPLACE FUNCTION api.echo (message text)
  RETURNS text
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
BEGIN
  RETURN message;
END;
$$;


CREATE OR REPLACE FUNCTION api.echo_set (message text)
  RETURNS SETOF text
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
BEGIN
  RETURN QUERY
  SELECT
    message;
END;
$$;

-- table valued echo function

CREATE OR REPLACE FUNCTION api.echo_table (message text)
  RETURNS TABLE (
    echoMessage text,
    at timestamp with time zone)
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
BEGIN
  RETURN QUERY
  SELECT
    message,
    now();
END;
$$;


CREATE TYPE api.echo_type AS (
  echoMessage text,
  at timestamp with time zone
);


CREATE TYPE api.echo_type_nested AS (
  echoes api.echo_type[]
);


CREATE FUNCTION api.echo_type (message text)
  RETURNS api.echo_type
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    message,
    now();

$$;

CREATE FUNCTION api.echo_type_array (message text)
  RETURNS api.echo_type[]
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    ARRAY[ROW (message, now())::api.echo_type];

$$;

CREATE FUNCTION api.echo_type_nested (message text)
  RETURNS api.echo_type_nested
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    ROW (ARRAY[ROW (message, now())::api.echo_type])::api.echo_type_nested;

$$;


CREATE OR REPLACE FUNCTION api.echo_type_set (message text)
  RETURNS SETOF api.echo_type
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    message,
    now();

$$;

