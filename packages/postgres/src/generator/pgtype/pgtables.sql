SELECT
    relname,
(
        SELECT
            nspname
        FROM
            pg_namespace n
        WHERE
            n.oid = relnamespace) nspname,
    GREATEST(reltype, reloftype) tabletypeoid
FROM
    pg_class
WHERE
    relkind IN ('r')
