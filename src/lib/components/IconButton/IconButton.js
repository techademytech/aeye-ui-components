import React from "react";
import MuiIconButton from "@mui/material/IconButton";

function IconButton(props) {
  return <MuiIconButton {...props}>{props?.children}</MuiIconButton>;
}

export default IconButton;
