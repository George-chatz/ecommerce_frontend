import React, { useState } from "react";
import './NavBar.css';
import logomain from "../images/logomain.jpg";
import fab4logo from "..//images/FAB4STOREWEB.png"
import {Link} from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CustomizedMenus from "./Dropdownmenu"
import Search from '../components/pages/Search/Search'


const NavBar = () =>  {
  const [dropdown, setDropdown] = useState(false);


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
    
        <div>
        <Search />
       </div>
    </div>
 
    //onChange={(e)=>searchHandler(e)}
  );
};
   
export default NavBar;
