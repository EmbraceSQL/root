import { DataGrid, GridColDef } from "@mui/x-data-grid";

/**
 * A data grid displaying data bound to to the `checklist` table
 * via EmbraceSQL.
 */
export function Checklists() {
  // config for the MUI grid, here just showing the columns with user data
  // and hiding the keys
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 4,
    },
    {
      field: "created_at",
      headerName: "Created",
      flex: 1,
      // doesn't really make sense to edit a create date
      // this will show us how values defaulted from the database
      editable: false,
    },
  ];
  return <DataGrid columns={columns} rows={[]}></DataGrid>;
}
