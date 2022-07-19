import MuiStep from "@mui/material/Step";

export default function Step(props) {
  return <MuiStep {...props}>{props.children}</MuiStep>;
}
