import React from "react";
import MuiStack from "@mui/material/Stack";

function Stack(props) {
  return <MuiStack {...props}>{props?.children}</MuiStack>;
}

export default Stack;
