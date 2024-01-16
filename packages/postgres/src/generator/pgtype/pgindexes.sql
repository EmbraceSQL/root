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
    relname name,
	(
		SELECT
			array_agg(o.opcname ORDER BY ordinality)
		FROM
			UNNEST(indclass) WITH ORDINALITY AS op(op_id, ordinality)
			JOIN pg_opclass o ON o.oid = op_id
	) operators
FROM
    pg_index i
    JOIN pg_class c ON i.indexrelid = c.oid
