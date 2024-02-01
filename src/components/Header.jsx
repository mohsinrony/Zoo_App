import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div>
      
      <h1 className='header-title'>
        <Link to="/"><img src="./src/assets/Zoo.png" alt="zoo" />Zoo</Link></h1>
        
      </div>
      <div className='navigation-bar'>
      <nav>
        <ul>
      
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          
          <li><NavLink to="/animals">Animals</NavLink></li>
          
         <li><NavLink to="/birds">Birds</NavLink></li>
          <li><NavLink to="/fishes">Fishes</NavLink></li>
         <li><NavLink to="/butterflies">Butterflies</NavLink></li>
         
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;