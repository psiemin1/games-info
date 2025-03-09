import React from 'react';
import "./Promotions.css"; // Import the CSS file for styling

const promotions = [
  { 
    title: "Cyberpunk 2077", 
    discount: "50%", 
    price: "99.99 PLN", 
    img: "/images/cyberpunk2077.jpg", // Add image path
    steamLink: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    description: "Cyberpunk 2077 jest teraz dostępny z 50% zniżką na Steam."
  },
  { 
    title: "The Witcher 3: Wild Hunt", 
    discount: "70%", 
    price: "59.99 PLN", 
    img: "/images/witcher3.jpg", // Add image path
    steamLink: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    description: "The Witcher 3: Wild Hunt jest teraz dostępny z 70% zniżką na Steam."
  },
  { 
    title: "Red Dead Redemption 2", 
    discount: "40%", 
    price: "149.99 PLN", 
    img: "/images/rdr2.jpg", // Add image path
    steamLink: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    description: "Red Dead Redemption 2 jest teraz dostępny z 40% zniżką na Steam."
  },
  { 
    title: "Hades", 
    discount: "30%", 
    price: "69.99 PLN", 
    img: "/images/hades.jpg", // Add image path
    steamLink: "https://store.steampowered.com/app/1145360/Hades/",
    description: "Hades jest teraz dostępny z 30% zniżką na Steam."
  },
  { 
    title: "DOOM Eternal", 
    discount: "60%", 
    price: "79.99 PLN", 
    img: "/images/doom_eternal.jpg", // Add image path
    steamLink: "https://store.steampowered.com/app/782330/DOOM_Eternal/",
    description: "DOOM Eternal jest teraz dostępny z 60% zniżką na Steam."
  },
  { 
    title: "Sekiro: Shadows Die Twice", 
    discount: "50%", 
    price: "129.99 PLN", 
    img: "/images/sekiro.jpg", // Add image path
    steamLink: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
    description: "Sekiro: Shadows Die Twice jest teraz dostępny z 50% zniżką na Steam."
  },
  { 
    title: "Hollow Knight", 
    discount: "50%", 
    price: "36.99 PLN", 
    img: "/images/hollow_knight.jpg", // Add image path
    steamLink: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    description: "Hollow Knight jest teraz dostępny z 50% zniżką na Steam."
  }
];

function Promotions() {
  return (
    <div className="promotions-container">
      <h1>💸 Promocje na Gry</h1>
      <div className="promotions-grid">
        {promotions.map((promo, index) => (
          <div key={index} className="promo-card" onClick={() => window.open(promo.steamLink, "_blank")}>
            <img src={promo.img} alt={promo.title} /> {/* Add image */}
            <h3>{promo.title}</h3>
            <p>Zniżka: {promo.discount}</p>
            <p>Cena: {promo.price}</p>
            <p>{promo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotions;
