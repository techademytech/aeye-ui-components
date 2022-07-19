import MuiAccordion from "@mui/material/Accordion";

export default function Accordions(props) {
  return <MuiAccordion {...props}>{props.children}</MuiAccordion>;
}
