import { Public } from "./checklist-react";
import { ChecklistItems } from "./checklistitems";
import { Checklists } from "./checklists";
import { Box, Stack } from "@mui/material";
import React from "react";

/**
 * Our simple application, controls our view transitions.
 */
export function App() {
  // our currently selected Checklist, let's use the row type from the database
  const [selectedChecklist, setSelectedChecklist] =
    React.useState<Public.Tables.Checklist.Row>();
  return (
    <Stack direction={"row"} spacing={1} sx={{ flex: 1 }}>
      <Box sx={{ flex: 1 }}>
        <Checklists
          onChecklistSelected={(checklist) => setSelectedChecklist(checklist)}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        {selectedChecklist ? (
          <ChecklistItems checklistId={selectedChecklist?.id} />
        ) : null}
      </Box>
    </Stack>
  );
}
