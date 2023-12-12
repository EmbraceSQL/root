import { Context } from "../../..";
import { PGCatalogType } from "../pgcatalogtype";

/**
 * Lots of char, varchar, text, ntext -- it all ends up
 * as a string.
 */
export class PGTypeText extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = string;
    `;
  }
}

/**
 * Just an array of strings.
 */
export class PGTypeTextArray extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Array<string>;
    `;
  }
}
