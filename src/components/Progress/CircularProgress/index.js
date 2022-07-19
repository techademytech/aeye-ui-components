import MuiCircularProgress from "@mui/material/CircularProgress";

function CircularProgress(props) {
  return <MuiCircularProgress {...props}>{props.children}</MuiCircularProgress>;
}

export default CircularProgress;
