import MuiChip from "@mui/material/Chip";

function Chip(props) {
  return <MuiChip {...props}>{props?.children}</MuiChip>;
}

export default Chip;
