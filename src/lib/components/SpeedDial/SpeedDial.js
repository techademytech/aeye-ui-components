import React from "react";
import MuiSpeedDial from "@mui/material/SpeedDial";

function SpeedDial(props) {
  return <MuiSpeedDial {...props}>{props?.children}</MuiSpeedDial>;
}

export default SpeedDial;
