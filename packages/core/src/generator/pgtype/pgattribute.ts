import { AttributeRow, Context } from "../../context";
import { PGTypeComposite } from "./pgtypecomposite";
import { camelCase } from "change-case";

/**
 * Table and composite types have attributes, or as they are called
 * in real life -- columns.
 *
 */
export class PGAttribute {
  constructor(
    public onType: PGTypeComposite,
    public attribute: AttributeRow,
  ) {}

  get name() {
    return this.attribute.attname;
  }

  get typescriptName() {
    // camel case -- this is a 'property like'
    return `${camelCase(this.attribute.attname)}`;
  }

  typescriptTypeDefinition(context: Context) {
    // nullability, but otherwise delegate to the type of the attribute
    const underlyingType =
      context
        .resolveType(this.attribute.atttypid)
        ?.typescriptNameWithNamespace(context) ?? "void";
    if (this.attribute.attnotnull) {
      return underlyingType;
    } else {
      return `Nullable<${underlyingType}>`;
    }
  }
}
