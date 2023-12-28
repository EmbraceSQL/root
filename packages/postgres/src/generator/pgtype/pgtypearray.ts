import { Context, TypeFactoryContext } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import {
  ArrayTypeNode,
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

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.catalog.nspname);

    const type = new ArrayTypeNode(
      this.typescriptName,
      schema.types,
      this.oid,
      this,
    );
    context.database.registerType(type.id, type);
  }

  finalizeAST(context: GenerationContext): void {
    // this needs to be done 'later' to make sure the member type
    // has had a chance to be created -- two passes since types form a
    // graph, not a strict tree
    const memberType = context.database.resolveType(this.catalog.typelem);
    context.database.resolveType<ArrayTypeNode>(this.catalog.oid).memberType =
      memberType;
  }

  typescriptTypeParser(context: GenerationContext) {
    const elementType = context.database.resolveType(this.catalog.typelem);
    if (elementType) {
      return `
      if (from === null) return null;
      const rawArray = JSON.parse(from);
      return rawArray.map((e:unknown) => {
        return ${elementType.typescriptName}.parse(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          \`\${e}\`
        );
      });
    `;
    } else {
      throw new Error(
        `${this.catalog.typname} could not resolve type of element`,
      );
    }
  }

  // TODO: remove
  get typescriptName() {
    return `${pascalCase(this.catalog.typname)}${
      this.props.arraySuffix ? "Array" : ""
    }`;
  }

  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
     Array<${
       context.database.resolveType(this.catalog.typelem)
         ?.typescriptNamespacedName ?? "void"
     }>
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
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
