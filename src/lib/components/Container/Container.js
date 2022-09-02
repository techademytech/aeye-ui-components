import React from 'react';
import MuiContainer from '@mui/material/Container';

function Container(props) {
    return <MuiContainer {...props}>{props?.children}</MuiContainer>;
}

export default Container;
