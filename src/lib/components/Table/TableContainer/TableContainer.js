import React from "react";
import MuiTableContainer from "@mui/material/TableContainer";

function TableContainer(props) {
  return <MuiTableContainer {...props}>{props?.children}</MuiTableContainer>;
}

export default TableContainer;
