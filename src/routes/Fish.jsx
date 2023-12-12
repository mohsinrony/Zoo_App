import React, {useState} from 'react';
import {fishes} from '../assets/FishList'
import Card from '../components/Card';

function Fish () {
  const [fishList, setFishList] = useState(fishes);
 
  const removeCard = (name) => {
    setFishList((prevFishes) => prevFishes.filter((fishes) => fishes.name !== name));
  };
  return (
    <>
    <main>
    <h3>There are {fishes.length} fishes in the Zoo! </h3>
    
    {fishes.map((fish) => (<Card key={fish.name} {...fish}  removeCard={removeCard} />))}
    </main>
    </>
  )
}

export default Fish;