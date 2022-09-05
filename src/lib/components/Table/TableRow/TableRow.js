import React from "react";
import MuiTableRow from "@mui/material/TableRow";

function TableRow(props) {
  return <MuiTableRow {...props}>{props?.children}</MuiTableRow>;
}

export default TableRow;
