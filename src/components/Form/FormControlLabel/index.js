import React from "react";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

function FormControlLabel(props) {
  return <MuiFormControlLabel {...props}>{props.children}</MuiFormControlLabel>;
}

export default FormControlLabel;
