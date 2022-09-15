import React from "react";
import MuiCardMedia from "@mui/material/CardMedia";

function CardMedia(props) {
  return <MuiCardMedia {...props}>{props?.children}</MuiCardMedia>;
}

export default CardMedia;
