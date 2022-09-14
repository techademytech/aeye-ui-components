import React from "react";
import MuiCardActionArea from "@mui/material/CardActionArea";

function CardActionArea(props) {
  return <MuiCardActionArea {...props}>{props?.children}</MuiCardActionArea>;
}

export default CardActionArea;
