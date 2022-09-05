import React from "react";
import MuiButtonGroup from "@mui/material/ButtonGroup";

const ButtonGroup = (props) => {
  return <MuiButtonGroup {...props}>{props?.children}</MuiButtonGroup>;
};

export default ButtonGroup;
