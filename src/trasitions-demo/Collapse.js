import React from 'react';
import Box from '../lib/components/Box';
import Switch from '../lib/components/Switch';
import Paper from '../lib/components/Paper';
import Collapse from '../lib/components/transitions/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function CollapseDemo() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 300 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
            height: 120,
            width: 250,
          },
        }}
      >
        <div>
          <Collapse in={checked}>{icon}</Collapse>
          <Collapse in={checked} collapsedSize={40}>
            {icon}
          </Collapse>
        </div>
        <div>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked}>
              {icon}
            </Collapse>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
              {icon}
            </Collapse>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
