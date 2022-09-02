import React from "react";
import MuiListItem from "@mui/material/ListItem";

function ListItem(props) {
  return <MuiListItem {...props}>{props?.children}</MuiListItem>;
}

export default ListItem;
