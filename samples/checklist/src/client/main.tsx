import { App } from "./app";
import { EmbraceSQLClient, EmbraceSQLProvider } from "./checklist-react";
import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import * as ReactDOM from "react-dom/client";

// connect to where we mounted EmbraceSQL in our server
const client = new EmbraceSQLClient({
  url: `${window.location.href}embracesql`,
});

const theme = createTheme({});

// whole application is wrapped in a provider to allow data access in any component
// the main layout is the default theme and a nice center column
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <EmbraceSQLProvider client={client}>
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box sx={{ height: "100vh" }}>
          <App />
        </Box>
      </Container>
    </ThemeProvider>
  </EmbraceSQLProvider>,
);
