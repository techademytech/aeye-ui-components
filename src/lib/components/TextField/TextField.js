import React from "react";
import MuiTextField from "@mui/material/TextField";

function TextField(props) {
  const { maxLength, ...otherProps } = props;
  return (
    <MuiTextField inputProps={{ maxLength: maxLength ? maxLength : 50 }} {...otherProps}>
      {props?.children}
    </MuiTextField>
  );
}

export default TextField;
