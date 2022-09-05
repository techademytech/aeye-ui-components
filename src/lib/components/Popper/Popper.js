import React from "react";
import MuiPopper from "@mui/material/Popper";

function Popper(props) {
  return <MuiPopper {...props}>{props?.children}</MuiPopper>;
}

export default Popper;
