import { PGTypeText } from "../base/text";
import { registerOverride } from "./_overrides";
import { GenerationContext } from "@embracesql/shared";

/**
 * Full text search vectors stored in the database are searched
 * with @@ operators and a transform to `to_tsquery` family of
 * functions.
 */
export class PGTypeTsVector extends PGTypeText {
  override postgresWrapReadParameter(
    context: GenerationContext,
    expression: string,
  ): string {
    console.assert(context);
    return `to_tsquery(${expression})`;
  }

  /**
   * Passed as the well known type text.
   */
  override get toOID(): number {
    // yep, you just gotta know this.
    return 25;
  }

  /**
   * Options to control full text query parsing.
   */
  override typescriptTypeOptions(context: GenerationContext): string {
    console.assert(context);
    return [
      `
       /**
         * Fulltext queries have different parsers that turn your query search
         * text into a runnable search in the database.
         *
         * For PostgreSQL these are documented at:
         * https://www.postgresql.org/docs/current/textsearch-controls.html#TEXTSEARCH-HEADLINE
         */
        export enum FulltextParser {
        Default = "to_tsquery",
        Plain = "plainto_tsquerty",
        Phrase = "phraseto_tsquyer",
        Web = "websearch_to_tsquery",
        }
        export type Options = {
            queryParser?: FulltextParser;
        }
        
            `,
    ].join("\n");
  }
}

registerOverride("tsvector", PGTypeTsVector);
registerOverride("tsquery", PGTypeTsVector);
