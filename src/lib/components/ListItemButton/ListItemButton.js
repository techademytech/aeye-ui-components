import React from "react";
import MuiListItemButton from "@mui/material/ListItemButton";

function ListItemButton(props) {
  return <MuiListItemButton {...props}>{props?.children}</MuiListItemButton>;
}

export default ListItemButton;
