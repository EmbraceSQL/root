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
    indisprimary
FROM
    pg_index
