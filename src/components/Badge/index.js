import MuiBadge from "@mui/material/Badge";

function Badge(props) {
  return <MuiBadge {...props}>{props?.children}</MuiBadge>;
}

export default Badge;
