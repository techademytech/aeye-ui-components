import MuiTextareaAutosize from "@mui/material/TextareaAutosize";

function TextArea(props) {
  return (
    <MuiTextareaAutosize {...props}>{props?.children}</MuiTextareaAutosize>
  );
}

export default TextArea;
