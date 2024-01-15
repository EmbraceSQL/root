import { Public } from "./checklist-react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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
  const { rows, addRow, deleteRow } =
    Public.Tables.ChecklistItem.useChecklistItemParent({ checklistId });

  return (
    // just a single editable text field -- EmbraceSQL has automatic saving
    // for text fields, debounced on change as the user types - values go
    // to the databse
    <Grid container spacing={1}>
      {rows.map((row) => {
        console.log(row);
        return (
          <Grid key={row.rowNumberInResultset} xs={12} container>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox
                checked={row.checked}
                onChange={row.changeChecked}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Grid>
            <Grid xs={10}>
              <TextField
                variant="standard"
                value={row.title}
                label={row.title ? " " : "Name your item..."}
                onChange={row.changeTitle}
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
