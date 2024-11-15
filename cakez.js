import React from 'react';
import CakeList from '../components/CakeList';
const cakesData = [
  { id: 1, name: 'Chocolate Cake', description: 'Rich and creamy chocolate cake.', price: 25, image: 'chocolate-cake.jpg' },
  { id: 2, name: 'Vanilla Cake', description: 'Classic vanilla with smooth buttercream.', price: 20, image: 'vanilla-cake.jpg' },
  // Add more cakes as needed
];
function Cakes() {
  return (
    <div>
      <h2>Our Cakes</h2>
      <CakeList cakes={cakesData} />
    </div>
  );
}
export default Cakes;
