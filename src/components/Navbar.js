import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <h2>Menu:</h2>
      <ul>
        <a href="/" className="nav-item">🏠 Strona Główna</a>
        <a href="/popular" className="nav-item">🔥 Popularne Gry </a>
        <a href="/upcoming" className="nav-item">🎮 Nadchodzące Gry </a>
        <a href="/promotions" className="nav-item">💸 Promocje</a>
      </ul>
      <div className="dark-mode-switch">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <span>Tryb Ciemny</span>
      </div>
    </nav>
  );
}

export default Navbar;
