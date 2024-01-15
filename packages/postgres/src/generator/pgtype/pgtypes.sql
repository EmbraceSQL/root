SELECT
    oid,
    typname,
    (
        SELECT
            nspname
        FROM
            pg_namespace n
        WHERE
            n.oid = p.typnamespace
    ) nspname,
    typcategory,
    typtype,
    p.typbasetype,
    typrelid,
    p.typelem,
    typoutput,
    (
        SELECT
            rngsubtype::int
        FROM pg_range
        WHERE
            rngtypid = p.oid
    ) rngsubtype
FROM
    pg_type p
WHERE
    -- excluding 'magic' internal types on purpose, these won't show up
    -- in user schema / code
    typname NOT LIKE '__pg%'

-- per the docs
-- https://www.postgresql.org/docs/current/catalog-pg-class.html
-- indexes don't have pg_class and thus no pg_type entries
-- they are very type like those, so let's just synthesize
UNION ALL
SELECT 
    indexrelid oid, -- oid are database uniqe, so this will not collide with type oids
    relname typname,
    (
        SELECT
            nspname
        FROM
            pg_namespace n
        WHERE
            n.oid = c.relnamespace
    ) nspname,
    'C' typcategory, -- we'll be a composite type
    'c' typtype, -- yep, composite - sometimes C, sometimes c...
    0,
    indexrelid typrelid,
    0,
    0 typoutput,
    0 rngsubtype
FROM 
    pg_class c 
    JOIN pg_index i ON c.oid = i.indexrelid
