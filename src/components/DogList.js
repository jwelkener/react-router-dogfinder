//DogList.js
import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet Our Dogs!</h1>
      <div>
        {dogs.map(dog => (
          <div key={dog.name}>
            <img src={dog.src} alt={dog.name} />
            <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
