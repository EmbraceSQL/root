import { Public } from "./checklist-react";
import { HasRowNumber } from "@embracesql/react";
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
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

/**
 * A data grid displaying data bound to to the `checklist` table
 * via EmbraceSQL.
 */
export function Checklists() {
  // fetching data is a one call
  const { results, addRow, updateRow, deleteRow } =
    Public.Tables.Checklist.useRows();

  // config for the MUI grid, here just showing the columns with user data,
  // hiding the keys, and row level action buttons
  const columns: GridColDef<Public.Tables.Checklist.Record>[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 4,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created",
      flex: 1,
      // doesn't really make sense to edit a create date
      // this will show us how values defaulted from the database
      editable: false,
    },
    {
      // action buttons in each row
      field: "actions",
      type: "actions",
      headerName: "",
      getActions: (gridRow) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() =>
              void deleteRow(
                (gridRow.row as unknown as HasRowNumber).rowNumberInResultset,
              )
            }
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <DataGrid
      columns={columns}
      rows={results}
      slots={{
        toolbar: Toolbar,
      }}
      slotProps={{
        toolbar: { handleClick: addRow },
      }}
      getRowId={(row) => {
        // the MUI grid requires an 'id' for each row
        // but -- our new rows won't have an id yet, becuase they are blank
        // and the database will be allocating the UUID - so we'll just make
        // MUI happy by providing a row in resultset identifier
        return (row as unknown as HasRowNumber).rowNumberInResultset ?? 0;
      }}
      processRowUpdate={async (updatedRow, originalRow) => {
        // when you are done editing a row, it is time to save it
        // simply pass the now complete row to the hook
        return updateRow(
          (originalRow as unknown as HasRowNumber).rowNumberInResultset,
          updatedRow,
        );
      }}
    ></DataGrid>
  );
}
