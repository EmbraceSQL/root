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
    return `
      return \`\${from}\`;
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
