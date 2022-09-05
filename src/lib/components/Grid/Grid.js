import React from "react";
import MuiGrid from "@mui/material/Grid";

function Grid(props) {
  return <MuiGrid {...props}>{props?.children}</MuiGrid>;
}

export default Grid;
