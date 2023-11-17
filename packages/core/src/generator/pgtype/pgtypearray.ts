import { CatalogRow, Context } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { alt, noneOf, oneOf, string } from "parsimmon";

/**
 * Arrays of other types are somewhat simple to declare - it is just Array<...>.
 */
export class PGTypeArray extends PGCatalogType {
  constructor(catalog: CatalogRow) {
    super(catalog);
  }

  /**
   * Arrays have ... the word Array...
   */
  get typescriptName() {
    return `${super.typescriptName}Array`;
  }

  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Array<${
      context
        .resolveType(this.catalog.typelem)
        ?.typescriptNameWithNamespace(context) ?? "void"
    }>;
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // passed object
    if (x) {
      // make an array type -- the passed x is gonna be elements
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const elements = x as any[];
      const elementType = context.resolveType(this.catalog.typelem);
      const attributes = elements.map((e) => {
        // hand off the the serializer
        const value = elementType.serializeToPostgres(context, e);
        // quick escape with regex
        return value ? escapeValue.tryParse(`${value}`) : "";
      });
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `{${attributes.join(DELIMITER)}}`;
    } else {
      return null;
    }
  }

  parseFromPostgres(context: Context, x: string) {
    if (x) {
      const elements = arrayAttribute.tryParse(x);
      const elementType = context.resolveType(this.catalog.typelem);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return elements.map((e) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        elementType.parseFromPostgres(context, e),
      );
    } else {
      return null;
    }
  }
}

/**
 * Parsing array types -- from the docs:
 * ... The decoration consists of curly braces ({ and }) around the array value plus delimiter characters between adjacent items.
 */
const startArray = string("{");
const endArray = string("}");
const DELIMITER = ",";
const delimiter = string(DELIMITER);
const separators = oneOf("{},");

/**
 * Here is a simple one -- from the docs:
 *
 * ... If the value written for an element is NULL (in any case variant), the element is taken to be NULL.
 */
const NULLisNull = string("NULL").result(null);

/**
 * And quoting rules -- from the docs:
 * ... The array output routine will put double quotes around element values if they are empty strings, contain curly braces, delimiter characters, double quotes, backslashes, or white space, or match the word NULL.
 */
const REQUIRES_ESCAPE_IN_VALUE = String.raw`"\{},"`;
const requiresEscapeInValue = oneOf(REQUIRES_ESCAPE_IN_VALUE);
const neverRequiresEscape = noneOf(REQUIRES_ESCAPE_IN_VALUE);
export const escaped = string("\\").times(1).then(requiresEscapeInValue);

const addEscape = requiresEscapeInValue.map((m) => `\\${m}`);
const escapeValue = alt(neverRequiresEscape, addEscape)
  .many()
  .tie()
  .map((m) => `"${m}"`);

/**
 * And you can escape everything -- from the docs:
 * ... you can avoid quotes and use backslash-escaping to protect all data characters that would otherwise be taken as array syntax.
 */
const bareString = alt(neverRequiresEscape, escaped).atLeast(1).tie();

/**
 * And an element can be quoted - looking at actual DB results, this
 * is the common case.
 */
const quotedString = alt(neverRequiresEscape, escaped, separators)
  .many()
  .wrap(string('"'), string('"'))
  .tie();

/**
 * An individual element can then be quoted, unquoted, or a NULL.
 *
 * Put the null first so it'll be 'greedy' and capture before bareString.
 */
const arrayElement = alt(quotedString, NULLisNull, bareString);

/**
 * Full assembled array value parser.
 */
export const arrayAttribute = arrayElement
  .sepBy(delimiter)
  .wrap(startArray, endArray);
