import { IndexRow } from "../../context";
import { PGTypeComposite } from "./pgtypecomposite";
import { pascalCase } from "change-case";

/**
 * Table and composite types have attributes, or as they are called
 * in real life -- columns.
 *
 */
export class PGIndex {
  constructor(
    public onType: PGTypeComposite,
    public index: IndexRow,
  ) {}

  get typescriptName() {
    return pascalCase(this.index.attributes.map((a) => a.attname).join("_"));
  }
}
