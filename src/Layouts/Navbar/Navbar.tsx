import React from 'react';
import './navbar.module.css';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ToDo">ToDo</Link></li>
        <li><Link to="/SamplePahina">SamplePahina</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
