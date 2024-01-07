import { Checklists } from "./checklists";
import { Box } from "@mui/material";

/**
 * Our simple application, controls our view transitions.
 */
export function App() {
  return (
    <Box sx={{ height: "100%" }}>
      <Checklists />
    </Box>
  );
}
