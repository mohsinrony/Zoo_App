import React, {useState} from 'react';
import Header from '../components/Header';
import {butterflies} from './assets/ButterflyList'
import Card from './Card.jsx'

function Butterfly () {
  const [butterflyList, setButterflyList] = useState(butterflies);
 
  const removeCard = (name) => {
    setBirdList((prevButterflies) => prevButterflies.filter((butterflies) => butterflies.name !== name));
  };
  return (
    <>
    <main>
    <h3>There are {butterflies.length} birds in the Zoo! </h3>
    
    {butterflies.map((butterfly) => (<Card key={butterfly.name} {...butterfly}  removeCard={removeCard} />))}
    </main>
    </>
  )
}

export default Butterfly;