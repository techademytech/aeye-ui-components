import MuiMenu from "@mui/material/Menu";

function Menu(props) {
  return <MuiMenu {...props}>{props.children}</MuiMenu>;
}

export default Menu;
