import React from "react";
import MuiDialogContent from "@mui/material/DialogContent";

function DialogContent(props) {
  return <MuiDialogContent {...props}>{props?.children}</MuiDialogContent>;
}

export default DialogContent;
