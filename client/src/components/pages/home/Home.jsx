import React from 'react';
import { Box, Typography } from '@mui/material';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box sx={{ padding: '10px' }}>
        <Typography>Welcome to Lost Tools!</Typography>
      </Box>
    );
  };
}

export default Home;