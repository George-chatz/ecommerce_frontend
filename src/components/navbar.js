import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

const NavBar = () =>  {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/" ></Link></li>
        <li><Link to="/" ></Link></li>
        <li><Link to="/https://www.beatlesstory.com/news/">About</Link></li>
        <li><Link to="/https://www.beatlesstory.com/events/" >Shop</Link></li>
        <li><Link to="/" >Events</Link></li>

      </ul>
    </div>
  );
};
   
export default NavBar;