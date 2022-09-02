import React from "react";
import MuiSlider from "@mui/material/Slider";

const Slider = (props) => {
  return <MuiSlider {...props}>{props?.children}</MuiSlider>;
};

export default Slider;
