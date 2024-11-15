// CakeList.js
import React from 'react';
import CakeCard from './CakeCard';
function CakeList({ cakes }) {
  return (
    <div className="cake-list">
      {cakes.map(cake => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  );
}
export default CakeList;
