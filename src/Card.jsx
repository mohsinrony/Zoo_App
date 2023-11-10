import React from 'react';

const Card = (props) => {

  const imgUrl = `https://source.unsplash.com/400x400/?${props.name}`;
  
  const handleRemoveClick = () => {
    props.onRemove(props.name);
  };
  return (
    <div className="cards">
    <div className="card">
       <button onClick={handleRemoveClick}><span className="material-symbols-outlined">
cancel
</span></button>
      <img src={imgUrl} alt={props.name} />
      <h2>{props.name}</h2>
     
      <button><span className="material-symbols-outlined dislike">
heart_minus
</span></button>
    
{/* likes_count = props.likes + conditional likes icon*/}
      <button><span className="material-symbols-outlined like">
heart_plus
</span></button> 
    </div>
    </div>
  )
};

  
  export default Card;


