import React from "react";
import MuiBox from "@mui/material/Box";

function Box(props) {
  return <MuiBox {...props}>{props?.children}</MuiBox>;
}

export default Box;
