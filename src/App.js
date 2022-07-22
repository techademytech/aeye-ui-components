import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "./lib/components/Button";
import Autocomplete from "./lib/components/Autocomplete";
import TextField from "./lib/components/TextField";
import FormGroup from "./lib/components/Form/FormGroup";
import FormControlLabel from "./lib/components/Form/FormControlLabel";
import FormControl from "./lib/components/Form/FormControl";
import FormLabel from "./lib/components/Form/FormLabel";
import Checkbox from "./lib/components/Checkbox";
import RadioGroup from "./lib/components/RadioGroup";
import Radio from "./lib/components/RadioGroup/Radio";
import MenuItem from "./lib/components/Menu/MenuItem";
import Select from "./lib/components/Select";
import InputLabel from "./lib/components/Input/InputLabel";
import Switch from "./lib/components/Switch";
import Avatar from "./lib/components/Avatar";
import Badge from "./lib/components/Badge";
import Chip from "./lib/components/Chip";
import Divider from "./lib/components/Divider";
import DataGrid from "./lib/components/DataGrid";
import Tooltip from "./lib/components/Tooltip";
import Accordion from "./lib/components/Accordion";
import AccordionSummary from "./lib/components/Accordion/AccordionSummary";
import AccordionDetails from "./lib/components/Accordion/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "./lib/components/Card";
import Modal from "./lib/components/Modal";
import Pagination from "./lib/components/Pagination";
import Stepper from "./lib/components/Stepper";
import Step from "./lib/components/Stepper/Step";
import StepLabel from "./lib/components/Stepper/StepLabel";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "./lib/components/Tabs";
import Tab from "./lib/components/Tabs/Tab";
import TextArea from "./lib/components/TextArea";
import DatePicker from "./lib/components/Date";
import CircularProgress from "./lib/components/Progress/CircularProgress";
import LinearProgress from "./lib/components/Progress/LinearProgress";
import Menu from "./lib/components/Menu";
import Breadcrumbs from "./lib/components/Breadcrumbs";
import Link from "./lib/components/Link";
import Backdrop from "./lib/components/Backdrop";
import MiniDrawer from "./MiniDrawer";
import { red, blue, brown, green } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeRP = createTheme({
  palette: {
    primary: { main: red[500] },
    secondary: { main: green[500] },
    type: "dark",
  },
});

const themeBB = createTheme({
  palette: {
    primary: { main: brown[500] },
    secondary: { main: blue[500] },
    type: "dark1",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "Print",
    renderCell: (cellValues) => {
      return (
        <Tooltip title={cellValues.row.id}>
          <span>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                console.log(cellValues.row.age);
              }}
            >
              {cellValues.row.id}
            </Button>
          </span>
        </Tooltip>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const data = [
  { label: "The Redemption", id: 1 },
  { label: "The Godfather", id: 2 },
  { label: "The Godfather: Part II", id: 3 },
];

const style = {
  position: "absolute",
  padding: 20,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

function App(props) {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [bdopen, bdSetOpen] = useState(false);
  const [theme, setTheme] = useState(true);
  const [value, setValue] = useState(0);
  const [dateValue, setDateValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const isStepFailed = (step) => {
    return step === 1;
  };

  const handleToggle = () => {
    bdSetOpen(true);
    setTimeout(() => bdSetOpen(false), 3000);
  };

  return (
    <>
      <ThemeProvider theme={theme ? themeRP : themeBB}>
        <Box sx={{ display: "flex" }}>
          <MiniDrawer />

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={theme}
                  onChange={() => setTheme(!theme)}
                  name="gilad"
                />
              }
              label="Theme"
            />
          </FormGroup>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: (theme) => theme.palette.secondary.main,
            }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={data}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button>Primary</Button>
            <Button color="secondary">secondary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Disabled"
              />
            </FormGroup>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup defaultValue="female" name="radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Label"
              />
            </FormGroup>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="standard"
            />

            <div
              role="presentation"
              onClick={(event) => {
                console.info("You clicked a breadcrumb.");
              }}
            >
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/MUI">
                  MUI
                </Link>
                <Link underline="hover" color="inherit" href="/Core">
                  Core
                </Link>
                <Link underline="hover" color="inherit" href="/CoreNew">
                  CoreNew
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
              </Breadcrumbs>
            </div>

            <Avatar>AG</Avatar>
            <Divider />
            <Avatar>OP</Avatar>
            <Divider variant="middle" />
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar>MY</Avatar>
            </StyledBadge>

            <Chip
              label="Clickable"
              variant="outlined"
              onClick={() => {}}
              onDelete={() => {}}
            />

            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                pagination
                multiple
                onCellClick={(event) => {
                  console.log(event);
                }}
                onSelectionModelChange={(event) => {
                  console.log(event);
                }}
              />
            </div>

            <Tooltip title="I am Tooltip">
              <span style={{ fontSize: 40 }}>Tooltip</span>
            </Tooltip>

            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
            <span>
              <Card
                style={{ width: 200, height: 300, margin: 20, padding: 20 }}
              >
                <Box>
                  Supplemental actions within the card are explicitly called out
                  using icons, text, and UI controls, typically placed at the
                  bottom of the card. Here's an example of a media control card.
                </Box>
              </Card>
            </span>

            <div>
              <Button
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                Open Menu
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </div>

            <div>
              <Button onClick={handleOpen}>Open modal</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div style={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Text in a modalText in a modalText in a modalText in a
                    modalText in a modal
                  </Typography>
                </div>
              </Modal>
            </div>
            <Pagination count={10} />
            <div sx={{ width: "100%" }}>
              <Stepper activeStep={1}>
                {steps.map((label, index) => {
                  const labelProps = {};
                  if (isStepFailed(index)) {
                    labelProps.optional = (
                      <Typography variant="caption" color="error">
                        Alert message
                      </Typography>
                    );

                    labelProps.error = true;
                  }

                  return (
                    <Step key={label}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </Box>
            </div>
            <TextArea
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 200 }}
            ></TextArea>
            <DatePicker
              label="Basic example"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />

            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
              <CircularProgress variant="determinate" value={25} />
            </Box>
            <div>
              <Button onClick={handleToggle}>Show backdrop</Button>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={bdopen}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
