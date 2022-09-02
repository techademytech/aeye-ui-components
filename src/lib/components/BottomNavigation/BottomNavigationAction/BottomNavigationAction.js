import React from "react";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";

function BottomNavigationAction(props) {
  return <MuiBottomNavigationAction {...props}>{props?.children}</MuiBottomNavigationAction>;
}

export default BottomNavigationAction;
