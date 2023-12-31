import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";
import { GenerationContext, commaSeparatedNumbers } from "@embracesql/shared";

class PGTypeInt2Vector extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      const source = Array.isArray(from) ? new Uint16Array(from) : JSON.parse(from);
      return new Uint16Array(source);
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Uint16Array`;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    console.assert(context);
    if (x) {
      return new Uint16Array(commaSeparatedNumbers.tryParse(`${x}`));
    } else {
      return null;
    }
  }
}

registerOverride("int2vector", PGTypeInt2Vector);

class PGTypeVector extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      const source = Array.isArray(from) ? new Float32Array(from) : JSON.parse(from);
      return new Float32Array(source);
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Float32Array`;
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    if (x) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      return new Float32Array(commaSeparatedNumbers.tryParse(`${x}`));
    } else {
      return null;
    }
  }
}

registerOverride("vector", PGTypeVector);
