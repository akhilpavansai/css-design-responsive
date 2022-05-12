import React from "react";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import { Box, styled } from "@mui/material";
import theme from "../../../theme";
const ResponsiveBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  flex: "200px",
  width: "100%",
  padding: theme.spacing(10),
});
const TextBoxWithButton = () => {
  return (
    <ResponsiveBox>
      <TextField placeholder="transparency" size="small" />
      <Button
        variant="outlined"
        children="Search"
        size="large"
        sx={{
          fontWeight: "bold",
          margin: "10px",
          height: "50px",
        }}
      />
    </ResponsiveBox>
  );
};

export default TextBoxWithButton;
