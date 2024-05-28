import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      const response = await axios.get('http://localhost:5001/dogs');
      setDogs(response.data);
    }
    fetchDogs();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs.map(dog => dog.name)} />
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetailsWrapper dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function DogDetailsWrapper({ dogs }) {
  return (
    <Route
      path="/dogs/:name"
      element={({ match }) => {
        const dogName = match.params.name;
        const currentDog = dogs.find(dog => dog.name.toLowerCase() === dogName.toLowerCase());
        return <DogDetails dog={currentDog} />;
      }}
    />
  );
}

export default App;
