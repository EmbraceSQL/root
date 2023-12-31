import { GenerationContext } from "../..";
import { PGCatalogType } from "../pgcatalogtype";

export class PGTypeUri extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
        return new URL(from);
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `URL`;
  }
}
