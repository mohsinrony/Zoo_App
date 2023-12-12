import React, {useState} from 'react';

const Card = (props, removeCard) => {
  const [likes, setLikes] = useState(0);

  const imgUrl = `https://source.unsplash.com/400x400/?${props.name}`;
  
  const handleRemoveClick = () => {
    removeCard(props.name);
  };

  const handleIncrementLikes = () => {
    setLikes(likes+1);
  };
  const handleDecrementLikes = () => {
    if (likes >= 0) {
      setLikes(likes-1);
    }
    else if (likes < 0)
    setLikes(likes-1);
  };
  return (
    <div className="cards">
    <div className="card">
       <button onClick={handleRemoveClick}><span className="material-symbols-outlined cancel-icon">
cancel
</span></button>
      <img src={imgUrl} alt={props.name} />
      <h2>{props.name}</h2>
     
      <button onClick={handleDecrementLikes}><span className="material-symbols-outlined dislike">
heart_minus
</span></button>

{likes >= 0 ? (
          <span className="score" class="material-symbols-outlined">favorite {likes}</span>
        ) : (
          <span class="material-symbols-outlined broken-heart">heart_broken
{likes}
</span>
        )}
      
{/* likes_count = props.likes + conditional likes icon*/}
      <button onClick={handleIncrementLikes}><span className="material-symbols-outlined like">
heart_plus
</span></button> 
    </div>
    </div>
  )
};

  
  export default Card;


