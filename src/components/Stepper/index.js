import MuiStepper from "@mui/material/Stepper";

export default function Stepper(props) {
  return <MuiStepper {...props}>{props.children}</MuiStepper>;
}
