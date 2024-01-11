import { Public } from "./checklist-react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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
  const { rows, addRow, deleteRow } = Public.Tables.Checklist.useRows();

  return (
    // just a single editable text field -- EmbraceSQL has automatic saving
    // for text fields, debounced on change as the user types - values go
    // to the databse
    <Grid container spacing={1}>
      {rows.map((row) => {
        return (
          <Grid
            key={row.rowNumberInResultset}
            xs={12}
            container
            onClick={() => onChecklistSelected(row)}
          >
            <Grid xs={11}>
              <TextField
                variant="standard"
                value={row.name}
                label={row.name ? " " : "Name your list..."}
                onChange={row.changeName}
                fullWidth
                helperText={
                  row.createdAt
                    ? `Created: ${row.createdAt.toLocaleDateString()}`
                    : ` `
                }
              />
            </Grid>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => void deleteRow(row.rowNumberInResultset)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
      <Grid container>
        <Grid>
          <Button
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => void addRow()}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
