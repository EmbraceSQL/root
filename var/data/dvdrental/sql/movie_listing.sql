SELECT
  film_id,
  title,
  release_year,
  rating,
  -- nested array so we don't need multiple trips to the database
  -- this is a nice way to embrace SQL!
  -- this is also a query that won't parse well with off the shelf
  -- postgres client drivers, but we'll generate strong types automatically
  ARRAY(
	  SELECT
	    first_name || ' ' || last_name
	  FROM
	    public.actor JOIN public.film_actor fa USING (actor_id)
	  WHERE
        fa.film_id = f.film_id
  ) AS actors

FROM 
  public.film f