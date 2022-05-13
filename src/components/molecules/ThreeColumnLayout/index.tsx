import { styled } from "@mui/material";
import React from "react";
const AppBar = styled("div")({
  background: "#F5E1FD",
  border: "10px solid #8A2BE2",
  boxSizing: "border-box",
  minHeight: "100px",
});
const OuterContainer = styled("div")({
  display: "flex",
});
const Menu = styled("div")({
  flex: 1.75 / 6,
  background: "#90EE90",
  border: "10px solid green",
  boxSizing: "border-box",
  height: "600px",
});
const Content = styled("div")({
  flex: 4.25 / 6,
  background: "#FFFBC8",
  border: "10px solid blue",
  boxSizing: "border-box",
  minHeight: "600px",
});
const index = () => {
  return (
    <>
      <AppBar />
      <OuterContainer>
        <Menu />
        <Content />
      </OuterContainer>
    </>
  );
};

export default index;
