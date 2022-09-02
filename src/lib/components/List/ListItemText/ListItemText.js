import React from "react";
import MuiListItemText from "@mui/material/ListItemText";

function ListItemText(props) {
  return <MuiListItemText {...props}>{props?.children}</MuiListItemText>;
}

export default ListItemText;
