import React from 'react';
import { Box, Typography } from '@mui/material';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box>
        <Typography>Welcome to Lost Tools!</Typography>
      </Box>
    );
  };
}

export default Home;