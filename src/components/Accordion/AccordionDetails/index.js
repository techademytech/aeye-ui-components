import MuiAccordionDetails from "@mui/material/AccordionDetails";

function AccordionDetails(props) {
  return (
    <MuiAccordionDetails {...props}>{props?.children}</MuiAccordionDetails>
  );
}
export default AccordionDetails;
