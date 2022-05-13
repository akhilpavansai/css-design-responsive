import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import ThreeColumnLayout from "./components/molecules/ThreeColumnLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" align="center">
        CSS Responsive Design
      </Typography>
      <ThreeColumnLayout />
    </ThemeProvider>
  );
}

export default App;
