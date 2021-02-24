import React from "react";
import "../products/products.css";

const product =({image,itemname,price,description}) => {
    return (
        <div className="product">
            <div className="productinfo">
                <img className="image" src={image} alt=""></img>
                <p>{itemname}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default product;