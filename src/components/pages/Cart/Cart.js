import react, {useState, useEffect} from 'react';
import Product from '../../products/products';
import Grid from '@material-ui/core/Grid';

const Cart = () => {
    

    const [cartData, setcartData] = useState([])

        const cartStorage = () => {
        let cart = [];
        for (let i = 0; i<localStorage.length; i++) {

        let cartKey = localStorage.key(i);
        let cartItem = localStorage.getItem(cartKey);
        let item = JSON.parse(cartItem);

        cart.push(item);
    }
    console.log(cart);
    console.log(cartData)
    setcartData(cart);
}

    const removeFromCart = (index) => {
        localStorage.removeItem(index);
        let cart = cartData
        cart.splice(index, 1);

        setcartData(cart);
    }

    return (
        <div className="content">
            <div id="leftCart">
            <Grid alignItems="center"
                justify="center" container justify="center" spacing={4}>
            {cartData.map((array, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>    <Product removeItem={()=>removeFromCart(index)}
                    image = {array.img}
                    itemname = {array.product_name}
                    price = {`£${array.price}`}
                /> </Grid>
            ))}   
            </Grid>
            </div>

            <div id="rightCart">
                <p>total cost: </p>
                <p></p>
            </div>
        </div>  
    )
}

export default Cart;