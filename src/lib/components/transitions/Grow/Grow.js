import React from "react";
import MuiGrow from "@mui/material/Grow";

function Grow(props) {
  return <MuiGrow {...props}>{props?.children}</MuiGrow>;
}

export default Grow;
