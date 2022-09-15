import React from "react";
import MuiListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

function ListItemSecondaryAction(props) {
  return <MuiListItemSecondaryAction {...props}>{props?.children}</MuiListItemSecondaryAction>;
}

export default ListItemSecondaryAction;
