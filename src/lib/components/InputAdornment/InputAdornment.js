import React from "react";
import MuiInputAdornment from "@mui/material/InputAdornment";

function InputAdornment(props) {
  return <MuiInputAdornment {...props}>{props?.children}</MuiInputAdornment>;
}

export default InputAdornment;
