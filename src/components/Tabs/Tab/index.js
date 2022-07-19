import MuiTab from "@mui/material/Tab";

const Tab = (props) => {
  return <MuiTab {...props}>{props.children}</MuiTab>;
};

export default Tab;
