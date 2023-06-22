import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import Navbar from './navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import Checklist from './pages/checklist/ChecklistPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Navbar />
          <Box>
            <Toolbar />
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/checklist' Component={Checklist} />
            </Routes>
          </Box>
      </Router>
    );
  };
}

export default App;