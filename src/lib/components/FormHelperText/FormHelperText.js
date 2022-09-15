import React from "react";
import MuiFormHelperText from "@mui/material/FormHelperText";

function FormHelperText(props) {
  return <MuiFormHelperText {...props}>{props?.children}</MuiFormHelperText>;
}

export default FormHelperText;
