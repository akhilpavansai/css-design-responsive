import { styled } from "@mui/material";
import React from "react";
const AppBar = styled("div")({
  background: "#F5E1FD",
  border: "10px solid #8A2BE2",
  boxSizing: "border-box",
  minHeight: "100px",
});
const Menu = styled("div")({
  display: "inline-block",
  background: "#90EE90",
  border: "10px solid green",
  boxSizing: "border-box",
  height: "600px",
  width: "30%",
});
const Content = styled("div")({
  display: "inline-block",
  background: "#FFFBC8",
  border: "10px solid blue",
  boxSizing: "border-box",
  minHeight: "600px",
  width: "70%",
});
const index = () => {
  return (
    <>
      <AppBar />
      <Menu />
      <Content />
    </>
  );
};

export default index;
