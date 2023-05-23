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
            <Link  to='/'>
              <div className="links">Home</div>
            </Link>
          </li>
          <li>
            <Link  to='/checklist'>
              <div className="links">Checklist</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
}

export default Navbar;