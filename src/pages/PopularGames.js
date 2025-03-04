import React, { useState } from 'react';
import "./PopularGames.css"; // Stylizacja

const popularGames = [
  { 
    title: "Counter-Strike 2", 
    img: "/images/cs2.jpg", 
    players: "1 272 145", 
    description: "Kontynuacja kultowej strzelanki drużynowej, oferująca zaktualizowaną grafikę i nowe mechaniki rozgrywki."
  },
  { 
    title: "Monster Hunter Wilds", 
    img: "/images/monster_hunter.jpg", 
    players: "990 643", 
    description: "Najświeższa odsłona serii, w której gracze polują na gigantyczne potwory w otwartym świecie."
  },
  { 
    title: "Dota 2", 
    img: "/images/dota2.jpg", 
    players: "636 007", 
    description: "Popularna gra typu MOBA, gdzie dwie drużyny walczą o zniszczenie bazy przeciwnika."
  },
  { 
    title: "PUBG: BATTLEGROUNDS", 
    img: "/images/pubg.jpg", 
    players: "452 123", 
    description: "Pionier gatunku battle royale, gdzie 100 graczy walczy o przetrwanie na rozległej mapie."
  },
  { 
    title: "Apex Legends", 
    img: "/images/apex.jpg", 
    players: "330 456", 
    description: "Dynamiczna gra battle royale z unikalnymi postaciami i szybką akcją."
  }
];

function PopularGames() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="popular-container">
      <h1>🔥 Najpopularniejsze Gry</h1>
      
      <div className="games-grid">
        {popularGames.map((game, index) => (
          <div key={index} className="game-card" onClick={() => setSelectedGame(game)}>
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Gracze online: {game.players}</p>
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

export default PopularGames;
