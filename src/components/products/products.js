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
import { withRouter } from 'react-router-dom';

 
const Product =({image,itemname,price, product, addToCart}) => {

if(window.location.pathname === "/cart") {
  //hide add to cart button
  console.log("path is cart, hiding add button...")
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
          <IconButton color="primary" aria-label="add to shopping cart">
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