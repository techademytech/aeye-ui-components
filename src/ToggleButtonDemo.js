import React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from './lib/components/ToggleButton';
import ToggleButtonGroup from './lib/components/ToggleButton/ToggleButtonGroup';
import Paper from './lib/components/Paper';

export default function ToggleButtonDemo() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Paper elevation={3} sx={{ p: 2, textAlign: alignment }}>
        {alignment}
      </Paper>
    </>
  );
}
