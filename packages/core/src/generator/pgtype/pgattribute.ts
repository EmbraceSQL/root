import { AttributeRow, Context } from "../../context";
import { PGTypeComposite } from "./pgtypecomposite";

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

  type(context: Context) {
    return context.resolveType(this.attribute.atttypid);
  }
}
