import React, { useState } from 'react';
import "./Home.css";

const home = [
  { 
    title: "Ultrakill: THE ULTRA_REVAMP Update", 
    img: "/images/ULTRAKILLREVAMP.jpg",
    opis: "Popularna dynamiczna strzelanka ULTRAKILL doczekała się dużej aktualizacji „The Ultra Revamp”, która wprowadza poprawioną grafikę, nowe mechaniki i balans rozgrywki. Gracze mogą spodziewać się ulepszonych animacji, nowych wyzwań oraz dopracowanych poziomów. Twórcy obiecują jeszcze bardziej intensywną akcję i satysfakcjonującą brutalność, z której słynie gra. Aktualizacja już dostępna!"
  },
  {
    title: "Festiwal Powieści Wizualnych", 
    img: "/images/Wyprzedaż.jpg",
    opis: "Festiwal Powieści Wizualnych na Steam trwa od 4 do 10 marca 2025 do godziny 18:00 czasu polskiego. W ramach wydarzenia można kupić przecenione gry z gatunku visual novel oraz tytuły narracyjne. W ofercie znajdują się zarówno nowości, jak i klasyki gatunku. Warto sprawdzić, czy wśród promocji znajduje się coś dla Ciebie!"
  },
  {
    title: "Nowy Cache w Counter Strike", 
    img: "/images/cache_cs2.jpg",
    opis: "Mapa Cache, stworzona przez FMPONE, została zaktualizowana i jest dostępna w Counter-Strike 2. Nowa wersja mapy przeszła gruntowną modernizację, dostosowując ją do technologii i możliwości graficznych CS2. Zmiany obejmują poprawę oświetlenia, tekstur oraz detali otoczenia, co nadaje mapie świeży i nowoczesny wygląd. Nowy Cache dostępny jest w grze od teraz!"
  }
];

function Home() {
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
    <div className="home-container">
      <h1>Nowości</h1> {/* Add header */}
      {home.map((game, index) => (
        <div key={index} className="info-card" onClick={(event) => handleCardClick(event, game)}>
          <img src={game.img} alt={game.title} />
          <h3>{game.title}</h3>
          <p>{game.opis}</p>
        </div>
      ))}

      {selectedGame && (
        <div
          className="game-details"
          style={{ top: `${detailsPosition.top}px`, left: `${detailsPosition.left}px`, zIndex: 1000 }}
        >
          <h2>{selectedGame.title}</h2>
          <p>{selectedGame.opis}</p>
          <button onClick={handleCloseDetails}>Zamknij</button>
        </div>
      )}
    </div>
  );
}

export default Home;
