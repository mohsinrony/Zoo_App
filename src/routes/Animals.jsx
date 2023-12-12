import React, {useState} from 'react';
import {animals} from '../assets/AnimalList'
import Card from '../components/Card';

function Animals() {
  const [animalList, setAnimalList] = useState(animals);
  const removeCard = (name) => {
    setAnimalList((prevAnimals) => prevAnimals.filter((animal) => animal.name !== name));
  };
  return (
    <>
    <main>
    <h3>There are {animals.length} Animals in the Zoo! </h3>
    
    {animals.map((animal) => (<Card key={animal.name} {...animal}  removeCard={removeCard} />))}
    </main>
    </>
  )
}

export default Animals;