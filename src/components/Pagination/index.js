import MuiPagination from "@mui/material/Pagination";

function Pagination(props) {
  return <MuiPagination {...props}>{props.children}</MuiPagination>;
}

export default Pagination;
