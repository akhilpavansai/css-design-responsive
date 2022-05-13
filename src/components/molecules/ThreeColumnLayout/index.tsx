import { styled } from "@mui/material";
import React from "react";
const AppBar = styled("div")({
  background: "#F5E1FD",
  border: "10px solid #8A2BE2",
  boxSizing: "border-box",
  minHeight: "100px",
});
const OuterContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1.78fr 4.22fr",
});
const Menu = styled("div")({
  background: "#90EE90",
  border: "10px solid green",
  boxSizing: "border-box",
  height: "600px",
});
const Content = styled("div")({
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
