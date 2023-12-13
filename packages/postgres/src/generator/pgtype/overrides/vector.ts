import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGTypeInt2Vector extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    parse${this.typescriptName}(from: string|null) {
      if (from === null) return null;
      const source = Array.isArray(from) ? new Uint16Array(from) : JSON.parse(from);
      return new Uint16Array(source);
    }
    `;
  }
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Uint16Array;
    `;
  }
}

registerOverride("int2vector", PGTypeInt2Vector);

class PGTypeVector extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    parse${this.typescriptName}(from: string|null) {
      if (from === null) return null;
      const source = Array.isArray(from) ? new Float32Array(from) : JSON.parse(from);
      return new Float32Array(source);
    }
    `;
  }
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Float32Array;
    `;
  }
}

registerOverride("vector", PGTypeVector);
