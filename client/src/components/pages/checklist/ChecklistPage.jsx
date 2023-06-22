import React from 'react';
import { Box, Typography } from '@mui/material';
import Checklist from './Checklist.jsx';

class ChecklistPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box sx={{ padding: '10px' }}>
        <Typography>Checklist</Typography>
        <Checklist />
      </Box>
    );
  };
}

export default ChecklistPage;