import React from "react";
import MuiToolbar from "@mui/material/Toolbar";

function Toolbar(props) {
  return <MuiToolbar {...props}>{props?.children}</MuiToolbar>;
}

export default Toolbar;
