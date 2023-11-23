import { PGProc } from "./generator/pgtype/pgproc/pgproc";
import { camelCase } from "change-case";

/**
 * Handy utility to group up a list by a predicate that picks part of a list
 * member to serve as the grouping key.
 *
 * @param list
 * @param key
 * @returns
 */
export const groupBy = <T, TT, K extends string | number>(
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

// identifier legalizer?
const notLegalInIdentifiers = /[^\w$]/g;

/**
 * Clean identifiers to be only legal characters.
 */
export const cleanIdentifierForTypescript = (identifier: string) => {
  return identifier.replace(notLegalInIdentifiers, "_");
};

/**
 * Procs in postgres can have parameters without names -- positional parameters.
 *
 * In postgres sql, these get 'numerical' names, so we'll follow along
 * for numerical style typescript parameter names.
 */
export const buildTypescriptParameterName = (
  proc: PGProc,
  parameterIndex: number,
) => {
  if (proc.proc.proargnames[parameterIndex] !== undefined) {
    return camelCase(proc.proc.proargnames[parameterIndex]);
  } else {
    return `_${parameterIndex}`;
  }
};

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
