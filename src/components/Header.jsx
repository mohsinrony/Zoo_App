import { NavLink } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;