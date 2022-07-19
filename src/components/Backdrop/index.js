import MuiBackDrop from "@mui/material/Backdrop";

export default function Backdrop(props) {
  return <MuiBackDrop {...props}>{props.children}</MuiBackDrop>;
}
