import React from "react";
import MuiNoSsr from "@mui/material/NoSsr";

function NoSsr(props) {
  return <MuiNoSsr {...props}>{props?.children}</MuiNoSsr>;
}

export default NoSsr;
