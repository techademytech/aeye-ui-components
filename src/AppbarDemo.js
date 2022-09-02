import React from 'react';
import AppBar from './lib/components/AppBar';
import Box from './lib/components/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from './lib/components/Typography';
import Button from './lib/components/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBarDemo() {

  const hideDrawer = () => {
    console.log("Clicked on Loging btn");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AppBar
          </Typography>
          <Button color="inherit" onClick={hideDrawer}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
