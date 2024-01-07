import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <h2>Welcome to the Zoo</h2>
        <div className='home-content'>
      
      <Link to="/animals">
        <img src="./src/assets/animals.jpg" alt="Animals Page" />
      </Link>
      <Link to="/birds">
        <img src="./src/assets/birds.jpeg" alt="Birds Page" />
      </Link>
      <Link to="/fishes">
        <img src="./src/assets/fish.jpeg" alt="Fishes Page" />
      </Link>
      <Link to="/butterflies">
        <img src="./src/assets/Butterfly.jpeg" alt="Butterfly Page" />
      </Link>
      </div>
    </div>
  );
};

export default Home;