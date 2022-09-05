import React from "react";
import MuiTable from "@mui/material/Table";

function Table(props) {
  return <MuiTable {...props}>{props?.children}</MuiTable>;
}

export default Table;
