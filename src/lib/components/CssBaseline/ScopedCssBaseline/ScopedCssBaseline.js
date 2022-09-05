import React from "react";
import MuiScopedCssBaseline from "@mui/material/ScopedCssBaseline";

function ScopedCssBaseline(props) {
  return <MuiScopedCssBaseline {...props}>{props?.children}</MuiScopedCssBaseline>;
}

export default ScopedCssBaseline;
