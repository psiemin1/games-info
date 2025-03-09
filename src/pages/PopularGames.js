import React, { useState } from 'react';
import "./PopularGames.css"; // Stylizacja

const popularGames = [
  { 
    title: "Counter-Strike 2", 
    img: "/images/cs2.jpg", 
    players: "1 272 145", 
    purchaseLink: "https://store.steampowered.com/app/730/CounterStrike_2/", // Add purchase link
    description: "Kontynuacja kultowej strzelanki drużynowej, oferująca zaktualizowaną grafikę i nowe mechaniki rozgrywki."
  },
  { 
    title: "Monster Hunter Wilds", 
    img: "/images/monster_hunter.jpg", 
    players: "990 643", 
    purchaseLink: "https://store.steampowered.com/app/582010/Monster_Hunter_World/", // Add purchase link
    description: "Najświeższa odsłona serii, w której gracze polują na gigantyczne potwory w otwartym świecie."
  },
  { 
    title: "Dota 2", 
    img: "/images/dota2.jpg", 
    players: "636 007", 
    purchaseLink: "https://store.steampowered.com/app/570/Dota_2/", // Add purchase link
    description: "Popularna gra typu MOBA, gdzie dwie drużyny walczą o zniszczenie bazy przeciwnika."
  },
  { 
    title: "PUBG: BATTLEGROUNDS", 
    img: "/images/pubg.jpg", 
    players: "452 123", 
    purchaseLink: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/", // Add purchase link
    description: "Pionier gatunku battle royale, gdzie 100 graczy walczy o przetrwanie na rozległej mapie."
  },
  { 
    title: "Apex Legends", 
    img: "/images/apex.jpg", 
    players: "330 456", 
    purchaseLink: "https://store.steampowered.com/app/1172470/Apex_Legends/", // Add purchase link
    description: "Dynamiczna gra battle royale z unikalnymi postaciami i szybką akcją."
  }
];

function PopularGames() {
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
    <div className="popular-container">
      <h1>🔥 Najpopularniejsze Gry</h1>
      
      <div className="games-grid">
        {popularGames.map((game, index) => (
          <div key={index} className="game-card" onClick={(event) => handleCardClick(event, game)}>
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Gracze online: {game.players}</p>
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

export default PopularGames;
