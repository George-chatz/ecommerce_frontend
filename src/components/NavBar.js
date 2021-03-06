import React, { useState } from "react";
import './NavBar.css';
import logomain from "../images/logomain.jpg";
import fab4logo from "..//images/FAB4STOREWEB.png"
import {Link, NavLink} from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CustomizedMenus from "./DropdownMenu"
import SearchIcon from "@material-ui/icons/Search";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const NavBar = ({searchHandle, searchData, media, clothing, accessories, souveniers, homeware}) =>  {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="navbar">
      
        <Link><img className="navbar-logo" src={logomain} alt="beatleslogo"/></Link>
        <Link><img className="navbar-logo" src={fab4logo} alt="beatleslogo"/></Link>
      
      

        <Link to="/" className='nav-links'>Home</Link>
        <a href="https://www.beatlesstory.com/news/" target="_blank" rel="noreferrer noopener" className="nav-links">About</a>
       
        <CustomizedMenus media={media} clothing={clothing} accessories={accessories} souveniers={souveniers} homeware={homeware}/>
        <IconButton component={NavLink} to="/wishlist" aria-label="Show cart items" color="inherit">
              <Badge  color="secondary">
                <FavoriteIcon fontSize="large"/>
              </Badge>
            </IconButton><Link> <PersonIcon className="matUIwish" alt ="wishlist" fontSize="large"></PersonIcon></Link>
        
        
        <IconButton component={NavLink} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge  color="secondary">
                <ShoppingBasketIcon fontSize="large"/>
              </Badge>
            </IconButton>
            
        
        
    
        <div className="left_header">
        {/* <SearchIcon className="search" onClick={searchData}/> */}
        <Link to="/search"><SearchIcon className="search" onClick={searchData}/></Link>
                <input placeholder="Search products" className="search"
                type="text" onChange={searchHandle}/>
        </div>
    </div>
 
    //onChange={(e)=>searchHandler(e)}
  );
};
   
export default NavBar;