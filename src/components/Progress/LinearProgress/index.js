import MuiLinearProgress from "@mui/material/LinearProgress";

function LinearProgress(props) {
  return <MuiLinearProgress {...props}>{props.children}</MuiLinearProgress>;
}

export default LinearProgress;
