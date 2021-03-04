import React, {useState} from 'react';
import "./Search.css";
import Product from '../../products/Products';
import Grid from '@material-ui/core/Grid';




const Search = (searchRes) => {
    

    let array = searchRes.searchRes;

    const addFromCart = (index) => {
        localStorage.setItem(localStorage.length, JSON.stringify(array[index]));
      }


    return (
        <div className="content">
            
            <Grid alignItems="center"
                justify="center" container justify="center" spacing={4}>
            {array.map((array, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>    <Product addToCart={()=>addFromCart(index)}
                    image = {array.img}
                    itemname = {array.product_name}
                    price = {`£${array.price}`}
                /> </Grid>
            ))}   
            </Grid>
            
        </div>  
    )
}

export default Search;