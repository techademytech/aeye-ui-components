import React from "react";
import MuiCardHeader from "@mui/material/CardHeader";

function CardHeader(props) {
  return <MuiCardHeader {...props}>{props?.children}</MuiCardHeader>;
}

export default CardHeader;
