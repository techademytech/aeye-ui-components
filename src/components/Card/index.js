import MuiCard from "@mui/material/Card";

export default function Card(props) {
  return <MuiCard {...props}>{props.children}</MuiCard>;
}
