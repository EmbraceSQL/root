import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext } from "@embracesql/shared";

class PostGISAnyElement extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `any`;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      throw new Error("not implemented");
    `;
  }
}

registerOverride("anyelement", PostGISAnyElement);
