import React from "react";
import MuiZoom from "@mui/material/Zoom";

function Zoom(props) {
  return <MuiZoom {...props}>{props?.children}</MuiZoom>;
}

export default Zoom;
