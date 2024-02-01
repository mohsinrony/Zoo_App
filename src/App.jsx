import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import animals from "./assets/AnimalList";
import birds from "./assets/BirdsList";
import fishes from "./assets/FishList";
import butterflies from "./assets/ButterflyList";
import Home from "./routes/Home";
import About from "./routes/About";
import CategoryPage from "./routes/CategoryPage";
import SinglePage from "./routes/SinglePage";
import ErrorPage from "./routes/ErrorPage";

function App() {
  const [search, setSearch] = useState("");
  const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
    fishes: fishes,
    butterflies: butterflies,
  });

  function removeHandler (name, category) {

    const newZoo = zoo[category].filter((item) => item.name !== name);
    setZoo({ ...zoo, [category]: newZoo });
  };

  function likesHandler (name, category, action)  {
    const newZoo = zoo[category].map((item) => {
      if (item.name === name) {
        return {
          ...item,
          likes: action === "add" ? item.likes + 1 : item.likes - 1,
        };
      }
      return item;
    });

    setZoo({ ...zoo, [category]: newZoo });
  };

  const searchHandler = (e) => {  
    setSearch(e.target.value);
  }
    const handleClean = (e) => {
    setSearch("");
    e.target.reset();
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root handleSearch={searchHandler} handleClean={handleClean} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: ":category",
          element: (
            <CategoryPage
              zoo={zoo}
              onRemoveCard={removeHandler}
              addLike={likesHandler}
              removeLikes={likesHandler}
              search={search}
              setSearch={setSearch}
            />
          ),
        },
        {
         path: ":category/:name",
          element: <SinglePage zoo={zoo} />
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

 

  return <RouterProvider router={router} />;
}

export default App;


/* When youclick the Card, you have to know which animal was clicked and put lights on the clicked card, the function goes through the animal animallist and use setAnimals, spread operator, loop ; add onClick {addEvent and removeEvent}
onRermove = {() = removeHandler(animal.name)}
addLike = 
removeLikes
hint for search, you have to rererender , search keyword has to be in the search Bar. */