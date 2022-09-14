import React from "react";
import MuiDialogActions from "@mui/material/DialogActions";

function DialogActions(props) {
  return <MuiDialogActions {...props}>{props?.children}</MuiDialogActions>;
}

export default DialogActions;
