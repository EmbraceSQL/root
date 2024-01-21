SELECT
    oid,
(
        SELECT
            nspname
        FROM
            pg_namespace n
        WHERE
            n.oid = cfgnamespace) nspname,
    cfgname
FROM
    pg_ts_config
