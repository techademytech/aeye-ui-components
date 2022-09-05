import React from "react";
import MuiDialogTitle from "@mui/material/DialogTitle";

function DialogTitle(props) {
  return <MuiDialogTitle {...props}>{props?.children}</MuiDialogTitle>;
}

export default DialogTitle;
