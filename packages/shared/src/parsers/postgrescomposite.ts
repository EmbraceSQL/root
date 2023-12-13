import { interleave } from ".";
import parsimmon, { Parser } from "parsimmon";

/**
 * An empty string parses to a null. This will show up in composites like
 * (,hello) -- which is null, hello
 */
const emptyIsNull = parsimmon.string("").result(null);

/**
 * Escaping is done with backslash -- per the docs:
 * ... To put a double quote or backslash in a quoted composite field value, precede it with a backslash. (Also, a pair of double quotes within a double-quoted field value is taken to represent a double quote character, analogously to the rules for single quotes in SQL literal strings.)
 * ...Alternatively, you can avoid quoting and use backslash-escaping to protect all data characters that would otherwise be taken as composite syntax.
 */
const SEPARATORS = `(),`;
const separators = parsimmon.oneOf(SEPARATORS);
const startComposite = parsimmon.string("(");
const endComposite = parsimmon.string(")");
const attributeSeperator = parsimmon.string(",");
const REQUIRES_ESCAPE_IN_VALUE = `"\\${SEPARATORS}`;
const requiresEscapeInValue = parsimmon.oneOf(REQUIRES_ESCAPE_IN_VALUE);
const neverRequiresEscape = parsimmon.noneOf(REQUIRES_ESCAPE_IN_VALUE);
export const parseEscapedCompositeValue = parsimmon
  .string("\\")
  .times(1)
  .then(requiresEscapeInValue);

const addEscape = requiresEscapeInValue.map((m) => `\\${m}`);
export const escapeCompositeValue = parsimmon
  .alt(neverRequiresEscape, addEscape)
  .many()
  .tie()
  .map((m) => `"${m}"`);

/**
 *  From the PG docs
 * ... In particular, fields containing parentheses, commas, double quotes, or backslashes must be double-quoted.
 *
 * meaning -- if you are anything other than these characters -- you are a value.
 */
const bareString = parsimmon
  .alt(neverRequiresEscape, parseEscapedCompositeValue)
  .atLeast(1)
  .tie();
/**
 * Tales from the docs:
 * ... Also, a pair of double quotes within a double-quoted field value is taken to represent a double quote character, analogously to the rules for single quotes in SQL literal strings.
 */
const pairOfQuotes = parsimmon.string('"').times(2).result('"');
const quotedString = parsimmon
  .alt(
    neverRequiresEscape,
    pairOfQuotes,
    parseEscapedCompositeValue,
    separators,
  )
  .many()
  .wrap(parsimmon.string('"'), parsimmon.string('"'))
  .tie();

/**
 * Parse a composite attribute. This is exposed to allow unit testing.
 */
export const compositeAttribute = parsimmon.alt(
  quotedString,
  bareString,
  emptyIsNull,
);

interface ObjectParser {
  [name: string]: string | null;
}

type AttributesToParse = (string | parsimmon.Parser<string | null>)[][];

/**
 * Give a list of attributes we'll be parsing as extracted from
 * the metadata for a composite type, parse an object into name
 * value pair typical JS type object.
 */
export function parseObjectWithAttributes(
  parseTheseAttributes: AttributesToParse,
  stringToParse: string,
) {
  const args = [
    startComposite,
    ...interleave(parseTheseAttributes, attributeSeperator),
    endComposite,
  ] as Parser<unknown>[];

  return parsimmon.seqObj<ObjectParser>(...args).tryParse(stringToParse);
}
