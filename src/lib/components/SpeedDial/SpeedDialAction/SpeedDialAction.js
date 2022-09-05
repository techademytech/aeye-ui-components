import React from "react";
import MuiSpeedDialAction from "@mui/material/SpeedDialAction";

function SpeedDialAction(props) {
  return <MuiSpeedDialAction {...props}>{props?.children}</MuiSpeedDialAction>;
}

export default SpeedDialAction;
