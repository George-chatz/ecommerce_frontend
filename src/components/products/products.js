import React from "react";
import "../products/products.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

 
const Product =({image,itemname,price, product, addToCart}) => {

// const handleAddToCart = () => onAddToCart(product.id, 1);
// haven't figured this out yet
// add onClick={handleAddToCart} to add to shopping cart icon


//onClick={addToCart} doesn't seem to be called
const addFromCart = (id) => {

  // localStorage.setItem(array[index], JSON.stringify(array[index]));
  //not working - currently this loops through all items upon render
  console.log(id);


}

const testFunction = () => {
  console.log("working")
}

    return ( 
        <Card className="root">
            <CardActionArea>
            <CardMedia>
            <img className="image" src={image} alt=""></img>
            </CardMedia>

        <CardContent>
          <Typography className="pN" gutterBottom variant="h5" component="h2">
            {itemname}
          </Typography>
          <Typography className="info" variant="body2" color="textSecondary" component="p">
          <IconButton color="primary" aria-label="add to shopping cart" >
          <FavoriteIcon />
          </IconButton>
          <p>{price}</p>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={addToCart}>
          <AddShoppingCartIcon/>
          </IconButton>
          </Typography>
        </CardContent>
           </CardActionArea>
        
        </Card>
    )
}

export default Product;