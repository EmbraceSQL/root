import parsimmon from "parsimmon";

export const DELIMITER = ",";
export const delimiter = parsimmon.string(DELIMITER);

export const interleave = <T, U>(arr: T[], separator: U) => {
  const ret = new Array<T | U>();
  arr.forEach((e, i) => {
    ret.push(e);
    if (i < arr.length - 1) ret.push(separator);
  });
  return ret;
};

export const whitespace = parsimmon.regexp(/\s*/m);

export const number = parsimmon
  .regexp(/-?(0|[1-9][0-9]*)([.][0-9]+)?([eE][+-]?[0-9]+)?/)
  .skip(whitespace)
  .map(Number)
  .desc("number");

export const commaSeparatedNumbers = number.sepBy(delimiter);
