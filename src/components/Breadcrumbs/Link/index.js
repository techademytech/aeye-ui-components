import MuiLink from "@mui/material/Link";

export default function Link(props) {
  return <MuiLink {...props}>{props.children}</MuiLink>;
}
