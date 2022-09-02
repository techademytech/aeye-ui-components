import React from "react";
import MuiPortal from "@mui/material/Portal";

function Portal(props) {
  return <MuiPortal {...props}>{props?.children}</MuiPortal>;
}

export default Portal;
