import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <ul className="nav nav-tabs">
      <li>
        <Link to="/">Submit an Issue</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/update">Update</Link>
      </li>
    </ul>
  );
}

export default Nav;
