import { Context, IndexRow } from "../../context";
import { PGAttribute } from "./pgattribute";
import { PGTypeComposite } from "./pgtypecomposite";
import { pascalCase } from "change-case";

/**
 * Table and composite types have attributes, or as they are called
 * in real life -- columns.
 *
 */
export class PGIndex {
  attributes: PGAttribute[];
  constructor(
    public onType: PGTypeComposite,
    public index: IndexRow,
  ) {
    this.attributes = index.attributes.map((a) => new PGAttribute(onType, a));
  }

  get typescriptName() {
    return `${this.onType.typescriptName}By${pascalCase(
      this.index.attributes.map((a) => a.attname).join("_"),
    )}`;
  }

  typescriptTypeDefinition(context: Context) {
    const namedValues = this.attributes.map(
      (a) => `${a.typescriptName}: ${a.typescriptTypeDefinition(context)} ;`,
    );
    return `
    export interface ${this.typescriptName}  {
      ${namedValues.join("\n")}
    };
    `;
  }
}
