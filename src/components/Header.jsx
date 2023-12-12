import {NavLink} from 'react-router-dom';
const Header = () => {
    return <header>
    <nav>
        <ul>
            <li><NavLink to="/"></NavLink>Home</li> <li><NavLink to="/about"></NavLink>About</li>
            <li><NavLink to="/animals">Animals</NavLink></li>
            <li><NavLink to="/birds">Birds</NavLink></li>
            <li><NavLink to="/fishes">Fishes</NavLink></li>
            <li><NavLink to="/butterflies">Butterflies</NavLink></li>
            
        </ul>
   </nav>
 </header> 
 }
 export default Header;


