import { useState } from 'react';
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import {animals} from './AnimalList'


function App() {
  const [animalList, setAnimalList] = useState(animals);
 
  const handleRemove = (name) => {
    setAnimalList((prevAnimals) => prevAnimals.filter((animal) => animal.name !== name));
  };
  return (
    <>
      <Header logo="Mohsin Rony"/>
      <main>
        
      {/* <h1>Animals({animals.length})</h1> */}
    
      {animals.map((animal) => (<Card key={animal.name} {...animal} onRemove={handleRemove} 
     />))}
      
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