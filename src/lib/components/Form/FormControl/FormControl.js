import React from "react";
import MuiFormControl from "@mui/material/FormControl";

function FormControl(props) {
  return <MuiFormControl {...props}>{props.children}</MuiFormControl>;
}

export default FormControl;
