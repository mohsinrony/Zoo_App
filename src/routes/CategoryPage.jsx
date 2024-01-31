import React from "react";
import { useParams } from "react-router-dom";
import { animals } from "../assets/AnimalList";
import { birds } from "../assets/BirdsList";
import { fishes } from "../assets/FishesList";
import { butterflies } from "../assets/ButterfliesList";
import Card from "../components/Card";


const Category = ({ zoo, onRemoveCard, onAddCardLike, onRemoveCardLike, search }) => {
const { category } = useParams();
let categoryList = [];

switch (category) {
  case "animals":
    categoryList = animals;
    break;
  case "birds":
    categoryList = birds;
    break;
  case "fishes":
    categoryList = fishes;
    break;
  case "butterflies":
    categoryList = butterflies;
    break;
  default:
    throw new Error(`Unknown category: ${category}`);
}


const filteredList = categoryList.filter((item) => 
   item.name.toLowerCase().includes(search.toLowerCase()));



return (
  <>
    <main>
      <div className="category-page">

        {filteredList.map((item) => (
          <Card
            key = {item.name}
            itemName = {item.name}
            itemLikes = {item.likes}
            itemCategory = {category}
            onCardRemove = {() => onRemoveCard(item.name, category)}
            onCardAddLike = {() => onAddCardLike(item.name, category, 'add')}
            onCardRemoveLike = {() => onRemoveCardLike(item.name, category, 'remove')}
            
          />
        ))}

      </div>
    </main>
  </>
);
};

export default Category;
