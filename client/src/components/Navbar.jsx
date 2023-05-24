import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='navbar'>
        <div id='title'>Lost Tools</div>
        <ul>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <div className="links">Home</div>
            </Link>
          </li>
          <li>
            <Link to='/checklist' style={{ textDecoration: 'none' }}>
              <div className="links">Checklist</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
}

export default Navbar;