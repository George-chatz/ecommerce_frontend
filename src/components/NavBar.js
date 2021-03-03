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
import SearchIcon from "@material-ui/icons/Search";


const NavBar = ({searchHandle, searchData, media, clothing, accessories, souveniers, homeware}) =>  {
  const [dropdown, setDropdown] = useState(false);

const testFunc = () => { 
  console.log("working")
}


  return (
    <div className="navbar">
      
        <Link><img className="navbar-logo" src={logomain} alt="beatleslogo"/></Link>
        <Link><img className="navbar-logo" src={fab4logo} alt="beatleslogo"/></Link>
      
      

        <Link to="/" className='nav-links'>Home</Link>
        <Link to="/TBS" className='nav-links'>TBS</Link>
        <Link to="/About" className='nav-links'>About</Link>
       
        <CustomizedMenus media={media} clothing={clothing} accessories={accessories} souveniers={souveniers} homeware={homeware}/>
        <Link> <FavoriteIcon className="matUIwish" alt ="wishlist" fontSize="large"></FavoriteIcon></Link>
        <Link> <PersonIcon className="matUIuser"  alt ="user" fontSize="large"></PersonIcon></Link>
        <Link> <ShoppingBasketIcon className="matUIcart" alt ="cart" fontSize="large"></ShoppingBasketIcon></Link>
    
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
