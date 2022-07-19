import MuiAccordionSummary from "@mui/material/AccordionSummary";

function AccordionSummary(props) {
  return (
    <MuiAccordionSummary {...props}>{props?.children}</MuiAccordionSummary>
  );
}
export default AccordionSummary;
