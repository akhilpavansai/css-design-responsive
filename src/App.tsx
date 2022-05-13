import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import TextBoxWithButton from "./components/molecules/TextBoxWithButton";
import theme from "./theme";
import ThreeColumnLayout from "./components/molecules/ThreeColumnLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" align="center">
        CSS Responsive Design
      </Typography>
      {/* <TextBoxWithButton /> */}
      <ThreeColumnLayout />
    </ThemeProvider>
  );
}

export default App;
