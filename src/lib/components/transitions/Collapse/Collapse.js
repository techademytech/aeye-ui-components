import React from "react";
import MuiCollapse from "@mui/material/Collapse";

function Collapse(props) {
  return <MuiCollapse {...props}>{props?.children}</MuiCollapse>;
}

export default Collapse;
