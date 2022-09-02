import React from "react";
import MuiPaper from "@mui/material/Paper";

function Paper(props) {
  return <MuiPaper {...props}>{props?.children}</MuiPaper>;
}

export default Paper;
