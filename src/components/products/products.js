import React from "react";
import "../products/products.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Product =({image,itemname,price,description}) => {
    return (
        <div className="product">
            <div className="productcontainer">
                <div>
                        <img className="image" src={image} alt=""></img>
                    </div>
                    <div className="itemname">
                        {itemname}
                    </div>
                    <div className="btmproduct">
                        <FavoriteIcon />
                        <p>{price}</p>
                        <ShoppingBasketIcon />
                </div>   
            </div>
           
        </div>
    )
}

export default Product;