import React, {useState} from 'react';
import "./Search.css";
import Product from '../../products/products';


const Search = (searchRes) => {
    
    let array = searchRes.searchRes;
    return (
        <div>
            {array.map((array) => (
                <Product 
                    image = {array.img}
                    itemname = {array.product_name}
                    price = {array.price}
                />
            ))}   
        </div>  
    )
}

export default Search;