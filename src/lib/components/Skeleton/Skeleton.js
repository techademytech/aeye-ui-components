import React from "react";
import MuiSkeleton from "@mui/material/Skeleton";

function Skeleton(props) {
  return <MuiSkeleton {...props}>{props?.children}</MuiSkeleton>;
}

export default Skeleton;
