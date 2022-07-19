import React from "react";
import MuiFormGroup from "@mui/material/FormGroup";

function FormGroup(props) {
  return <MuiFormGroup {...props}>{props.children}</MuiFormGroup>;
}

export default FormGroup;
