SELECT
    attnum,
    attrelid,
    atttypid,
    attname,
    attnotnull
FROM
    pg_attribute a
WHERE
    attnum > 0
    AND atttypid > 0
