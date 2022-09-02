import React from "react";
import MuiAlert from "@mui/material/Alert";

function Alert(props) {
  return <MuiAlert {...props}>{props?.children}</MuiAlert>;
}

export default Alert;
