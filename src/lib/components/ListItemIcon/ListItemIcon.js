import React from "react";
import MuiListItemIcon from "@mui/material/ListItemIcon";

function ListItemIcon(props) {
  return <MuiListItemIcon {...props}>{props?.children}</MuiListItemIcon>;
}

export default ListItemIcon;
