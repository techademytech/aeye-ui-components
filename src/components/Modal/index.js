import MuiModal from "@mui/material/Modal";

function Modal(props) {
  return <MuiModal {...props}>{props.children}</MuiModal>;
}

export default Modal;
