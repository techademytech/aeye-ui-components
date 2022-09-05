import React from "react";
import MuiCssBaseline from "@mui/material/CssBaseline";

function CssBaseline(props) {
  return <MuiCssBaseline {...props}>{props?.children}</MuiCssBaseline>;
}

export default CssBaseline;
