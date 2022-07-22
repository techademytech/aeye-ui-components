import React from "react";
import MuiSwitch from "@mui/material/Switch";

function Switch(props) {
  return <MuiSwitch {...props}>{props.children}</MuiSwitch>;
}

export default Switch;
