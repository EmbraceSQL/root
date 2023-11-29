SELECT
    oid,
    typname,
(
        SELECT
            nspname
        FROM
            pg_namespace n
        WHERE
            n.oid = p.typnamespace) nspname,
    typcategory,
    typtype,
    p.typbasetype,
    typrelid,
    p.typelem,
    typoutput,
    -- don't need a whole lot for range types
(
        SELECT
            rngsubtype::int
        FROM pg_range
        WHERE
            rngtypid = p.oid) rngsubtype,
format_type(oid, typtypmod) fullname,
(
    SELECT
        description
    FROM
        pg_description d
    WHERE
        d.objoid = p.oid) description
FROM
    pg_type p
WHERE
    -- excluding 'magic' internal types on purpose, these won't show up
    -- in user schema / code
    typname NOT LIKE '__pg%'
ORDER BY
    typname ASC
