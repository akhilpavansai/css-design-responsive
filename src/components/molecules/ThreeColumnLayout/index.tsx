import { styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";

const HeadingContainer = styled("div")({
  background: "blue",
  width: "100%",
  minHeight: "100px",
  marginBottom: "10px",
});
const ContainersHolder = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});
const Container1 = styled("div")({
  background: "green",
  width: "100%",
  minHeight: "500px",
  flex: 1 / 5,
  [theme.breakpoints.down("md")]: {
    flex: "none",
    minHeight: "0px",
    height: "200px",
  },
});
const Container2 = styled("div")({
  background: "red",
  width: "100%",
  minHeight: "500px",
  flex: 3 / 5,
  [theme.breakpoints.down("md")]: {
    flex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    flex: "none",
  },
});
const Container3 = styled("div")({
  background: "orange",
  width: "100%",
  minHeight: "500px",
  flex: 1 / 5,
  [theme.breakpoints.down("md")]: {
    flex: 1,
  },
});
const ThreeColumnLayout = () => {
  return (
    <>
      <HeadingContainer />
      <ContainersHolder>
        <Container1 />
        <Container2 />
        <Container3 />
      </ContainersHolder>
    </>
  );
};

export default ThreeColumnLayout;
