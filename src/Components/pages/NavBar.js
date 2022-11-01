import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
  <>
    <nav className="nav">
      <h1>Math Magician</h1>

      <ul className="nav-ul">
        <li className="nav-li"><Link to="/">Home</Link></li>
        <li className="nav-li"><Link to="/calculator">Calculator</Link></li>
        <li className="nav-li"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </>
);

export default NavBar;
