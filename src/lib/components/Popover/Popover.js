import React from "react";
import MuiPopover from "@mui/material/Popover";

function Popover(props) {
  return <MuiPopover {...props}>{props?.children}</MuiPopover>;
}

export default Popover;
