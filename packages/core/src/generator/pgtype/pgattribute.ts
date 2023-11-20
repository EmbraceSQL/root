import { AttributeRow, Context } from "../../context";

/**
 * Table and composite types have attributes, or as they are called
 * in real life -- columns.
 *
 */
export class PGAttribute {
  constructor(public attribute: AttributeRow) {}

  get name() {
    return this.attribute.attname;
  }

  type(context: Context) {
    return context.resolveType(this.attribute.atttypid);
  }
}
