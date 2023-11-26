SELECT
    attnum,
    attrelid,
    atttypid,
    attname,
    attnotnull,
    atthasdef
FROM
    pg_attribute a
WHERE
    attnum > 0
    AND atttypid > 0
