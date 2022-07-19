import MuiTabs from "@mui/material/Tabs";

const Tabs = (props) => {
  return <MuiTabs {...props}>{props.children}</MuiTabs>;
};

export default Tabs;
