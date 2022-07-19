import MuiTextField from "@mui/material/TextField";

function TextField(props) {
  return <MuiTextField {...props}>{props?.children}</MuiTextField>;
}

export default TextField;
