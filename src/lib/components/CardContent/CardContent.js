import React from "react";
import MuiCardContent from "@mui/material/CardContent";

function CardContent(props) {
  return <MuiCardContent {...props}>{props?.children}</MuiCardContent>;
}

export default CardContent;
