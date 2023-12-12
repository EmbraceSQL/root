import { DELIMITER } from "./shared";
import parsimmon from "parsimmon";

/**
 * Parsing array types -- from the docs:
 * ... The decoration consists of curly braces ({ and }) around the array value plus delimiter characters between adjacent items.
 */
const startArray = parsimmon.string("{");
const endArray = parsimmon.string("}");

const delimiter = parsimmon.string(DELIMITER);
const separators = parsimmon.oneOf("{},");

/**
 * Here is a simple one -- from the docs:
 *
 * ... If the value written for an element is NULL (in any case variant), the element is taken to be NULL.
 */
const NULLisNull = parsimmon.string("NULL").result(null);

/**
 * And quoting rules -- from the docs:
 * ... The array output routine will put double quotes around element values if they are empty strings, contain curly braces, delimiter characters, double quotes, backslashes, or white space, or match the word NULL.
 */
const REQUIRES_ESCAPE_IN_VALUE = String.raw`"\{},"`;
const requiresEscapeInValue = parsimmon.oneOf(REQUIRES_ESCAPE_IN_VALUE);
const neverRequiresEscape = parsimmon.noneOf(REQUIRES_ESCAPE_IN_VALUE);
export const escaped = parsimmon
  .string("\\")
  .times(1)
  .then(requiresEscapeInValue);

const addEscape = requiresEscapeInValue.map((m) => `\\${m}`);
export const escapeValue = parsimmon
  .alt(neverRequiresEscape, addEscape)
  .many()
  .tie()
  .map((m) => `"${m}"`);

/**
 * And you can escape everything -- from the docs:
 * ... you can avoid quotes and use backslash-escaping to protect all data characters that would otherwise be taken as array syntax.
 */
const bareString = parsimmon.alt(neverRequiresEscape, escaped).atLeast(1).tie();

/**
 * And an element can be quoted - looking at actual DB results, this
 * is the common case.
 */
const quotedString = parsimmon
  .alt(neverRequiresEscape, escaped, separators)
  .many()
  .wrap(parsimmon.string('"'), parsimmon.string('"'))
  .tie();

/**
 * An individual element can then be quoted, unquoted, or a NULL.
 *
 * Put the null first so it'll be 'greedy' and capture before bareString.
 */
const arrayElement = parsimmon.alt(quotedString, NULLisNull, bareString);

/**
 * Full assembled array value parser.
 */
export const arrayAttribute = arrayElement
  .sepBy(delimiter)
  .wrap(startArray, endArray);
