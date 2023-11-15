/**
 * Handy utility to group up a list by a predicate that picks part of a list
 * member to serve as the grouping key.
 *
 * @param list
 * @param key
 * @returns
 */
export const groupBy = <T, K extends string | number>(
  list: T[],
  key: (i: T) => K
) =>
  list.reduce(
    (groups, item) => {
      (groups[key(item)] ||= []).push(item);
      return groups;
    },
    {} as Record<K, T[]>
  );

/**
 * A fairly boring type guard for strings.
 */
export const isString = (v: any): v is string => {
  return typeof v === "string" || v instanceof String;
};
