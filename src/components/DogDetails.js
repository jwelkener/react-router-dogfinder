// DogDetails.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function DogDetails({ dog }) {
  if (!dog) return <Navigate to="/dogs" />;

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
