import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

function DatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiDatePicker {...props} />
    </LocalizationProvider>
  );
}

export default DatePicker;
