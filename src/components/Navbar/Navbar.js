import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this CSS file exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">EventLoom</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/events" className="navbar-links">Events</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-links">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className="navbar-links">Register</Link>
          </li>
          <li className="navbar-item">
            <Link to="/my-tickets" className="navbar-links">My Tickets</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
