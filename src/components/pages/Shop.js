import '../../App.css'
import React from 'react';
import Product from "../products/products"
import NavBar from '../NavBar';
import glasses from "../images/glasses.jpg"

function Shop() {
    return (
        <div className="shop">
            <div className="navbar"> 
                <NavBar />
            </div>
            <div >
                <Product
                image={glasses}
                itemname={"John Lennon Party Glasses"}
                price={"2£"}
                />
                <Product
                image={glasses}
                itemname={"John Lennon Party Glasses"}
                price={"2£"}
                />      
            </div>      
        </div>
    )
}

export default Shop;
