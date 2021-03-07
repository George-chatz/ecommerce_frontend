import react, {useState, useEffect} from 'react';
import Product from '../../products/products';
import Grid from '@material-ui/core/Grid';

const Cart = () => {
    
    const [cartData, setcartData] = useState([])
    const [cartUpdate, setCartUpdate] = useState(true);

    
    let cart = [];


    if(cartUpdate === true) {
        

        for (let i = 0; i<localStorage.length; i++) {

        let cartKey = localStorage.key(i);
        let cartItem = localStorage.getItem(cartKey);
        let item = JSON.parse(cartItem);

        cart.push(item);

    }
    console.log(cart);
    console.log(cartData);
    setcartData(cart);
    setCartUpdate(false);        
}

    const onCartUpdate = () => {

        localStorage.clear();

        for (let i = 0; i<localStorage.length; i++) {

            localStorage.setItem(localStorage.length, JSON.stringify(cart[i]));
            console.log(`completed ${i} number of times`) //not running this?
    
        }

        setcartData(cart);

    }

    const removeFromCart = async (index) => {
        // localStorage.removeItem(index);
        let cart = cartData
        cart.splice(index, 1);

        onCartUpdate();

        setCartUpdate(true);
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

            {/* <div id="rightCart">
                <p>total cost: </p>
                <p></p>
            </div> */}
        </div>  
    )
}

export default Cart;