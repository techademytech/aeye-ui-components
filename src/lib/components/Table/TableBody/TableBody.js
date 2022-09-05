import React from "react";
import MuiTableBody from "@mui/material/TableBody";

function TableBody(props) {
  return <MuiTableBody {...props}>{props?.children}</MuiTableBody>;
}

export default TableBody;
