import MuiMenuItem from "@mui/material/MenuItem";

function MenuItem(props) {
  return <MuiMenuItem {...props}>{props.children}</MuiMenuItem>;
}

export default MenuItem;
