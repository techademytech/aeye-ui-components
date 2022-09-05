import React from "react";
import MuiFab from "@mui/material/Fab";

const Fab = (props) => {
  return <MuiFab {...props}>{props?.children}</MuiFab>;
};

export default Fab;
