import React from 'react';

function CarItem({ car }) {
  const imagePath = require(`../${car.path}`).default;

  return (
    <div className="car">
      <img src={imagePath} alt={car.nama} />
      <h3>{car.nama}</h3>
      <p>Merek: {car.merek}</p>
      <p>Warna: {car.warna}</p>
      <p>Tipe: {car.tipe}</p>
    </div>
  );
}

export default CarItem;
