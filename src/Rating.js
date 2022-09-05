import React from 'react';
import Box from './lib/components/Box';
import Typography from '@mui/material/Typography';
import Rating from './lib/components/Rating';
import Paper from './lib/components/Paper';

export default function BasicRating() {
    const [value, setValue] = React.useState(2);

    return (
        <Box
            sx={{
                '& > legend': { mt: 3 },
                display: 'flex'
            }}
        >
            <Paper elevation={3}>
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Paper>
            <Paper elevation={3}>
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
            </Paper>
            <Paper elevation={3}>
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
            </Paper>
            <Paper elevation={3}>
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </Paper>
        </Box>
    );
}
