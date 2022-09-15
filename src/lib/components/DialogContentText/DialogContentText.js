import React from "react";
import MuiDialogContentText from "@mui/material/DialogContentText";

function DialogContentText(props) {
  return <MuiDialogContentText {...props}>{props?.children}</MuiDialogContentText>;
}

export default DialogContentText;
