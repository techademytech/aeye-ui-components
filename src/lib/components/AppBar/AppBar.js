import React from "react";
import MuiAppBar from "@mui/material/AppBar";

function AppBar(props) {
  return <MuiAppBar {...props}>{props?.children}</MuiAppBar>;
}

export default AppBar;
