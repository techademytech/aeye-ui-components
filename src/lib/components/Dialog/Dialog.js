import React from "react";
import MuiDialog from "@mui/material/Dialog";

function Dialog(props) {
  return <MuiDialog {...props}>{props?.children}</MuiDialog>;
}

export default Dialog;
