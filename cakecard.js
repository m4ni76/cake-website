// CakeCard.js
import React from 'react';
function CakeCard({ cake }) {
  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>
    </div>
  );
}
export default CakeCard;
