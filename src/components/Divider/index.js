import MuiDivider from "@mui/material/Divider";

function Divider(props) {
  return <MuiDivider {...props}>{props?.children}</MuiDivider>;
}

export default Divider;
