/**
 * Handy utility to group up a list by a predicate that picks part of a list
 * member to serve as the grouping key.
 *
 * @param list
 * @param key
 * @returns
 */
export const groupBy = <K extends string | number, T, TT = T>(
  list: T[],
  key: (i: T) => K,
  map = (i: T) => i as unknown as TT,
) =>
  list.reduce(
    (groups, item) => {
      (groups[key(item)] ||= []).push(map(item));
      return groups;
    },
    {} as Record<K, TT[]>,
  );

/**
 * Unnamed positional parameters in postgres are one based
 */
export function oneBasedArgumentNamefromZeroBasedIndex(index: number) {
  return `argument_${index + 1}`;
}

/**
 * Take a string and turn it into a doc comment.
 */
export const asDocComment = (body: string) => {
  return body
    ? `
/**
${body
  .split("\n")
  .map((l) => ` * ${l}`)
  .join("\n")}
 */`
    : "";
};
