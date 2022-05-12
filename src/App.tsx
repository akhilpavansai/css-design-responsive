import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import TextBoxWithButton from "./components/molecules/TextBoxWithButton";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" align="center">
        CSS Responsive Design
      </Typography>
      <TextBoxWithButton />
    </ThemeProvider>
  );
}

export default App;
