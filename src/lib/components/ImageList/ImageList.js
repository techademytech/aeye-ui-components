import React from "react";
import MuiImageList from '@mui/material/ImageList';

function ImageList(props) {
  return <MuiImageList {...props}>{props?.children}</MuiImageList>;
}

export default ImageList;
