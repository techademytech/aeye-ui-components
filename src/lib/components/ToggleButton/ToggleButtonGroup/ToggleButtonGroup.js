import React from "react";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ToggleButtonGroup(props) {
  return <MuiToggleButtonGroup {...props}>{props?.children}</MuiToggleButtonGroup>;
}

export default ToggleButtonGroup;
