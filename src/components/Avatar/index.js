import MuiAvatar from "@mui/material/Avatar";

function Avatar(props) {
  return <MuiAvatar {...props}>{props?.children}</MuiAvatar>;
}

export default Avatar;
