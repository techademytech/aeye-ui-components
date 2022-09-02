import React from "react";
import MuiListItemAvatar from "@mui/material/ListItemAvatar";

function ListItemAvatar(props) {
  return <MuiListItemAvatar {...props}>{props?.children}</MuiListItemAvatar>;
}

export default ListItemAvatar;
