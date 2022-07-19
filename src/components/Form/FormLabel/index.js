import React from "react";
import MuiFormLabel from "@mui/material/FormLabel";

function FormLabel(props) {
  return <MuiFormLabel {...props}>{props.children}</MuiFormLabel>;
}

export default FormLabel;
