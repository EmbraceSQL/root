SELECT
    (
        SELECT
            greatest(reltype, reloftype)
        FROM
            pg_class
        WHERE
            oid = indrelid) tabletypeoid,
    indexrelid,
    indisunique,
    indisprimary,
    relname name
FROM
    pg_index i
    JOIN pg_class c ON i.indexrelid = c.oid
