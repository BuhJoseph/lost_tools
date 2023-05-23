import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx';
import Home from './Pages/Home.jsx';
import Checklist from './Pages/Checklist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router className="router">
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/checklist' Component={Checklist} />
        </Routes>
      </Router>
    );
  };
}

export default App;