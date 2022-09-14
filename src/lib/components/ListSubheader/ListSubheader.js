import React from "react";
import MuiListSubheader from "@mui/material/ListSubheader";

function ListSubheader(props) {
  return <MuiListSubheader {...props}>{props?.children}</MuiListSubheader>;
}

export default ListSubheader;
