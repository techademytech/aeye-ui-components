import { Radio as MuiRadio } from "@mui/material";

function Radio(props) {
  return <MuiRadio {...props}>{props.children}</MuiRadio>;
}

export default Radio;
