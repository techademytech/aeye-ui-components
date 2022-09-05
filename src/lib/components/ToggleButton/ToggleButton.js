import React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";

function ToggleButton(props) {
  return <MuiToggleButton {...props}>{props?.children}</MuiToggleButton>;
}

export default ToggleButton;
