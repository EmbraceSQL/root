import { PGCatalogType } from "../pgcatalogtype";

/**
 * Specific type overrides
 */
export const overrides = new Map<string, typeof PGCatalogType>();
export const registerOverride = (name: string, cons: typeof PGCatalogType) => {
  overrides.set(name, cons);
};
