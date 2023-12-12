import React, {useState} from 'react';
import Header from '../components/Header';
import {birds} from './assets/BirdsList'
import Card from './Card.jsx'

function Birds () {
  const [birdList, setBirdList] = useState(birds);
 
  const removeCard = (name) => {
    setBirdList((prevBirds) => prevBirds.filter((birds) => birds.name !== name));
  };
  return (
    <>
    <main>
    <h3>There are {birds.length} birds in the Zoo! </h3>
    
    {birds.map((bird) => (<Card key={bird.name} {...bird}  removeCard={removeCard} />))}
    </main>
    </>
  )
}

export default Birds;
