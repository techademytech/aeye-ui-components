import React from "react";
import MuiTypography from "@mui/material/Typography";

function Typography(props) {
  return <MuiTypography {...props}>{props?.children}</MuiTypography>;
}

export default Typography;
