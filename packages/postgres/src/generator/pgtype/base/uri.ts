import { GenerationContext } from "../..";
import { Context } from "../../..";
import { PGCatalogType } from "../pgcatalogtype";

export class PGTypeUri extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    parse${this.typescriptName}(from: string) {
        return new URL(from);
    }
    `;
  }
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = URL;
    `;
  }
}