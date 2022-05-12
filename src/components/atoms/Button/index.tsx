import React from "react";
import { Button as ButtonCore, ButtonProps } from "@mui/material";

const Button = (props: ButtonProps) => {
  return <ButtonCore {...props}>{props.children}</ButtonCore>;
};
export default Button;
