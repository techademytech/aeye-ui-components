import React, { useState } from "react";
import CssBaseline from "./lib/components/CssBaseline";
import Slider from "./lib/components/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Fab from "./lib/components/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigateIcon from "@mui/icons-material/Navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Container from "./lib/components/Container";
import Grid from "./lib/components/Grid";
import Stack from "./lib/components/Stack";
import Paper from "./lib/components/Paper";
import Button from "./lib/components/Button";
import ButtonGroup from "./lib/components/Button/ButtonGroup";
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
import Typography from "./lib/components/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "./lib/components/Card";
import Modal from "./lib/components/Modal";
import Pagination from "./lib/components/Pagination";
import Stepper from "./lib/components/Stepper";
import Step from "./lib/components/Stepper/Step";
import StepLabel from "./lib/components/Stepper/StepLabel";
import Box from "./lib/components/Box";
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
import StandardImageList from "./ImageList";
import { red, blue, brown, green, indigo } from "@mui/material/colors";
import BasicRating from "./Rating";
import ToggleButtonDemo from "./ToggleButtonDemo";
import ListDemo from "./ListDemo";
import TableDemo from "./TableDemo";
import TypographyDemo from "./TypographyDemo";
import { Alert } from "@mui/material";
import DialogDemo from "./DialogDemo";
import SkeletonDemo from "./SkeletonDemo";
import SnackbarDemo from "./SnackbarDemo";
import PopperDemo from "./PopperDemo";
import PopoverDemo from "./PopoverDemo";
import PortalDemo from "./PortalDemo";
import BottomNavigationDemo from "./BottomNavigationDemo";
import AppBarDemo from "./AppbarDemo";
import SpeedDialDemo from "./SpeedDialDemo";
import NoSsrDemo from "./NoSsrDemo";
import CollapseDemo from "./trasitions-demo/Collapse";
import FadeDemo from "./trasitions-demo/Fade";
import GrowDemo from "./trasitions-demo/Grow";
import SlideDemo from "./trasitions-demo/Slide";
import ZoomDemo from "./trasitions-demo/Zoom";
import StyleDemo from "./StyleDemo";
import { createTheme, ThemeProvider, styled } from "./lib/components/Styles";
import OtherWrapperDemo from "./OtherWrapperDemo";
const themeRP = createTheme({
  palette: {
    primary: {
      light: "#4075EA",
      main: "#0a2972",
      dark: "#1146BC",
      contrastText: "#fff",
    },
    secondary: {
      light: "#75C3C0",
      main: "#077C78",
      mainGradient: "linear-gradient(to top,#fff700,#ffffff)",
      dark: "#077C78",
      contrastText: "#fffff",
    },
    type: "dark",
  },
});

const themeBB = createTheme({
  palette: {
    primary: { main: brown[500] },
    secondary: { main: green["500"], mainGradient: "linear-gradient(to top, #ff8d00,#ffffff)" },
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
    valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
const steps = ["Select campaign settings", "Create an ad group", "Create an ad"];

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
  const [sliderValue, setSliderValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    console.log(newValue);
    setSliderValue(newValue);
  };

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
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme ? themeRP : themeBB}>
        <MiniDrawer theme={{ t: theme, f: setTheme }} />
        <Container>
          <Box>
            <AppBarDemo />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                backgroundImage: (theme) => theme.palette.secondary.mainGradient,
              }}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={data}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
              <Divider sx={{ marginY: 2 }} />
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button>Primary</Button>
              <Button color="secondary">secondary</Button>
              <Button disabled>Disabled</Button>
              <Button href="#text-buttons">Link</Button>
              <Divider sx={{ marginY: 2 }} />
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
              </FormGroup>
              <Divider sx={{ marginY: 2 }} />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <Divider sx={{ marginY: 2 }} />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Divider sx={{ marginY: 2 }} />
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Switch Label" />
              </FormGroup>
              <Divider sx={{ marginY: 2 }} />
              <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
              <TextField
                error
                id="standard-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="standard"
              />
              <Divider sx={{ marginY: 2 }} />
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
              <Divider sx={{ marginY: 2 }} />
              <Avatar>AG</Avatar>
              <Divider />
              <Avatar>OP</Avatar>
              <Divider variant="middle" />
              <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
                <Avatar>MY</Avatar>
              </StyledBadge>
              <Divider sx={{ marginY: 2 }} />
              <Chip label="Clickable" variant="outlined" onClick={() => {}} onDelete={() => {}} />
              <Divider sx={{ marginY: 2 }} />
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
              <Divider sx={{ marginY: 2 }} />
              <Tooltip title="I am Tooltip">
                <span style={{ fontSize: 40 }}>Tooltip</span>
              </Tooltip>
              <Divider sx={{ marginY: 2 }} />
              <div>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
                </Accordion>
              </div>
              <Divider sx={{ marginY: 2 }} />
              <span>
                <Card style={{ width: 200, height: 300, margin: 20, padding: 20 }}>
                  <Box>
                    Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at
                    the bottom of the card. Here's an example of a media control card.
                  </Box>
                </Card>
              </span>
              <Divider sx={{ marginY: 2 }} />
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
              <Divider sx={{ marginY: 2 }} />
              <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                  <div style={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Text in a modalText in a modalText in a modalText in a modalText in a modal
                    </Typography>
                  </div>
                </Modal>
              </div>
              <Divider sx={{ marginY: 2 }} />
              <Pagination count={10} />
              <Divider sx={{ marginY: 2 }} />
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
                <Divider sx={{ marginY: 2 }} />
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
              <Divider sx={{ marginY: 2 }} />
              <TextArea aria-label="empty textarea" placeholder="Empty" style={{ width: 200 }}></TextArea>
              <DatePicker
                label="Basic example"
                value={dateValue}
                onChange={(newValue) => {
                  setDateValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Divider sx={{ marginY: 2 }} />
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
                <CircularProgress variant="determinate" value={25} />
              </Box>
              <Divider sx={{ marginY: 2 }} />
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
              <Divider sx={{ marginY: 2 }} />
              <Grid container sx={{ backgroundColor: "#fff", p: 2 }} justifyContent="center">
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    Image List
                  </Typography>
                  <StandardImageList />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    Grid Stack Paper
                  </Typography>
                  <Stack spacing={2} direction="row" mt={2}>
                    <Paper elevation={3} sx={{ width: 150, height: 150 }}>
                      Item 1
                    </Paper>
                    <Paper elevation={3} sx={{ width: 150, height: 150 }}>
                      Item 2
                    </Paper>
                    <Paper elevation={3} sx={{ width: 150, height: 150 }}>
                      Item 3
                    </Paper>
                  </Stack>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
              <Box mt={2}>
                <Typography mb={2} variant="subtitle2" color="primary">
                  Button Group
                </Typography>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography mb={2} variant="subtitle2" color="primary">
                  Floating Action Buttons(Fab)
                </Typography>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
                <Fab variant="extended">
                  <NavigateIcon sx={{ mr: 1 }} />
                  Navigation
                </Fab>
                <Fab disabled aria-label="like">
                  <FavoriteIcon />
                </Fab>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <BasicRating />
              <Divider sx={{ marginY: 2 }} />
              <Box sx={{ width: 200 }}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  <VolumeDown />
                  <Slider aria-label="Volume" value={sliderValue} onChange={handleSliderChange} />
                  <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Toggle Button Demo
                </Typography>
                <ToggleButtonDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  No Server Side Renderning Demo
                </Typography>
                <NoSsrDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Folder List
                </Typography>
                <ListDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Basic Table
                </Typography>
                <TableDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Typography Types
                </Typography>
                <TypographyDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Basic alerts
                </Typography>
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="success">This is a success alert — check it out!</Alert>
                  <Alert severity="info">This is an info alert — check it out!</Alert>
                  <Alert severity="warning">This is a warning alert — check it out!</Alert>
                  <Alert severity="error">This is an error alert — check it out!</Alert>
                </Stack>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Simple Dialog Demo
                </Typography>
                <DialogDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Skeleton Demo
                </Typography>
                <SkeletonDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Snackbar Demo
                </Typography>
                <SnackbarDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  SpeedDial Demo
                </Typography>
                <SpeedDialDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Popper Demo
                </Typography>
                <PopperDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Pop Over Demo
                </Typography>
                <PopoverDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Portal Demo
                </Typography>
                <PortalDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1"> Collapse </Typography>
                  <CollapseDemo />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1"> Grow </Typography>
                  <GrowDemo />
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1"> Fade </Typography>
                  <FadeDemo />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1"> Slide </Typography>
                  <SlideDemo />
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Zoom
                </Typography>
                <ZoomDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Styles Demo
                </Typography>
                <StyleDemo />
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Other Wrapper Demos
                </Typography>
                <OtherWrapperDemo />
              </Box>
            </Box>
          </Box>
        </Container>
        <footer>
          <Paper elevation={0}>
            <BottomNavigationDemo />
          </Paper>
        </footer>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
