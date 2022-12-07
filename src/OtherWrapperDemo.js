import React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {
  Typography,
  Box,
  Button,
  IconButton,
  Divider,
  InputAdornment,
  FormControl,
  Input,
  InputLabel,
  Styles,
  TextField,
} from "./lib/components";

function OtherWrapperDemo() {
  const theme = Styles.useTheme();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleTextFiledChange = (event) => {
    console.log(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography variant="subtitle1">IconButton Demo</Typography>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="subtitle1">InputAdornment Demo</Typography>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="subtitle1">Text Filed Demo</Typography>
      <TextField
        className="qa-custom-setting-candidate-name-field"
        label="First Name"
        variant="standard"
        type="string"
        helperText={false && t("enter.valid.name")}
        sx={{
          width: 1,
          "& .MuiInputLabel-root.Mui-focused": {
            color: theme.palette.text.secondary,
          },
          pb: 4,
        }}
        maxLength={4}
        onChange={handleTextFiledChange}
      />
    </Box>
  );
}

export default OtherWrapperDemo;
