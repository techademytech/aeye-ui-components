import React from "react";
import MuiInput from "@mui/material/Input";

function Input(props) {
  return <MuiInput {...props}>{props?.children}</MuiInput>;
}

export default Input;
