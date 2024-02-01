import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

//Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration. The data for your components might not be immediately available. You can improve the perceived responsiveness of the page by using skeletons.

const Card = ({itemName, itemLikes, onRemoveCard, addLike, removeLikes, itemCategory}) => {
const [loading, setLoading] = useState(true);
useEffect(() => {
  setTimeout(() => setLoading(false), 1000);
});

  const imgUrl = `https://source.unsplash.com/400x400/?${itemName},${itemCategory}`;
  

  return (
      <div className="cards">
        <div className='removeButton'>
          <button  onClick={onRemoveCard}className="material-symbols-outlined cancel-icon">cancel</button>
        </div>
        {loading ? (
          <Skeleton height={200} width={400} />
        ) : (
          <img src={imgUrl} alt= "random-pic"/>
        )}
        
        <div className="card-info">
          <h2 className='item-name'>{itemName}</h2>
          <div className='middle-row'>
            <button className="dislike-button" onClick={removeLikes}><span className="material-symbols-outlined">
thumb_down
</span></button>
            <div className="score">
              <span className="material-symbols-outlined">{itemLikes >= 0 ? 'recommend' : 'sentiment_dissatisfied'}</span>
              <p>{itemLikes}</p>
              </div>
              <button className="like-button" onClick={addLike}><span className="material-symbols-outlined">
thumb_up
</span></button>
          </div>
        </div>
              <div className="see-more">
                <Link to={itemName.toLowerCase()}>SEE MORE</Link>
              </div>
      </div>
            );
          };

  
  export default Card;