import MuiTooltip from "@mui/material/Tooltip";

const Tooltip = (props) => {
  return <MuiTooltip {...props}>{props.children}</MuiTooltip>;
};

export default Tooltip;
