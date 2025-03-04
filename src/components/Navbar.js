import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">🏠 Strona Główna</Link></li>
        <li><Link to="/upcoming">🎮 Nadchodzące Gry</Link></li>
        <li><Link to="/popular">🔥 Popularne Gry</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
