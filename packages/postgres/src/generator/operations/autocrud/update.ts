import { GenerationContext } from "../..";
import { PGTable } from "../../pgtype/pgtable";
import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { TableIndexOperation, TableIndexOperations } from "../table";
import { pascalCase } from "change-case";

/**
 * AutoCRUD updates by index for a table.
 */
export class UpdateOperations extends TableIndexOperations {
  constructor(public table: PGTable) {
    super(table, UpdateOperation);
  }
}

class UpdateOperation extends TableIndexOperation {
  typescriptValuesType(context: GenerationContext) {
    const table = context.database.resolveTable(this.table.table.tabletypeoid)!;
    return `Partial<${table.typescriptNamespacedName}.Record>`;
  }

  dispatchName(context: GenerationContext): string {
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    return `${namespace?.typescriptName}.${
      this.table.typescriptName
    }.update${pascalCase(this.index.typescriptName)}`;
  }

  typescriptDefinition(context: GenerationContext): string {
    const generationBuffer = [""];
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const parameters = `parameters: ${this.typescriptParametersType(
      context,
    )}, values: ${this.typescriptValuesType(context)}`;

    generationBuffer.push(
      `async update${pascalCase(
        this.index.typescriptName,
      )}(${parameters}): ${this.typescriptReturnType(context)}{`,
    );
    generationBuffer.push(
      `
      console.assert(parameters);
      console.assert(values);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
    );
    // query using postgres driver bindings to the index
    const sql = `UPDATE ${
      tableType.postgresName
    } SET ${this.table.sqlSetExpressions(
      context,
      "values",
    )} WHERE ${this.index.sqlPredicate(context)} RETURNING ${
      tableType.sqlColumns
    }`;
    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      this.typescriptTableReturnStatementsFromResponse(context),
    );

    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  }
}
