import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <h2>Welcome To The Zoo</h2>
        <div className='home-content'>
      
      <Link to="/animals"><h1 className='title'>Animals</h1> 
        <img src="./src/assets/animals.jpg" alt="Animals Page" />
      </Link>
      <Link to="/birds"> <h1 className='title'>Birds</h1>
        <img src="./src/assets/birds.jpeg" alt="Birds Page" />
      </Link>
      <Link to="/fishes"><h1 className='title'>Fishes</h1> 
        <img src="./src/assets/fish.jpeg" alt="Fishes Page" />
      </Link>
      <Link to="/butterflies" > <h1 className='title'>Butterflies</h1>
        <img src="./src/assets/Butterfly.jpeg" alt="Butterfly Page" />
      </Link>
      </div>
    </div>
  );
};

export default Home;