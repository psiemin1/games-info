import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import UpcomingGames from './pages/UpcomingGames';
import PopularGames from './pages/PopularGames';
import Promotions from './pages/Promotions'; // Import the new Promotions page
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<UpcomingGames />} />
            <Route path="/popular" element={<PopularGames />} />
            <Route path="/promotions" element={<Promotions />} /> {/* Add new route */}
          </Routes>
        </div>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
