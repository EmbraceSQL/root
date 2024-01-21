WITH index_to_table_type AS (
SELECT
	indexrelid,
	oid tabletypeoid,
	regexp_substr(indexprs, '(:funcresulttype) (\d+)', 1, 1, '', 2)::oid function_index_return_oid,
	regexp_substr(indexprs, '(:varattno) (\d+)', 1, 1, '', 2)::smallint function_index_on_attnum
FROM 
	pg_index i JOIN
	pg_class c ON i.indrelid = c.oid
)

SELECT
    attnum,
    attrelid,
	COALESCE (
		-- function indexes are 'on' the named attributes of the table
		-- not the resulting name of the index
		(SELECT attname FROM pg_attribute aa WHERE aa.attrelid = i.tabletypeoid AND aa.attnum = function_index_on_attnum),
		attname
	) attname,
	COALESCE(
		-- pick the nullability from the corresponding table
		-- personally I think this is a bug in the postgres catalog
		(SELECT attnotnull FROM pg_attribute aa WHERE aa.attrelid = i.tabletypeoid AND aa.attname = a.attname),
		attnotnull
	) attnotnull,
    atthasdef,
	tabletypeoid,
	COALESCE(
		-- if this is a functional index, that funtion return type becomes the type
		-- of the single attribute of the index composite
	 	function_index_return_oid,	
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
