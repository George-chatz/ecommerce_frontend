import react from 'react';
import Product from '../../products/products';
import Grid from '@material-ui/core/Grid';

const Cart = () => {
    
    let cartData = [];

    for (let i = 0; i<localStorage.length; i++) {
        let cartKey = localStorage.key(i);
        let cartItem = localStorage.getItem(cartKey);
        let item = JSON.parse(cartItem);

        cartData.push(item);
        console.log(cartData);
    }

    return (
        <div className="content">
            
            <Grid alignItems="center"
                justify="center" container justify="center" spacing={4}>
            {cartData.map((array, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>    <Product 
                    image = {array.img}
                    itemname = {array.product_name}
                    price = {`£${array.price}`}
                /> </Grid>
            ))}   
            </Grid>
            
        </div>  
    )
}

export default Cart;