import { Context, TypeFactoryContext } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import {
  DELIMITER,
  GenerationContext,
  arrayAttribute,
  escapeArrayValue,
} from "@embracesql/shared";
import { pascalCase } from "change-case";

type Props = {
  arraySuffix: boolean;
};

/**
 * Arrays of other types are somewhat simple to declare - it is just Array<...>.
 */
export class PGTypeArray extends PGCatalogType {
  constructor(
    context: TypeFactoryContext,
    catalog: CatalogRow,
    private props: Props = { arraySuffix: true },
  ) {
    super(catalog);
  }

  typescriptTypeParser(context: GenerationContext) {
    const elementType = (context as Context).resolveType(this.catalog.typelem);
    return `
    parse${this.typescriptName}(from: string) {
      const rawArray = JSON.parse(from);
      return rawArray.map((e:unknown) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return parse${elementType.typescriptName}(\`\${e}\`);
      });
    }
    `;
  }

  get typescriptName() {
    return `${pascalCase(this.catalog.typname)}${
      this.props.arraySuffix ? "Array" : ""
    }`;
  }

  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Array<${
      context
        .resolveType(this.catalog.typelem)
        ?.typescriptNameWithNamespace(context) ?? "void"
    }>;
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // passed object
    if (x) {
      // make an array type -- the passed x is gonna be elements
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const elements = x as any[];
      const elementType = context.resolveType(this.catalog.typelem);
      const attributes = elements.map((e) => {
        // hand off the the serializer
        const value = elementType.serializeToPostgres(context, e);
        // quick escape with regex
        return value ? escapeArrayValue.tryParse(`${value}`) : "";
      });
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `{${attributes.join(DELIMITER)}}`;
    } else {
      return null;
    }
  }

  parseFromPostgres(context: Context, x: string) {
    if (x) {
      const elements = arrayAttribute.tryParse(x);
      const elementType = context.resolveType(this.catalog.typelem);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return elements.map((e) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        elementType.parseFromPostgres(context, e),
      );
    } else {
      return null;
    }
  }
}
