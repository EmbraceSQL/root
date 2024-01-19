DROP DATABASE IF EXISTS marshalling;

CREATE DATABASE marshalling WITH TEMPLATE = template0 ENCODING = 'UTF8';

ALTER DATABASE marshalling OWNER TO postgres;

\connect marshalling
CREATE EXTENSION CUBE;

CREATE EXTENSION pg_trgm;

CREATE TABLE slug(
  slug_id serial PRIMARY KEY NOT NULL
);

CREATE SCHEMA api;

CREATE OR REPLACE FUNCTION api.echo(message text)
  RETURNS text
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
BEGIN
  RETURN message;
END;
$$;

CREATE OR REPLACE FUNCTION api.echo_set(message text)
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
CREATE OR REPLACE FUNCTION api.echo_table(message text)
  RETURNS TABLE(
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

CREATE FUNCTION api.echo_type(message text)
  RETURNS api.echo_type
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    message,
    now();
$$;

CREATE FUNCTION api.echo_type_array(message text)
  RETURNS api.echo_type[]
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    ARRAY[ROW(message, now())::api.echo_type];
$$;

CREATE FUNCTION api.echo_type_nested(message text)
  RETURNS api.echo_type_nested
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    ROW(ARRAY[ROW(message, now())::api.echo_type])::api.echo_type_nested;
$$;

CREATE OR REPLACE FUNCTION api.echo_type_set(message text)
  RETURNS SETOF api.echo_type
  LANGUAGE sql
  SECURITY DEFINER
  AS $$
  SELECT
    message,
    now();
$$;

CREATE TYPE api.answer AS ENUM(
  'Yes',
  'No',
  'Maybe'
);

CREATE OR REPLACE FUNCTION api.echo_answer(message api.answer)
  RETURNS api.answer
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
BEGIN
  RETURN message;
END;
$$;

CREATE TABLE api.q_and_a(
  question text NOT NULL,
  answer api.answer NULL
);

CREATE INDEX q_and_a_answer ON api.q_and_a USING btree(answer);

COPY api.q_and_a (question, answer) FROM stdin WITH NULL as 'NULL';
Is this a test?	Yes
Is this a question?	NULL
\.

CREATE TABLE api.timezones(
  country_code text NOT NULL,
  time_zone text NOT NULL,
  gmt_offset real NOT NULL,
  dst_offset real NOT NULL,
  raw_offset real NOT NULL
);

CREATE INDEX trgm_idx_gist ON api.timezones USING GIST(time_zone gist_trgm_ops);

CREATE INDEX trgm_idx_gin ON api.timezones USING GIN(time_zone gin_trgm_ops);

\copy api.timezones  FROM 'var/data/marshalling/timezones.tsv';
-- geometric types
CREATE TABLE api.points(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  point point NOT NULL
);

CREATE TABLE api.lines(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  line line NOT NULL
);

CREATE TABLE api.line_segments(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  line_segment lseg NOT NULL
);

CREATE TABLE api.boxes(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  box box NOT NULL
);

CREATE TABLE api.paths(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path path NOT NULL
);

CREATE TABLE api.polygons(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  polygon polygon NOT NULL
);

