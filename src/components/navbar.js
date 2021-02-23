import React from "react";
import '../App.css';
import logomain from "./images/logomain.jpg"
import person from "./images/person.svg"
import fav from "./images/fav.svg"
import cart from "./images/cart.svg"
import search from "./images/search.svg"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const NavBar = () =>  {
  return (
    <div className="navbar">
        <Link><img className="beatleslogo" src={logomain} alt="baetleslogo"/></Link>
        <Link to="/" >Home</Link>
        <Link to="/TBS" >TBS</Link>
        <Link to="/About">About</Link>
        <Link to="/Shop" >Shop</Link>
        <div className="left_header">
            <input  placeholder="Search for your favourite spicy tunes!" type="text" /> </div>
        <Link> <img className="fav" src={fav} alt ="fav"></img></Link>
        <Link> <img className="person" src={person} alt ="person"></img></Link>
        <Link> <img className="cart" src={cart} alt ="cart"></img></Link>
    </div>
  );
};
   
export default NavBar;