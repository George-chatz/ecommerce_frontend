import React, { useState } from "react";
import './NavBar.css';
import logomain from "../images/logomain.jpg";
import fab4logo from "..//images/FAB4STOREWEB.png"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CustomizedMenus from "./DropdownMenu"


const NavBar = () =>  {
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (val) => {
    setSearch(val.target.value);
  } 

const dataSearch = async () => {

const res = await fetch(`http://localhost:5000/search/${search}`);

const data = await res.json();
setSearchResults(data);
console.log(data);
}

  return (
    <div className="navbar">
      
        <Link><img className="navbar-logo" src={logomain} alt="beatleslogo"/></Link>
        <Link><img className="navbar-logo" src={fab4logo} alt="beatleslogo"/></Link>
      
      

        <Link to="/" className='nav-links'>Home</Link>
        <Link to="/TBS" className='nav-links'>TBS</Link>
        <Link to="/About" className='nav-links'>About</Link>
       
        <CustomizedMenus/>
        <Link> <FavoriteIcon className="matUIwish" alt ="wishlist" fontSize="large"></FavoriteIcon></Link>
        <Link> <PersonIcon className="matUIuser"  alt ="user" fontSize="large"></PersonIcon></Link>
        <Link> <ShoppingBasketIcon className="matUIcart" alt ="cart" fontSize="large"></ShoppingBasketIcon></Link>
    
        <div className="left_header">
        <SearchIcon className="search" onClick={dataSearch}/>
        {/* <Link to="/search"><SearchIcon className="search"/></Link> */}
                <input placeholder="Search products" className="search"
                type="text" onChange={(e)=>searchHandler(e)} onClick={dataSearch}/>
       </div>
    </div>
 
    
  );
};
   
export default NavBar;
