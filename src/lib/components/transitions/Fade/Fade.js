import React from "react";
import MuiFade from "@mui/material/Fade";

function Fade(props) {
  return <MuiFade {...props}>{props?.children}</MuiFade>;
}

export default Fade;
