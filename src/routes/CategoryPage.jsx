import { useParams } from "react-router-dom";
import Card from "../components/Card";


const Category = ({zoo, onRemoveCard, addLike, removeLikes, search, setSearch})  => {
const { category } = useParams();

const categoryList = zoo[category];

const filteredList = categoryList.filter((item) => 
   item.name.toLowerCase().includes(search.toLowerCase()));

   const handleSearch = (e) => {
    setSearch(e.target.value);
  }


return (
  <>
    <main>
      
    <div className="search-container">
          <input type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch} />
        </div>
      <div className="category-page">
        

        {filteredList.map((item) => (
          <Card
            key={item.name}
            itemName={item.name}
            itemLikes={item.likes}
            onRemoveCard={() => onRemoveCard(item.name, category)}
            addLike={() => addLike(item.name, category, "add")}
            removeLikes={() => removeLikes(item.name, category, "remove")}
            itemCategory={category}
            
          />
        ))}

      </div>
    </main>
  </>
);
};

export default Category;
