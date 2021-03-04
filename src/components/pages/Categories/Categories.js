import React from 'react';
import Product from '../../products/products';
import Grid from '@material-ui/core/Grid';

const Categories = (categoriesRes) => {
    
    const addFromCart = (index) => {
        
        localStorage.setItem(array[index], JSON.stringify(array[index]));
        //not working - currently this loops through all items upon render
    }
    let array = categoriesRes.categoriesRes;
    
    return (
        <div className="content">
            
            <Grid alignItems="center"
                justify="center" container justify="center" spacing={4}>
                {array.map((array, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>    <Product addToCart={addFromCart(index)}
                    image = {array.img}
                    itemname = {array.product_name}
                    price = {`£${array.price}`}
                /> </Grid>
            ))}   
            </Grid>
            
        </div>  
    )
}

export default Categories;