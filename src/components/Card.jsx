import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Card = ({itemName, itemLikes, onCardRemove, onCardAddLike, onCardRemoveLike, itemCategory}) => {


  const imgUrl = `https://source.unsplash.com/400x400/?${itemName},${itemCategory}`;
  

  return (
      <div className="cards">
        <div className='removeButton'>
          <button  onClick= {onCardRemove}><span className="material-symbols-outlined cancel-icon">cancel</span></button>
        </div>
        <img src={imgUrl} alt= "random-pic"/>
        <div className="card-info">
          <h2 className='item-name'>{itemName}</h2>
          <div className='middle-row'>
            <button className="minus-button" onClick={onCardRemoveLike}><span className="material-symbols-outlined dislike"> heart_minus </span></button>
            <div className="score">
              <span className="material-symbols-outlined">{itemLikes >= 0 ? 'favorite' : 'heart_broken'}</span>
              <p>{itemLikes}</p>
              </div>
              <button className="plus-button" onClick={onCardAddLike}><span className="material-symbols-outlined like">heart_plus</span></button>
          </div>
        </div>
              <div className="see-more">
                <Link to={`/details/${itemName.toLowerCase()}`}>SEE MORE</Link>
              </div>
      </div>
            );
          };

  
  export default Card;