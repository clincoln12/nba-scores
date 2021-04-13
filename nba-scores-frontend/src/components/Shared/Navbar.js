import React from 'react';
import './stylesheets/navbar.scss'
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
     <nav>
       <div className="nav-bar">
         <Link to='/'><img src="https://i.imgur.com/8XCOAvL.png" /></Link>
         <ul class="menuItems">
          <li><Link to="/" data-item='Home'>Home</Link></li>
          <li><Link to="/schedule" data-item='Schedule'>Schedule</Link></li>
         </ul>
       </div>
     </nav>
   )
}

export default NavBar;