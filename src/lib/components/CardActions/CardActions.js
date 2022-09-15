import React from "react";
import MuiCardActions from "@mui/material/CardActions";

function CardActions(props) {
  return <MuiCardActions {...props}>{props?.children}</MuiCardActions>;
}

export default CardActions;
