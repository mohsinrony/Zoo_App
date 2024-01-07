import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Animals from "./routes/Animals.jsx";
import Birds from "./routes/Birds.jsx";
import Fish from "./routes/Fish.jsx";
import Butterfly from "./routes/Butterfly.jsx"; 
import Root from "./routes/Root.jsx";
import './styles/App.css'



function App() {
  const router = createBrowserRouter([
   
     {
       path: "/",
       element: 
       <Root/>,
      
       children: [
        {path: "/", element: <Home/> },
        {path: "/about", element: <About/> },
        {path: "/animals", element: <Animals/>},
        {path: "/birds", element: <Birds/>},
        {path: "/fishes", element: <Fish/>},
        {path: "/butterflies", element: <Butterfly/>},
       ],
     },
   ]);

 
  return (
    <>
     <RouterProvider router={router} >
     <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/birds">Birds</Link>
          <Link to="/fishes">Fish</Link>
          <Link to="/butterflies">Butterflies</Link>
        </nav>
      </RouterProvider>
   </>
  );
};

export default App;

/* When youclick the Card, you have to know which animal was clicked and put lights on the clicked card, the function goes through the animal animallist and use setAnimals, spread operator, loop ; add onClick {addEvent and removeEvent}
onRermove = {() = removeHandler(animal.name)}
addLike = 
removeLikes
hint for search, you have to rererender , search keyword has to be in the search Bar. */