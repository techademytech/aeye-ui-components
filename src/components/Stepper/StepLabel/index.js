import MuiStepLabel from "@mui/material/StepLabel";

export default function StepLabel(props) {
  return <MuiStepLabel {...props}>{props.children}</MuiStepLabel>;
}
