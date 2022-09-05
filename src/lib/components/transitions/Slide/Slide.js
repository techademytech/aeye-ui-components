import React from "react";
import MuiSlide from "@mui/material/Slide";

function Slide(props) {
  return <MuiSlide {...props}>{props?.children}</MuiSlide>;
}

export default Slide;
