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
    <div className='cardDiv'>
      <div className='info'>
        <input placeholder='search for an animal by name'></input>
    <h3>There are {animals.length} Animals in the Zoo! </h3>
    </div>
    <div className='cardsContainer'>
    {animals.map((animal) => (<Card key={animal.name} {...animal}  removeCard={removeCard} />))}
    </div>
    </div>
    </main>
    </>
  )
}

export default Animals;