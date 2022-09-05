import React from "react";
import MuiTableCell from "@mui/material/TableCell";

function TableCell(props) {
  return <MuiTableCell {...props}>{props?.children}</MuiTableCell>;
}

export default TableCell;
