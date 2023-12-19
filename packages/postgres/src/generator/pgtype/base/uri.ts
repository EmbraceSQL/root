import { GenerationContext } from "../..";
import { PGCatalogType } from "../pgcatalogtype";

export class PGTypeUri extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
        return from ? new URL(from) : null;
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = URL;
    `;
  }
}
