import React from "react";
import MuiImageListItem from '@mui/material/ImageListItem';

function ImageListItem(props) {
  return <MuiImageListItem {...props}>{props?.children}</MuiImageListItem>;
}

export default ImageListItem;
