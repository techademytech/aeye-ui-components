import MuiRadioGroup from "@mui/material/RadioGroup";

export default function RadioGroup(props) {
  return <MuiRadioGroup {...props}>{props.children}</MuiRadioGroup>;
}
