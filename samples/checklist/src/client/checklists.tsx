import { Public } from "./checklist-react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbarContainer,
} from "@mui/x-data-grid";

/**
 * Need a way to add some rows, here is a toolbar with an Add button.
 */
export function Toolbar({ handleClick = () => {} }) {
  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add
      </Button>
    </GridToolbarContainer>
  );
}

type Props = {
  // selection event, notice we can re-use the row type -- no need
  // for additional data models -- and if we happen to add columns to
  // the `checklist` table -- they will show up here automatically on regeneration!
  onChecklistSelected: (checklist: Public.Tables.Checklist.Row) => void;
};

/**
 * A data grid displaying data bound to to the `checklist` table via EmbraceSQL.
 */
export function Checklists({ onChecklistSelected }: Props) {
  // fetching data is a one call, using the client database connection via context
  const { rows, addRow, updateRow, deleteRow } =
    Public.Tables.Checklist.useRows();

  // config for the MUI grid, here just showing the columns with user data,
  // hiding the id key, and row level action buttons
  const columns: GridColDef<Public.Tables.Checklist.Row>[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      // here is what you are really editing in the grid
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created",
      flex: 1,
      // doesn't really make sense to edit a create date
      // this will show us how values defaulted from the database
      editable: false,
      type: "date",
    },
    {
      // action buttons in each row
      field: "actions",
      type: "actions",
      headerName: "",
      getActions: (gridRow) => {
        // deleting a row from the hooked rows is just - pass the row number
        // the in memory update is processed in React as well as in the database
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              // deleting is just -- pass the row number you want to delete to the hook
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
        toolbar: Toolbar,
      }}
      slotProps={{
        toolbar: { handleClick: addRow },
      }}
      onRowClick={(params) => {
        // row click even turns into a checklist selection
        // notice how the types line up nicely
        onChecklistSelected(params.row);
      }}
      getRowId={(row) => {
        // The MUI grid requires an 'id' for each row
        // but -- our new rows won't have an id yet, becuase they are blank!
        // And to top it off the database will be allocating the UUID -
        // so this makes using 'the database key' impossible.
        // So we provide a nice row number as a 'unique' identifier for the UI
        // Think UI Grid -> in memory array of rows -> database table
        return row.rowNumberInResultset;
      }}
      processRowUpdate={async (updatedRow, originalRow) => {
        // when you are done editing a row, it is time to save it
        // simply pass the now complete row to the hook
        return await updateRow(originalRow.rowNumberInResultset, updatedRow);
      }}
    ></DataGrid>
  );
}
