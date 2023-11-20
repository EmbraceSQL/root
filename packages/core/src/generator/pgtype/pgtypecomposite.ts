import { AttributeRow, CatalogRow, Context } from "../../context";
import { PGAttribute } from "./pgattribute";
import { PGCatalogType } from "./pgcatalogtype";
import { PGIndex } from "./pgindex";
import { camelCase } from "change-case";
import { alt, noneOf, oneOf, Parser, seqObj, string } from "parsimmon";

export const interleave = <T, U>(arr: T[], separator: U) => {
  const ret = new Array<T | U>();
  arr.forEach((e, i) => {
    ret.push(e);
    if (i < arr.length - 1) ret.push(separator);
  });
  return ret;
};

export interface ObjectParser {
  [name: string]: string | null;
}

/**
 * Composite types are built up with other types into name:type
 * properties.
 */
export class PGTypeComposite extends PGCatalogType {
  attributes: PGAttribute[];
  indexes: PGIndex[];
  constructor(catalog: CatalogRow) {
    super(catalog);
    this.attributes = catalog.attributes.map((a) => new PGAttribute(this, a));
    // translate the attributes on the index into attributes on the type
    // this is needed to properly pick up constraints which are on the type
    // for the base table but are not on the type for the index
    catalog.indexes.forEach((i) => {
      i.attributes = i.attributes
        .map((i) => catalog.attributes.find((c) => c.attname === i.attname))
        .filter((a) => a) as AttributeRow[];
    });
    this.indexes = catalog.indexes.map((a) => new PGIndex(this, a));
  }

  attributeByAttnum(attnum: number) {
    // yep -- postgres is one based
    return this.attributes[attnum - 1];
  }

  typescriptTypeDefinition(context: Context) {
    const generationBuffer = [``];
    // all the fields -- and a partial type to allow filling out with
    // various sub selects
    const namedValues = this.attributes.map(
      (a) => `${a.typescriptName}?: ${a.typescriptTypeDefinition(context)};`,
    );
    generationBuffer.push(`
    export interface ${this.typescriptName}  {
      ${namedValues.join("\n")}
    };
    `);

    // all the index types are ways into this composite via a table
    this.indexes.forEach((i) =>
      generationBuffer.push(i.typescriptTypeDefinition(context)),
    );

    return generationBuffer.join("\n");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // make a composite type -- escape the values looked up from the
    // passed object
    if (x) {
      const attributes = this.catalog.attributes.map((a) => {
        // hand off the the serializer
        const value = context.resolveType(a.atttypid).serializeToPostgres(
          context,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          x[camelCase(a.attname)],
        );
        // quick escape with regex
        return value ? escapeValue.tryParse(`${value}`) : "";
      });
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `(${attributes.join(DELIMITER)})`;
    } else {
      return null;
    }
  }

  parseFromPostgres(context: Context, x: string) {
    // have parsimmon pick out an object right from our metadata
    // and chain along to the parser for that type
    const attributes = this.catalog.attributes.map(
      (a) =>
        [
          camelCase(a.attname),
          compositeAttribute.map((parsedAttributeText) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            context
              .resolveType(a.atttypid)
              .parseFromPostgres(context, parsedAttributeText),
          ),
        ] as [string, Parser<string | null>],
    );

    const args = [
      startComposite,
      ...interleave(attributes, attributeSeperator),
      endComposite,
    ];

    return seqObj<ObjectParser>(...args).tryParse(x);
  }
}

/**
 * An empty string parses to a null. This will show up in composites like
 * (,hello) -- which is null, hello
 */
const emptyIsNull = string("").result(null);

/**
 * Escaping is done with backslash -- per the docs:
 * ... To put a double quote or backslash in a quoted composite field value, precede it with a backslash. (Also, a pair of double quotes within a double-quoted field value is taken to represent a double quote character, analogously to the rules for single quotes in SQL literal strings.)
 * ...Alternatively, you can avoid quoting and use backslash-escaping to protect all data characters that would otherwise be taken as composite syntax.
 */
const SEPARATORS = `(),`;
const DELIMITER = `,`;
const separators = oneOf(SEPARATORS);
export const startComposite = string("(");
export const endComposite = string(")");
export const attributeSeperator = string(",");
const REQUIRES_ESCAPE_IN_VALUE = `"\\${SEPARATORS}`;
const requiresEscapeInValue = oneOf(REQUIRES_ESCAPE_IN_VALUE);
const neverRequiresEscape = noneOf(REQUIRES_ESCAPE_IN_VALUE);
export const escaped = string("\\").times(1).then(requiresEscapeInValue);

const addEscape = requiresEscapeInValue.map((m) => `\\${m}`);
const escapeValue = alt(neverRequiresEscape, addEscape)
  .many()
  .tie()
  .map((m) => `"${m}"`);

/**
 *  From the PG docs
 * ... In particular, fields containing parentheses, commas, double quotes, or backslashes must be double-quoted.
 *
 * meaning -- if you are anything other than these characters -- you are a value.
 */
const bareString = alt(neverRequiresEscape, escaped).atLeast(1).tie();
/**
 * Tales from the docs:
 * ... Also, a pair of double quotes within a double-quoted field value is taken to represent a double quote character, analogously to the rules for single quotes in SQL literal strings.
 */
const pairOfQuotes = string('"').times(2).result('"');
const quotedString = alt(neverRequiresEscape, pairOfQuotes, escaped, separators)
  .many()
  .wrap(string('"'), string('"'))
  .tie();

/**
 * Parse a composite attribute. This is exposed to allow unit testing.
 */
export const compositeAttribute = alt(quotedString, bareString, emptyIsNull);
