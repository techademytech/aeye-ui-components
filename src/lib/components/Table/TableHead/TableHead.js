import React from "react";
import MuiTableHead from "@mui/material/TableHead";

function TableHead(props) {
  return <MuiTableHead {...props}>{props?.children}</MuiTableHead>;
}

export default TableHead;
