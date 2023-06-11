import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, AppBar, Toolbar, Divider, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const drawerWidth = 200;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar
          elevation={0}
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: 'white' }}
        >
          <Toolbar />
          <Divider />
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant='permanent'
          anchor='left'
        >
          <Toolbar>
            <Typography sx={{ fontSize: '30px', textAlign: 'center' }}>Lost Tools</Typography>
          </Toolbar>
          <Divider />
          <List>
            <ListItem component={Link} to='/' disablePadding style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemButton>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to='/checklist' disablePadding style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemButton>
                <ListItemText>Checklist</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    );
  };
}


export default Navbar;