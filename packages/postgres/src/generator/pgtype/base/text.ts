import { PGCatalogType } from "../pgcatalogtype";
import { GenerationContext } from "@embracesql/shared";

/**
 * Lots of char, varchar, text, ntext -- it all ends up
 * as a string.
 */
export class PGTypeText extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `string`;
  }

  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    // parsing a string doesn't really make 'sense' in that
    // a string is expected to be a string
    return `
      if (typeof from === "string") {
        return from;
      }
      throw new Error(\`from is not a string\`, {cause: from});
    `;
  }
}

/**
 * Just an array of strings.
 */
export class PGTypeTextArray extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Array<string>`;
  }
}
