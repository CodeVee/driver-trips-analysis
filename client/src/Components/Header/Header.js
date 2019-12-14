import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/trip">Trip</Link>
          </li>
          <li>
            <Link to="/drivers">Drivers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
