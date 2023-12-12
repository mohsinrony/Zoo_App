import React, {useState} from 'react';
import {butterflies} from '../assets/ButterfyList';
import Card from '../components/Card';

function Butterfly () {
  const [butterflyList, setButterflyList] = useState(butterflies);
 
  const removeCard = (name) => {
    setButterflyList((prevButterflies) => prevButterflies.filter((butterflies) => butterflies.name !== name));
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