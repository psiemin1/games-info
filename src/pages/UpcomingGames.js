import React, { useState } from 'react';
import "./UpcomingGames.css"; // Import stylów

const upcomingGames = [
  { 
    title: "Split Fiction", 
    img: "/images/split_fiction.jpg", 
    releaseDate: "6 marca 2025", 
    description: "Kooperacyjna gra przygodowa, w której gracze wcielają się w dwóch pisarzy przemierzających światy science-fiction i fantasy."
  },
  { 
    title: "Assassin’s Creed Shadows", 
    img: "/images/ac_shadows.jpg", 
    releaseDate: "20 marca 2025", 
    description: "Nowa odsłona serii Assassin’s Creed, osadzona w średniowiecznej Japonii."
  },
  { 
    title: "Avowed", 
    img: "/images/avowed.jpg", 
    releaseDate: "18 lutego 2025", 
    description: "RPG od Obsidian Entertainment, osadzone w świecie Eora, znanym z serii Pillars of Eternity."
  },
  { 
    title: "Kingdom Come: Deliverance II", 
    img: "/images/kcd2.jpg", 
    releaseDate: "4 lutego 2025", 
    description: "Kontynuacja realistycznego RPG osadzonego w średniowiecznych Czechach."
  },
  { 
    title: "Sid Meier's Civilization VII", 
    img: "/images/civilization7.jpg", 
    releaseDate: "10 lutego 2025", 
    description: "Kolejna część legendarnej serii strategii turowych, gdzie gracze budują i zarządzają cywilizacją przez wieki."
  }
];

function UpcomingGames() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="upcoming-container">
      <h1>🚀 Nadchodzące Gry</h1>
      
      <div className="games-grid">
        {upcomingGames.map((game, index) => (
          <div key={index} className="game-card" onClick={() => setSelectedGame(game)}>
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Premiera: {game.releaseDate}</p>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="game-details">
          <h2>{selectedGame.title}</h2>
          <p>{selectedGame.description}</p>
          <button onClick={() => setSelectedGame(null)}>Zamknij</button>
        </div>
      )}
    </div>
  );
}

export default UpcomingGames;
