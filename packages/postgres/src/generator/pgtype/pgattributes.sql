WITH index_to_table_type AS (
SELECT
	indexrelid,
	oid tabletypeoid
FROM 
	pg_index i JOIN
	pg_class c ON i.indrelid = c.oid
)

SELECT
    attnum,
    attrelid,
    attname,
	COALESCE(
		-- pick the nullability from the corresponding table
		-- personally I think this is a bug in the postgres catalog
		(SELECT attnotnull FROM pg_attribute aa WHERE aa.attrelid = i.tabletypeoid AND aa.attname = a.attname),
		attnotnull
	) attnotnull,
    atthasdef,
	tabletypeoid,
	COALESCE(
		-- pick the type from the corresponding table column when available, this allows computed
		-- indexes to 'work' but also allows stand in types like pg_trgm which uses an int instead of a string
		-- in the ACTUAL index, but we want to query on a string
		(SELECT atttypid FROM pg_attribute aa WHERE aa.attrelid = i.tabletypeoid AND aa.attname = a.attname),
		atttypid
	) atttypid
FROM
    pg_attribute a
	LEFT JOIN index_to_table_type i on a.attrelid = i.indexrelid
WHERE
    attnum > 0
    AND atttypid > 0
