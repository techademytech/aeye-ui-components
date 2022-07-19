import MuiSelect from "@mui/material/Select";

export default function Select(props) {
  return <MuiSelect {...props}>{props.children}</MuiSelect>;
}
