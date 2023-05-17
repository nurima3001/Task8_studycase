import React, { useState } from 'react';

const mobil = [
  {
    id: 1,
    nama: 'Civic Type R',
    path: 'civic-type-r.jpg',
    merek: 'Honda',
    warna: 'Merah',
    tipe: 'Sedan'
  },
  {
    id: 2,
    nama: 'Innova Venture',
    path: 'innova-venture.jpg',
    merek: 'Toyota',
    warna: 'Putih',
    tipe: 'Mini Bus'
  },
  {
    id: 3,
    nama: 'APV',
    path: 'apv.jpg',
    merek: 'Suzuki',
    warna: 'Hitam',
    tipe: 'Mini Bus'
  },
  {
    id: 4,
    nama: 'M4 Competition',
    path: 'm4-competition.jpg',
    merek: 'BMW',
    warna: 'Biru Tua',
    tipe: 'Sport Car'
  },
  {
    id: 5,
    nama: 'S Class 3000',
    path: 's-class-3000.jpg',
    merek: 'Mercedes',
    warna: 'Abu-abu',
    tipe: 'Sedan'
  },
  {
    id: 6,
    nama: 'Aventador',
    path: 'aventador.jpg',
    merek: 'Lamborghini',
    warna: 'Kuning',
    tipe: 'Sport Car'
  },
  {
    id: 7,
    nama: 'Almaz',
    path: 'almaz.jpg',
    merek: 'Wuling',
    warna: 'Abu-abu',
    tipe: 'SUV'
  },
  {
    id: 8,
    nama: 'Sigra',
    path: 'sigra.jpg',
    merek: 'Daihatsu',
    warna: 'Hitam',
    tipe: 'Mini Bus'
  },
  {
    id: 9,
    nama: 'Cullinan',
    path: 'cullinan.jpg',
    merek: 'Rolls Royce',
    warna: 'Emas',
    tipe: 'SUV'
  },
  {
    id: 10,
    nama: 'Macan',
    path: 'macan.jpg',
    merek: 'Porsche',
    warna: 'Orange',
    tipe: 'SUV'
  },
  {
    id: 11,
    nama: 'Veyron',
    path: 'veyron.jpg',
    merek: 'Bugatti',
    warna: 'Hitam',
    tipe: 'Sport Car'
  },
  {
    id: 12,
    nama: 'Aventador',
    path: 'aventador-merah.jpg',
    merek: 'Lamborghini',
    warna: 'Merah',
    tipe: 'Sport Car'
  }
];

function CarList({ cars }) {
  return (
    <div className="container">
      {cars.map(car => (
        <div className="car" key={car.id}>
          <img src={car.path} alt={car.nama} />
          <h3>{car.nama}</h3>
          <p>Merek: {car.merek}</p>
          <p>Warna: {car.warna}</p>
          <p>Tipe: {car.tipe}</p>
        </div>
      ))}
    </div>
  );
}

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Cari mobil..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

function CarShowroom() {
  const [searchResults, setSearchResults] = useState(mobil);

  const handleSearch = searchTerm => {
    const filteredResults = mobil.filter(car =>
      car.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={searchResults} />
    </div>
  );
  function CarShowroom() {
    // ...
    return (
      <div className="car-showroom">
        <h1 className="car-showroom-title">Car Showroom</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="container">
          <CarList cars={searchResults} />
        </div>
      </div>
    );
    function CarShowroom() {
        // ...
        return (
          <div className="car-showroom">
            <h1 className="car-showroom-title">Car Showroom</h1>
            {/* Sisa kode komponen */}
          </div>
        );
      }
      
  }
  
}

export default CarShowroom;
