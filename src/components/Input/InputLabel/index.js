import MuiInputLabel from "@mui/material/InputLabel";

function InputLabel(props) {
  return <MuiInputLabel {...props}>{props.children}</MuiInputLabel>;
}

export default InputLabel;
