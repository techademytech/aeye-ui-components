import MuiCircularProgressWithLabel from "@mui/material/CircularProgressWithLabel";

function CircularProgressWithLabel(props) {
  return (
    <MuiCircularProgressWithLabel {...props}>
      {props.children}
    </MuiCircularProgressWithLabel>
  );
}

export default CircularProgressWithLabel;
