import { useState } from 'react';
import './styles/App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import {animals} from './assets/AnimalList'
import {birds} from './assets/BirdsList'


function App() {
  const [animalList, setAnimalList] = useState(animals);
  const [birdList, setBirdList] = useState(birds);
 
  const removeCard = (name) => {
    setAnimalList((prevAnimals) => prevAnimals.filter((animal) => animal.name !== name));

  };
  return (
    <>
      <Header/>
      <main>
        
      <h3>There are {animals.length} Animals in the Zoo! </h3>
    
      {animals.map((animal) => (<Card key={animal.name} {...animal}  removeCard={removeCard} 
      
     />))}
      {birds.map((bird) => (<Card key={bird.name}{...bird}/>))}
      </main>
      
         <Footer footer="Mohsin Rony 2023"/>
   </>
  )
}

export default App;

/* When youclick the Card, you have to know which animal was clicked and put lights on the clicked card, the function goes through the animal animallist and use setAnimals, spread operator, loop ; add onClick {addEvent and removeEvent}
onRermove = {() = removeHandler(animal.name)}
addLike = 
removeLikes
hint for search, you have to rererender , search keyword has to be in the search Bar. */