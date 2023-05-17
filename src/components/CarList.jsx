import React from 'react';
import CarItem from './CarItem';

function CarList({ cars }) {
  return (
    <div className="container">
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
