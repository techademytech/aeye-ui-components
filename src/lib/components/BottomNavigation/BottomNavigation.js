import React from "react";
import MuiBottomNavigation from "@mui/material/BottomNavigation";

function BottomNavigation(props) {
  return <MuiBottomNavigation {...props}>{props?.children}</MuiBottomNavigation>;
}

export default BottomNavigation;
