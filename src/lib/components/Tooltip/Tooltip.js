import React from "react";
import MuiTooltip from "@mui/material/Tooltip";

function Tooltip(props) {
  return <MuiTooltip {...props}>{props?.children}</MuiTooltip>;
}

export default Tooltip;
