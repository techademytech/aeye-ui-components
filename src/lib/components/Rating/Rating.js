import React from "react";
import MuiRating from "@mui/material/Rating";

const Rating = (props) => {
  return <MuiRating {...props}>{props?.children}</MuiRating>;
};

export default Rating;
