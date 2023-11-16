import { camelCase } from "change-case";
import { PGProc } from "./generator/pgtype/pgproc";

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
  parameterIndex: number
) => {
  if (proc.proc.proargnames[parameterIndex] !== undefined) {
    return camelCase(proc.proc.proargnames[parameterIndex]);
  } else {
    return `_${parameterIndex}`;
  }
};
