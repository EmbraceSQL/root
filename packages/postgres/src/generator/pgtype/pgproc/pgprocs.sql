
  WITH all_procs AS (
  SELECT 
    oid,
    prokind,
    proname, 
    (select nspname FROM pg_namespace n WHERE n.oid = pronamespace) nspname,
    provariadic, 
    pronargdefaults,
    prorettype, 
    proretset, 
    COALESCE(proargtypes, ARRAY[]::oid[]) proargtypes, 
    COALESCE(proallargtypes, ARRAY[]::oid[]) proallargtypes, 
    COALESCE(proargnames, ARRAY[]::text[]) proargnames,
    (
      SELECT COUNT(*) 
      FROM pg_proc again 
      WHERE 
        again.proname = procs.proname
        AND again.pronamespace = procs.pronamespace
    ) overloads
  FROM 
    pg_proc procs
  ) 
  SELECT 
    *
  FROM
      all_procs
  WHERE 
    NOT proname ~ '^_'
    -- schemas that we will need to skip go here
    AND nspname NOT IN('pg_catalog')
    -- only functions and procs
    AND prokind IN ('f', 'p')
    -- no triggers please
    AND oid NOT IN (SELECT tgfoid FROM pg_trigger)