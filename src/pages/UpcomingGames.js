import React, { useState } from 'react';
import "./UpcomingGames.css"; 

const upcomingGames = [
  { 
    title: "Split Fiction", 
    img: "/images/split_fiction.jpg", 
    releaseDate: "6 marca 2025", 
    purchaseLink: "https://store.steampowered.com/app/123456/Split_Fiction/", // Add purchase link
    description: "Kooperacyjna gra przygodowa, w której gracze wcielają się w dwóch pisarzy przemierzających światy science-fiction i fantasy."
  },
  { 
    title: "Assassin’s Creed Shadows", 
    img: "/images/ac_shadows.jpg", 
    releaseDate: "20 marca 2025", 
    purchaseLink: "https://store.steampowered.com/app/123457/Assassins_Creed_Shadows/", // Add purchase link
    description: "Nowa odsłona serii Assassin’s Creed, osadzona w średniowiecznej Japonii."
  },
  { 
    title: "Avowed", 
    img: "/images/avowed.jpg", 
    releaseDate: "18 lutego 2025", 
    purchaseLink: "https://store.steampowered.com/app/123458/Avowed/", // Add purchase link
    description: "RPG od Obsidian Entertainment, osadzone w świecie Eora, znanym z serii Pillars of Eternity."
  },
  { 
    title: "Kingdom Come: Deliverance II", 
    img: "/images/kcd2.jpg", 
    releaseDate: "4 lutego 2025", 
    purchaseLink: "https://store.steampowered.com/app/123459/Kingdom_Come_Deliverance_II/", // Add purchase link
    description: "Kontynuacja realistycznego RPG osadzonego w średniowiecznych Czechach."
  },
  { 
    title: "Sid Meier's Civilization VII", 
    img: "/images/civilization7.jpg", 
    releaseDate: "10 lutego 2025", 
    purchaseLink: "https://store.steampowered.com/app/123460/Civilization_VII/", // Add purchase link
    description: "Kolejna część legendarnej serii strategii turowych, gdzie gracze budują i zarządzają cywilizacją przez wieki."
  }
];

function UpcomingGames() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [detailsPosition, setDetailsPosition] = useState({ top: 0, left: 0 });
  
    const handleCardClick = (event, game) => {
      const { clientX, clientY } = event;
  
      setDetailsPosition({
        top: clientY + 10,  
        left: clientX + 10 
      });
  

      setSelectedGame(game);
    };
  
    const handleCloseDetails = () => {
      setSelectedGame(null);
    };

  return (
    <div className="upcoming-container">
      <h1>🚀 Nadchodzące Gry</h1>
      
      <div className="games-grid">
        {upcomingGames.map((game, index) => (
          <div key={index} className="game-card" onClick={(event) => handleCardClick(event, game)}>
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Premiera: {game.releaseDate}</p>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div
          className="game-details"
          style={{ top: `${detailsPosition.top}px`, left: `${detailsPosition.left}px` }}
        >
          <h2>{selectedGame.title}</h2>
          <p>{selectedGame.description}</p>
          <button onClick={() => window.open(selectedGame.purchaseLink, "_blank")}>Kup Teraz</button> {/* Purchase button */}
          <button onClick={handleCloseDetails}>Zamknij</button>
        </div>
      )}
    </div>
  );
}

export default UpcomingGames;
