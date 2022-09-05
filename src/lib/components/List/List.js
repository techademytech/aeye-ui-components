import React from "react";
import MuiList from "@mui/material/List";

function List(props) {
  return <MuiList {...props}>{props?.children}</MuiList>;
}

export default List;
