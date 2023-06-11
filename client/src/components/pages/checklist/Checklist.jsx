import React from 'react';
import { Box, Typography } from '@mui/material';

class Checklist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box sx={{ padding: '10px' }}>
        <Typography>Checklist</Typography>
      </Box>
    );
  };
}

export default Checklist;