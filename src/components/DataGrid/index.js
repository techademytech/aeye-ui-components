import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

function DataGrid(props) {
  return <MuiDataGrid {...props}>{props?.children}</MuiDataGrid>;
}

export default DataGrid;
