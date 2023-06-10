import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const boxStyle = {
  height: '100vh',
  width: '200px',
  backgroundColor: 'gray',
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box sx={boxStyle}>
        <Typography sx={{ fontSize: '30px', textAlign: 'center' }}>Lost Tools</Typography>
        <List>
          <ListItem component={Link} to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem component={Link} to='/checklist' style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>Checklist</ListItemText>
          </ListItem>
        </List>
      </Box>
    );
  };
}


export default Navbar;