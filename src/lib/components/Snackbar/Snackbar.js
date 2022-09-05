import React from "react";
import MuiSnackbar from "@mui/material/Snackbar";

function Snackbar(props) {
  return <MuiSnackbar {...props}>{props?.children}</MuiSnackbar>;
}

export default Snackbar;
