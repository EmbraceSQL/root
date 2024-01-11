import { Public } from "./checklist-react";
import { Toolbar } from "./checklists";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";

type Props = {
  // we can use the exact type generated from the database complete with autocomplete
  // no need to 'keep types in sync' - just embrace the database!
  checklistId: Public.Tables.Checklist.Row["id"];
};

/**
 * A data grid displaying data bound to the `checklist_item` table via EmbraceSQL.
 */
export function ChecklistItems({ checklistId }: Props) {
  // data hooked to the checklist id
  const { rows, addRow, updateRow, deleteRow } =
    Public.Tables.ChecklistItem.useByChecklistId({ checklistId });

  // named items with a 'check off'
  const columns: GridColDef<Public.Tables.ChecklistItem.Row>[] = [
    {
      field: "checked",
      headerName: "✔",
      flex: 1,
      editable: true,
      type: "boolean",
    },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created",
      flex: 1,
      editable: false,
      type: "date",
    },
    {
      // action buttons in each row
      field: "actions",
      type: "actions",
      headerName: "",
      getActions: (gridRow) => {
        // deleting, just like in `Checklists`.
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              void deleteRow(gridRow.row.rowNumberInResultset);
            }}
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <DataGrid
      hideFooter={true}
      columns={columns}
      rows={rows}
      slots={{
        // re-use our toolbar from `Checklists`
        toolbar: Toolbar,
      }}
      slotProps={{
        toolbar: {
          // add a row via the hook -- EmbraceSQL will automatically parent
          // to the right checklistId because it knows that is how it
          // read the rows 🪄
          handleClick: addRow,
        },
      }}
      getRowId={(row) => {
        // MUI grid row level 'id' as in `Checklists`
        return row.rowNumberInResultset;
      }}
      processRowUpdate={async (updatedRow, originalRow) => {
        // save via the hook
        return await updateRow(originalRow.rowNumberInResultset, updatedRow);
      }}
    ></DataGrid>
  );
}
